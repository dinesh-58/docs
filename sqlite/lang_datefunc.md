---
title: Date And Time Functions
description: Date And Time Functions
statement: SELECT DATE('now');
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

<p>
<li> <b>date(</b><i>time-value, modifier, modifier, ...</i><b>)</b> </li>
<li> <b>time(</b><i>time-value, modifier, modifier, ...</i><b>)</b> </li>
<li> <b>datetime(</b><i>time-value, modifier, modifier, ...</i><b>)</b> </li>
<li> <b>julianday(</b><i>time-value, modifier, modifier, ...</i><b>)</b> </li>
<li> <b>unixepoch(</b><i>time-value, modifier, modifier, ...</i><b>)</b> </li>
<li> <b>strftime(</b><i>format, time-value, modifier, modifier, ...</i><b>)</b> </li>
<li> <b>timediff(</b><i>time-value, time-value</i><b>)</b> </li>
</ol>

<p>

<p>
<li> text in a subset of the <a href="http://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO-8601</a> format,
</li><li> numbers representing the <a href="http://en.wikipedia.org/wiki/Julian_day" target="_blank">Julian day</a>, or
</li><li> numbers representing the number of seconds since (or before) 1970-01-01 00:00:00 UTC
     (the unix timestamp).
</li></ul>

<p>

<blockquote>
<table border="0" cellpadding="0" cellspacing="0">
<tr><td></td><td width="10"></td><td></td></tr>

<tr><td> %d </td><td></td><td> day of month: 00-31
</td></tr><tr><td> %e </td><td></td><td> day of month without leading zero: 0-31
</td></tr><tr><td> %f </td><td></td><td> fractional seconds: SS.SSS
</td></tr><tr><td> %F </td><td></td><td> ISO 8601 date: YYYY-MM-DD
</td></tr><tr><td> %H </td><td></td><td> hour: 00-24
</td></tr><tr><td> %I </td><td></td><td> hour for 12-hour clock: 01-12
</td></tr><tr><td> %j </td><td></td><td> day of year: 001-366
</td></tr><tr><td> %J </td><td></td><td> Julian day number (fractional)
</td></tr><tr><td> %k </td><td></td><td> hour without leading zero: 0-24
</td></tr><tr><td> %l </td><td></td><td> %I without leading zero: 1-12
</td></tr><tr><td> %m </td><td></td><td> month: 01-12
</td></tr><tr><td> %M </td><td></td><td> minute: 00-59
</td></tr><tr><td> %p </td><td></td><td> "AM" or "PM" depending on the hour
</td></tr><tr><td> %P </td><td></td><td> "am" or "pm" depending on the hour
</td></tr><tr><td> %R </td><td></td><td> ISO 8601 time: HH:MM
</td></tr><tr><td> %s </td><td></td><td> seconds since 1970-01-01
</td></tr><tr><td> %S </td><td></td><td> seconds: 00-59
</td></tr><tr><td> %T </td><td></td><td> ISO 8601 time: HH:MM:SS
</td></tr><tr><td> %u </td><td></td><td> day of week 1-7 with Monday==1
</td></tr><tr><td> %w </td><td></td><td> day of week 0-6 with Sunday==0
</td></tr><tr><td> %W </td><td></td><td> week of year: 00-53
</td></tr><tr><td> %Y </td><td></td><td> year: 0000-9999
</td></tr><tr><td> %% </td><td></td><td> %
</td></tr></table>
</blockquote>

<p>

<blockquote>
<table border="0" cellpadding="0" cellspacing="0">
<tr><td><b>Function</b></td><td width="30"></td><td><b>Equivalent (or nearly) strftime()</b>
</td></tr><tr><td>   date(...)      </td><td></td><td>  strftime('%F', ...)
</td></tr><tr><td>   time(...)      </td><td></td><td>  strftime('%T', ...)
</td></tr><tr><td>   datetime(...)  </td><td></td><td>  strftime('%F %T', ...)
</td></tr><tr><td>   julianday(...) </td><td></td><td>  <nobr>strftime('%J', ...) -- (numeric return)</nobr>
</td></tr><tr><td>   unixepoch(...) </td><td></td><td>  <nobr>strftime('%s', ...) -- (numeric return)</nobr>
</td></tr></table>
</blockquote>

<p>

<p>

<a name="tmdif"></a>

<h2 id="timediff_"><span>1.1. </span>Timediff()</h2>

<p>
(+|-)YYYY-MM-DD HH:MM:SS.SSS
</blockquote>
<p>
datetime(A) = datetime(B, timediff(A,B))
</blockquote>

<p>
SELECT julianday(B) - julianday(A);<br>
SELECT unixepoch(B) - unixepoch(A);
</blockquote>

<p>
SELECT timediff('2023-02-15','2023-03-15');<br>
SELECT timediff('2023-03-15','2023-04-15');
</blockquote>
<p>


