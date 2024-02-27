---
title: JSON Functions And Operators
description: JSON Functions And Operators
statement: SELECT json_object('id' , ArtistId, 'name', name) FROM Artist;
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






<h2 id="overview"><span>1. </span>Overview</h2>
<p>
By default, SQLite supports twenty-nine functions and two operators for
dealing with JSON values.  There are also two <a href="vtab.html#tabfunc2">table-valued functions</a>
that can be used to decompose a JSON string.

</p><p>
There are 25 scalar functions and operators:

</p><ol>
<li value='1'>
<a href='#jmini'>json</a>(<i>json</i>)
</li>

<li value='2'>
<a href='#jminib'>jsonb</a>(<i>json</i>)
</li>

<li value='3'>
<a href='#jarray'>json_array</a>(<i>value1</i>,<i>value2</i>,...)
</li>

<li value='4'>
<a href='#jarrayb'>jsonb_array</a>(<i>value1</i>,<i>value2</i>,...)
</li>

<li value='5'>
<a href='#jarraylen'>json_array_length</a>(<i>json</i>)<br><a href='#jarraylen'>json_array_length</a>(<i>json</i>,<i>path</i>)
</li>

<li value='6'>
<a href='#jerr'>json_error_position</a>(<i>json</i>)
</li>

<li value='7'>
<a href='#jex'>json_extract</a>(<i>json</i>,<i>path</i>,...)
</li>

<li value='8'>
<a href='#jexb'>jsonb_extract</a>(<i>json</i>,<i>path</i>,...)
</li>

<li value='9'>
<i>json</i> <a href='#jptr'>-></a> <i>path</i>
</li>

<li value='10'>
<i>json</i> <a href='#jptr'>->></a> <i>path</i>
</li>

<li value='11'>
<a href='#jins'>json_insert</a>(<i>json</i>,<i>path</i>,<i>value</i>,...)
</li>

<li value='12'>
<a href='#jinsb'>jsonb_insert</a>(<i>json</i>,<i>path</i>,<i>value</i>,...)
</li>

<li value='13'>
<a href='#jobj'>json_object</a>(<i>label1</i>,<i>value1</i>,...)
</li>

<li value='14'>
<a href='#jobjb'>jsonb_object</a>(<i>label1</i>,<i>value1</i>,...)
</li>

<li value='15'>
<a href='#jpatch'>json_patch</a>(<i>json</i>1,json2)
</li>

<li value='16'>
<a href='#jpatchb'>jsonb_patch</a>(<i>json</i>1,json2)
</li>

<li value='17'>
<a href='#jrm'>json_remove</a>(<i>json</i>,<i>path</i>,...)
</li>

<li value='18'>
<a href='#jrmb'>jsonb_remove</a>(<i>json</i>,<i>path</i>,...)
</li>

<li value='19'>
<a href='#jrepl'>json_replace</a>(<i>json</i>,<i>path</i>,<i>value</i>,...)
</li>

<li value='20'>
<a href='#jreplb'>jsonb_replace</a>(<i>json</i>,<i>path</i>,<i>value</i>,...)
</li>

<li value='21'>
<a href='#jset'>json_set</a>(<i>json</i>,<i>path</i>,<i>value</i>,...)
</li>

<li value='22'>
<a href='#jsetb'>jsonb_set</a>(<i>json</i>,<i>path</i>,<i>value</i>,...)
</li>

<li value='23'>
<a href='#jtype'>json_type</a>(<i>json</i>)<br><a href='#jtype'>json_type</a>(<i>json</i>,<i>path</i>)
</li>

<li value='24'>
<a href='#jvalid'>json_valid</a>(<i>json</i>)<br><a href='#jvalid'>json_valid</a>(<i>json</i>,flags)
</li>

<li value='25'>
<a href='#jquote'>json_quote</a>(<i>value</i>)
</li>


</ol>

<p>There are four <a href="lang_aggfunc.html">aggregate SQL functions</a>:

</p><ol>
<li value='26'>
<a href='#jgrouparray'>json_group_array</a>(<i>value</i>)
</li>

<li value='27'>
<a href='#jgrouparrayb'>jsonb_group_array</a>(<i>value</i>)
</li>

<li value='28'>
<a href='#jgroupobject'>json_group_object</a>(<i>label</i>,<i>value</i>)
</li>

<li value='29'>
<a href='#jgroupobjectb'>jsonb_group_object</a>(name,<i>value</i>)
</li>


</ol>

<p>The two <a href="vtab.html#tabfunc2">table-valued functions</a> are:

</p><ol>
<li value='30'>
<a href='#jeach'>json_each</a>(<i>json</i>)<br><a href='#jeach'>json_each</a>(<i>json</i>,<i>path</i>)
</li>

<li value='31'>
<a href='#jtree'>json_tree</a>(<i>json</i>)<br><a href='#jtree'>json_tree</a>(<i>json</i>,<i>path</i>)
</li>


</ol>



