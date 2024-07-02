---
title: SQLite Keywords
description: The SQL standard specifies a large number of keywords which may not be used as the names of any named object.
customClass: sqlite-doc
category: reference
---

The SQL standard specifies a large number of keywords which may not be
used as the names of tables, indices, columns, databases, user-defined
functions, collations, virtual table modules, or any other named object.
The list of keywords is so long that few people can remember them all.
For most SQL code, your safest bet is to never use any English language
word as the name of a user-defined object.

If you want to use a keyword as a name, you need to quote it. There are
four ways of quoting keywords in SQLite:

> |                 |     |
> |-----------------|-----|
> | **'keyword'**   | A keyword in single quotes is a string literal. |
> | **"keyword"**   | A keyword in double-quotes is an identifier.    |
> | **\[keyword\]** | A keyword enclosed in square brackets is an identifier. This is not standard SQL. This quoting mechanism is used by MS Access and SQL Server and is included in SQLite for compatibility. |
> | **\`keyword\`** | A keyword enclosed in grave accents (ASCII code 96) is an identifier. This is not standard SQL. This quoting mechanism is used by MySQL and is included in SQLite for compatibility.  |

For resilience when confronted with historical SQL statements, SQLite
will sometimes bend the quoting rules above:

- If a keyword in single quotes (ex: **'key'** or **'glob'**) is used in
  a context where an identifier is allowed but where a string literal is
  not allowed, then the token is understood to be an identifier instead
  of a string literal.

- If a keyword in double quotes (ex: **"key"** or **"glob"**) is used in
  a context where it cannot be resolved to an identifier but where a
  string literal is allowed, then the token is understood to be a string
  literal instead of an identifier.

Programmers are cautioned not to use the two exceptions described in the
previous bullets. We emphasize that they exist only so that old and
ill-formed SQL statements will run correctly. Future versions of SQLite
might raise errors instead of accepting the malformed statements covered
by the exceptions above.

SQLite adds new keywords from time to time when it takes on new
features. So to prevent your code from being broken by future
enhancements, you should normally quote any identifier that is an
English language word, even if you do not have to.

The list below shows all possible keywords used by any build of SQLite
regardless of <a href="https://www.sqlite.org/compile.html"
target="_blank">compile-time options</a>. Most reasonable configurations
use most or all of these keywords, but some keywords may be omitted when
SQL language features are disabled. Applications can use the
<a href="https://www.sqlite.org/c3ref/keyword_check.html"
target="_blank">sqlite3_keyword_count()</a>,
<a href="https://www.sqlite.org/c3ref/keyword_check.html"
target="_blank">sqlite3_keyword_name()</a>, and
<a href="https://www.sqlite.org/c3ref/keyword_check.html"
target="_blank">sqlite3_keyword_check()</a> interfaces to determine the
keywords recognized by SQLite at run-time. Regardless of the
compile-time configuration, any identifier that is not on the following
147-element list is not a keyword to the SQL parser in SQLite:

<div class="columns">

- ABORT
- ACTION
- ADD
- AFTER
- ALL
- ALTER
- ALWAYS
- ANALYZE
- AND
- AS
- ASC
- ATTACH
- AUTOINCREMENT
- BEFORE
- BEGIN
- BETWEEN
- BY
- CASCADE
- CASE
- CAST
- CHECK
- COLLATE
- COLUMN
- COMMIT
- CONFLICT
- CONSTRAINT
- CREATE
- CROSS
- CURRENT
- CURRENT_DATE
- CURRENT_TIME
- CURRENT_TIMESTAMP
- DATABASE
- DEFAULT
- DEFERRABLE
- DEFERRED
- DELETE
- DESC
- DETACH
- DISTINCT
- DO
- DROP
- EACH
- ELSE
- END
- ESCAPE
- EXCEPT
- EXCLUDE
- EXCLUSIVE
- EXISTS
- EXPLAIN
- FAIL
- FILTER
- FIRST
- FOLLOWING
- FOR
- FOREIGN
- FROM
- FULL
- GENERATED
- GLOB
- GROUP
- GROUPS
- HAVING
- IF
- IGNORE
- IMMEDIATE
- IN
- INDEX
- INDEXED
- INITIALLY
- INNER
- INSERT
- INSTEAD
- INTERSECT
- INTO
- IS
- ISNULL
- JOIN
- KEY
- LAST
- LEFT
- LIKE
- LIMIT
- MATCH
- MATERIALIZED
- NATURAL
- NO
- NOT
- NOTHING
- NOTNULL
- NULL
- NULLS
- OF
- OFFSET
- ON
- OR
- ORDER
- OTHERS
- OUTER
- OVER
- PARTITION
- PLAN
- PRAGMA
- PRECEDING
- PRIMARY
- QUERY
- RAISE
- RANGE
- RECURSIVE
- REFERENCES
- REGEXP
- REINDEX
- RELEASE
- RENAME
- REPLACE
- RESTRICT
- RETURNING
- RIGHT
- ROLLBACK
- ROW
- ROWS
- SAVEPOINT
- SELECT
- SET
- TABLE
- TEMP
- TEMPORARY
- THEN
- TIES
- TO
- TRANSACTION
- TRIGGER
- UNBOUNDED
- UNION
- UNIQUE
- UPDATE
- USING
- VACUUM
- VALUES
- VIEW
- VIRTUAL
- WHEN
- WHERE
- WINDOW
- WITH
- WITHOUT

</div>
