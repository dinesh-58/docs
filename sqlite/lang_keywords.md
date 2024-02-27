---
title: SQLite Keywords
description: SQLite Keywords
---
<script>
function toggle_div(nm) {
var w = document.getElementById(nm);
if( w.style.display=="block" ){
w.style.display = "none";
}else{
w.style.display = "block";
}
}
function toggle_search() {
var w = document.getElementById("searchmenu");
if( w.style.display=="block" ){
w.style.display = "none";
} else {
w.style.display = "block";
setTimeout(function(){
document.getElementById("searchbox").focus()
}, 30);
}
}
function div_off(nm){document.getElementById(nm).style.display="none";}
window.onbeforeunload = function(e){div_off("submenu");}
/* Disable the Search feature if we are not operating from CGI, since */
/* Search is accomplished using CGI and will not work without it. */
if( !location.origin || !location.origin.match || !location.origin.match(/http/) ){
document.getElementById("search_menubutton").style.display = "none";
}
/* Used by the Hide/Show button beside syntax diagrams, to toggle the */
function hideorshow(btn,obj){
var x = document.getElementById(obj);
var b = document.getElementById(btn);
if( x.style.display!='none' ){
x.style.display = 'none';
b.innerHTML='show';
}else{
x.style.display = '';
b.innerHTML='hide';
}
return false;
}
var antiRobot = 0;
function antiRobotGo(){
if( antiRobot!=3 ) return;
antiRobot = 7;
var j = document.getElementById("mtimelink");
if(j && j.hasAttribute("data-href")) j.href=j.getAttribute("data-href");
}
function antiRobotDefense(){
document.body.onmousedown=function(){
antiRobot |= 2;
antiRobotGo();
document.body.onmousedown=null;
}
document.body.onmousemove=function(){
antiRobot |= 2;
antiRobotGo();
document.body.onmousemove=null;
}
setTimeout(function(){
antiRobot |= 1;
antiRobotGo();
}, 100)
antiRobotGo();
}
antiRobotDefense();
</script>






<p>The SQL standard specifies a large number of keywords which may not
be used as the names of tables, indices, columns, databases, user-defined
functions, collations, virtual table modules, or any other named object.
The list of keywords is so long that few people can remember them all.
For most SQL code, your safest bet is to never use any English language
word as the name of a user-defined object.</p>

<p>If you want to use a keyword as a name, you need to quote it. There
are four ways of quoting keywords in SQLite:</p>

<p>
</p><blockquote>
<table>
<tr>	<td valign="top"><b>'keyword'</b></td><td width="20"></td>
	<td>A keyword in single quotes is a string literal.</td></tr>

<tr>	<td valign="top"><b>"keyword"</b></td><td></td>
	<td>A keyword in double-quotes is an identifier.</td></tr>

<tr>	<td valign="top"><b>&#91;keyword&#93;</b></td><td></td>
	<td>A keyword enclosed in square brackets is 
        an identifier.  This is not standard SQL.  This quoting mechanism
        is used by MS Access and SQL Server and is included in SQLite for
        compatibility.</td></tr>

<tr>	<td valign="top"><b>&#96;keyword&#96;</b></td><td></td>
	<td>A keyword enclosed in grave accents (ASCII code 96) is 
        an identifier.  This is not standard SQL.  This quoting mechanism
        is used by MySQL and is included in SQLite for
        compatibility.</td></tr>
</table>
</blockquote>


<p>For resilience when confronted with historical SQL statements, SQLite
will sometimes bend the quoting rules above:</p>

<ul>
<li><p>If a keyword in single
quotes (ex: <b>'key'</b> or <b>'glob'</b>) is used in a context where
an identifier is allowed but where a string literal is not allowed, then
the token is understood to be an identifier instead of a string literal.
</p></li>

<li><p>If a keyword in double
quotes (ex: <b>"key"</b> or <b>"glob"</b>) is used in a context where
it cannot be resolved to an identifier but where a string literal
is allowed, then the token is understood to be a string literal instead
of an identifier.</p></li>
</ul>

<p>Programmers are cautioned not to use the two exceptions described in
the previous bullets. We emphasize that they exist only so that old
and ill-formed SQL statements will run correctly. Future versions of
SQLite might raise errors instead of accepting the malformed
statements covered by the exceptions above.</p>

<p>
SQLite adds new keywords from time to time when it takes on new features.
So to prevent your code from being broken by future enhancements, you should
normally quote any identifier that is an English language word, even if
you do not have to.
</p>