<style>
.jans {color: #050;}
.jex {color: #025;}
</style>


<a name="howtocompile"></a>

<h2 id="compiling_in_json_support"><span>2. </span>Compiling in JSON Support</h2>

<p>
The JSON functions and operators are built into SQLite by default,
as of SQLite version 3.38.0 (2022-02-22).  They can be omitted
by adding the -DSQLITE_OMIT_JSON compile-time option.  Prior to
version 3.38.0, the JSON functions were an extension that would only
be included in builds if the -DSQLITE_ENABLE_JSON1 compile-time option
was included.  In other words, the JSON functions went from being
opt-in with SQLite version 3.37.2 and earlier to opt-out with
SQLite version 3.38.0 and later.

</p><h2 id="interface_overview"><span>3. </span>Interface Overview</h2>

<p>
SQLite stores JSON as ordinary text.
Backwards compatibility constraints mean that SQLite is only able to
store values that are NULL, integers, floating-point numbers, text,
and BLOBs.  It is not possible to add a new "JSON" type.


</p><h2 id="json_arguments"><span>3.1. </span>JSON arguments</h2>

<p>
For functions that accept JSON as their first argument, that argument
can be a JSON object, array, number, string, or null.  SQLite numeric
values and NULL values are interpreted as JSON numbers and nulls, respectively.
SQLite text values can be understood as JSON objects, arrays, or strings.
If an SQLite text value that is not a well-formed JSON object, array, or
string is passed into JSON function, that function will usually throw
an error.  (Exceptions to this rule are <a href="json1#jvalid">json_valid()</a>,
<a href="json1#jquote">json_quote()</a>, and <a href="json1#jerr">json_error_position()</a>.)

</p><p>
These routines understand all
<a href="https://www.rfc-editor.org/rfc/rfc8259.txt">rfc-8259 JSON syntax</a>
and also <a href="https://spec.json5.org/">JSON5 extensions</a>.  JSON text
generated by these routines always strictly conforms to the
<a href="https://json.org">canonical JSON definition</a> and does not contain any JSON5
or other extensions.  The ability to read and understand JSON5 was added in
version 3.42.0 (2023-05-16).
Prior versions of SQLite would only read canonical JSON.

<a name="jsonbx"></a>

</p><h2 id="jsonb"><span>3.2. </span>JSONB</h2>

<p>
Beginning with version 3.45.0 (2024-01-15), SQLite allows its
internal "parse tree" representation of JSON to be stored on disk,
as a BLOB, in a format that we call "JSONB".  By storing SQLite's internal
binary representation of JSON directly in the database, applications
can bypass the overhead of parsing and rendering JSON when reading and
updating JSON values.  The internal JSONB format is also uses slightly
less disk space then text JSON.

</p><p>
Any SQL function parameter that accepts text JSON as an input will also
accept a BLOB in the JSONB format.  The function will operate the
same in either case, except that it will run faster when
the input is JSONB, since it does not need to run the JSON parser.

</p><p>
Most SQL functions that return JSON text have a corresponding function
that returns the equivalent JSONB.  The functions that return JSON
in the text format begin with "<tt>json_</tt>" and functions that
return the binary JSONB format begin with "<tt>jsonb_</tt>".

</p><h3 id="the_jsonb_format"><span>3.2.1. </span>The JSONB format</h3>

<p>
JSONB is a binary representation of JSON used by SQLite and
is intended for internal use by SQLite only.  Applications
should not use JSONB outside of SQLite nor try to reverse-engineer the
JSONB format.

</p><p>
The "JSONB" name is inspired by <a href="https://postgresql.org">PostgreSQL</a>, but the
on-disk format for SQLite's JSONB is not the same as PostgreSQL's.
The two formats have the same name, but are not binary compatible.
The PostgreSQL JSONB format claims to offer O(1)
lookup of elements in objects and arrays.  SQLite's JSONB format makes no
such claim.  SQLite's JSONB has O(N) time complexity for
most operations in SQLite, just like text JSON.  The advantage of JSONB in
SQLite is that it is smaller and faster than text JSON - potentially several
times faster. There is space in the
on-disk JSONB format to add enhancements and future versions of SQLite might
include options to provide O(1) lookup of elements in JSONB, but no such
capability is currently available.

</p><h3 id="handling_of_malformed_jsonb"><span>3.2.2. </span>Handling of malformed JSONB</h3>

<p>
The JSONB that is generated by SQLite will always be well-formed.  If you
follow recommended practice and
treat JSONB as an opaque BLOB, then you will not have any problems.  But
JSONB is just a BLOB, so a mischievous programmer could devise BLOBs
that are similar to JSONB but that are technically malformed.  When
misformatted JSONB is feed into JSON functions, any of the following
might happen:

</p><ul>
<li><p>
The SQL statement might abort with a "malformed JSON" error.

</p></li><li><p>
The correct answer might be returned, if the malformed parts of
the JSONB blob do not impact the answer.

</p></li><li><p>
A goofy or nonsensical answer might be returned.
</p></li></ul>

<p>
The way in which SQLite handles invalid JSONB might change
from one version of SQLite to the next.  The system follows
the garbage-in/garbage-out rule:  If you feed the JSON functions invalid
JSONB, you get back an invalid answer.  If you are in doubt about the
validity of our JSONB, use the <a href="json1#jvalid">json_valid()</a> function to verify it.

</p><p>
We do make this one promise:
Malformed JSONB will never cause a memory
error or similar problem that might lead to a vulnerability.
Invalid JSONB might lead to crazy answers,
or it might cause queries to abort, but it won't cause a crash.

<a name="jsonpath"></a>

</p><h2 id="path_arguments"><span>3.3. </span>PATH arguments</h2>

<p>
For functions that accept PATH arguments, that PATH must be well-formed or
else the function will throw an error.
A well-formed PATH is a text value that begins with exactly one
'$' character followed by zero or more instances
of ".<i>objectlabel</i>" or "&#91;<i>arrayindex</i>&#93;".

</p><p>
The <i>arrayindex</i> is usually a non-negative integer <i>N</i>.  In
that case, the array element selected is the <i>N</i>-th element
of the array, starting with zero on the left.
The <i>arrayindex</i> can also be of the form "<b>#-</b><i>N</i>"
in which case the element selected is the <i>N</i>-th from the
right.  The last element of the array is "<b>#-1</b>".  Think of
the "#" characters as the "number of elements in the array".  Then
the expression "#-1" evaluates to the integer that corresponds to 
the last entry in the array.  It is sometimes useful for the array
index to be just the <b>#</b> character, for example when appending
a value to an existing JSON array:

<ul>
<li><span class='jex'>json_set('[0,1,2]','$[#]','new')</span>
<span class='jans'>&rarr; '[0,1,2,"new"]'</span></li>

</ul>


<a name="varg"></a>

</p><h2 id="value_arguments"><span>3.4. </span>VALUE arguments</h2>

<p>
For functions that accept "<i>value</i>" arguments (also shown as
"<i>value1</i>" and "<i>value2</i>"),
those arguments are usually understood
to be literal strings that are quoted and become JSON string values
in the result.  Even if the input <i>value</i> strings look like 
well-formed JSON, they are still interpreted as literal strings in the
result.

</p><p>
However, if a <i>value</i> argument comes directly from the result of another
JSON function or from <a href="json1#jptr">the -> operator</a> (but not <a href="json1#jptr">the ->> operator</a>),
then the argument is understood to be actual JSON and
the complete JSON is inserted rather than a quoted string.

</p><p>
For example, in the following call to json_object(), the <i>value</i>
argument looks like a well-formed JSON array.  However, because it is just
ordinary SQL text, it is interpreted as a literal string and added to the
result as a quoted string:

<ul>
<li><span class='jex'>json_object('ex','[52,3.14159]')</span>
<span class='jans'>&rarr; '{"ex":"[52,3.14159]"}'</span></li>

<li><span class='jex'>json_object('ex',('[52,3.14159]'->>'$'))</span>
<span class='jans'>&rarr; '{"ex":"[52,3.14159]"}'</span></li>

</ul>


</p><p>
But if the <i>value</i> argument in the outer json_object() call is the
result of another JSON function like <a href="json1#jmini">json()</a> or <a href="json1#jarray">json_array()</a>, then
the value is understood to be actual JSON and is inserted as such:

<ul>
<li><span class='jex'>json_object('ex',json('[52,3.14159]'))</span>
<span class='jans'>&rarr; '{"ex":[52,3.14159]}'</span></li>

<li><span class='jex'>json_object('ex',json_array(52,3.14159))</span>
<span class='jans'>&rarr; '{"ex":[52,3.14159]}'</span></li>

<li><span class='jex'>json_object('ex','[52,3.14159]'->'$')</span>
<span class='jans'>&rarr; '{"ex":[52,3.14159]}'</span></li>

</ul>


</p><p>
To be clear: "<i>json</i>" arguments are always interpreted as JSON
regardless of where the value for that argument comes from.  But
"<i>value</i>" arguments are only interpreted as JSON if those arguments
come directly from another JSON function or <a href="json1#jptr">the -> operator</a>.

</p><p>
Within JSON value arguments interpreted as JSON strings, Unicode escape
sequences are not treated as equivalent to the characters or escaped
control characters represented by the expressed Unicode code point.
Such escape sequences are not translated or specially treated; they
are treated as plain text by SQLite's JSON functions.

</p><h2 id="compatibility"><span>3.5. </span>Compatibility</h2>

<p>
The current implementation of this JSON library uses a recursive descent
parser.  In order to avoid using excess stack space, any JSON input that has
more than 1000 levels of nesting is considered invalid.   Limits on nesting
depth are allowed for compatible implementations of JSON by
<a href="https://tools.ietf.org/html/rfc8259#section-9">RFC-8259 section 9</a>.

<a name="json5"></a>

</p><h2 id="json5_extensions"><span>3.6. </span>JSON5 Extensions</h2>

<p>
Beginning in version 3.42.0 (2023-05-16), these routines will
read and interpret input JSON text that includes
<a href="https://spec.json5.org/">JSON5</a> extensions.  However, JSON text generated
by these routines will always be strictly conforming to the 
<a href="https://json.org">canonical definition of JSON</a>.

</p><p>
Here is a synopsis of JSON5 extensions (adapted from the
<a href="https://spec.json5.org/#introduction">JSON5 specification</a>):

</p><ul>
<li> Object keys may be unquoted identifiers.
</li><li> Objects may have a single trailing comma.
</li><li> Arrays may have a single trailing comma.
</li><li> Strings may be single quoted.
</li><li> Strings may span multiple lines by escaping new line characters.
</li><li> Strings may include new character escapes.
</li><li> Numbers may be hexadecimal.
</li><li> Numbers may have a leading or trailing decimal point.
</li><li> Numbers may be "Infinity", "-Infinity", and "NaN".
</li><li> Numbers may begin with an explicit plus sign.
</li><li> Single (//...) and multi-line (/*...*/) comments are allowed.
</li><li> Additional white space characters are allowed.
</li></ul>

<p>
To convert string X from JSON5 into canonical JSON, invoke
"<a href="json1#jmini">json(X)</a>".  The output of the "<a href="json1#jmini">json()</a>" function will be canonical
JSON regardless of any JSON5 extensions that are present in the input.
For backwards compatibility, the <a href="json1#jvalid">json_valid(X)</a> function without a
"flags" argument continues
to report false for inputs that are not canonical JSON, even if the
input is JSON5 that the function is able to understand.  To determine
whether or not an input string is valid JSON5, include the 0x02 bit
in the "flags" argument to json_valid:  "<tt>json_valid(X,2)</tt>".

</p><p>
These routines understand all of JSON5, plus a little more.
SQLite extends the JSON5 syntax in these two ways:

</p><ol>
<li><p>
Strict JSON5 requires that
unquoted object keys must be ECMAScript 5.1 IdentifierNames.  But large
unicode tables and lots of code is required in order to determine whether or
not a key is an ECMAScript 5.1 IdentifierName.  For this reason,
SQLite allows object keys to include any unicode characters
greater than U+007f that are not whitespace characters.  This relaxed
definition of "identifier" greatly simplifies the implementation and allows
the JSON parser to be smaller and run faster.

</p></li><li><p>
JSON5 allows floating-point infinities to be expressed as
"<tt>Infinity</tt>", "<tt>-Infinity</tt>", or "<tt>+Infinity</tt>"
in exactly that case - the initial "I" is capitalized and all other
characters are lower case.  SQLite also allows the abbreviation "<tt>Inf</tt>"
to be used in place of "<tt>Infinity</tt>" and it allows both keywords
to appear in any combination of upper and lower case letters.
Similarly,
JSON5 allows "NaN" for not-a-number.  SQLite extends this to also allow
"QNaN" and "SNaN" in any combination of upper and lower case letters.
Note that SQLite interprets NaN, QNaN, and SNaN as just an alternative
spellings for "null".
This extension has been added because (we are told) there exists a lot
of JSON in the wild that includes these non-standard representations
for infinity and not-a-number.
</p></li></ol>


<h2 id="performance_considerations"><span>3.7. </span>Performance Considerations</h2>

<p>
Most JSON functions do their internal processing using JSONB.  So if the
input is text, they first most translate the input text into JSONB.
If the input is already in the JSONB format, no translation is needed,
that step can be skipped, and performance is faster.

</p><p>
For that reason,
when an argument to one JSON function is supplied by another
JSON function, it is usually more efficient to use the "<tt>jsonb_</tt>"
variant for the function used as the argument.  

</p><ul>
<li>
  <tt>... json_insert(A,'$.b',json(C)) ...</tt>
  &nbsp; &larr; Less efficient.
</li><li>
  <tt>... json_insert(A,'$.b',jsonb(C)) ...</tt>
  &nbsp; &larr; More efficient.
</li></ul>


<p>
The <a href="json1#jgroupobjectb">aggregate JSON SQL functions</a> are an exception to this rule.  Those
functions all do their processing using text instead of JSONB.  So for the
aggregate JSON SQL functions, it is more efficient for the arguments
to be supplied using "<tt>json_</tt>" functions than "<tt>jsonb_</tt>"
functions.

</p><ul>
<li>
  <tt>... json_group_array(json(A))) ...</tt>
  &nbsp; &larr; More efficient.
</li><li>
  <tt>... json_group_array(jsonb(A))) ...</tt>
  &nbsp; &larr; Less efficient.
</li></ul>



<h2 id="function_details"><span>4. </span>Function Details</h2>

<p>The following sections provide additional detail on the operation of
the various JSON functions and operators:

<a name="jmini"></a>

</p><h2 id="the_json_function"><span>4.1. </span>The json() function</h2>

<p>The json(X) function verifies that its argument X is a valid
JSON string or JSONB blob and returns a minified version of that JSON string
with all unnecessary whitespace removed.  If X is not a well-formed
JSON string or JSONB blob, then this routine throws an error.

</p><p>If the input is JSON5 text, then it is converted into canonical
RFC-8259 text prior to being returned.

</p><p>If the argument X to json(X) contains JSON objects with duplicate
labels, then it is undefined whether or not the duplicates are
preserved.  The current implementation preserves duplicates.
However, future enhancements
to this routine may choose to silently remove duplicates.

</p><p>
Example:

<ul>
<li><span class='jex'>json(' { "this" : "is", "a": [ "test" ] } ')</span>
<span class='jans'>&rarr; '{"this":"is","a":["test"]}'</span></li>

</ul>


<a name="jminib"></a>

</p><h2 id="the_jsonb_function"><span>4.2. </span>The jsonb() function</h2>

<p>The jsonb(X) function returns the binary JSONB representation
of the JSON provided as argument X.  An error is raised if X is
TEXT that does not have valid JSON syntax.

</p><p>If X is a BLOB and appears to be JSONB,
then this routine simply returns a copy of X.
Only the outer-most element of the JSONB input is examined, however.
The deep structure of the JSONB is not validated.

<a name="jarray"></a>

</p><h2 id="the_json_array_function"><span>4.3. </span>The json_array() function</h2>

<p>The json_array() SQL function accepts zero or more arguments and
returns a well-formed JSON array that is composed from those arguments.
If any argument to json_array() is a BLOB then an error is thrown.

</p><p>An argument with SQL type TEXT is normally converted into a quoted 
JSON string.  However, if the argument is the output from another json1
function, then it is stored as JSON.  This allows calls to json_array()
and <a href="json1#jobj">json_object()</a> to be nested.  The <a href="json1#jmini">json()</a> function can also
be used to force strings to be recognized as JSON.

</p><p>Examples:

<ul>
<li><span class='jex'>json_array(1,2,'3',4)</span>
<span class='jans'>&rarr; '[1,2,"3",4]'</span></li>

<li><span class='jex'>json_array('[1,2]')</span>
<span class='jans'>&rarr; '["[1,2]"]'</span></li>

<li><span class='jex'>json_array(json_array(1,2))</span>
<span class='jans'>&rarr; '[[1,2]]'</span></li>

<li><span class='jex'>json_array(1,null,'3','[4,5]','{"six":7.7}')</span>
<span class='jans'>&rarr; '[1,null,"3","[4,5]","{\"six\":7.7}"]'</span></li>

<li><span class='jex'>json_array(1,null,'3',json('[4,5]'),json('{"six":7.7}'))</span>
<span class='jans'>&rarr; '[1,null,"3",[4,5],{"six":7.7}]'</span></li>

</ul>



<a name="jarrayb"></a>

</p><h2 id="the_jsonb_array_function"><span>4.4. </span>The jsonb_array() function</h2>

<p>The jsonb_array() SQL function works just like the <a href="json1#jarray">json_array()</a>
function except that it returns the constructed JSON array in the
SQLite's private JSONB format rather than in the standard
RFC 8259 text format.

<a name="jarraylen"></a>

</p><h2 id="the_json_array_length_function"><span>4.5. </span>The json_array_length() function</h2>

<p>The json_array_length(X) function returns the number of elements
in the JSON array X, or 0 if X is some kind of JSON value other
than an array.  The json_array_length(X,P) locates the array at path P
within X and returns the length of that array, or 0 if path P locates
an element in X that is not a JSON array, and NULL if path P does not
locate any element of X.  Errors are thrown if either X is not 
well-formed JSON or if P is not a well-formed path.

</p><p>Examples:

<ul>
<li><span class='jex'>json_array_length('[1,2,3,4]')</span>
<span class='jans'>&rarr; 4</span></li>

<li><span class='jex'>json_array_length('[1,2,3,4]', '$')</span>
<span class='jans'>&rarr; 4</span></li>

<li><span class='jex'>json_array_length('[1,2,3,4]', '$[2]')</span>
<span class='jans'>&rarr; 0</span></li>

<li><span class='jex'>json_array_length('{"one":[1,2,3]}')</span>
<span class='jans'>&rarr; 0</span></li>

<li><span class='jex'>json_array_length('{"one":[1,2,3]}', '$.one')</span>
<span class='jans'>&rarr; 3</span></li>

<li><span class='jex'>json_array_length('{"one":[1,2,3]}', '$.two')</span>
<span class='jans'>&rarr; NULL</span></li>

</ul>



<a name="jerr"></a>

</p><h2 id="the_json_error_position_function"><span>4.6. </span>The json_error_position() function</h2>

<p>The json_error_positionf(X) function returns 0 if the input X is a
well-formed JSON or JSON5 string.  If the input X contains one or more
syntax errors, then this function returns the character position of the
first syntax error.  The left-most character is position 1.

</p><p>If the input X is a BLOB, then this routine returns 0 if X is
a well-formed JSONB blob.  If the return value is positive, then it
represents the <i>approximate</i> 1-based position in the BLOB of the
first detected error.

</p><p>
The json_error_position() function was added with
SQLite version 3.42.0 (2023-05-16).


<a name="jex"></a>

</p><h2 id="the_json_extract_function"><span>4.7. </span>The json_extract() function</h2>

<p>The json_extract(X,P1,P2,...) extracts and returns one or more 
values from the
well-formed JSON at X.  If only a single path P1 is provided, then the
SQL datatype of the result is NULL for a JSON null, INTEGER or REAL
for a JSON numeric value, an INTEGER zero for a JSON false value,
an INTEGER one for a JSON true value, the dequoted text for a 
JSON string value, and a text representation for JSON object and array values.
If there are multiple path arguments (P1, P2, and so forth) then this
routine returns SQLite text which is a well-formed JSON array holding
the various values.

</p><p>Examples:

<ul>
<li><span class='jex'>json_extract('{"a":2,"c":[4,5,{"f":7}]}', '$')</span>
<span class='jans'>&rarr; '{"a":2,"c":[4,5,{"f":7}]}'</span></li>

<li><span class='jex'>json_extract('{"a":2,"c":[4,5,{"f":7}]}', '$.c')</span>
<span class='jans'>&rarr; '[4,5,{"f":7}]'</span></li>

<li><span class='jex'>json_extract('{"a":2,"c":[4,5,{"f":7}]}', '$.c[2]')</span>
<span class='jans'>&rarr; '{"f":7}'</span></li>

<li><span class='jex'>json_extract('{"a":2,"c":[4,5,{"f":7}]}', '$.c[2].f')</span>
<span class='jans'>&rarr; 7</span></li>

<li><span class='jex'>json_extract('{"a":2,"c":[4,5],"f":7}','$.c','$.a')</span>
<span class='jans'>&rarr; '[[4,5],2]'</span></li>

<li><span class='jex'>json_extract('{"a":2,"c":[4,5],"f":7}','$.c[#-1]')</span>
<span class='jans'>&rarr; 5</span></li>

<li><span class='jex'>json_extract('{"a":2,"c":[4,5,{"f":7}]}', '$.x')</span>
<span class='jans'>&rarr; NULL</span></li>

<li><span class='jex'>json_extract('{"a":2,"c":[4,5,{"f":7}]}', '$.x', '$.a')</span>
<span class='jans'>&rarr; '[null,2]'</span></li>

<li><span class='jex'>json_extract('{"a":"xyz"}', '$.a')</span>
<span class='jans'>&rarr; 'xyz'</span></li>

<li><span class='jex'>json_extract('{"a":null}', '$.a')</span>
<span class='jans'>&rarr; NULL</span></li>

</ul>


</p><p>There is a subtle incompatibility between the json_extract() function
in SQLite and the json_extract() function in MySQL.  The MySQL version
of json_extract() always returns JSON.  The SQLite version of
json_extract() only returns JSON if there are two or more PATH arguments
(because the result is then a JSON array) or if the single PATH argument
references an array or object.  In SQLite, if json_extract() has only
a single PATH argument and that PATH references a JSON null or a string
or a numeric value, then json_extract() returns the corresponding SQL
NULL, TEXT, INTEGER, or REAL value.

</p><p>The difference between MySQL json_extract() and SQLite json_extract()
really only stands out when accessing individual values within the JSON
that are strings or NULLs.  The following table demonstrates the difference:

</p><center>
<table border="1" cellpadding="3" cellspacing="0">
<tr><th>Operation</th><th>SQLite Result</th><th>MySQL Result
</th></tr><tr><td>json_extract('{"a":null,"b":"xyz"}','$.a')</td><td>NULL</td><td>'null'
</td></tr><tr><td>json_extract('{"a":null,"b":"xyz"}','$.b')</td><td>'xyz'</td><td>'"xyz"'
</td></tr></table></center>

<a name="jexb"></a>

<h2 id="the_jsonb_extract_function"><span>4.8. </span>The jsonb_extract() function</h2>

<p>
The jsonb_extract() function works the same as the <a href="json1#jex">json_extract()</a> function,
except in cases where json_extract() would normally return a text
JSON array object, this routine returns the array or object in the
JSONB format.  For the common case where a text, numeric, null, or
boolean JSON element is returned, this routine works exactly the same
as json_extract().


<a name="jptr"></a>

</p><h2 id="the_and_operators"><span>4.9. </span>The -> and ->> operators</h2>

<p>Beginning with SQLite version 3.38.0 (2022-02-22), the ->
and ->> operators are available for extracting subcomponents of JSON.
The SQLite implementation of -> and ->> strives to be
compatible with both MySQL and PostgreSQL.
The -> and ->> operators take a JSON string or JSONB blob
as their left operand and a PATH expression or object field
label or array index as their right operand.  The -> operator
returns a text JSON representation of the selected subcomponent or
NULL if that subcomponent does not exist.  The ->> operator returns
an SQL TEXT, INTEGER, REAL, or NULL value that represents the selected
subcomponent, or NULL if the subcomponent does not exist.

</p><p>Both the -> and ->> operators select the same subcomponent
of the JSON to their left.  The difference is that -> always returns a
JSON representation of that subcomponent and the ->> operator always
returns an SQL representation of that subcomponent.  Thus, these operators
are subtly different from a two-argument <a href="json1#jex">json_extract()</a> function call.
A call to json_extract() with two arguments will return a JSON representation
of the subcomponent if and only if the subcomponent is a JSON array or
object, and will return an SQL representation of the subcomponent if the
subcomponent is a JSON null, string, or numeric value.

</p><p>When the -> operator returns JSON, it always returns the
RFC 8565 text representation of that JSON, not JSONB.  Use the
<a href="json1#jexb">jsonb_extract()</a> function if you need a subcomponent in the
JSONB format.

</p><p>The right-hand operand to the -> and ->> operators can
be a well-formed JSON path expression.  This is the form used by MySQL.
For compatibility with PostgreSQL,
the -> and ->> operators also accept a text object label or
integer array index as their right-hand operand.
If the right operand is a text
label X, then it is interpreted as the JSON path '$.X'.  If the right
operand is an integer value N, then it is interpreted as the JSON path '$[N]'.

</p><p>Examples:

<ul>
<li><span class='jex'>'{"a":2,"c":[4,5,{"f":7}]}' -> '$'</span>
<span class='jans'>&rarr; '{"a":2,"c":[4,5,{"f":7}]}'</span></li>

<li><span class='jex'>'{"a":2,"c":[4,5,{"f":7}]}' -> '$.c'</span>
<span class='jans'>&rarr; '[4,5,{"f":7}]'</span></li>

<li><span class='jex'>'{"a":2,"c":[4,5,{"f":7}]}' -> 'c'</span>
<span class='jans'>&rarr; '[4,5,{"f":7}]'</span></li>

<li><span class='jex'>'{"a":2,"c":[4,5,{"f":7}]}' -> '$.c[2]'</span>
<span class='jans'>&rarr; '{"f":7}'</span></li>

<li><span class='jex'>'{"a":2,"c":[4,5,{"f":7}]}' -> '$.c[2].f'</span>
<span class='jans'>&rarr; '7'</span></li>

<li><span class='jex'>'{"a":2,"c":[4,5,{"f":7}]}' ->> '$.c[2].f'</span>
<span class='jans'>&rarr; 7</span></li>

<li><span class='jex'>'{"a":2,"c":[4,5,{"f":7}]}' -> 'c' -> 2 ->> 'f'</span>
<span class='jans'>&rarr; 7</span></li>

<li><span class='jex'>'{"a":2,"c":[4,5],"f":7}' -> '$.c[#-1]'</span>
<span class='jans'>&rarr; '5'</span></li>

<li><span class='jex'>'{"a":2,"c":[4,5,{"f":7}]}' -> '$.x'</span>
<span class='jans'>&rarr; NULL</span></li>

<li><span class='jex'>'[11,22,33,44]' -> 3</span>
<span class='jans'>&rarr; '44'</span></li>

<li><span class='jex'>'[11,22,33,44]' ->> 3</span>
<span class='jans'>&rarr; 44</span></li>

<li><span class='jex'>'{"a":"xyz"}' -> '$.a'</span>
<span class='jans'>&rarr; '"xyz"'</span></li>

<li><span class='jex'>'{"a":"xyz"}' ->> '$.a'</span>
<span class='jans'>&rarr; 'xyz'</span></li>

<li><span class='jex'>'{"a":null}' -> '$.a'</span>
<span class='jans'>&rarr; 'null'</span></li>

<li><span class='jex'>'{"a":null}' ->> '$.a'</span>
<span class='jans'>&rarr; NULL</span></li>

</ul>


<a name="jins"></a>

<a name="jrepl"></a>

<a name="jset"></a>

</p><h2 id="the_json_insert_json_replace_and_json_set_functions"><span>4.10. </span>The json_insert(), json_replace, and json_set() functions</h2>

<p>The json_insert(), json_replace, and json_set() functions all take
a single JSON value as their first argument followed by zero or more
pairs of path and value arguments, and return a new JSON string formed
by updating the input JSON by the path/value pairs.  The functions
differ only in how they deal with creating new values and overwriting
preexisting values.

</p><center>
<table border="1" cellpadding="3" cellspacing="0">
<tr>
<th>Function</th><th>Overwrite if already exists?</th><th>Create if does not exist?
</th></tr><tr>
<td>json_insert()</td><td align="center">No</td><td align="center">Yes
</td></tr><tr>
<td>json_replace()</td><td align="center">Yes</td><td align="center">No
</td></tr><tr>
<td>json_set()</td><td align="center">Yes</td><td align="center">Yes
</td></tr></table></center>

<p>The json_insert(), json_replace(), and json_set() functions always
take an odd number of arguments.  The first argument is always the original
JSON to be edited.  Subsequent arguments occur in pairs with the first
element of each pair being a path and the second element being the value
to insert or replace or set on that path.

</p><p>Edits occur sequentially from left to right.  Changes caused by
prior edits can affect the path search for subsequent edits.

</p><p>If the value of a path/value pair is an SQLite TEXT value, then it
is normally inserted as a quoted JSON string, even if the string looks
like valid JSON.  However, if the value is the result of another
json function (such as <a href="json1#jmini">json()</a> or <a href="json1#jarray">json_array()</a> or <a href="json1#jobj">json_object()</a>)
or if it is the result of <a href="json1#jptr">the -> operator</a>,
then it is interpreted as JSON and is inserted as JSON retaining all
of its substructure.  Values that are the result of <a href="json1#jptr">the ->> operator</a>
are always interpreted as TEXT and are inserted as a JSON string even
if they look like valid JSON.

</p><p>These routines throw an error if the first JSON argument is not
well-formed or if any PATH argument is not well-formed or if any
argument is a BLOB.

</p><p>To append an element onto the end of an array, using json_insert()
with an array index of "#".  Examples:

<ul>
<li><span class='jex'>json_insert('[1,2,3,4]','$[#]',99)</span>
<span class='jans'>&rarr; '[1,2,3,4,99]'</span></li>

<li><span class='jex'>json_insert('[1,[2,3],4]','$[1][#]',99)</span>
<span class='jans'>&rarr; '[1,[2,3,99],4]'</span></li>

</ul>


</p><p>Other examples:

<ul>
<li><span class='jex'>json_insert('{"a":2,"c":4}', '$.a', 99)</span>
<span class='jans'>&rarr; '{"a":2,"c":4}'</span></li>

<li><span class='jex'>json_insert('{"a":2,"c":4}', '$.e', 99)</span>
<span class='jans'>&rarr; '{"a":2,"c":4,"e":99}'</span></li>

<li><span class='jex'>json_replace('{"a":2,"c":4}', '$.a', 99)</span>
<span class='jans'>&rarr; '{"a":99,"c":4}'</span></li>

<li><span class='jex'>json_replace('{"a":2,"c":4}', '$.e', 99)</span>
<span class='jans'>&rarr; '{"a":2,"c":4}'</span></li>

<li><span class='jex'>json_set('{"a":2,"c":4}', '$.a', 99)</span>
<span class='jans'>&rarr; '{"a":99,"c":4}'</span></li>

<li><span class='jex'>json_set('{"a":2,"c":4}', '$.e', 99)</span>
<span class='jans'>&rarr; '{"a":2,"c":4,"e":99}'</span></li>

<li><span class='jex'>json_set('{"a":2,"c":4}', '$.c', '[97,96]')</span>
<span class='jans'>&rarr; '{"a":2,"c":"[97,96]"}'</span></li>

<li><span class='jex'>json_set('{"a":2,"c":4}', '$.c', json('[97,96]'))</span>
<span class='jans'>&rarr; '{"a":2,"c":[97,96]}'</span></li>

<li><span class='jex'>json_set('{"a":2,"c":4}', '$.c', json_array(97,96))</span>
<span class='jans'>&rarr; '{"a":2,"c":[97,96]}'</span></li>

</ul>


<a name="jinsb"></a>

<a name="jreplb"></a>

<a name="jsetb"></a>

</p><h2 id="the_jsonb_insert_jsonb_replace_and_jsonb_set_functions"><span>4.11. </span>The jsonb_insert(), jsonb_replace, and jsonb_set() functions</h2>

<p>The jsonb_insert(), jsonb_replace(), and jsonb_set() functions work the
same as <a href="json1#jins">json_insert()</a>, <a href="json1#jrepl">json_replace()</a>, and <a href="json1#jset">json_set()</a>, respectively,
except that "<tt>jsonb_</tt>" versions return their result in the binary
JSONB format.

<a name="jobj"></a>

</p><h2 id="the_json_object_function"><span>4.12. </span>The json_object() function</h2>

<p>The json_object() SQL function accepts zero or more pairs of arguments
and returns a well-formed JSON object that is composed from those arguments.
The first argument of each pair is the label and the second argument of
each pair is the value.
If any argument to json_object() is a BLOB then an error is thrown.

</p><p>The json_object() function currently allows duplicate labels without
complaint, though this might change in a future enhancement.

</p><p>An argument with SQL type TEXT it is normally converted into a quoted 
JSON string even if the input text is well-formed JSON.  
However, if the argument is the direct result from another JSON
function or <a href="json1#jptr">the -> operator</a> (but not <a href="json1#jptr">the ->> operator</a>), 
then it is treated as JSON and all of its JSON type information
and substructure is preserved.  This allows calls to json_object()
and <a href="json1#jarray">json_array()</a> to be nested.  The <a href="json1#jmini">json()</a> function can also
be used to force strings to be recognized as JSON.

</p><p>Examples:

<ul>
<li><span class='jex'>json_object('a',2,'c',4)</span>
<span class='jans'>&rarr; '{"a":2,"c":4}'</span></li>

<li><span class='jex'>json_object('a',2,'c','{e:5}')</span>
<span class='jans'>&rarr; '{"a":2,"c":"{e:5}"}'</span></li>

<li><span class='jex'>json_object('a',2,'c',json_object('e',5))</span>
<span class='jans'>&rarr; '{"a":2,"c":{"e":5}}'</span></li>

</ul>


<a name="jobjb"></a>

</p><h2 id="the_jsonb_object_function"><span>4.13. </span>The jsonb_object() function</h2>

<p>
The jsonb_object() function works just like the <a href="json1#jobjb">json_object()</a> function
except that the generated object is returned in the binary JSONB format.

<a name="jpatch"></a>

</p><h2 id="the_json_patch_function"><span>4.14. </span>The json_patch() function</h2>

<p>The json_patch(T,P) SQL function runs the
<a href="https://tools.ietf.org/html/rfc7396">RFC-7396</a> MergePatch algorithm
to apply patch P against input T.  The patched copy of T is returned.

</p><p>MergePatch can add, modify, or delete elements of a JSON Object,
and so for JSON Objects, the json_patch() routine is a generalized
replacement for <a href="json1#jset">json_set()</a> and <a href="json1#jrm">json_remove()</a>.  However, MergePatch
treats JSON Array objects as atomic.  MergePatch cannot append to an
Array nor modify individual elements of an Array.  It can only insert,
replace, or delete the whole Array as a single unit.  Hence, json_patch()
is not as useful when dealing with JSON that includes Arrays,
especially Arrays with lots of substructure.

</p><p>Examples:

<ul>
<li><span class='jex'>json_patch('{"a":1,"b":2}','{"c":3,"d":4}')</span>
<span class='jans'>&rarr; '{"a":1,"b":2,"c":3,"d":4}'</span></li>

<li><span class='jex'>json_patch('{"a":[1,2],"b":2}','{"a":9}')</span>
<span class='jans'>&rarr; '{"a":9,"b":2}'</span></li>

<li><span class='jex'>json_patch('{"a":[1,2],"b":2}','{"a":null}')</span>
<span class='jans'>&rarr; '{"b":2}'</span></li>

<li><span class='jex'>json_patch('{"a":1,"b":2}','{"a":9,"b":null,"c":8}')</span>
<span class='jans'>&rarr; '{"a":9,"c":8}'</span></li>

<li><span class='jex'>json_patch('{"a":{"x":1,"y":2},"b":3}','{"a":{"y":9},"c":8}')</span>
<span class='jans'>&rarr; '{"a":{"x":1,"y":9},"b":3,"c":8}'</span></li>

</ul>



<a name="jpatchb"></a>

</p><h2 id="the_jsonb_patch_function"><span>4.15. </span>The jsonb_patch() function</h2>

<p>
The jsonb_patch() function works just like the <a href="json1#jpatchb">json_patch()</a> function
except that the patched JSON is returned in the binary JSONB format.

<a name="jrm"></a>

</p><h2 id="the_json_remove_function"><span>4.16. </span>The json_remove() function</h2>

<p>The json_remove(X,P,...) function takes a single JSON value as its
first argument followed by zero or more path arguments.
The json_remove(X,P,...) function returns
a copy of the X parameter with all the elements 
identified by path arguments removed.  Paths that select elements
not found in X are silently ignored.

</p><p>Removals occurs sequentially from left to right.  Changes caused by
prior removals can affect the path search for subsequent arguments.

</p><p>If the json_remove(X) function is called with no path arguments,
then it returns the input X reformatted, with excess whitespace
removed.

</p><p>The json_remove() function throws an error if the first argument
is not well-formed JSON or if any later argument is not a well-formed
path.

</p><p>Examples:

<ul>
<li><span class='jex'>json_remove('[0,1,2,3,4]','$[2]')</span>
<span class='jans'>&rarr; '[0,1,3,4]'</span></li>

<li><span class='jex'>json_remove('[0,1,2,3,4]','$[2]','$[0]')</span>
<span class='jans'>&rarr; '[1,3,4]'</span></li>

<li><span class='jex'>json_remove('[0,1,2,3,4]','$[0]','$[2]')</span>
<span class='jans'>&rarr; '[1,2,4]'</span></li>

<li><span class='jex'>json_remove('[0,1,2,3,4]','$[#-1]','$[0]')</span>
<span class='jans'>&rarr; '[1,2,3]'</span></li>

<li><span class='jex'>json_remove('{"x":25,"y":42}')</span>
<span class='jans'>&rarr; '{"x":25,"y":42}'</span></li>

<li><span class='jex'>json_remove('{"x":25,"y":42}','$.z')</span>
<span class='jans'>&rarr; '{"x":25,"y":42}'</span></li>

<li><span class='jex'>json_remove('{"x":25,"y":42}','$.y')</span>
<span class='jans'>&rarr; '{"x":25}'</span></li>

<li><span class='jex'>json_remove('{"x":25,"y":42}','$')</span>
<span class='jans'>&rarr; NULL</span></li>

</ul>


<a name="jrmb"></a>

</p><h2 id="the_jsonb_remove_function"><span>4.17. </span>The jsonb_remove() function</h2>
<p>
The jsonb_remove() function works just like the <a href="json1#jrmb">json_remove()</a> function
except that the edited JSON result is returned in the binary JSONB format.

<a name="jtype"></a>

</p><h2 id="the_json_type_function"><span>4.18. </span>The json_type() function</h2>

<p>The json_type(X) function returns the "type" of the outermost element
of X.  The json_type(X,P) function returns the "type" of the element
in X that is selected by path P.  The "type" returned by json_type() is
one of the following SQL text values:
'null', 'true', 'false', 'integer', 'real', 'text', 'array', or 'object'.
If the path P in json_type(X,P) selects an element that does not exist
in X, then this function returns NULL.

</p><p>The json_type() function throws an error if its first argument is
not well-formed JSON or JSONB or if its second argument is not a well-formed
JSON path.

</p><p>Examples:

<ul>
<li><span class='jex'>json_type('{"a":[2,3.5,true,false,null,"x"]}')</span>
<span class='jans'>&rarr; 'object'</span></li>

<li><span class='jex'>json_type('{"a":[2,3.5,true,false,null,"x"]}','$')</span>
<span class='jans'>&rarr; 'object'</span></li>

<li><span class='jex'>json_type('{"a":[2,3.5,true,false,null,"x"]}','$.a')</span>
<span class='jans'>&rarr; 'array'</span></li>

<li><span class='jex'>json_type('{"a":[2,3.5,true,false,null,"x"]}','$.a[0]')</span>
<span class='jans'>&rarr; 'integer'</span></li>

<li><span class='jex'>json_type('{"a":[2,3.5,true,false,null,"x"]}','$.a[1]')</span>
<span class='jans'>&rarr; 'real'</span></li>

<li><span class='jex'>json_type('{"a":[2,3.5,true,false,null,"x"]}','$.a[2]')</span>
<span class='jans'>&rarr; 'true'</span></li>

<li><span class='jex'>json_type('{"a":[2,3.5,true,false,null,"x"]}','$.a[3]')</span>
<span class='jans'>&rarr; 'false'</span></li>

<li><span class='jex'>json_type('{"a":[2,3.5,true,false,null,"x"]}','$.a[4]')</span>
<span class='jans'>&rarr; 'null'</span></li>

<li><span class='jex'>json_type('{"a":[2,3.5,true,false,null,"x"]}','$.a[5]')</span>
<span class='jans'>&rarr; 'text'</span></li>

<li><span class='jex'>json_type('{"a":[2,3.5,true,false,null,"x"]}','$.a[6]')</span>
<span class='jans'>&rarr; NULL</span></li>

</ul>


<a name="jvalid"></a>

</p><h2 id="the_json_valid_function"><span>4.19. </span>The json_valid() function</h2>

<p>The json_valid(X,Y) function return 1 if the argument X is well-formed
JSON, or returns 0 if X is not well-formed.  The Y parameter is an integer
bitmask that defines what is meant by "well-formed".  The following bits
of Y are currently defined:

</p><ul>
<li> <b>0x01</b> &rarr;
The input is text that strictly complies with canonical RFC-8259 JSON,
without any extensions.
</li><li> <b>0x02</b> &rarr;
The input is text that is JSON with <a href="json1#json5">JSON5</a> extensions described above.
</li><li> <b>0x04</b> &rarr;
The input is a BLOB that superficially appears to be <a href="json1#jsonbx">JSONB</a>.
</li><li> <b>0x08</b> &rarr;
The input is a BLOB that strictly conforms to the internal <a href="json1#jsonbx">JSONB</a> format.
</li></ul>

<p>By combining bits, the following useful values of Y can be derived:

</p><ul>
<li> <b>1</b> &rarr; X is RFC-8259 JSON text
</li><li> <b>2</b> &rarr; X is <a href="json1#json5">JSON5</a> text
</li><li> <b>4</b> &rarr; X is probably <a href="json1#jsonbx">JSONB</a>
</li><li> <b>5</b> &rarr; X is RFC-8259 JSON text or <a href="json1#jsonbx">JSONB</a>
</li><li> <b>6</b> &rarr; X is <a href="json1#json5">JSON5</a> text or <a href="json1#jsonbx">JSONB</a>
     &larr; <i>This is probably the value you want</i>
</li><li> <b>8</b> &rarr; X is strictly conforming <a href="json1#jsonbx">JSONB</a>
</li><li> <b>9</b> &rarr; X is RFC-8259 or strictly conforming <a href="json1#jsonbx">JSONB</a>
</li><li> <b>10</b> &rarr; X is JSON5 or strictly conforming <a href="json1#jsonbx">JSONB</a>
</li></ul>

<p>The Y parameter is optional. If omitted, it defaults to 1, which means
that the default behavior is to return true only if the input X is
strictly conforming RFC-8259 JSON text without any extensions.  This
makes the one-argument version of json_valid() compatible with older
versions of SQLite, prior to the addition of support for
<a href="json1#json5">JSON5</a> and <a href="json1#jsonbx">JSONB</a>.

</p><p>The difference between 0x04 and 0x08 bits in the Y parameter is that
0x04 only examines the outer wrapper of the BLOB to see if it superficially
looks like <a href="json1#jsonbx">JSONB</a>.  This is sufficient for must purposes and is very fast.
The 0x08 bit does a thorough examination of all internal details of the BLOB.
The 0x08 bit takes time that is linear in the size of the X input and is much
slower.  The 0x04 bit is recommended for most purposes.

</p><p>If you just want to know if a value is a plausible input to one of
the other JSON functions, a Y value of 6 is probably what you want to use.

</p><p>Any Y value less than 1 or greater than 15 raises an error, for the
latest version of json_valid().  However, future versions of json_valid()
might be enhanced to accept flag values outside of this range, having new
meanings that we have not yet thought of.

</p><p>If either X or Y inputs to json_valid() are NULL, then the function
returns NULL.

</p><p>Examples:

<ul>
<li><span class='jex'>json_valid('{"x":35}')</span>
<span class='jans'>&rarr; 1</span></li>

<li><span class='jex'>json_valid('{x:35}')</span>
<span class='jans'>&rarr; 0</span></li>

<li><span class='jex'>json_valid('{x:35}',6)</span>
<span class='jans'>&rarr; 1</span></li>

<li><span class='jex'>json_valid('{"x":35')</span>
<span class='jans'>&rarr; 0</span></li>

<li><span class='jex'>json_valid(NULL)</span>
<span class='jans'>&rarr; NULL</span></li>

</ul>


<a name="jquote"></a>

</p><h2 id="the_json_quote_function"><span>4.20. </span>The json_quote() function</h2>

<p>The json_quote(X) function converts the SQL value X (a number or a
string) into its corresponding JSON representation.  If X is a JSON value
returned by another JSON function, then this function is a no-op.

</p><p>Examples:

<ul>
<li><span class='jex'>json_quote(3.14159)</span>
<span class='jans'>&rarr; 3.14159</span></li>

<li><span class='jex'>json_quote('verdant')</span>
<span class='jans'>&rarr; '"verdant"'</span></li>

<li><span class='jex'>json_quote('[1]')</span>
<span class='jans'>&rarr; '"[1]"'</span></li>

<li><span class='jex'>json_quote(json('[1]'))</span>
<span class='jans'>&rarr; '[1]'</span></li>

<li><span class='jex'>json_quote('[1,')</span>
<span class='jans'>&rarr; '"[1,"'</span></li>

</ul>


<a name="jgrouparray"></a>
<a name="jgroupobject"></a>
<a name="jgrouparrayb"></a>
<a name="jgroupobjectb"></a>

</p><h2 id="array_and_object_aggregate_functions"><span>4.21. </span>Array and object aggregate functions</h2>

<p>The json_group_array(X) function is an
<a href="lang_aggfunc.html">aggregate SQL function</a> that returns a JSON array
comprised of all X values in the aggregation.
Similarly, the json_group_object(NAME,VALUE) function returns a JSON object
comprised of all NAME/VALUE pairs in the aggregation.
The "<tt>jsonb_</tt>" variants are the same except that they return their
result in the binary <a href="json1#jsonbx">JSONB</a> format.

<a name="jeach"></a>

<a name="jtree"></a>

</p><h2 id="the_json_each_and_json_tree_table_valued_functions"><span>4.22. </span>The json_each() and json_tree() table-valued functions</h2>

<p>The json_each(X) and json_tree(X) <a href="https://www.sqlite.org/vtab.html#tabfunc2">table-valued functions</a> walk the
JSON value provided as their first argument and return one row for each
element.  The json_each(X) function only walks the immediate children
of the top-level array or object,
or just the top-level element itself if the top-level
element is a primitive value.
The json_tree(X) function recursively walks through the
JSON substructure starting with the top-level element.  

</p><p>The json_each(X,P) and json_tree(X,P) functions work just like
their one-argument counterparts except that they treat the element
identified by path P as the top-level element.

</p><p>The schema for the table returned by json_each() and json_tree() is
as follows:

</p><blockquote><pre>
CREATE TABLE json_tree(
    key ANY,             -- key for current element relative to its parent
    value ANY,           -- value for the current element
    type TEXT,           -- 'object','array','string','integer', etc.
    atom ANY,            -- value for primitive types, null for array & object
    id INTEGER,          -- integer ID for this element
    parent INTEGER,      -- integer ID for the parent of this element
    fullkey TEXT,        -- full path describing the current element
    path TEXT,           -- path to the container of the current row
    json JSON HIDDEN,    -- 1st input parameter: the raw JSON
    root TEXT HIDDEN     -- 2nd input parameter: the PATH at which to start
);
</pre></blockquote>

<p>
The "key" column is the integer array index for elements of a JSON array 
and the text label for elements of a JSON object.  The key column is
NULL in all other cases.

</p><p>
The "atom" column is the SQL value corresponding to primitive elements - 
elements other than JSON arrays and objects.  The "atom" column is NULL
for a JSON array or object.  The "value" column is the same as the
"atom" column for primitive JSON elements but takes on the text JSON value
for arrays and objects.

</p><p>
The "type" column is an SQL text value taken from ('null', 'true', 'false',
'integer', 'real', 'text', 'array', 'object') according to the type of
the current JSON element.

</p><p>
The "id" column is an integer that identifies a specific JSON element
within the complete JSON string.  The "id" integer is an internal housekeeping
number, the computation of which might change in future releases.  The
only guarantee is that the "id" column will be different for every row.

</p><p>
The "parent" column is always NULL for json_each().
For json_tree(),
the "parent" column is the "id" integer for the parent of the current
element, or NULL for the top-level JSON element or the element identified
by the root path in the second argument.

</p><p>
The "fullkey" column is a text path that uniquely identifies the current
row element within the original JSON string.  The complete key to the
true top-level element is returned even if an alternative starting point
is provided by the "root" argument.

</p><p>
The "path" column is the path to the array or object container that holds 
the current row, or the path to the current row in the case where the 
iteration starts on a primitive type and thus only provides a single
row of output.

</p><h3 id="examples_using_json_each_and_json_tree_"><span>4.22.1. </span>Examples using json_each() and json_tree()</h3>

<p>Suppose the table "CREATE TABLE user(name,phone)" stores zero or
more phone numbers as a JSON array object in the user.phone field.
To find all users who have any phone number with a 704 area code:

</p><blockquote><pre>
SELECT DISTINCT user.name
  FROM user, json_each(user.phone)
 WHERE json_each.value LIKE '704-%';
</pre></blockquote>

<p>Now suppose the user.phone field contains plain text if the user
has only a single phone number and a JSON array if the user has multiple
phone numbers.  The same question is posed: "Which users have a phone number
in the 704 area code?"  But now the json_each() function can only be called
for those users that have two or more phone numbers since json_each()
requires well-formed JSON as its first argument:

</p><blockquote><pre>
SELECT name FROM user WHERE phone LIKE '704-%'
UNION
SELECT user.name
  FROM user, json_each(user.phone)
 WHERE json_valid(user.phone)
   AND json_each.value LIKE '704-%';
</pre></blockquote>

<p>Consider a different database with "CREATE TABLE big(json JSON)".
To see a complete line-by-line decomposition of the data:

</p><blockquote><pre>
SELECT big.rowid, fullkey, value
  FROM big, json_tree(big.json)
 WHERE json_tree.type NOT IN ('object','array');
</pre></blockquote>

<p>In the previous, the "type NOT IN ('object','array')" term of the
WHERE clause suppresses containers and only lets through leaf elements.
The same effect could be achieved this way:

</p><blockquote><pre>
SELECT big.rowid, fullkey, atom
  FROM big, json_tree(big.json)
 WHERE atom IS NOT NULL;
</pre></blockquote>

<p>Suppose each entry in the BIG table is a JSON object 
with a '$.id' field that is a unique identifier
and a '$.partlist' field that can be a deeply nested object.
You want to find the id of every entry that contains one
or more references to uuid '6fa5181e-5721-11e5-a04e-57f3d7b32808' anywhere
in its '$.partlist'.

</p><blockquote><pre>
SELECT DISTINCT json_extract(big.json,'$.id')
  FROM big, json_tree(big.json, '$.partlist')
 WHERE json_tree.key='uuid'
   AND json_tree.value='6fa5181e-5721-11e5-a04e-57f3d7b32808';
</pre></blockquote>

