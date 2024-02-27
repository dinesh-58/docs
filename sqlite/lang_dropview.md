---
title: DROP VIEW
description: DROP VIEW
statement: DROP VIEW IF EXISTS view_names;
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





<p><b><a href="https://www.sqlite.org/syntax/drop-view-stmt.html" target="_blank">drop-view-stmt:</a></b>
<button id='xd0afa372' onclick='hideorshow("xd0afa372","x5a4cabde")'>hide</button></p>
 <div id='x5a4cabde' class='imgcontainer'>
 <div style="max-width:743px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 743.76 54">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="32,17 20,21 20,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L26,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M47,32L78,32A15 15 0 0 0 93 17A15 15 0 0 0 78 2L47,2A15 15 0 0 0 32 17A15 15 0 0 0 47 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="63" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DROP</text>
<polygon points="116,17 105,21 105,12" style="fill:rgb(0,0,0)"/>
<path d="M93,17L110,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M131,32L160,32A15 15 0 0 0 176 17A15 15 0 0 0 160 2L131,2A15 15 0 0 0 116 17A15 15 0 0 0 131 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="146" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">VIEW</text>
<polygon points="212,17 200,21 200,12" style="fill:rgb(0,0,0)"/>
<path d="M176,17L206,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M227,32A15 15 0 0 0 242 17A15 15 0 0 0 227 2A15 15 0 0 0 212 17A15 15 0 0 0 227 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="227" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">IF</text>
<polygon points="265,17 253,21 253,12" style="fill:rgb(0,0,0)"/>
<path d="M242,17L259,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M280,32L325,32A15 15 0 0 0 340 17A15 15 0 0 0 325 2L280,2A15 15 0 0 0 265 17A15 15 0 0 0 280 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="302" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">EXISTS</text>
<polygon points="394,17 382,21 382,12" style="fill:rgb(0,0,0)"/>
<path d="M340,17L388,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M409,32L505,32A15 15 0 0 0 520 17A15 15 0 0 0 505 2L409,2A15 15 0 0 0 394 17A15 15 0 0 0 409 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="457" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">schema-name</text>
<polygon points="543,17 532,21 532,12" style="fill:rgb(0,0,0)"/>
<path d="M520,17L538,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M558,32A15 15 0 0 0 574 17A15 15 0 0 0 558 2A15 15 0 0 0 543 17A15 15 0 0 0 558 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="558" y="17" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">.</text>
<polygon points="610,17 598,21 598,12" style="fill:rgb(0,0,0)"/>
<path d="M574,17L604,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M625,32L696,32A15 15 0 0 0 711 17A15 15 0 0 0 696 2L625,2A15 15 0 0 0 610 17A15 15 0 0 0 625 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="660" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">view-name</text>
<polygon points="734,17 722,21 722,12" style="fill:rgb(0,0,0)"/>
<path d="M711,17L728,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="738" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="265,47 253,51 253,43" style="fill:rgb(0,0,0)"/>
<path d="M176,17 L 183,17 Q 191,17 191,32 L 191,32 Q 191,47 206,47 L 244,47 L 259,47"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M265,47 L 340,47 Q 355,47 355,32 L 355,32 Q 355,17 362,17 L 370,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="457,47 445,51 445,43" style="fill:rgb(0,0,0)"/>
<path d="M361,17 L 369,17 Q 376,17 376,32 L 376,32 Q 376,47 391,47 L 436,47 L 451,47"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M457,47 L 574,47 Q 589,47 589,32 L 589,32 Q 589,17 596,17 L 604,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>


<p>The DROP VIEW statement removes a view created by the <a href="lang_createview">CREATE VIEW</a> 
statement. The view definition is removed from the database schema, but 
no actual data in the underlying base tables is modified.

</p><p>The view to drop is identified by the view-name and optional 
schema-name specified as part of the DROP VIEW statement. This 
reference is resolved using the standard procedure for <a href="lang_naming">object resolution</a>.

</p><p>
If the specified view cannot be found and the IF EXISTS clause is not 
present, it is an error. If the specified view cannot be found and an IF
EXISTS clause is present in the DROP VIEW statement, then the statement
is a no-op.


</p>