<h2 id="time_values"><span>2. </span>Time Values</h2>

<p>A time value can be in any of the following formats shown below.
<li> <i>YYYY-MM-DD</i>
</li><li> <i>YYYY-MM-DD HH:MM</i>
</li><li> <i>YYYY-MM-DD HH:MM:SS</i>
</li><li> <i>YYYY-MM-DD HH:MM:SS.SSS</i>
</li><li> <i>YYYY-MM-DD</i><b>T</b><i>HH:MM</i>
</li><li> <i>YYYY-MM-DD</i><b>T</b><i>HH:MM:SS</i>
</li><li> <i>YYYY-MM-DD</i><b>T</b><i>HH:MM:SS.SSS</i>
</li><li> <i>HH:MM</i>
</li><li> <i>HH:MM:SS</i>
</li><li> <i>HH:MM:SS.SSS</i>
</li><li> <b>now</b>
</li><li> <i>DDDDDDDDDD</i>
</li></ol>

<p>

<p>

<blockquote>
2013-10-07 08:23:19.120<br>
2013-10-07T08:23:19.120Z<br>
2013-10-07 04:23:19.120-04:00<br>
2456572.84952685
</blockquote>

<p>

<p>

<p>For all date/time functions other than timediff(),

<ol>
<li value="1"> NNN days
</li><li value="2"> NNN hours
</li><li value="3"> NNN minutes
</li><li value="4"> NNN seconds
</li><li value="5"> NNN months
</li><li value="6"> NNN years
</li><li value="7"> &plusmn;HH:MM
</li><li value="8"> &plusmn;HH:MM:SS
</li><li value="9"> &plusmn;HH:MM:SS.SSS
</li><li value="10"> &plusmn;YYYY-MM-DD
</li><li value="11"> &plusmn;YYYY-MM-DD HH:MM
</li><li value="12"> &plusmn;YYYY-MM-DD HH:MM:SS
</li><li value="13"> &plusmn;YYYY-MM-DD HH:MM:SS.SSS
</li><li value="14"> start of month
</li><li value="15"> start of year
</li><li value="16"> start of day
</li><li value="17"> weekday N
</li><li value="18"> unixepoch
</li><li value="19"> julianday
</li><li value="20"> auto
</li><li value="21"> localtime
</li><li value="22"> utc
</li><li value="23"> subsec
</li><li value="24"> subsecond
</li></ol>

<p>The first thirteen modifiers (1 through 13) 

<a name="tmshf"></a>

<p>The time shift modifiers (7 through 13) move the time value by the

<p>The "start of" modifiers (14 through 16) shift the date backwards 

<p>The "weekday" modifier advances the date forward, if necessary,

<p>The "unixepoch" modifier (18) only works if it immediately follows 

<a name="jdmod"></a>

<p>The "julianday" modifier must immediately follow the initial

<a name="subsec"></a>

<p>
  SELECT unixepoch('subsec');
</blockquote>

<h2 id="examples"><span>4. </span>Examples</h2>

<p>Compute the current date.</p><p>

<p>Compute the last day of the current month.</p>

<blockquote>SELECT date('now','start of month','+1 month','-1 day');
</blockquote>

<p>Compute the date and time given a unix timestamp 1092941466.</p>

<blockquote>
    SELECT datetime(1092941466, 'unixepoch');<br>
    SELECT datetime(1092941466, 'auto'); -- Does not work for early 1970!
</blockquote>

<p>Compute the date and time given a unix timestamp 1092941466, and 

<blockquote>
  SELECT datetime(1092941466, 'unixepoch', 'localtime');
</blockquote>

<p>Compute the current unix timestamp.</p>

<blockquote>
  SELECT unixepoch();<br>
  SELECT strftime('%s');
</blockquote>

<p>Compute the number of days since the signing of the US Declaration

<blockquote>
  SELECT julianday('now') - julianday('1776-07-04');
</blockquote>

<p>Compute the number of seconds since a particular moment in 2004:</p>

<blockquote>
  SELECT unixepoch() - unixepoch('2004-01-01 02:34:56');
</blockquote>

<p>

<blockquote>
  SELECT date('now','start of year','+9 months','weekday 2');
</blockquote>

<p>Compute the time since the unix epoch in seconds with

<blockquote>
  SELECT (julianday('now') - 2440587.5)*86400.0;<br>
  SELECT unixepoch('now','subsec');
</blockquote>

<p>Compute how old Abraham Lincoln would be if he were still alive today:</p>

<blockquote>
  SELECT timediff('now','1809-02-12');
</blockquote>

<h2 id="caveats_and_bugs"><span>5. </span>Caveats And Bugs</h2>

<p>The computation of local time depends heavily on the whim 

<p>These functions only work for dates between 0000-01-01 00:00:00

<p>Non-Vista Windows platforms only support one set of DST rules. 

<p>All internal computations assume the 