<p>
The list below shows all possible keywords used by any build of
SQLite regardless of <a href="https://www.sqlite.org/compile.html" target="_blank">compile-time options</a>. 
Most reasonable configurations use most or all of these keywords,
but some keywords may be omitted when SQL language features are
disabled.
Applications can use the
<a href="https://www.sqlite.org/c3ref/keyword_check.html" target="_blank">sqlite3_keyword_count()</a>, <a href="https://www.sqlite.org/c3ref/keyword_check.html" target="_blank">sqlite3_keyword_name()</a>, and
<a href="https://www.sqlite.org/c3ref/keyword_check.html" target="_blank">sqlite3_keyword_check()</a> interfaces to determine the keywords
recognized by SQLite at run-time.
Regardless of the compile-time configuration, any identifier that is not on
the following 147-element list is not a keyword to the SQL parser in SQLite:
</p>

<div class="columns" >
<ul style="padding-top:0;">
<li>ABORT</li>
<li>ACTION</li>
<li>ADD</li>
<li>AFTER</li>
<li>ALL</li>
<li>ALTER</li>
<li>ALWAYS</li>
<li>ANALYZE</li>
<li>AND</li>
<li>AS</li>
<li>ASC</li>
<li>ATTACH</li>
<li>AUTOINCREMENT</li>
<li>BEFORE</li>
<li>BEGIN</li>
<li>BETWEEN</li>
<li>BY</li>
<li>CASCADE</li>
<li>CASE</li>
<li>CAST</li>
<li>CHECK</li>
<li>COLLATE</li>
<li>COLUMN</li>
<li>COMMIT</li>
<li>CONFLICT</li>
<li>CONSTRAINT</li>
<li>CREATE</li>
<li>CROSS</li>
<li>CURRENT</li>
<li>CURRENT_DATE</li>
<li>CURRENT_TIME</li>
<li>CURRENT_TIMESTAMP</li>
<li>DATABASE</li>
<li>DEFAULT</li>
<li>DEFERRABLE</li>
<li>DEFERRED</li>
<li>DELETE</li>
<li>DESC</li>
<li>DETACH</li>
<li>DISTINCT</li>
<li>DO</li>
<li>DROP</li>
<li>EACH</li>
<li>ELSE</li>
<li>END</li>
<li>ESCAPE</li>
<li>EXCEPT</li>
<li>EXCLUDE</li>
<li>EXCLUSIVE</li>
<li>EXISTS</li>
<li>EXPLAIN</li>
<li>FAIL</li>
<li>FILTER</li>
<li>FIRST</li>
<li>FOLLOWING</li>
<li>FOR</li>
<li>FOREIGN</li>
<li>FROM</li>
<li>FULL</li>
<li>GENERATED</li>
<li>GLOB</li>
<li>GROUP</li>
<li>GROUPS</li>
<li>HAVING</li>
<li>IF</li>
<li>IGNORE</li>
<li>IMMEDIATE</li>
<li>IN</li>
<li>INDEX</li>
<li>INDEXED</li>
<li>INITIALLY</li>
<li>INNER</li>
<li>INSERT</li>
<li>INSTEAD</li>
<li>INTERSECT</li>
<li>INTO</li>
<li>IS</li>
<li>ISNULL</li>
<li>JOIN</li>
<li>KEY</li>
<li>LAST</li>
<li>LEFT</li>
<li>LIKE</li>
<li>LIMIT</li>
<li>MATCH</li>
<li>MATERIALIZED</li>
<li>NATURAL</li>
<li>NO</li>
<li>NOT</li>
<li>NOTHING</li>
<li>NOTNULL</li>
<li>NULL</li>
<li>NULLS</li>
<li>OF</li>
<li>OFFSET</li>
<li>ON</li>
<li>OR</li>
<li>ORDER</li>
<li>OTHERS</li>
<li>OUTER</li>
<li>OVER</li>
<li>PARTITION</li>
<li>PLAN</li>
<li>PRAGMA</li>
<li>PRECEDING</li>
<li>PRIMARY</li>
<li>QUERY</li>
<li>RAISE</li>
<li>RANGE</li>
<li>RECURSIVE</li>
<li>REFERENCES</li>
<li>REGEXP</li>
<li>REINDEX</li>
<li>RELEASE</li>
<li>RENAME</li>
<li>REPLACE</li>
<li>RESTRICT</li>
<li>RETURNING</li>
<li>RIGHT</li>
<li>ROLLBACK</li>
<li>ROW</li>
<li>ROWS</li>
<li>SAVEPOINT</li>
<li>SELECT</li>
<li>SET</li>
<li>TABLE</li>
<li>TEMP</li>
<li>TEMPORARY</li>
<li>THEN</li>
<li>TIES</li>
<li>TO</li>
<li>TRANSACTION</li>
<li>TRIGGER</li>
<li>UNBOUNDED</li>
<li>UNION</li>
<li>UNIQUE</li>
<li>UPDATE</li>
<li>USING</li>
<li>VACUUM</li>
<li>VALUES</li>
<li>VIEW</li>
<li>VIRTUAL</li>
<li>WHEN</li>
<li>WHERE</li>
<li>WINDOW</li>
<li>WITH</li>
<li>WITHOUT</li>
</ul></div>

</ul></div>
