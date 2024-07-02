---
title: UPDATE
description: An UPDATE statement is used to modify a subset of the values stored in zero or more rows of the database table.
statement: UPDATE Artist SET name = 'New Lady Gaga' WHERE name = 'Lady Gaga';
customClass: sqlite-doc
category: reference
---

## 1. Overview

<!-- do-not-touch-svg-import: 'update.svg' -->

An UPDATE statement is used to modify a subset of the values stored in
zero or more rows of the database table identified by the
<a href="https://www.sqlite.org/syntax/qualified-table-name.html"
target="_blank">qualified-table-name</a> specified as part of the UPDATE
statement.

## 2. Details

If the UPDATE statement does not have a WHERE clause, all rows in the
table are modified by the UPDATE. Otherwise, the UPDATE affects only
those rows for which the WHERE clause [boolean expression is
true](lang_expr#booleanexpr). It is not an error if the WHERE clause
does not evaluate to true for any row in the table - this just means
that the UPDATE statement affects zero rows.

The modifications made to each row affected by an UPDATE statement are
determined by the list of assignments following the SET keyword. Each
assignment specifies a <span class="yyterm">column-name</span> to the
left of the equals sign and a scalar expression to the right. For each
affected row, the named columns are set to the values found by
evaluating the corresponding scalar expressions. If a single column-name
appears more than once in the list of assignment expressions, all but
the rightmost occurrence is ignored. Columns that do not appear in the
list of assignments are left unmodified. The scalar expressions may
refer to columns of the row being updated. In this case all scalar
expressions are evaluated before any assignments are made.

Beginning in SQLite
<a href="https://www.sqlite.org/releaselog/3_15_0.html"
target="_blank">version 3.15.0</a> (2016-10-14), an assignment in the
SET clause can be a
<a href="https://www.sqlite.org/syntax/column-name-list.html"
target="_blank">parenthesized list of column names</a> on the left and a
<a href="https://www.sqlite.org/rowvalue.html" target="_blank">row
value</a> of the same size on the right.

The optional "OR *action*" conflict clause that follows the UPDATE
keyword allows the user to nominate a specific constraint conflict
resolution algorithm to use during this one UPDATE command. Refer to the
section entitled [ON CONFLICT](lang_conflict) for additional
information.

## 2.1. Restrictions on UPDATE Statements Within CREATE TRIGGER

The following additional syntax restrictions apply to UPDATE statements
that occur within the body of a [CREATE TRIGGER](lang_createtrigger)
statement.

- The <span class="yyterm">table-name</span> specified as part of an
  UPDATE statement within a trigger body must be unqualified. In other
  words, the _schema-name_**.** prefix on the table name of the UPDATE
  is not allowed within triggers. Unless the table to which the trigger
  is attached is in the TEMP database, the table being updated by the
  trigger program must reside in the same database as it. If the table
  to which the trigger is attached is in the TEMP database, then the
  unqualified name of the table being updated is resolved in the same
  way as it is for a top-level statement (by searching first the TEMP
  database, then the main database, then any other databases in the
  order they were attached).

- The INDEXED BY and NOT INDEXED clauses are not allowed on UPDATE
  statements within triggers.

- The LIMIT and ORDER BY clauses for UPDATE are unsupported within
  triggers, regardless of the compilation options used to build SQLite.

<span id="upfrom"></span>

## 2.2. UPDATE FROM

The UPDATE-FROM idea is an extension to SQL that allows an UPDATE
statement to be driven by other tables in the database. The "target"
table is the specific table that is being updated. With UPDATE-FROM you
can join the target table against other tables in the database in order
to help compute which rows need updating and what the new values should
be on those rows. UPDATE-FROM is supported beginning in SQLite version
3.33.0 (2020-08-14).

Other relation database engines also implement UPDATE-FROM, but because
the construct is not part of the SQL standards, each product implements
UPDATE-FROM differently. The SQLite implementation strives to be
compatible with PostgreSQL. The SQL Server and MySQL implementations of
the same idea work a little differently.

As an example of how UPDATE-FROM can be useful, suppose you have a
point-of-sale application that accumulates purchases in the SALES table.
At the end of the day, you want to adjust the INVENTORY table according
to the daily sales. To do this, you can run an UPDATE against the
INVENTORY table that adjusts the quantity by the aggregated sales for
the day. The statement would look like this:

<div class="codeblock">

    UPDATE inventory
       SET quantity = quantity - daily.amt
      FROM (SELECT sum(quantity) AS amt, itemId FROM sales GROUP BY 2) AS daily
     WHERE inventory.itemId = daily.itemId;

</div>

The subquery in the FROM clause computes the amount by which the
inventory should be reduced for each itemId. That subquery is joined
against the inventory table and the quantity of each affected inventory
row is reduced by the appropriate amount.

The target table is not included in the FROM clause, unless the intent
is to do a self-join against the target table. In the event of a
self-join, the table in the FROM clause must be aliased to a different
name than the target table.

If the join between the target table and the FROM clause results in
multiple output rows for the same target table row, then only one of
those output rows is used for updating the target table. The output row
selected is arbitrary and might change from one release of SQLite to the
next, or from one run to the next.

### 2.2.1. UPDATE FROM in other SQL database engines

SQL Server also supports UPDATE FROM, but in SQL Server the target table
must be included in the FROM clause. In other words, the target table is
named twice in the statement. With SQL Server, the inventory adjustment
statement demonstrated above would be written like this:

<div class="codeblock">

    UPDATE inventory
       SET quantity = quantity - daily.amt
      FROM inventory, 
           (SELECT sum(quantity) AS amt, itemId FROM sales GROUP BY 2) AS daily
     WHERE inventory.itemId = daily.itemId;

</div>

MySQL supports the UPDATE FROM idea, but it does so without using a FROM
clause. Instead, the complete join specification is given in between the
UPDATE and SET keywords. The equivalent MySQL statement would be like
this:

<div class="codeblock">

    UPDATE inventory JOIN
           (SELECT sum(quantity) AS amt, itemId FROM sales GROUP BY 2) AS daily
           USING( itemId )
       SET inventory.quantity = inventory.quantity - daily.amt;

</div>

The MySQL UPDATE statement does not have just one target table like
other systems. Any of the tables that participate in the join can be
modified in the SET clause. The MySQL UPDATE syntax allows you to update
multiple tables at once!

## 2.3. Optional LIMIT and ORDER BY Clauses

If SQLite is built with the
<a href="https://www.sqlite.org/compile.html#enable_update_delete_limit"
target="_blank">SQLITE_ENABLE_UPDATE_DELETE_LIMIT</a> compile-time
option then the syntax of the UPDATE statement is extended with optional
ORDER BY and LIMIT clauses as follows:

<!-- do-not-touch-svg-import: 'update2.svg' -->

If an UPDATE statement has a LIMIT clause, the maximum number of rows
that will be updated is found by evaluating the accompanying expression
and casting it to an integer value. A negative value is interpreted as
"no limit".

If the LIMIT expression evaluates to non-negative value *N* and the
UPDATE statement has an ORDER BY clause, then all rows that would be
updated in the absence of the LIMIT clause are sorted according to the
ORDER BY and the first *N* updated. If the UPDATE statement also has an
OFFSET clause, then it is similarly evaluated and cast to an integer
value. If the OFFSET expression evaluates to a non-negative value *M*,
then the first *M* rows are skipped and the following *N* rows updated
instead.

If the UPDATE statement has no ORDER BY clause, then all rows that would
be updated in the absence of the LIMIT clause are assembled in an
arbitrary order before applying the LIMIT and OFFSET clauses to
determine which are actually updated.

The ORDER BY clause on an UPDATE statement is used only to determine
which rows fall within the LIMIT. The order in which rows are modified
is arbitrary and is not influenced by the ORDER BY clause.
