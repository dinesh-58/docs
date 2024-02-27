---
title: Built-in Aggregate Functions
description: Built-in Aggregate Functions
statement: SELECT COUNT(*) FROM Artist;
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






<h2 id="syntax"><span>1. </span>Syntax</h2>
<p><b><a href="https://www.sqlite.org/syntax/aggregate-function-invocation.html" target="_blank">aggregate-function-invocation:</a></b>
<button id='x7c5141f9' onclick='hideorshow("x7c5141f9","xda5c185d")'>hide</button></p>
 <div id='xda5c185d' class='imgcontainer'>
 <div style="max-width:909px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 909.533 223.344">
<circle cx="5" cy="56" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="32,56 20,60 20,52" style="fill:rgb(0,0,0)"/>
<path d="M9,56L26,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M47,71L156,71A15 15 0 0 0 171 56A15 15 0 0 0 156 41L47,41A15 15 0 0 0 32 56A15 15 0 0 0 47 71Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="102" y="56" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">aggregate-func</text>
<polygon points="189,56 178,60 178,52" style="fill:rgb(0,0,0)"/>
<path d="M171,56L183,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M204,71A15 15 0 0 0 219 56A15 15 0 0 0 204 41A15 15 0 0 0 189 56A15 15 0 0 0 204 71Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="204" y="56" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="242,56 231,60 231,52" style="fill:rgb(0,0,0)"/>
<path d="M219,56L237,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="277,26 265,30 265,22" style="fill:rgb(0,0,0)"/>
<path d="M242,56 L 248,56 Q 254,56 254,41 L 254,41 Q 254,26 263,26 L 271,26"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M292,41L360,41A15 15 0 0 0 376 26L376,26A15 15 0 0 0 360 11L292,11A15 15 0 0 0 277 26L277,26A15 15 0 0 0 292 41Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="326" y="26" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DISTINCT</text>
<polygon points="394,26 382,30 382,22" style="fill:rgb(0,0,0)"/>
<path d="M376,26L388,26"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="428,56 417,60 417,52" style="fill:rgb(0,0,0)"/>
<path d="M394,26 L 399,26 Q 405,26 405,41 L 405,41 Q 405,56 414,56 L 422,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="464,56 453,60 453,52" style="fill:rgb(0,0,0)"/>
<path d="M428,56L458,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M464,71L513,71L513,41L464,41Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="489" y="56" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="657,56 646,60 646,52" style="fill:rgb(0,0,0)"/>
<path d="M513,56L652,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M672,71A15 15 0 0 0 688 56A15 15 0 0 0 672 41A15 15 0 0 0 657 56A15 15 0 0 0 672 71Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="672" y="56" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="734,86 722,91 722,82" style="fill:rgb(0,0,0)"/>
<path d="M688,56 L 699,56 Q 711,56 711,71 L 711,71 Q 711,86 719,86 L 728,86"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M734,101L846,101L846,71L734,71Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="790" y="86" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">filter-clause</text>
<polygon points="900,56 888,60 888,52" style="fill:rgb(0,0,0)"/>
<path d="M846,86 L 855,86 Q 864,86 864,71 L 864,71 Q 864,56 879,56 L 879,56 L 894,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="903" cy="56" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="790,56 778,60 778,52" style="fill:rgb(0,0,0)"/>
<path d="M688,56L784,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="900,56 888,60 888,52" style="fill:rgb(0,0,0)"/>
<path d="M790,56L894,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="326,56 315,60 315,52" style="fill:rgb(0,0,0)"/>
<path d="M242,56L321,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="428,56 417,60 417,52" style="fill:rgb(0,0,0)"/>
<path d="M326,56L422,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M489,32A15 15 0 0 0 504 17A15 15 0 0 0 489 2A15 15 0 0 0 474 17A15 15 0 0 0 489 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="489" y="17" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="504,17 515,12 515,21" style="fill:rgb(0,0,0)"/>
<path d="M513,56 L 525,56 Q 536,56 536,41 L 536,32 Q 536,17 523,17 L 510,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="464,56 453,60 453,52" style="fill:rgb(0,0,0)"/>
<path d="M474,17 L 456,17 Q 441,17 441,32 L 441,41 Q 441,56 450,56 L 458,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M438,207A15 15 0 0 0 453 192A15 15 0 0 0 438 177A15 15 0 0 0 423 192A15 15 0 0 0 438 207Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="438" y="192" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">*</text>
<polygon points="423,192 412,196 412,188" style="fill:rgb(0,0,0)"/>
<path d="M242,56 L 248,56 Q 254,56 254,71 L 254,177 Q 254,192 269,192 L 402,192 L 417,192"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="489,192 477,196 477,188" style="fill:rgb(0,0,0)"/>
<path d="M453,192L483,192"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M489,192 L 570,192 Q 585,192 600,192 L 605,192 Q 620,192 620,177 L 620,71 Q 620,56 626,56 L 631,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="438,216 427,221 427,212" style="fill:rgb(0,0,0)"/>
<path d="M326,192 L 392,192 Q 407,192 407,204 Q 407,216 420,216 L 433,216"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M438,216 L 453,216 Q 467,216 467,204 Q 467,192 473,192 L 479,192"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="300,117 289,121 289,112" style="fill:rgb(0,0,0)"/>
<path d="M513,56 L 523,56 Q 533,56 533,71 L 533,71 Q 533,86 518,86 L 292,86 Q 277,86 277,101 L 277,102 Q 277,117 286,117 L 294,117"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M315,132L360,132A15 15 0 0 0 375 117A15 15 0 0 0 360 101L315,101A15 15 0 0 0 300 117A15 15 0 0 0 315 132Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="337" y="117" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ORDER</text>
<polygon points="392,117 381,121 381,112" style="fill:rgb(0,0,0)"/>
<path d="M375,117L386,117"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M407,132L411,132A15 15 0 0 0 426 117A15 15 0 0 0 411 101L407,101A15 15 0 0 0 392 117A15 15 0 0 0 407 132Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="409" y="117" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">BY</text>
<polygon points="455,117 444,121 444,112" style="fill:rgb(0,0,0)"/>
<path d="M426,117L449,117"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M455,132L585,132L585,101L455,101Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="520" y="117" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ordering-term</text>
<path d="M520,169A15 15 0 0 0 535 154A15 15 0 0 0 520 139A15 15 0 0 0 505 154A15 15 0 0 0 520 169Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="520" y="154" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="535,154 547,150 547,159" style="fill:rgb(0,0,0)"/>
<path d="M585,117 L 591,117 Q 597,117 597,132 L 597,139 Q 597,154 582,154 L 556,154 L 541,154"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="455,117 444,121 444,112" style="fill:rgb(0,0,0)"/>
<path d="M505,154 L 470,154 Q 455,154 447,154 Q 438,154 438,139 L 438,132 Q 438,117 444,117 L 449,117"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M585,117 L 594,117 Q 602,117 602,102 L 602,71 Q 602,56 617,56 L 623,56 L 638,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
<p><b><a href="https://www.sqlite.org/syntax/expr.html" target="_blank">expr:</a></b>
<button id='x487b760f' onclick='hideorshow("x487b760f","x2500495a")'>show</button></p>
 <div id='x2500495a' style='display:none;' class='imgcontainer'>
 <div style="max-width:963px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 963.96 1068.77">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,17 33,21 33,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L39,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M45,32L158,32L158,2L45,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="101" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">literal-value</text>
<polygon points="954,17 943,21 943,12" style="fill:rgb(0,0,0)"/>
<path d="M158,17L948,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="958" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M60,70L172,70A15 15 0 0 0 187 55L187,55A15 15 0 0 0 172 39L60,39A15 15 0 0 0 45 55L45,55A15 15 0 0 0 60 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="116" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">bind-parameter</text>
<polygon points="916,55 905,59 905,50" style="fill:rgb(0,0,0)"/>
<path d="M187,55L910,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,55 L 924,55 Q 931,55 931,47 L 931,40"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,55 33,59 33,50" style="fill:rgb(0,0,0)"/>
<path d="M9,17 L 16,17 Q 24,17 24,32 L 24,40 Q 24,55 31,55 L 39,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M60,130L156,130A15 15 0 0 0 171 115A15 15 0 0 0 156 100L60,100A15 15 0 0 0 45 115A15 15 0 0 0 60 130Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="108" y="115" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">schema-name</text>
<polygon points="195,115 183,119 183,111" style="fill:rgb(0,0,0)"/>
<path d="M171,115L189,115"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M210,130A15 15 0 0 0 225 115A15 15 0 0 0 210 100A15 15 0 0 0 195 115A15 15 0 0 0 210 130Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="210" y="115" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">.</text>
<polygon points="261,115 249,119 249,111" style="fill:rgb(0,0,0)"/>
<path d="M225,115L255,115"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M276,130L351,130A15 15 0 0 0 366 115A15 15 0 0 0 351 100L276,100A15 15 0 0 0 261 115A15 15 0 0 0 276 130Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="313" y="115" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">table-name</text>
<polygon points="389,115 378,119 378,111" style="fill:rgb(0,0,0)"/>
<path d="M366,115L383,115"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M404,130A15 15 0 0 0 419 115A15 15 0 0 0 404 100A15 15 0 0 0 389 115A15 15 0 0 0 404 130Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="404" y="115" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">.</text>
<polygon points="455,115 444,119 444,111" style="fill:rgb(0,0,0)"/>
<path d="M419,115L450,115"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M471,130L565,130A15 15 0 0 0 580 115A15 15 0 0 0 565 100L471,100A15 15 0 0 0 455 115A15 15 0 0 0 471 130Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="518" y="115" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">column-name</text>
<polygon points="916,115 905,119 905,111" style="fill:rgb(0,0,0)"/>
<path d="M580,115L910,115"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,115 L 924,115 Q 931,115 931,108 L 931,100"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,115 33,119 33,111" style="fill:rgb(0,0,0)"/>
<path d="M24,100 L 24,108 Q 24,115 31,115 L 39,115"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="108,89 97,93 97,84" style="fill:rgb(0,0,0)"/>
<path d="M24,74 L 24,81 Q 24,89 39,89 L 87,89 L 102,89"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="313,89 302,93 302,84" style="fill:rgb(0,0,0)"/>
<path d="M108,89 L 129,89 Q 144,89 159,89 L 293,89 L 308,89"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M313,89 L 414,89 Q 429,89 429,102 Q 429,115 436,115 L 444,115"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M223,89 L 230,89 Q 238,89 238,102 Q 238,115 245,115 L 253,115"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M60,168L168,168A15 15 0 0 0 183 153A15 15 0 0 0 168 138L60,138A15 15 0 0 0 45 153A15 15 0 0 0 60 168Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="114" y="153" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">unary-operator</text>
<polygon points="206,153 194,157 194,149" style="fill:rgb(0,0,0)"/>
<path d="M183,153L200,153"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M206,168L255,168L255,138L206,138Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="231" y="153" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="916,153 905,157 905,149" style="fill:rgb(0,0,0)"/>
<path d="M255,153L910,153"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,153 L 924,153 Q 931,153 931,145 L 931,138"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,153 33,157 33,149" style="fill:rgb(0,0,0)"/>
<path d="M24,138 L 24,145 Q 24,153 31,153 L 39,153"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M45,206L94,206L94,176L45,176Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="69" y="191" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="117,191 106,195 106,186" style="fill:rgb(0,0,0)"/>
<path d="M94,191L111,191"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M132,206L245,206A15 15 0 0 0 261 191A15 15 0 0 0 245 176L132,176A15 15 0 0 0 117 191A15 15 0 0 0 132 206Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="189" y="191" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">binary-operator</text>
<polygon points="284,191 272,195 272,186" style="fill:rgb(0,0,0)"/>
<path d="M261,191L278,191"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M284,206L333,206L333,176L284,176Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="308" y="191" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="916,191 905,195 905,186" style="fill:rgb(0,0,0)"/>
<path d="M333,191L910,191"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,191 L 924,191 Q 931,191 931,183 L 931,176"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,191 33,195 33,186" style="fill:rgb(0,0,0)"/>
<path d="M24,176 L 24,183 Q 24,191 31,191 L 39,191"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M60,245L162,245A15 15 0 0 0 177 230A15 15 0 0 0 162 215L60,215A15 15 0 0 0 45 230A15 15 0 0 0 60 245Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="111" y="230" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">function-name</text>
<polygon points="194,230 183,234 183,226" style="fill:rgb(0,0,0)"/>
<path d="M177,230L188,230"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M209,245A15 15 0 0 0 224 230A15 15 0 0 0 209 215A15 15 0 0 0 194 230A15 15 0 0 0 209 245Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="209" y="230" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="260,230 249,234 249,226" style="fill:rgb(0,0,0)"/>
<path d="M224,230L255,230"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M260,245L437,245L437,215L260,215Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="348" y="230" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">function-arguments</text>
<polygon points="473,230 461,234 461,226" style="fill:rgb(0,0,0)"/>
<path d="M437,230L467,230"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M488,245A15 15 0 0 0 503 230A15 15 0 0 0 488 215A15 15 0 0 0 473 230A15 15 0 0 0 488 245Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="488" y="230" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="541,260 529,265 529,256" style="fill:rgb(0,0,0)"/>
<path d="M503,230 L 510,230 Q 518,230 518,245 L 518,245 Q 518,260 527,260 L 535,260"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M541,275L653,275L653,245L541,245Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="597" y="260" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">filter-clause</text>
<polygon points="691,230 680,234 680,226" style="fill:rgb(0,0,0)"/>
<path d="M653,260 L 661,260 Q 668,260 668,245 L 668,245 Q 668,230 677,230 L 685,230"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="729,260 718,265 718,256" style="fill:rgb(0,0,0)"/>
<path d="M691,230 L 699,230 Q 706,230 706,245 L 706,245 Q 706,260 715,260 L 723,260"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M729,275L837,275L837,245L729,245Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="783" y="260" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">over-clause</text>
<polygon points="916,260 905,265 905,256" style="fill:rgb(0,0,0)"/>
<path d="M837,260L910,260"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,260 L 924,260 Q 931,260 931,253 L 931,245"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,230 33,234 33,226" style="fill:rgb(0,0,0)"/>
<path d="M24,215 L 24,222 Q 24,230 31,230 L 39,230"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="597,230 585,234 585,226" style="fill:rgb(0,0,0)"/>
<path d="M503,230L591,230"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M597,230L680,230"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="916,230 905,234 905,226" style="fill:rgb(0,0,0)"/>
<path d="M691,230L910,230"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,230 L 924,230 Q 931,230 931,222 L 931,215"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M60,321A15 15 0 0 0 75 306A15 15 0 0 0 60 290A15 15 0 0 0 45 306A15 15 0 0 0 60 321Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="60" y="306" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="111,306 100,310 100,301" style="fill:rgb(0,0,0)"/>
<path d="M75,306L105,306"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M111,321L160,321L160,290L111,290Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="136" y="306" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="196,306 185,310 185,301" style="fill:rgb(0,0,0)"/>
<path d="M160,306L191,306"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M211,321A15 15 0 0 0 227 306A15 15 0 0 0 211 290A15 15 0 0 0 196 306A15 15 0 0 0 211 321Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="211" y="306" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="916,306 905,310 905,301" style="fill:rgb(0,0,0)"/>
<path d="M227,306L910,306"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,306 L 924,306 Q 931,306 931,298 L 931,291"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,306 33,310 33,301" style="fill:rgb(0,0,0)"/>
<path d="M24,290 L 24,298 Q 24,306 31,306 L 39,306"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M136,284A15 15 0 0 0 151 269A15 15 0 0 0 136 254A15 15 0 0 0 121 269A15 15 0 0 0 136 284Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="136" y="269" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="151,269 162,265 162,274" style="fill:rgb(0,0,0)"/>
<path d="M160,306 L 168,306 Q 175,306 175,291 L 175,284 Q 175,269 166,269 L 157,269"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M121,269 L 103,269 Q 88,269 88,284 L 88,291 Q 88,306 96,306 L 103,306"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M60,358L88,358A15 15 0 0 0 103 343A15 15 0 0 0 88 328L60,328A15 15 0 0 0 45 343A15 15 0 0 0 60 358Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="74" y="343" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CAST</text>
<polygon points="126,343 114,348 114,339" style="fill:rgb(0,0,0)"/>
<path d="M103,343L120,343"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M141,358A15 15 0 0 0 156 343A15 15 0 0 0 141 328A15 15 0 0 0 126 343A15 15 0 0 0 141 358Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="141" y="343" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="179,343 168,348 168,339" style="fill:rgb(0,0,0)"/>
<path d="M156,343L173,343"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M179,358L228,358L228,328L179,328Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="204" y="343" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="251,343 240,348 240,339" style="fill:rgb(0,0,0)"/>
<path d="M228,343L246,343"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M267,358L271,358A15 15 0 0 0 286 343A15 15 0 0 0 271 328L267,328A15 15 0 0 0 251 343A15 15 0 0 0 267 358Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="269" y="343" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">AS</text>
<polygon points="309,343 297,348 297,339" style="fill:rgb(0,0,0)"/>
<path d="M286,343L303,343"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M309,358L408,358L408,328L309,328Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="358" y="343" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">type-name</text>
<polygon points="431,343 419,348 419,339" style="fill:rgb(0,0,0)"/>
<path d="M408,343L425,343"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M446,358A15 15 0 0 0 461 343A15 15 0 0 0 446 328A15 15 0 0 0 431 343A15 15 0 0 0 446 358Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="446" y="343" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="916,343 905,348 905,339" style="fill:rgb(0,0,0)"/>
<path d="M461,343L910,343"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,343 L 924,343 Q 931,343 931,336 L 931,328"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,343 33,348 33,339" style="fill:rgb(0,0,0)"/>
<path d="M24,328 L 24,336 Q 24,343 31,343 L 39,343"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M45,396L94,396L94,366L45,366Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="69" y="381" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="117,381 106,385 106,377" style="fill:rgb(0,0,0)"/>
<path d="M94,381L111,381"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M132,396L196,396A15 15 0 0 0 211 381A15 15 0 0 0 196 366L132,366A15 15 0 0 0 117 381A15 15 0 0 0 132 396Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="164" y="381" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">COLLATE</text>
<polygon points="234,381 223,385 223,377" style="fill:rgb(0,0,0)"/>
<path d="M211,381L229,381"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M250,396L355,396A15 15 0 0 0 370 381A15 15 0 0 0 355 366L250,366A15 15 0 0 0 234 381A15 15 0 0 0 250 396Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="302" y="381" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">collation-name</text>
<polygon points="916,381 905,385 905,377" style="fill:rgb(0,0,0)"/>
<path d="M370,381L910,381"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,381 L 924,381 Q 931,381 931,374 L 931,366"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,381 33,385 33,377" style="fill:rgb(0,0,0)"/>
<path d="M24,366 L 24,374 Q 24,381 31,381 L 39,381"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M45,434L94,434L94,404L45,404Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="69" y="419" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="130,419 119,423 119,415" style="fill:rgb(0,0,0)"/>
<path d="M94,419L124,419"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M145,434L165,434A15 15 0 0 0 180 419A15 15 0 0 0 165 404L145,404A15 15 0 0 0 130 419A15 15 0 0 0 145 434Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="155" y="419" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NOT</text>
<polygon points="234,419 223,423 223,415" style="fill:rgb(0,0,0)"/>
<path d="M180,419L229,419"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M250,434L273,434A15 15 0 0 0 288 419A15 15 0 0 0 273 404L250,404A15 15 0 0 0 234 419A15 15 0 0 0 250 434Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="261" y="419" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">LIKE</text>
<path d="M250,472L279,472A15 15 0 0 0 294 457A15 15 0 0 0 279 442L250,442A15 15 0 0 0 234 457A15 15 0 0 0 250 472Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="264" y="457" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">GLOB</text>
<path d="M250,510L302,510A15 15 0 0 0 317 495A15 15 0 0 0 302 479L250,479A15 15 0 0 0 234 495A15 15 0 0 0 250 510Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="276" y="495" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">REGEXP</text>
<path d="M250,547L297,547A15 15 0 0 0 313 532A15 15 0 0 0 297 517L250,517A15 15 0 0 0 234 532A15 15 0 0 0 250 547Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="274" y="532" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">MATCH</text>
<path d="M378,510L427,510L427,479L378,479Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="403" y="495" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<path d="M378,434L427,434L427,404L378,404Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="403" y="419" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="465,449 454,454 454,445" style="fill:rgb(0,0,0)"/>
<path d="M427,419 L 435,419 Q 442,419 442,434 L 442,434 Q 442,449 451,449 L 460,449"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M480,464L532,464A15 15 0 0 0 547 449A15 15 0 0 0 532 434L480,434A15 15 0 0 0 465 449A15 15 0 0 0 480 464Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="506" y="449" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ESCAPE</text>
<polygon points="570,449 559,454 559,445" style="fill:rgb(0,0,0)"/>
<path d="M547,449L565,449"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M570,464L620,464L620,434L570,434Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="595" y="449" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="671,419 659,423 659,415" style="fill:rgb(0,0,0)"/>
<path d="M620,449 L 627,449 Q 635,449 635,434 L 635,434 Q 635,419 650,419 L 650,419 L 665,419"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="916,419 905,423 905,415" style="fill:rgb(0,0,0)"/>
<path d="M671,419L910,419"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,419 L 924,419 Q 931,419 931,411 L 931,404"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,419 33,423 33,415" style="fill:rgb(0,0,0)"/>
<path d="M24,404 L 24,411 Q 24,419 31,419 L 39,419"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M100,419 L 108,419 Q 115,419 115,434 L 115,434 Q 115,449 130,449 L 177,449 Q 192,449 192,434 L 192,434 Q 192,419 199,419 L 207,419"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="234,532 223,537 223,528" style="fill:rgb(0,0,0)"/>
<path d="M196,419 L 204,419 Q 211,419 211,434 L 211,517 Q 211,532 220,532 L 229,532"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="234,457 223,461 223,452" style="fill:rgb(0,0,0)"/>
<path d="M211,442 L 211,449 Q 211,457 220,457 L 229,457"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="234,495 223,499 223,490" style="fill:rgb(0,0,0)"/>
<path d="M211,479 L 211,487 Q 211,495 220,495 L 229,495"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="378,419 367,423 367,415" style="fill:rgb(0,0,0)"/>
<path d="M288,419L372,419"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="340,532 329,537 329,528" style="fill:rgb(0,0,0)"/>
<path d="M313,532L334,532"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="378,495 367,499 367,490" style="fill:rgb(0,0,0)"/>
<path d="M340,532 L 348,532 Q 355,532 355,517 L 355,510 Q 355,495 364,495 L 372,495"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="340,495 329,499 329,490" style="fill:rgb(0,0,0)"/>
<path d="M317,495L334,495"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M340,495L378,495"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="340,457 329,461 329,452" style="fill:rgb(0,0,0)"/>
<path d="M294,457L334,457"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M340,457 L 348,457 Q 355,457 355,472 L 355,480 Q 355,495 367,495 L 378,495"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="506,419 495,423 495,415" style="fill:rgb(0,0,0)"/>
<path d="M427,419L501,419"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M506,419L659,419"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="547,495 536,499 536,490" style="fill:rgb(0,0,0)"/>
<path d="M427,495L542,495"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M547,495 L 656,495 Q 671,495 671,480 L 671,434 Q 671,419 686,419 L 692,419 L 707,419"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M45,585L94,585L94,555L45,555Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="69" y="570" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="130,570 119,574 119,566" style="fill:rgb(0,0,0)"/>
<path d="M94,570L124,570"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M145,585L194,585A15 15 0 0 0 209 570A15 15 0 0 0 194 555L145,555A15 15 0 0 0 130 570A15 15 0 0 0 145 585Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="170" y="570" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ISNULL</text>
<polygon points="916,570 905,574 905,566" style="fill:rgb(0,0,0)"/>
<path d="M209,570L910,570"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,570 L 924,570 Q 931,570 931,563 L 931,555"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,570 33,574 33,566" style="fill:rgb(0,0,0)"/>
<path d="M24,555 L 24,563 Q 24,570 31,570 L 39,570"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M145,623L215,623A15 15 0 0 0 230 608A15 15 0 0 0 215 593L145,593A15 15 0 0 0 130 608A15 15 0 0 0 145 623Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="180" y="608" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NOTNULL</text>
<path d="M145,661L165,661A15 15 0 0 0 180 646A15 15 0 0 0 165 631L145,631A15 15 0 0 0 130 646A15 15 0 0 0 145 661Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="155" y="646" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NOT</text>
<polygon points="203,646 192,650 192,641" style="fill:rgb(0,0,0)"/>
<path d="M180,646L198,646"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M219,661L250,661A15 15 0 0 0 265 646A15 15 0 0 0 250 631L219,631A15 15 0 0 0 203 646A15 15 0 0 0 219 661Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="234" y="646" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NULL</text>
<polygon points="288,646 276,650 276,641" style="fill:rgb(0,0,0)"/>
<path d="M265,646L282,646"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="339,570 327,574 327,566" style="fill:rgb(0,0,0)"/>
<path d="M288,646 L 295,646 Q 303,646 303,631 L 303,585 Q 303,570 318,570 L 318,570 L 333,570"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="288,608 276,612 276,604" style="fill:rgb(0,0,0)"/>
<path d="M230,608L282,608"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M288,608 L 295,608 Q 303,608 303,600 L 303,593"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="130,646 119,650 119,641" style="fill:rgb(0,0,0)"/>
<path d="M94,570 L 102,570 Q 109,570 109,585 L 109,631 Q 109,646 117,646 L 124,646"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="130,608 119,612 119,604" style="fill:rgb(0,0,0)"/>
<path d="M94,570 L 102,570 Q 109,570 109,585 L 109,593 Q 109,608 117,608 L 124,608"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M45,699L94,699L94,668L45,668Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="69" y="684" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="117,684 106,688 106,679" style="fill:rgb(0,0,0)"/>
<path d="M94,684L111,684"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M132,699A15 15 0 0 0 147 684A15 15 0 0 0 132 668A15 15 0 0 0 117 684A15 15 0 0 0 132 699Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="132" y="684" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">IS</text>
<polygon points="183,684 172,688 172,679" style="fill:rgb(0,0,0)"/>
<path d="M147,684L178,684"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M198,699L219,699A15 15 0 0 0 234 684A15 15 0 0 0 219 668L198,668A15 15 0 0 0 183 684A15 15 0 0 0 198 699Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="209" y="684" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NOT</text>
<polygon points="270,684 258,688 258,679" style="fill:rgb(0,0,0)"/>
<path d="M234,684L264,684"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="306,684 294,688 294,679" style="fill:rgb(0,0,0)"/>
<path d="M270,684L300,684"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M321,699L389,699A15 15 0 0 0 404 684A15 15 0 0 0 389 668L321,668A15 15 0 0 0 306 684A15 15 0 0 0 321 699Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="355" y="684" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DISTINCT</text>
<polygon points="440,684 429,688 429,679" style="fill:rgb(0,0,0)"/>
<path d="M404,684L434,684"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M455,699L490,699A15 15 0 0 0 505 684A15 15 0 0 0 490 668L455,668A15 15 0 0 0 440 684A15 15 0 0 0 455 699Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="473" y="684" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">FROM</text>
<polygon points="541,684 530,688 530,679" style="fill:rgb(0,0,0)"/>
<path d="M505,684L535,684"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M541,699L590,699L590,668L541,668Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="566" y="684" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="916,684 905,688 905,679" style="fill:rgb(0,0,0)"/>
<path d="M590,684L910,684"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,684 L 924,684 Q 931,684 931,676 L 931,669"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,684 33,688 33,679" style="fill:rgb(0,0,0)"/>
<path d="M24,668 L 24,676 Q 24,684 31,684 L 39,684"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M149,684 L 156,684 Q 164,684 164,696 Q 164,708 179,708 L 230,708 Q 245,708 245,696 Q 245,684 253,684 L 260,684"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M271,684 L 279,684 Q 286,684 286,696 Q 286,708 301,708 L 502,708 Q 517,708 517,696 Q 517,684 524,684 L 532,684"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M45,744L94,744L94,714L45,714Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="69" y="729" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="130,729 119,733 119,725" style="fill:rgb(0,0,0)"/>
<path d="M94,729L124,729"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M145,744L165,744A15 15 0 0 0 180 729A15 15 0 0 0 165 714L145,714A15 15 0 0 0 130 729A15 15 0 0 0 145 744Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="155" y="729" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NOT</text>
<polygon points="216,729 205,733 205,725" style="fill:rgb(0,0,0)"/>
<path d="M180,729L211,729"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M232,744L304,744A15 15 0 0 0 319 729A15 15 0 0 0 304 714L232,714A15 15 0 0 0 216 729A15 15 0 0 0 232 744Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="268" y="729" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">BETWEEN</text>
<polygon points="342,729 331,733 331,725" style="fill:rgb(0,0,0)"/>
<path d="M319,729L336,729"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M342,744L391,744L391,714L342,714Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="367" y="729" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="414,729 403,733 403,725" style="fill:rgb(0,0,0)"/>
<path d="M391,729L409,729"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M430,744L450,744A15 15 0 0 0 465 729A15 15 0 0 0 450 714L430,714A15 15 0 0 0 414 729A15 15 0 0 0 430 744Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="440" y="729" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">AND</text>
<polygon points="488,729 477,733 477,725" style="fill:rgb(0,0,0)"/>
<path d="M465,729L483,729"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M488,744L538,744L538,714L488,714Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="513" y="729" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="916,729 905,733 905,725" style="fill:rgb(0,0,0)"/>
<path d="M538,729L910,729"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,729 L 924,729 Q 931,729 931,721 L 931,714"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,729 33,733 33,725" style="fill:rgb(0,0,0)"/>
<path d="M24,714 L 24,721 Q 24,729 31,729 L 39,729"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M95,729 L 103,729 Q 110,729 110,741 Q 110,753 125,753 L 177,753 Q 192,753 192,741 Q 192,729 199,729 L 207,729"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M45,797L94,797L94,767L45,767Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="69" y="782" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="130,782 119,786 119,778" style="fill:rgb(0,0,0)"/>
<path d="M94,782L124,782"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M145,797L165,797A15 15 0 0 0 180 782A15 15 0 0 0 165 767L145,767A15 15 0 0 0 130 782A15 15 0 0 0 145 797Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="155" y="782" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NOT</text>
<polygon points="216,782 205,786 205,778" style="fill:rgb(0,0,0)"/>
<path d="M180,782L211,782"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M232,797L234,797A15 15 0 0 0 249 782A15 15 0 0 0 234 767L232,767A15 15 0 0 0 216 782A15 15 0 0 0 232 797Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="233" y="782" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">IN</text>
<polygon points="285,782 273,786 273,778" style="fill:rgb(0,0,0)"/>
<path d="M249,782L279,782"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M300,797A15 15 0 0 0 315 782A15 15 0 0 0 300 767A15 15 0 0 0 285 782A15 15 0 0 0 300 797Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="300" y="782" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="351,782 340,786 340,778" style="fill:rgb(0,0,0)"/>
<path d="M315,782L345,782"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M351,797L455,797L455,767L351,767Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="403" y="782" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">select-stmt</text>
<polygon points="491,782 480,786 480,778" style="fill:rgb(0,0,0)"/>
<path d="M455,782L486,782"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M507,797A15 15 0 0 0 522 782A15 15 0 0 0 507 767A15 15 0 0 0 491 782A15 15 0 0 0 507 797Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="507" y="782" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="916,782 905,786 905,778" style="fill:rgb(0,0,0)"/>
<path d="M522,782L910,782"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,782 L 924,782 Q 931,782 931,774 L 931,767"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,782 33,786 33,778" style="fill:rgb(0,0,0)"/>
<path d="M24,767 L 24,774 Q 24,782 31,782 L 39,782"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M95,782 L 103,782 Q 110,782 110,794 Q 110,806 125,806 L 177,806 Q 192,806 192,794 Q 192,782 199,782 L 207,782"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M317,782 L 324,782 Q 332,782 332,770 Q 332,758 347,758 L 452,758 Q 467,758 467,770 Q 467,782 475,782 L 482,782"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M379,835L428,835L428,805L379,805Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="403" y="820" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="379,820 367,824 367,815" style="fill:rgb(0,0,0)"/>
<path d="M317,782 L 324,782 Q 332,782 332,797 L 332,805 Q 332,820 347,820 L 358,820 L 373,820"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M428,820 L 452,820 Q 467,820 467,805 L 467,797 Q 467,782 475,782 L 482,782"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M403,873A15 15 0 0 0 418 857A15 15 0 0 0 403 842A15 15 0 0 0 388 857A15 15 0 0 0 403 873Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="403" y="857" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="418,857 430,853 430,862" style="fill:rgb(0,0,0)"/>
<path d="M428,820 L 435,820 Q 443,820 443,835 L 443,842 Q 443,857 434,857 L 424,857"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M388,857 L 371,857 Q 356,857 356,842 L 356,835 Q 356,820 363,820 L 371,820"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M300,925L396,925A15 15 0 0 0 412 910A15 15 0 0 0 396 895L300,895A15 15 0 0 0 285 910A15 15 0 0 0 300 925Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="348" y="910" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">schema-name</text>
<polygon points="429,910 417,915 417,906" style="fill:rgb(0,0,0)"/>
<path d="M412,910L423,910"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M444,925A15 15 0 0 0 459 910A15 15 0 0 0 444 895A15 15 0 0 0 429 910A15 15 0 0 0 444 925Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="444" y="910" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">.</text>
<polygon points="513,910 502,915 502,906" style="fill:rgb(0,0,0)"/>
<path d="M459,910L507,910"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M528,925L627,925A15 15 0 0 0 642 910A15 15 0 0 0 627 895L528,895A15 15 0 0 0 513 910A15 15 0 0 0 528 925Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="577" y="910" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">table-function</text>
<polygon points="659,910 647,915 647,906" style="fill:rgb(0,0,0)"/>
<path d="M642,910L653,910"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M674,925A15 15 0 0 0 689 910A15 15 0 0 0 674 895A15 15 0 0 0 659 910A15 15 0 0 0 674 925Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="674" y="910" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="734,910 723,915 723,906" style="fill:rgb(0,0,0)"/>
<path d="M689,910L728,910"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M734,925L783,925L783,895L734,895Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="759" y="910" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="828,910 817,915 817,906" style="fill:rgb(0,0,0)"/>
<path d="M783,910L823,910"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M844,925A15 15 0 0 0 859 910A15 15 0 0 0 844 895A15 15 0 0 0 828 910A15 15 0 0 0 844 925Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="844" y="910" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="916,910 905,915 905,906" style="fill:rgb(0,0,0)"/>
<path d="M859,910L910,910"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,910 L 924,910 Q 931,910 931,903 L 931,895"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M528,865L603,865A15 15 0 0 0 619 850A15 15 0 0 0 603 835L528,835A15 15 0 0 0 513 850A15 15 0 0 0 528 865Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="566" y="850" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">table-name</text>
<polygon points="916,850 905,854 905,846" style="fill:rgb(0,0,0)"/>
<path d="M619,850L910,850"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,850 L 924,850 Q 931,850 931,842 L 931,835"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="513,850 502,854 502,846" style="fill:rgb(0,0,0)"/>
<path d="M475,910 L 483,910 Q 490,910 490,895 L 490,865 Q 490,850 499,850 L 507,850"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M759,892A15 15 0 0 0 774 877A15 15 0 0 0 759 862A15 15 0 0 0 744 877A15 15 0 0 0 759 892Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="759" y="877" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="774,877 785,873 785,881" style="fill:rgb(0,0,0)"/>
<path d="M783,910 L 791,910 Q 798,910 798,895 L 798,892 Q 798,877 789,877 L 780,877"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M744,877 L 726,877 Q 711,877 711,892 L 711,895 Q 711,910 719,910 L 726,910"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M689,910 L 697,910 Q 704,910 704,921 Q 704,932 719,932 L 790,932 Q 805,932 805,921 Q 805,910 813,910 L 820,910"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="285,910 273,915 273,906" style="fill:rgb(0,0,0)"/>
<path d="M249,782 L 256,782 Q 264,782 264,797 L 264,895 Q 264,910 272,910 L 279,910"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="423,882 412,886 412,877" style="fill:rgb(0,0,0)"/>
<path d="M264,867 L 264,874 Q 264,882 279,882 L 402,882 L 417,882"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M423,882 L 456,882 Q 471,882 471,896 Q 471,910 478,910 L 486,910"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M60,971L80,971A15 15 0 0 0 95 956A15 15 0 0 0 80 941L60,941A15 15 0 0 0 45 956A15 15 0 0 0 60 971Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="70" y="956" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NOT</text>
<polygon points="131,956 120,960 120,951" style="fill:rgb(0,0,0)"/>
<path d="M95,956L125,956"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M146,971L191,971A15 15 0 0 0 206 956A15 15 0 0 0 191 941L146,941A15 15 0 0 0 131 956A15 15 0 0 0 146 971Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="169" y="956" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">EXISTS</text>
<polygon points="242,956 231,960 231,951" style="fill:rgb(0,0,0)"/>
<path d="M206,956L236,956"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M257,971A15 15 0 0 0 272 956A15 15 0 0 0 257 941A15 15 0 0 0 242 956A15 15 0 0 0 257 971Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="257" y="956" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="295,956 284,960 284,951" style="fill:rgb(0,0,0)"/>
<path d="M272,956L290,956"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M295,971L400,971L400,941L295,941Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="347" y="956" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">select-stmt</text>
<polygon points="423,956 411,960 411,951" style="fill:rgb(0,0,0)"/>
<path d="M400,956L417,956"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M438,971A15 15 0 0 0 453 956A15 15 0 0 0 438 941A15 15 0 0 0 423 956A15 15 0 0 0 438 971Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="438" y="956" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="916,956 905,960 905,951" style="fill:rgb(0,0,0)"/>
<path d="M453,956L910,956"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,956 L 924,956 Q 931,956 931,948 L 931,941"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,956 33,960 33,951" style="fill:rgb(0,0,0)"/>
<path d="M24,941 L 24,948 Q 24,956 31,956 L 39,956"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="70,929 59,934 59,925" style="fill:rgb(0,0,0)"/>
<path d="M24,914 L 24,922 Q 24,929 39,929 L 49,929 L 64,929"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M70,929 L 201,929 Q 216,929 216,943 Q 216,956 223,956 L 231,956"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M93,929 L 101,929 Q 108,929 108,943 Q 108,956 116,956 L 123,956"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M60,1009L89,1009A15 15 0 0 0 104 994A15 15 0 0 0 89 978L60,978A15 15 0 0 0 45 994A15 15 0 0 0 60 1009Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="74" y="994" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CASE</text>
<polygon points="140,994 128,998 128,989" style="fill:rgb(0,0,0)"/>
<path d="M104,994L134,994"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M140,1009L189,1009L189,978L140,978Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="164" y="994" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="243,994 232,998 232,989" style="fill:rgb(0,0,0)"/>
<path d="M189,994L237,994"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M258,1009L298,1009A15 15 0 0 0 313 994A15 15 0 0 0 298 978L258,978A15 15 0 0 0 243 994A15 15 0 0 0 258 1009Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="278" y="994" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">WHEN</text>
<polygon points="336,994 324,998 324,989" style="fill:rgb(0,0,0)"/>
<path d="M313,994L330,994"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M336,1009L385,1009L385,978L336,978Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="360" y="994" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="408,994 396,998 396,989" style="fill:rgb(0,0,0)"/>
<path d="M385,994L402,994"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M423,1009L456,1009A15 15 0 0 0 472 994A15 15 0 0 0 456 978L423,978A15 15 0 0 0 408 994A15 15 0 0 0 423 1009Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="440" y="994" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">THEN</text>
<polygon points="495,994 483,998 483,989" style="fill:rgb(0,0,0)"/>
<path d="M472,994L489,994"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M495,1009L544,1009L544,978L495,978Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="519" y="994" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="616,994 604,998 604,989" style="fill:rgb(0,0,0)"/>
<path d="M544,994L610,994"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M631,1009L658,1009A15 15 0 0 0 673 994A15 15 0 0 0 658 978L631,978A15 15 0 0 0 616 994A15 15 0 0 0 631 1009Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="645" y="994" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ELSE</text>
<polygon points="696,994 685,998 685,989" style="fill:rgb(0,0,0)"/>
<path d="M673,994L691,994"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M696,1009L746,1009L746,978L696,978Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="721" y="994" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="782,994 770,998 770,989" style="fill:rgb(0,0,0)"/>
<path d="M746,994L776,994"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M797,1009L818,1009A15 15 0 0 0 833 994A15 15 0 0 0 818 978L797,978A15 15 0 0 0 782 994A15 15 0 0 0 797 1009Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="807" y="994" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">END</text>
<polygon points="916,994 905,998 905,989" style="fill:rgb(0,0,0)"/>
<path d="M833,994L910,994"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,994 L 924,994 Q 931,994 931,986 L 931,979"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,994 33,998 33,989" style="fill:rgb(0,0,0)"/>
<path d="M24,978 L 24,986 Q 24,994 31,994 L 39,994"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M104,994 L 111,994 Q 119,994 119,1007 Q 119,1021 134,1021 L 186,1021 Q 201,1021 201,1007 Q 201,994 208,994 L 216,994"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="360,1021 372,1016 372,1025" style="fill:rgb(0,0,0)"/>
<path d="M544,994 L 551,994 Q 559,994 559,1007 Q 559,1021 544,1021 L 381,1021 L 366,1021"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M360,1021 L 235,1021 Q 220,1021 220,1007 Q 220,994 227,994 L 235,994"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M578,994 L 585,994 Q 593,994 593,1007 Q 593,1021 608,1021 L 742,1021 Q 757,1021 757,1007 Q 757,994 765,994 L 772,994"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M45,1066L173,1066L173,1036L45,1036Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="109" y="1051" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">raise-function</text>
<polygon points="916,1051 905,1055 905,1047" style="fill:rgb(0,0,0)"/>
<path d="M173,1051L910,1051"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M916,1051 L 924,1051 Q 931,1051 931,1036 L 931,32 Q 931,17 939,17 L 946,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,1051 33,1055 33,1047" style="fill:rgb(0,0,0)"/>
<path d="M24,39 L 24,1036 Q 24,1051 31,1051 L 39,1051"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
<p><b><a href="https://www.sqlite.org/syntax/function-arguments.html" target="_blank">function-arguments:</a></b>
<button id='x77bce1b9' onclick='hideorshow("x77bce1b9","xfc775936")'>show</button></p>
 <div id='xfc775936' style='display:none;' class='imgcontainer'>
 <div style="max-width:456px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 456.566 223.344">
<circle cx="5" cy="56" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="32,56 20,60 20,52" style="fill:rgb(0,0,0)"/>
<path d="M9,56L26,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="66,26 55,30 55,22" style="fill:rgb(0,0,0)"/>
<path d="M32,56 L 38,56 Q 43,56 43,41 L 43,41 Q 43,26 52,26 L 61,26"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M82,41L150,41A15 15 0 0 0 165 26L165,26A15 15 0 0 0 150 11L82,11A15 15 0 0 0 66 26L66,26A15 15 0 0 0 82 41Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="116" y="26" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DISTINCT</text>
<polygon points="183,26 171,30 171,22" style="fill:rgb(0,0,0)"/>
<path d="M165,26L177,26"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="218,56 206,60 206,52" style="fill:rgb(0,0,0)"/>
<path d="M183,26 L 189,26 Q 194,26 194,41 L 194,41 Q 194,56 203,56 L 212,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="254,56 242,60 242,52" style="fill:rgb(0,0,0)"/>
<path d="M218,56L248,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M254,71L303,71L303,41L254,41Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="278" y="56" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="447,56 435,60 435,52" style="fill:rgb(0,0,0)"/>
<path d="M303,56L441,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="450" cy="56" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="116,56 104,60 104,52" style="fill:rgb(0,0,0)"/>
<path d="M32,56L110,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="218,56 206,60 206,52" style="fill:rgb(0,0,0)"/>
<path d="M116,56L212,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M278,32A15 15 0 0 0 293 17A15 15 0 0 0 278 2A15 15 0 0 0 263 17A15 15 0 0 0 278 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="278" y="17" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="293,17 305,12 305,21" style="fill:rgb(0,0,0)"/>
<path d="M303,56 L 314,56 Q 326,56 326,41 L 326,32 Q 326,17 312,17 L 299,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="254,56 242,60 242,52" style="fill:rgb(0,0,0)"/>
<path d="M263,17 L 245,17 Q 230,17 230,32 L 230,41 Q 230,56 239,56 L 248,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M228,207A15 15 0 0 0 243 192L243,192A15 15 0 0 0 228 177A15 15 0 0 0 213 192L213,192A15 15 0 0 0 228 207Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="228" y="192" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">*</text>
<polygon points="213,192 201,196 201,188" style="fill:rgb(0,0,0)"/>
<path d="M32,56 L 38,56 Q 43,56 43,71 L 43,177 Q 43,192 58,192 L 192,192 L 207,192"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="278,192 267,196 267,188" style="fill:rgb(0,0,0)"/>
<path d="M243,192L272,192"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M278,192 L 360,192 Q 375,192 390,192 L 394,192 Q 409,192 409,177 L 409,71 Q 409,56 415,56 L 421,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="228,216 216,221 216,212" style="fill:rgb(0,0,0)"/>
<path d="M116,192 L 181,192 Q 196,192 196,204 Q 196,216 209,216 L 222,216"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M228,216 L 242,216 Q 257,216 257,204 Q 257,192 262,192 L 268,192"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="90,117 78,121 78,112" style="fill:rgb(0,0,0)"/>
<path d="M303,56 L 313,56 Q 323,56 323,71 L 323,71 Q 323,86 308,86 L 81,86 Q 66,86 66,101 L 66,102 Q 66,117 75,117 L 84,117"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M105,132L149,132A15 15 0 0 0 164 117L164,117A15 15 0 0 0 149 101L105,101A15 15 0 0 0 90 117L90,117A15 15 0 0 0 105 132Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="127" y="117" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ORDER</text>
<polygon points="182,117 170,121 170,112" style="fill:rgb(0,0,0)"/>
<path d="M164,117L176,117"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M197,132L201,132A15 15 0 0 0 216 117L216,117A15 15 0 0 0 201 101L197,101A15 15 0 0 0 182 117L182,117A15 15 0 0 0 197 132Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="199" y="117" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">BY</text>
<polygon points="245,117 233,121 233,112" style="fill:rgb(0,0,0)"/>
<path d="M216,117L239,117"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M245,132L375,132L375,101L245,101Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="310" y="117" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ordering-term</text>
<path d="M310,169A15 15 0 0 0 325 154A15 15 0 0 0 310 139A15 15 0 0 0 294 154A15 15 0 0 0 310 169Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="310" y="154" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="325,154 336,150 336,159" style="fill:rgb(0,0,0)"/>
<path d="M375,117 L 380,117 Q 386,117 386,132 L 386,139 Q 386,154 371,154 L 345,154 L 330,154"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="245,117 233,121 233,112" style="fill:rgb(0,0,0)"/>
<path d="M294,154 L 260,154 Q 245,154 236,154 Q 227,154 227,139 L 227,132 Q 227,117 233,117 L 239,117"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M375,117 L 383,117 Q 392,117 392,102 L 392,71 Q 392,56 407,56 L 413,56 L 428,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>
<p><b><a href="https://www.sqlite.org/syntax/literal-value.html" target="_blank">literal-value:</a></b>
<button id='x253e9b5f' onclick='hideorshow("x253e9b5f","x3f8330f5")'>show</button></p>
 <div id='x3f8330f5' style='display:none;' class='imgcontainer'>
 <div style="max-width:341px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 341.376 336.96">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,319 39,324 39,315" style="fill:rgb(0,0,0)"/>
<path d="M9,17 L 16,17 Q 24,17 24,32 L 24,304 Q 24,319 34,319 L 45,319"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M65,334L252,334A15 15 0 0 0 267 319A15 15 0 0 0 252 304L65,304A15 15 0 0 0 50 319A15 15 0 0 0 65 334Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="159" y="319" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CURRENT_TIMESTAMP</text>
<polygon points="290,319 278,324 278,315" style="fill:rgb(0,0,0)"/>
<path d="M267,319L284,319"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="332,17 320,21 320,12" style="fill:rgb(0,0,0)"/>
<path d="M290,319 L 297,319 Q 305,319 305,304 L 305,32 Q 305,17 315,17 L 326,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="335" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,32L172,32A15 15 0 0 0 187 17A15 15 0 0 0 172 2L66,2A15 15 0 0 0 50 17A15 15 0 0 0 66 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="119" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">numeric-literal</text>
<polygon points="50,17 39,21 39,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L45,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M187,17L320,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,70L153,70A15 15 0 0 0 168 55L168,55A15 15 0 0 0 153 39L66,39A15 15 0 0 0 50 55L50,55A15 15 0 0 0 66 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="109" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">string-literal</text>
<polygon points="50,55 39,59 39,50" style="fill:rgb(0,0,0)"/>
<path d="M24,39 L 24,47 Q 24,55 34,55 L 45,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="290,55 278,59 278,50" style="fill:rgb(0,0,0)"/>
<path d="M168,55L284,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M290,55 L 297,55 Q 305,55 305,47 L 305,40"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,108L140,108A15 15 0 0 0 155 92A15 15 0 0 0 140 77L66,77A15 15 0 0 0 50 92A15 15 0 0 0 66 108Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="103" y="92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">blob-literal</text>
<polygon points="50,92 39,97 39,88" style="fill:rgb(0,0,0)"/>
<path d="M24,77 L 24,85 Q 24,92 34,92 L 45,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="290,92 278,97 278,88" style="fill:rgb(0,0,0)"/>
<path d="M155,92L284,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M290,92 L 297,92 Q 305,92 305,85 L 305,77"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,145L97,145A15 15 0 0 0 112 130A15 15 0 0 0 97 115L66,115A15 15 0 0 0 50 130A15 15 0 0 0 66 145Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="81" y="130" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NULL</text>
<polygon points="50,130 39,135 39,126" style="fill:rgb(0,0,0)"/>
<path d="M24,115 L 24,123 Q 24,130 34,130 L 45,130"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="290,130 278,135 278,126" style="fill:rgb(0,0,0)"/>
<path d="M112,130L284,130"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M290,130 L 297,130 Q 305,130 305,123 L 305,115"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,183L96,183A15 15 0 0 0 111 168A15 15 0 0 0 96 153L66,153A15 15 0 0 0 50 168A15 15 0 0 0 66 183Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="81" y="168" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">TRUE</text>
<polygon points="50,168 39,172 39,164" style="fill:rgb(0,0,0)"/>
<path d="M24,153 L 24,160 Q 24,168 34,168 L 45,168"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="290,168 278,172 278,164" style="fill:rgb(0,0,0)"/>
<path d="M111,168L284,168"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M290,168 L 297,168 Q 305,168 305,160 L 305,153"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,221L104,221A15 15 0 0 0 119 206A15 15 0 0 0 104 191L66,191A15 15 0 0 0 50 206A15 15 0 0 0 66 221Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="85" y="206" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">FALSE</text>
<polygon points="50,206 39,210 39,201" style="fill:rgb(0,0,0)"/>
<path d="M24,191 L 24,198 Q 24,206 34,206 L 45,206"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="290,206 278,210 278,201" style="fill:rgb(0,0,0)"/>
<path d="M119,206L284,206"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M290,206 L 297,206 Q 305,206 305,198 L 305,191"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,259L190,259A15 15 0 0 0 205 244A15 15 0 0 0 190 228L66,228A15 15 0 0 0 50 244A15 15 0 0 0 66 259Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="128" y="244" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CURRENT_TIME</text>
<polygon points="50,244 39,248 39,239" style="fill:rgb(0,0,0)"/>
<path d="M24,228 L 24,236 Q 24,244 34,244 L 45,244"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="290,244 278,248 278,239" style="fill:rgb(0,0,0)"/>
<path d="M205,244L284,244"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M290,244 L 297,244 Q 305,244 305,236 L 305,229"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,297L192,297A15 15 0 0 0 207 281A15 15 0 0 0 192 266L66,266A15 15 0 0 0 50 281A15 15 0 0 0 66 297Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="129" y="281" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CURRENT_DATE</text>
<polygon points="50,281 39,286 39,277" style="fill:rgb(0,0,0)"/>
<path d="M24,266 L 24,274 Q 24,281 34,281 L 45,281"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="290,281 278,286 278,277" style="fill:rgb(0,0,0)"/>
<path d="M207,281L284,281"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M290,281 L 297,281 Q 305,281 305,274 L 305,266"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>
<p><b><a href="https://www.sqlite.org/syntax/over-clause.html" target="_blank">over-clause:</a></b>
<button id='x24f2b959' onclick='hideorshow("x24f2b959","xf6fd1db0")'>show</button></p>
 <div id='xf6fd1db0' style='display:none;' class='imgcontainer'>
 <div style="max-width:600px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 600.706 418.392">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="32,17 20,21 20,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L26,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M47,32L78,32A15 15 0 0 0 93 17A15 15 0 0 0 78 2L47,2A15 15 0 0 0 32 17A15 15 0 0 0 47 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="62" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">OVER</text>
<polygon points="129,17 117,21 117,12" style="fill:rgb(0,0,0)"/>
<path d="M93,17L123,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M144,32L241,32A15 15 0 0 0 256 17A15 15 0 0 0 241 2L144,2A15 15 0 0 0 129 17A15 15 0 0 0 144 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="192" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">window-name</text>
<polygon points="134,55 123,59 123,50" style="fill:rgb(0,0,0)"/>
<path d="M93,17 L 100,17 Q 108,17 108,32 L 108,40 Q 108,55 118,55 L 129,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M149,70A15 15 0 0 0 165 55L165,55A15 15 0 0 0 149 39A15 15 0 0 0 134 55L134,55A15 15 0 0 0 149 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="149" y="55" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="206,82 195,86 195,77" style="fill:rgb(0,0,0)"/>
<path d="M165,55 L 172,55 Q 180,55 180,68 Q 180,82 190,82 L 200,82"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M221,97L363,97A15 15 0 0 0 378 82A15 15 0 0 0 363 67L221,67A15 15 0 0 0 206 82A15 15 0 0 0 221 97Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="292" y="82" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">base-window-name</text>
<path d="M221,173L301,173A15 15 0 0 0 316 157A15 15 0 0 0 301 142L221,142A15 15 0 0 0 206 157A15 15 0 0 0 221 173Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="261" y="157" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">PARTITION</text>
<polygon points="339,157 328,162 328,153" style="fill:rgb(0,0,0)"/>
<path d="M316,157L333,157"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M354,173L358,173A15 15 0 0 0 373 157A15 15 0 0 0 358 142L354,142A15 15 0 0 0 339 157A15 15 0 0 0 354 173Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="356" y="157" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">BY</text>
<polygon points="409,157 398,162 398,153" style="fill:rgb(0,0,0)"/>
<path d="M373,157L404,157"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M409,173L459,173L459,142L409,142Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="434" y="157" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<path d="M434,210A15 15 0 0 0 449 195A15 15 0 0 0 434 180A15 15 0 0 0 419 195A15 15 0 0 0 434 210Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="434" y="195" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="449,195 461,191 461,200" style="fill:rgb(0,0,0)"/>
<path d="M459,157 L 466,157 Q 474,157 474,172 L 474,180 Q 474,195 464,195 L 455,195"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M419,195 L 398,195 Q 383,195 383,180 L 383,172 Q 383,157 390,157 L 398,157"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="292,55 280,59 280,50" style="fill:rgb(0,0,0)"/>
<path d="M165,55L286,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="292,120 304,115 304,124" style="fill:rgb(0,0,0)"/>
<path d="M292,55 L 401,55 Q 416,55 416,70 L 416,105 Q 416,120 401,120 L 313,120 L 298,120"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="206,157 195,162 195,153" style="fill:rgb(0,0,0)"/>
<path d="M292,120 L 180,120 Q 165,120 165,135 L 165,142 Q 165,157 180,157 L 185,157 L 200,157"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="401,82 389,86 389,77" style="fill:rgb(0,0,0)"/>
<path d="M378,82L395,82"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M401,82 L 408,82 Q 416,82 416,89 L 416,97"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M221,286L266,286A15 15 0 0 0 281 271A15 15 0 0 0 266 256L221,256A15 15 0 0 0 206 271A15 15 0 0 0 221 286Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="244" y="271" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ORDER</text>
<polygon points="304,271 292,275 292,266" style="fill:rgb(0,0,0)"/>
<path d="M281,271L298,271"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M319,286L323,286A15 15 0 0 0 338 271A15 15 0 0 0 323 256L319,256A15 15 0 0 0 304 271A15 15 0 0 0 319 286Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="321" y="271" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">BY</text>
<polygon points="374,271 363,275 363,266" style="fill:rgb(0,0,0)"/>
<path d="M338,271L368,271"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M374,286L504,286L504,256L374,256Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="439" y="271" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ordering-term</text>
<path d="M439,324A15 15 0 0 0 454 309A15 15 0 0 0 439 293A15 15 0 0 0 424 309A15 15 0 0 0 439 324Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="439" y="309" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="454,309 466,304 466,313" style="fill:rgb(0,0,0)"/>
<path d="M504,271 L 512,271 Q 519,271 519,286 L 519,294 Q 519,309 504,309 L 475,309 L 460,309"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M424,309 L 363,309 Q 348,309 348,294 L 348,286 Q 348,271 355,271 L 363,271"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="292,233 304,229 304,237" style="fill:rgb(0,0,0)"/>
<path d="M459,157 L 466,157 Q 474,157 474,172 L 474,218 Q 474,233 459,233 L 313,233 L 298,233"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="206,271 195,275 195,266" style="fill:rgb(0,0,0)"/>
<path d="M292,233 L 180,233 Q 165,233 165,248 L 165,256 Q 165,271 180,271 L 185,271 L 200,271"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="165,195 160,184 169,184" style="fill:rgb(0,0,0)"/>
<path d="M165,142L165,189"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M165,195L165,256"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M206,399L311,399L311,369L206,369Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="258" y="384" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">frame-spec</text>
<polygon points="519,384 508,389 508,380" style="fill:rgb(0,0,0)"/>
<path d="M311,384L513,384"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M534,399A15 15 0 0 0 549 384A15 15 0 0 0 534 369A15 15 0 0 0 519 384A15 15 0 0 0 534 399Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="534" y="384" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="591,17 579,21 579,12" style="fill:rgb(0,0,0)"/>
<path d="M549,384 L 557,384 Q 564,384 564,369 L 564,32 Q 564,17 575,17 L 585,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="594" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="519,17 508,21 508,12" style="fill:rgb(0,0,0)"/>
<path d="M256,17L513,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M519,17L579,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="292,346 304,342 304,351" style="fill:rgb(0,0,0)"/>
<path d="M504,271 L 512,271 Q 519,271 519,286 L 519,331 Q 519,346 504,346 L 313,346 L 298,346"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="206,384 195,389 195,380" style="fill:rgb(0,0,0)"/>
<path d="M292,346 L 180,346 Q 165,346 165,361 L 165,369 Q 165,384 180,384 L 185,384 L 200,384"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="165,309 160,297 169,297" style="fill:rgb(0,0,0)"/>
<path d="M165,256L165,303"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M165,309L165,369"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="258,411 247,416 247,407" style="fill:rgb(0,0,0)"/>
<path d="M165,369 L 165,396 Q 165,411 180,411 L 238,411 L 253,411"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="380,384 369,389 369,380" style="fill:rgb(0,0,0)"/>
<path d="M258,411 L 335,411 Q 350,411 350,398 Q 350,384 362,384 L 375,384"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
<p><b><a href="https://www.sqlite.org/syntax/frame-spec.html" target="_blank">frame-spec:</a></b>
<button id='x98c817dc' onclick='hideorshow("x98c817dc","x0d8840f4")'>show</button></p>
 <div id='x0d8840f4' style='display:none;' class='imgcontainer'>
 <div style="max-width:1039px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 1039.65 522.72">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,92 39,97 39,88" style="fill:rgb(0,0,0)"/>
<path d="M9,17 L 16,17 Q 24,17 24,32 L 24,77 Q 24,92 34,92 L 45,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,108L120,108A15 15 0 0 0 135 92A15 15 0 0 0 120 77L66,77A15 15 0 0 0 50 92A15 15 0 0 0 66 108Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="93" y="92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">GROUPS</text>
<path d="M135,92 L 143,92 Q 150,92 150,77 L 150,32 Q 150,17 158,17 L 165,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="207,17 195,21 195,12" style="fill:rgb(0,0,0)"/>
<path d="M165,17L201,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M222,32L294,32A15 15 0 0 0 309 17A15 15 0 0 0 294 2L222,2A15 15 0 0 0 207 17A15 15 0 0 0 222 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="258" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">BETWEEN</text>
<polygon points="351,17 339,21 339,12" style="fill:rgb(0,0,0)"/>
<path d="M309,17L345,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M366,32L467,32A15 15 0 0 0 482 17A15 15 0 0 0 467 2L366,2A15 15 0 0 0 351 17A15 15 0 0 0 366 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="417" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">UNBOUNDED</text>
<polygon points="500,17 488,21 488,12" style="fill:rgb(0,0,0)"/>
<path d="M482,17L494,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M515,32L603,32A15 15 0 0 0 618 17A15 15 0 0 0 603 2L515,2A15 15 0 0 0 500 17A15 15 0 0 0 515 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="559" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">PRECEDING</text>
<polygon points="659,17 648,21 648,12" style="fill:rgb(0,0,0)"/>
<path d="M618,17L653,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M674,32L695,32A15 15 0 0 0 710 17A15 15 0 0 0 695 2L674,2A15 15 0 0 0 659 17A15 15 0 0 0 674 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="685" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">AND</text>
<polygon points="752,130 740,135 740,126" style="fill:rgb(0,0,0)"/>
<path d="M710,17 L 718,17 Q 725,17 725,32 L 725,115 Q 725,130 735,130 L 746,130"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M767,145L868,145A15 15 0 0 0 883 130A15 15 0 0 0 868 115L767,115A15 15 0 0 0 752 130A15 15 0 0 0 767 145Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="817" y="130" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">UNBOUNDED</text>
<polygon points="900,130 889,135 889,126" style="fill:rgb(0,0,0)"/>
<path d="M883,130L895,130"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M915,145L1007,145A15 15 0 0 0 1022 130A15 15 0 0 0 1007 115L915,115A15 15 0 0 0 900 130A15 15 0 0 0 915 145Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="961" y="130" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">FOLLOWING</text>
<path d="M1022,130 L 1029,130 Q 1037,130 1037,138 L 1037,145"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,17 39,21 39,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L45,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,32L109,32A15 15 0 0 0 125 17A15 15 0 0 0 109 2L66,2A15 15 0 0 0 50 17A15 15 0 0 0 66 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="87" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">RANGE</text>
<polygon points="142,17 130,21 130,12" style="fill:rgb(0,0,0)"/>
<path d="M125,17L136,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M142,17L157,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,55 39,59 39,50" style="fill:rgb(0,0,0)"/>
<path d="M9,17 L 16,17 Q 24,17 24,32 L 24,40 Q 24,55 34,55 L 45,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,70L101,70A15 15 0 0 0 116 55L116,55A15 15 0 0 0 101 39L66,39A15 15 0 0 0 50 55L50,55A15 15 0 0 0 66 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="83" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ROWS</text>
<polygon points="135,55 124,59 124,50" style="fill:rgb(0,0,0)"/>
<path d="M116,55L129,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M135,55 L 143,55 Q 150,55 150,47 L 150,40"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="207,168 195,172 195,164" style="fill:rgb(0,0,0)"/>
<path d="M165,17 L 173,17 Q 180,17 180,32 L 180,153 Q 180,168 190,168 L 201,168"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M222,183L323,183A15 15 0 0 0 338 168A15 15 0 0 0 323 153L222,153A15 15 0 0 0 207 168A15 15 0 0 0 222 183Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="272" y="168" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">UNBOUNDED</text>
<polygon points="361,168 350,172 350,164" style="fill:rgb(0,0,0)"/>
<path d="M338,168L355,168"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M376,183L464,183A15 15 0 0 0 479 168A15 15 0 0 0 464 153L376,153A15 15 0 0 0 361 168A15 15 0 0 0 376 183Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="420" y="168" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">PRECEDING</text>
<polygon points="1022,168 1010,172 1010,164" style="fill:rgb(0,0,0)"/>
<path d="M479,168L1016,168"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M1022,168 L 1029,168 Q 1037,168 1037,175 L 1037,183"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M207,221L256,221L256,191L207,191Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="231" y="206" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="279,206 267,210 267,201" style="fill:rgb(0,0,0)"/>
<path d="M256,206L273,206"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M294,221L382,221A15 15 0 0 0 397 206A15 15 0 0 0 382 191L294,191A15 15 0 0 0 279 206A15 15 0 0 0 294 221Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="338" y="206" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">PRECEDING</text>
<polygon points="1022,206 1010,210 1010,201" style="fill:rgb(0,0,0)"/>
<path d="M397,206L1016,206"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M1022,206 L 1029,206 Q 1037,206 1037,213 L 1037,221"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="207,206 195,210 195,201" style="fill:rgb(0,0,0)"/>
<path d="M180,153 L 180,191 Q 180,206 190,206 L 201,206"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M222,259L292,259A15 15 0 0 0 307 244A15 15 0 0 0 292 228L222,228A15 15 0 0 0 207 244A15 15 0 0 0 222 259Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="257" y="244" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CURRENT</text>
<polygon points="330,244 318,248 318,239" style="fill:rgb(0,0,0)"/>
<path d="M307,244L324,244"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M345,259L369,259A15 15 0 0 0 384 244A15 15 0 0 0 369 228L345,228A15 15 0 0 0 330 244A15 15 0 0 0 345 259Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="357" y="244" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ROW</text>
<polygon points="1022,244 1010,248 1010,239" style="fill:rgb(0,0,0)"/>
<path d="M384,244L1016,244"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M1022,244 L 1029,244 Q 1037,244 1037,251 L 1037,259"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="207,244 195,248 195,239" style="fill:rgb(0,0,0)"/>
<path d="M180,191 L 180,229 Q 180,244 190,244 L 201,244"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M351,70L400,70L400,39L351,39Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="375" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="423,55 412,59 412,50" style="fill:rgb(0,0,0)"/>
<path d="M400,55L417,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M438,70L526,70A15 15 0 0 0 541 55A15 15 0 0 0 526 39L438,39A15 15 0 0 0 423 55A15 15 0 0 0 438 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="482" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">PRECEDING</text>
<polygon points="618,55 606,59 606,50" style="fill:rgb(0,0,0)"/>
<path d="M541,55L612,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M618,55 L 625,55 Q 633,55 633,47 L 633,40"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="351,55 339,59 339,50" style="fill:rgb(0,0,0)"/>
<path d="M309,17 L 317,17 Q 324,17 324,32 L 324,40 Q 324,55 335,55 L 345,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M366,107L436,107A15 15 0 0 0 451 92A15 15 0 0 0 436 77L366,77A15 15 0 0 0 351 92A15 15 0 0 0 366 107Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="401" y="92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CURRENT</text>
<polygon points="474,92 462,97 462,88" style="fill:rgb(0,0,0)"/>
<path d="M451,92L468,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M489,108L513,108A15 15 0 0 0 528 92A15 15 0 0 0 513 77L489,77A15 15 0 0 0 474 92A15 15 0 0 0 489 108Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="501" y="92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ROW</text>
<polygon points="618,92 606,97 606,88" style="fill:rgb(0,0,0)"/>
<path d="M528,92L612,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M618,92 L 625,92 Q 633,92 633,85 L 633,77"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="351,92 339,97 339,88" style="fill:rgb(0,0,0)"/>
<path d="M324,39 L 324,77 Q 324,92 335,92 L 345,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M351,145L400,145L400,115L351,115Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="375" y="130" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="423,130 412,134 412,126" style="fill:rgb(0,0,0)"/>
<path d="M400,130L417,130"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M438,145L530,145A15 15 0 0 0 545 130A15 15 0 0 0 530 115L438,115A15 15 0 0 0 423 130A15 15 0 0 0 438 145Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="484" y="130" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">FOLLOWING</text>
<polygon points="618,130 606,134 606,126" style="fill:rgb(0,0,0)"/>
<path d="M545,130L612,130"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M618,130 L 625,130 Q 633,130 633,115 L 633,32 Q 633,17 640,17 L 648,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="351,130 339,134 339,126" style="fill:rgb(0,0,0)"/>
<path d="M324,77 L 324,115 Q 324,130 335,130 L 345,130"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="752,17 740,21 740,12" style="fill:rgb(0,0,0)"/>
<path d="M710,17L746,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M752,32L801,32L801,2L752,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="776" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="824,17 812,21 812,12" style="fill:rgb(0,0,0)"/>
<path d="M801,17L818,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M839,32L927,32A15 15 0 0 0 942 17A15 15 0 0 0 927 2L839,2A15 15 0 0 0 824 17A15 15 0 0 0 839 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="883" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">PRECEDING</text>
<polygon points="1022,17 1010,21 1010,12" style="fill:rgb(0,0,0)"/>
<path d="M942,17L1016,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M1022,17 L 1029,17 Q 1037,17 1037,32 L 1037,289 Q 1037,304 1022,304 L 1016,304 L 1001,304"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M767,70L837,70A15 15 0 0 0 852 55A15 15 0 0 0 837 39L767,39A15 15 0 0 0 752 55A15 15 0 0 0 767 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="802" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CURRENT</text>
<polygon points="875,55 863,59 863,50" style="fill:rgb(0,0,0)"/>
<path d="M852,55L869,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M890,70L914,70A15 15 0 0 0 929 55A15 15 0 0 0 914 39L890,39A15 15 0 0 0 875 55A15 15 0 0 0 890 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="902" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ROW</text>
<polygon points="1022,55 1010,59 1010,50" style="fill:rgb(0,0,0)"/>
<path d="M929,55L1016,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M1022,55 L 1029,55 Q 1037,55 1037,62 L 1037,70"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="752,55 740,59 740,50" style="fill:rgb(0,0,0)"/>
<path d="M710,17 L 718,17 Q 725,17 725,32 L 725,40 Q 725,55 735,55 L 746,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M752,107L801,107L801,77L752,77Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="776" y="92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="824,92 812,97 812,88" style="fill:rgb(0,0,0)"/>
<path d="M801,92L818,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M839,108L930,108A15 15 0 0 0 945 92A15 15 0 0 0 930 77L839,77A15 15 0 0 0 824 92A15 15 0 0 0 839 108Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="885" y="92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">FOLLOWING</text>
<polygon points="1022,92 1010,97 1010,88" style="fill:rgb(0,0,0)"/>
<path d="M945,92L1016,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M1022,92 L 1029,92 Q 1037,92 1037,100 L 1037,107"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="752,92 740,97 740,88" style="fill:rgb(0,0,0)"/>
<path d="M725,39 L 725,77 Q 725,92 735,92 L 746,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M461,410L529,410A15 15 0 0 0 544 395A15 15 0 0 0 529 380L461,380A15 15 0 0 0 446 395A15 15 0 0 0 461 410Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="495" y="395" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">EXCLUDE</text>
<polygon points="567,395 555,399 555,390" style="fill:rgb(0,0,0)"/>
<path d="M544,395L561,395"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M582,410L652,410A15 15 0 0 0 667 395A15 15 0 0 0 652 380L582,380A15 15 0 0 0 567 395A15 15 0 0 0 582 410Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="617" y="395" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CURRENT</text>
<polygon points="690,395 678,399 678,390" style="fill:rgb(0,0,0)"/>
<path d="M667,395L684,395"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M705,410L729,410A15 15 0 0 0 744 395A15 15 0 0 0 729 380L705,380A15 15 0 0 0 690 395A15 15 0 0 0 705 410Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="717" y="395" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ROW</text>
<polygon points="767,395 756,399 756,390" style="fill:rgb(0,0,0)"/>
<path d="M744,395L762,395"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M767,395 L 775,395 Q 782,395 782,402 L 782,410"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M461,448L529,448A15 15 0 0 0 544 433A15 15 0 0 0 529 417L461,417A15 15 0 0 0 446 433A15 15 0 0 0 461 448Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="495" y="433" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">EXCLUDE</text>
<polygon points="567,433 555,437 555,428" style="fill:rgb(0,0,0)"/>
<path d="M544,433L561,433"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M582,448L625,448A15 15 0 0 0 640 433A15 15 0 0 0 625 417L582,417A15 15 0 0 0 567 433A15 15 0 0 0 582 448Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="604" y="433" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">GROUP</text>
<polygon points="767,433 756,437 756,428" style="fill:rgb(0,0,0)"/>
<path d="M640,433L762,433"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M767,433 L 775,433 Q 782,433 782,440 L 782,448"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M461,486L529,486A15 15 0 0 0 544 470A15 15 0 0 0 529 455L461,455A15 15 0 0 0 446 470A15 15 0 0 0 461 486Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="495" y="470" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">EXCLUDE</text>
<polygon points="567,470 555,475 555,466" style="fill:rgb(0,0,0)"/>
<path d="M544,470L561,470"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M582,486L604,486A15 15 0 0 0 619 470A15 15 0 0 0 604 455L582,455A15 15 0 0 0 567 470A15 15 0 0 0 582 486Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="593" y="470" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">TIES</text>
<polygon points="767,470 756,475 756,466" style="fill:rgb(0,0,0)"/>
<path d="M619,470L762,470"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M767,470 L 775,470 Q 782,470 782,478 L 782,485"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M461,372L529,372A15 15 0 0 0 544 357A15 15 0 0 0 529 342L461,342A15 15 0 0 0 446 357A15 15 0 0 0 461 372Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="495" y="357" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">EXCLUDE</text>
<polygon points="567,357 555,361 555,353" style="fill:rgb(0,0,0)"/>
<path d="M544,357L561,357"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M582,372L591,372A15 15 0 0 0 606 357A15 15 0 0 0 591 342L582,342A15 15 0 0 0 567 357A15 15 0 0 0 582 372Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="586" y="357" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NO</text>
<polygon points="629,357 617,361 617,353" style="fill:rgb(0,0,0)"/>
<path d="M606,357L623,357"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M644,372L700,372A15 15 0 0 0 715 357A15 15 0 0 0 700 342L644,342A15 15 0 0 0 629 357A15 15 0 0 0 644 372Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="672" y="357" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">OTHERS</text>
<polygon points="767,357 756,361 756,353" style="fill:rgb(0,0,0)"/>
<path d="M715,357L762,357"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="890,516 879,520 879,511" style="fill:rgb(0,0,0)"/>
<path d="M767,357 L 775,357 Q 782,357 782,372 L 782,501 Q 782,516 797,516 L 870,516 L 885,516"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="894" cy="516" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="710,304 722,300 722,308" style="fill:rgb(0,0,0)"/>
<path d="M1001,304L716,304"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="527,516 516,520 516,511" style="fill:rgb(0,0,0)"/>
<path d="M710,304 L 434,304 Q 419,304 419,319 L 419,501 Q 419,516 434,516 L 507,516 L 522,516"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M527,516L797,516"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="446,357 434,361 434,353" style="fill:rgb(0,0,0)"/>
<path d="M419,342 L 419,349 Q 419,357 430,357 L 440,357"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="446,395 434,399 434,390" style="fill:rgb(0,0,0)"/>
<path d="M419,380 L 419,387 Q 419,395 430,395 L 440,395"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="446,433 434,437 434,428" style="fill:rgb(0,0,0)"/>
<path d="M419,417 L 419,425 Q 419,433 430,433 L 440,433"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="446,470 434,475 434,466" style="fill:rgb(0,0,0)"/>
<path d="M419,455 L 419,463 Q 419,470 430,470 L 440,470"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>
</div>
<p><b><a href="https://www.sqlite.org/syntax/raise-function.html" target="_blank">raise-function:</a></b>
<button id='xf530623c' onclick='hideorshow("xf530623c","xf0c02a0c")'>show</button></p>
 <div id='xf0c02a0c' style='display:none;' class='imgcontainer'>
 <div style="max-width:627px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 627.302 147.96">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="32,17 20,21 20,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L26,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M47,32L82,32A15 15 0 0 0 97 17A15 15 0 0 0 82 2L47,2A15 15 0 0 0 32 17A15 15 0 0 0 47 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="65" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">RAISE</text>
<polygon points="120,17 109,21 109,12" style="fill:rgb(0,0,0)"/>
<path d="M97,17L114,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M135,32L135,32A15 15 0 0 0 150 17A15 15 0 0 0 135 2L135,2A15 15 0 0 0 120 17A15 15 0 0 0 135 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="135" y="17" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="192,55 180,59 180,50" style="fill:rgb(0,0,0)"/>
<path d="M150,17 L 158,17 Q 165,17 165,32 L 165,40 Q 165,55 176,55 L 186,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M207,70L285,70A15 15 0 0 0 300 55L300,55A15 15 0 0 0 285 39L207,39A15 15 0 0 0 192 55L192,55A15 15 0 0 0 207 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="246" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ROLLBACK</text>
<polygon points="336,55 324,59 324,50" style="fill:rgb(0,0,0)"/>
<path d="M300,55L330,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M351,70A15 15 0 0 0 366 55L366,55A15 15 0 0 0 351 39A15 15 0 0 0 336 55L336,55A15 15 0 0 0 351 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="351" y="55" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="389,55 378,59 378,50" style="fill:rgb(0,0,0)"/>
<path d="M366,55L383,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M404,70L508,70A15 15 0 0 0 523 55L523,55A15 15 0 0 0 508 39L404,39A15 15 0 0 0 389 55L389,55A15 15 0 0 0 404 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="456" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">error-message</text>
<polygon points="564,17 553,21 553,12" style="fill:rgb(0,0,0)"/>
<path d="M523,55 L 530,55 Q 538,55 538,40 L 538,32 Q 538,17 548,17 L 558,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M579,32A15 15 0 0 0 594 17A15 15 0 0 0 579 2A15 15 0 0 0 564 17A15 15 0 0 0 579 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="579" y="17" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="617,17 606,21 606,12" style="fill:rgb(0,0,0)"/>
<path d="M594,17L612,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="621" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="192,17 180,21 180,12" style="fill:rgb(0,0,0)"/>
<path d="M150,17L186,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M207,32L259,32A15 15 0 0 0 274 17A15 15 0 0 0 259 2L207,2A15 15 0 0 0 192 17A15 15 0 0 0 207 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="233" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">IGNORE</text>
<polygon points="456,17 444,21 444,12" style="fill:rgb(0,0,0)"/>
<path d="M274,17L450,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M456,17L553,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M207,108L249,108A15 15 0 0 0 264 92A15 15 0 0 0 249 77L207,77A15 15 0 0 0 192 92A15 15 0 0 0 207 108Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="228" y="92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ABORT</text>
<polygon points="300,92 288,97 288,88" style="fill:rgb(0,0,0)"/>
<path d="M264,92L294,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M300,92 L 307,92 Q 315,92 315,77 L 315,70 Q 315,55 322,55 L 330,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M207,145L229,145A15 15 0 0 0 244 130A15 15 0 0 0 229 115L207,115A15 15 0 0 0 192 130A15 15 0 0 0 207 145Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="218" y="130" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">FAIL</text>
<polygon points="300,130 288,135 288,126" style="fill:rgb(0,0,0)"/>
<path d="M244,130L294,130"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M300,130 L 307,130 Q 315,130 315,115 L 315,92 L 315,77"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="192,130 180,135 180,126" style="fill:rgb(0,0,0)"/>
<path d="M165,39 L 165,115 Q 165,130 176,130 L 186,130"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="192,92 180,97 180,88" style="fill:rgb(0,0,0)"/>
<path d="M165,77 L 165,85 Q 165,92 176,92 L 186,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>
<p><b><a href="https://www.sqlite.org/syntax/select-stmt.html" target="_blank">select-stmt:</a></b>
<button id='x77ffe220' onclick='hideorshow("x77ffe220","x3988fd10")'>show</button></p>
 <div id='x3988fd10' style='display:none;' class='imgcontainer'>
 <div style="max-width:669px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 669.677 1162.3">
<path d="M55,845L667,845L667,99L55,99Z"  style="fill:none;stroke-width:3.24;stroke:rgb(211,211,211);" />
<circle cx="6" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="46,17 34,21 34,12" style="fill:rgb(0,0,0)"/>
<path d="M10,17L40,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M61,32L92,32A15 15 0 0 0 107 17A15 15 0 0 0 92 2L61,2A15 15 0 0 0 46 17A15 15 0 0 0 61 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="76" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">WITH</text>
<path d="M167,62L253,62A15 15 0 0 0 268 47L268,47A15 15 0 0 0 253 32L167,32A15 15 0 0 0 152 47L152,47A15 15 0 0 0 167 62Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="210" y="47" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">RECURSIVE</text>
<polygon points="210,17 198,21 198,12" style="fill:rgb(0,0,0)"/>
<path d="M107,17L204,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="358,17 346,21 346,12" style="fill:rgb(0,0,0)"/>
<path d="M210,17L352,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M358,32L584,32L584,2L358,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="471" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">common-table-expression</text>
<polygon points="152,47 140,51 140,43" style="fill:rgb(0,0,0)"/>
<path d="M107,17 L 114,17 Q 122,17 122,32 L 122,32 Q 122,47 134,47 L 146,47"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="291,47 279,51 279,43" style="fill:rgb(0,0,0)"/>
<path d="M268,47L285,47"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M291,47 L 298,47 Q 306,47 306,32 L 306,32 Q 306,17 321,17 L 331,17 L 346,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M471,70A15 15 0 0 0 486 55L486,55A15 15 0 0 0 471 39A15 15 0 0 0 456 55L456,55A15 15 0 0 0 471 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="471" y="55" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="486,55 498,50 498,59" style="fill:rgb(0,0,0)"/>
<path d="M584,17 L 592,17 Q 599,17 599,32 L 599,40 Q 599,55 584,55 L 507,55 L 492,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M456,55 L 350,55 Q 335,55 335,40 L 335,32 Q 335,17 340,17 L 346,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="295,83 307,79 307,88" style="fill:rgb(0,0,0)"/>
<path d="M584,17 L 592,17 Q 599,17 599,32 L 599,68 Q 599,83 584,83 L 316,83 L 301,83"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M295,83 L 40,83 Q 25,83 25,98 L 25,113"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="25,47 20,36 29,36" style="fill:rgb(0,0,0)"/>
<path d="M10,17 L 17,17 Q 25,17 25,29 L 25,41"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="55,129 43,133 43,124" style="fill:rgb(0,0,0)"/>
<path d="M25,47 L 25,114 Q 25,129 37,129 L 49,129"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="127,129 115,133 115,124" style="fill:rgb(0,0,0)"/>
<path d="M55,129L121,129"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M142,144L193,144A15 15 0 0 0 208 129A15 15 0 0 0 193 114L142,114A15 15 0 0 0 127 129A15 15 0 0 0 142 144Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="167" y="129" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">SELECT</text>
<polygon points="250,159 238,163 238,155" style="fill:rgb(0,0,0)"/>
<path d="M208,129 L 216,129 Q 223,129 223,144 L 223,144 Q 223,159 233,159 L 244,159"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M265,174L333,174A15 15 0 0 0 348 159A15 15 0 0 0 333 144L265,144A15 15 0 0 0 250 159A15 15 0 0 0 265 174Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="299" y="159" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DISTINCT</text>
<polygon points="417,129 406,133 406,124" style="fill:rgb(0,0,0)"/>
<path d="M348,159 L 356,159 Q 363,159 363,144 L 363,144 Q 363,129 378,129 L 396,129 L 411,129"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M417,144L545,144L545,114L417,114Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="481" y="129" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">result-column</text>
<path d="M481,182A15 15 0 0 0 496 166A15 15 0 0 0 481 151A15 15 0 0 0 466 166A15 15 0 0 0 481 182Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="481" y="166" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="496,166 508,162 508,171" style="fill:rgb(0,0,0)"/>
<path d="M545,129 L 552,129 Q 560,129 560,144 L 560,151 Q 560,166 545,166 L 517,166 L 502,166"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M466,166 L 406,166 Q 391,166 391,151 L 391,144 Q 391,129 398,129 L 406,129"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="299,129 287,133 287,124" style="fill:rgb(0,0,0)"/>
<path d="M208,129L293,129"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M299,129L406,129"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M265,212L280,212A15 15 0 0 0 295 197A15 15 0 0 0 280 182L265,182A15 15 0 0 0 250 197A15 15 0 0 0 265 212Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="272" y="197" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ALL</text>
<polygon points="348,197 337,201 337,192" style="fill:rgb(0,0,0)"/>
<path d="M295,197L342,197"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M348,197 L 356,197 Q 363,197 363,182 L 363,159 L 363,144"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="250,197 238,201 238,192" style="fill:rgb(0,0,0)"/>
<path d="M208,129 L 216,129 Q 223,129 223,144 L 223,182 Q 223,197 233,197 L 244,197"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M168,287L203,287A15 15 0 0 0 218 272A15 15 0 0 0 203 257L168,257A15 15 0 0 0 153 272A15 15 0 0 0 168 287Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="186" y="272" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">FROM</text>
<polygon points="290,272 279,277 279,268" style="fill:rgb(0,0,0)"/>
<path d="M218,272L284,272"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M290,287L451,287L451,257L290,257Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="371" y="272" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">table-or-subquery</text>
<path d="M320,362L422,362L422,331L320,331Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="371" y="346" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">join-clause</text>
<path d="M371,324A15 15 0 0 0 386 309A15 15 0 0 0 371 293A15 15 0 0 0 356 309A15 15 0 0 0 371 324Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="371" y="309" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="386,309 397,304 397,313" style="fill:rgb(0,0,0)"/>
<path d="M451,272 L 459,272 Q 466,272 466,287 L 466,294 Q 466,309 451,309 L 407,309 L 392,309"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M356,309 L 279,309 Q 264,309 264,294 L 264,287 Q 264,272 271,272 L 279,272"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="320,346 308,351 308,342" style="fill:rgb(0,0,0)"/>
<path d="M218,272 L 226,272 Q 233,272 233,287 L 233,331 Q 233,346 248,346 L 299,346 L 314,346"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="484,313 488,325 480,325" style="fill:rgb(0,0,0)"/>
<path d="M422,346 L 436,346 Q 451,346 466,346 L 469,346 Q 484,346 484,333 L 484,319"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="505,272 494,277 494,268" style="fill:rgb(0,0,0)"/>
<path d="M484,313 L 484,287 Q 484,272 492,272 L 499,272"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M505,272 L 496,272 Q 487,272 487,272 Q 487,272 495,272 L 502,272"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="560,197 555,185 564,185" style="fill:rgb(0,0,0)"/>
<path d="M545,129 L 552,129 Q 560,129 560,144 L 560,176 L 560,191"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="348,235 360,230 360,239" style="fill:rgb(0,0,0)"/>
<path d="M560,197 L 560,220 Q 560,235 545,235 L 369,235 L 354,235"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="153,272 142,277 142,268" style="fill:rgb(0,0,0)"/>
<path d="M348,235 L 142,235 Q 127,235 127,250 L 127,257 Q 127,272 137,272 L 147,272"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M168,437L218,437A15 15 0 0 0 233 422A15 15 0 0 0 218 407L168,407A15 15 0 0 0 153 422A15 15 0 0 0 168 437Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="193" y="422" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">WHERE</text>
<polygon points="256,422 244,426 244,418" style="fill:rgb(0,0,0)"/>
<path d="M233,422L250,422"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M256,437L305,437L305,407L256,407Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="280" y="422" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="517,324 513,312 521,312" style="fill:rgb(0,0,0)"/>
<path d="M451,272 L 502,272 Q 517,272 517,287 L 517,303 L 517,318"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="371,384 382,380 382,389" style="fill:rgb(0,0,0)"/>
<path d="M517,324 L 517,369 Q 517,384 502,384 L 391,384 L 376,384"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="153,422 142,426 142,418" style="fill:rgb(0,0,0)"/>
<path d="M371,384 L 142,384 Q 127,384 127,399 L 127,407 Q 127,422 137,422 L 147,422"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="127,324 122,312 131,312" style="fill:rgb(0,0,0)"/>
<path d="M127,257L127,318"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M127,324L127,407"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M168,535L212,535A15 15 0 0 0 227 520A15 15 0 0 0 212 505L168,505A15 15 0 0 0 153 520A15 15 0 0 0 168 535Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="190" y="520" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">GROUP</text>
<polygon points="250,520 238,525 238,516" style="fill:rgb(0,0,0)"/>
<path d="M227,520L244,520"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M265,535L269,535A15 15 0 0 0 284 520A15 15 0 0 0 269 505L265,505A15 15 0 0 0 250 520A15 15 0 0 0 265 535Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="267" y="520" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">BY</text>
<polygon points="320,520 309,525 309,516" style="fill:rgb(0,0,0)"/>
<path d="M284,520L314,520"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M320,535L369,535L369,505L320,505Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="345" y="520" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="452,520 441,525 441,516" style="fill:rgb(0,0,0)"/>
<path d="M369,520L446,520"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M467,535L520,535A15 15 0 0 0 535 520A15 15 0 0 0 520 505L467,505A15 15 0 0 0 452 520A15 15 0 0 0 467 535Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="493" y="520" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">HAVING</text>
<polygon points="558,520 546,525 546,516" style="fill:rgb(0,0,0)"/>
<path d="M535,520L552,520"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M558,535L607,535L607,505L558,505Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="582" y="520" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<path d="M345,573A15 15 0 0 0 360 558A15 15 0 0 0 345 543A15 15 0 0 0 330 558A15 15 0 0 0 345 573Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="345" y="558" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="360,558 371,554 371,562" style="fill:rgb(0,0,0)"/>
<path d="M369,520 L 377,520 Q 384,520 384,535 L 384,543 Q 384,558 375,558 L 366,558"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M330,558 L 309,558 Q 294,558 294,543 L 294,535 Q 294,520 301,520 L 309,520"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="514,551 503,555 503,546" style="fill:rgb(0,0,0)"/>
<path d="M411,520 L 418,520 Q 426,520 426,535 L 426,536 Q 426,551 441,551 L 493,551 L 508,551"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M514,551 L 607,551 Q 622,551 622,536 L 622,535 Q 622,520 630,520 L 637,520"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="267,490 256,494 256,486" style="fill:rgb(0,0,0)"/>
<path d="M127,460 L 127,475 Q 127,490 142,490 L 246,490 L 261,490"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="411,520 399,525 399,516" style="fill:rgb(0,0,0)"/>
<path d="M267,490 L 369,490 Q 384,490 384,505 L 384,505 Q 384,520 395,520 L 405,520"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="233,460 244,455 244,464" style="fill:rgb(0,0,0)"/>
<path d="M305,422 L 313,422 Q 320,422 320,437 L 320,445 Q 320,460 305,460 L 254,460 L 239,460"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="153,520 142,525 142,516" style="fill:rgb(0,0,0)"/>
<path d="M233,460 L 142,460 Q 127,460 127,475 L 127,505 Q 127,520 137,520 L 147,520"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="127,447 122,435 131,435" style="fill:rgb(0,0,0)"/>
<path d="M127,407L127,441"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M127,447L127,505"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M168,649L232,649A15 15 0 0 0 247 634A15 15 0 0 0 232 619L168,619A15 15 0 0 0 153 634A15 15 0 0 0 168 649Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="200" y="634" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">WINDOW</text>
<polygon points="283,634 271,638 271,629" style="fill:rgb(0,0,0)"/>
<path d="M247,634L277,634"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M298,649L395,649A15 15 0 0 0 410 634A15 15 0 0 0 395 619L298,619A15 15 0 0 0 283 634A15 15 0 0 0 298 649Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="346" y="634" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">window-name</text>
<polygon points="433,634 422,638 422,629" style="fill:rgb(0,0,0)"/>
<path d="M410,634L427,634"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M448,649L452,649A15 15 0 0 0 467 634A15 15 0 0 0 452 619L448,619A15 15 0 0 0 433 634A15 15 0 0 0 448 649Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="450" y="634" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">AS</text>
<polygon points="490,634 479,638 479,629" style="fill:rgb(0,0,0)"/>
<path d="M467,634L485,634"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M490,649L609,649L609,619L490,619Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="550" y="634" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">window-defn</text>
<path d="M446,687A15 15 0 0 0 461 671A15 15 0 0 0 446 656A15 15 0 0 0 431 671A15 15 0 0 0 446 687Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="446" y="671" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="461,671 472,667 472,676" style="fill:rgb(0,0,0)"/>
<path d="M609,634 L 616,634 Q 624,634 624,649 L 624,656 Q 624,671 609,671 L 482,671 L 467,671"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M431,671 L 271,671 Q 256,671 256,656 L 256,649 Q 256,634 264,634 L 271,634"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="624,692 619,680 628,680" style="fill:rgb(0,0,0)"/>
<path d="M624,656L624,686"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="652,558 648,547 656,547" style="fill:rgb(0,0,0)"/>
<path d="M607,520 L 637,520 Q 652,520 652,535 L 652,537 L 652,552"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="371,596 382,592 382,600" style="fill:rgb(0,0,0)"/>
<path d="M652,558 L 652,581 Q 652,596 637,596 L 391,596 L 376,596"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="153,634 142,638 142,629" style="fill:rgb(0,0,0)"/>
<path d="M371,596 L 142,596 Q 127,596 127,611 L 127,619 Q 127,634 137,634 L 147,634"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="127,558 122,547 131,547" style="fill:rgb(0,0,0)"/>
<path d="M127,505L127,552"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="371,709 359,714 359,705" style="fill:rgb(0,0,0)"/>
<path d="M127,558 L 127,694 Q 127,709 142,709 L 350,709 L 365,709"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="609,709 597,714 597,705" style="fill:rgb(0,0,0)"/>
<path d="M371,709L603,709"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M609,709 L 616,709 Q 624,709 624,717 L 624,724"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M142,800L194,800A15 15 0 0 0 209 785A15 15 0 0 0 194 770L142,770A15 15 0 0 0 127 785A15 15 0 0 0 142 800Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="168" y="785" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">VALUES</text>
<polygon points="245,785 234,789 234,781" style="fill:rgb(0,0,0)"/>
<path d="M209,785L239,785"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M260,800A15 15 0 0 0 275 785A15 15 0 0 0 260 770A15 15 0 0 0 245 785A15 15 0 0 0 260 800Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="260" y="785" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="311,785 300,789 300,781" style="fill:rgb(0,0,0)"/>
<path d="M275,785L306,785"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M311,800L361,800L361,770L311,770Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="336" y="785" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="397,785 385,789 385,781" style="fill:rgb(0,0,0)"/>
<path d="M361,785L391,785"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M412,800A15 15 0 0 0 427 785A15 15 0 0 0 412 770A15 15 0 0 0 397 785A15 15 0 0 0 412 800Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="412" y="785" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="609,785 597,789 597,781" style="fill:rgb(0,0,0)"/>
<path d="M427,785L603,785"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M609,785 L 616,785 Q 624,785 624,792 L 624,800"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M336,762A15 15 0 0 0 351 747A15 15 0 0 0 336 732A15 15 0 0 0 321 747A15 15 0 0 0 336 762Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="336" y="747" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<path d="M336,838A15 15 0 0 0 351 823A15 15 0 0 0 336 808A15 15 0 0 0 321 823A15 15 0 0 0 336 838Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="336" y="823" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="351,747 363,743 363,751" style="fill:rgb(0,0,0)"/>
<path d="M361,785 L 368,785 Q 376,785 376,770 L 376,762 Q 376,747 366,747 L 357,747"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M321,747 L 300,747 Q 285,747 285,762 L 285,770 Q 285,785 292,785 L 300,785"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="351,823 363,818 363,827" style="fill:rgb(0,0,0)"/>
<path d="M427,785 L 434,785 Q 442,785 442,800 L 442,808 Q 442,823 427,823 L 372,823 L 357,823"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M321,823 L 234,823 Q 219,823 219,808 L 219,800 Q 219,785 226,785 L 234,785"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="127,785 115,789 115,781" style="fill:rgb(0,0,0)"/>
<path d="M55,129 L 62,129 Q 70,129 70,144 L 70,770 Q 70,785 85,785 L 106,785 L 121,785"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M248,891L424,891L424,860L248,860Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="336" y="876" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">compound-operator</text>
<polygon points="424,876 436,871 436,880" style="fill:rgb(0,0,0)"/>
<path d="M624,692 L 624,861 Q 624,876 609,876 L 445,876 L 430,876"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="6,197 10,208 2,208" style="fill:rgb(0,0,0)"/>
<path d="M248,876 L 21,876 Q 6,876 6,861 L 6,217 L 6,202"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M6,197 L 6,144 Q 6,129 21,129 L 40,129 L 55,129"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="667" y="275" text-anchor="middle" font-style="italic" fill="rgb(128,128,128)" transform="rotate(-90 667,285)" dominant-baseline="central">select-core</text>
<path d="M168,966L213,966A15 15 0 0 0 228 951A15 15 0 0 0 213 936L168,936A15 15 0 0 0 153 951A15 15 0 0 0 168 966Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="190" y="951" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ORDER</text>
<polygon points="251,951 239,956 239,947" style="fill:rgb(0,0,0)"/>
<path d="M228,951L245,951"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M266,966L270,966A15 15 0 0 0 285 951A15 15 0 0 0 270 936L266,936A15 15 0 0 0 251 951A15 15 0 0 0 266 966Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="268" y="951" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">BY</text>
<path d="M168,1072L202,1072A15 15 0 0 0 217 1057A15 15 0 0 0 202 1042L168,1042A15 15 0 0 0 153 1057A15 15 0 0 0 168 1072Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="185" y="1057" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">LIMIT</text>
<polygon points="240,1057 228,1061 228,1053" style="fill:rgb(0,0,0)"/>
<path d="M217,1057L234,1057"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M240,1072L289,1072L289,1042L240,1042Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="264" y="1057" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="330,951 319,956 319,947" style="fill:rgb(0,0,0)"/>
<path d="M285,951L324,951"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M330,966L460,966L460,936L330,936Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="395" y="951" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ordering-term</text>
<path d="M395,1004A15 15 0 0 0 410 989A15 15 0 0 0 395 974A15 15 0 0 0 380 989A15 15 0 0 0 395 1004Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="395" y="989" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="410,989 422,985 422,993" style="fill:rgb(0,0,0)"/>
<path d="M460,951 L 468,951 Q 475,951 475,966 L 475,974 Q 475,989 460,989 L 431,989 L 416,989"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M380,989 L 322,989 Q 307,989 307,974 L 307,966 Q 307,951 313,951 L 319,951"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="336,913 348,909 348,918" style="fill:rgb(0,0,0)"/>
<path d="M624,860 L 624,898 Q 624,913 609,913 L 357,913 L 342,913"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="153,951 142,956 142,947" style="fill:rgb(0,0,0)"/>
<path d="M336,913 L 142,913 Q 127,913 127,928 L 127,936 Q 127,951 137,951 L 147,951"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="496,981 492,970 500,970" style="fill:rgb(0,0,0)"/>
<path d="M460,951 L 481,951 Q 496,951 496,963 L 496,976"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="307,1023 318,1019 318,1027" style="fill:rgb(0,0,0)"/>
<path d="M496,981 L 496,1008 Q 496,1023 481,1023 L 327,1023 L 312,1023"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="153,1057 142,1061 142,1053" style="fill:rgb(0,0,0)"/>
<path d="M307,1023 L 142,1023 Q 127,1023 127,1038 L 127,1042 Q 127,1057 137,1057 L 147,1057"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="127,989 122,978 131,978" style="fill:rgb(0,0,0)"/>
<path d="M127,936L127,983"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M127,989L127,1042"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M363,1102L415,1102A15 15 0 0 0 430 1087A15 15 0 0 0 415 1072L363,1072A15 15 0 0 0 348 1087A15 15 0 0 0 363 1102Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="389" y="1087" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">OFFSET</text>
<polygon points="453,1087 441,1092 441,1083" style="fill:rgb(0,0,0)"/>
<path d="M430,1087L447,1087"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M453,1102L502,1102L502,1072L453,1072Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="477" y="1087" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="525,1087 513,1092 513,1083" style="fill:rgb(0,0,0)"/>
<path d="M502,1087L519,1087"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M363,1140A15 15 0 0 0 378 1125A15 15 0 0 0 363 1110A15 15 0 0 0 348 1125A15 15 0 0 0 363 1140Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="363" y="1125" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="401,1125 390,1129 390,1121" style="fill:rgb(0,0,0)"/>
<path d="M378,1125L396,1125"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M401,1140L451,1140L451,1110L401,1110Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="426" y="1125" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="312,1057 301,1061 301,1053" style="fill:rgb(0,0,0)"/>
<path d="M289,1057L306,1057"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="348,1125 337,1129 337,1121" style="fill:rgb(0,0,0)"/>
<path d="M312,1057 L 320,1057 Q 327,1057 327,1072 L 327,1110 Q 327,1125 335,1125 L 342,1125"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="348,1087 337,1092 337,1083" style="fill:rgb(0,0,0)"/>
<path d="M312,1057 L 320,1057 Q 327,1057 327,1072 L 327,1072 Q 327,1087 335,1087 L 342,1087"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="525,1057 513,1061 513,1053" style="fill:rgb(0,0,0)"/>
<path d="M312,1057L519,1057"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="620,1155 609,1160 609,1151" style="fill:rgb(0,0,0)"/>
<path d="M525,1057 L 546,1057 Q 561,1057 561,1072 L 561,1140 Q 561,1155 576,1155 L 599,1155 L 614,1155"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="624" cy="1155" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M525,1087 L 546,1087 Q 561,1087 561,1095 L 561,1102"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="525,1125 513,1129 513,1121" style="fill:rgb(0,0,0)"/>
<path d="M451,1125L519,1125"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M525,1125 L 546,1125 Q 561,1125 561,1133 L 561,1140"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="525,1155 513,1160 513,1151" style="fill:rgb(0,0,0)"/>
<path d="M127,1042 L 127,1140 Q 127,1155 142,1155 L 504,1155 L 519,1155"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M525,1155L597,1155"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
<p><b><a href="https://www.sqlite.org/syntax/common-table-expression.html" target="_blank">common-table-expression:</a></b>
<button id='x95f8c1bb' onclick='hideorshow("x95f8c1bb","x3dec706a")'>show</button></p>
 <div id='x3dec706a' style='display:none;' class='imgcontainer'>
 <div style="max-width:638px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 638.525 167.4">
<circle cx="5" cy="29" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="32,29 20,33 20,24" style="fill:rgb(0,0,0)"/>
<path d="M9,29L26,29"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M47,44L122,44A15 15 0 0 0 137 29A15 15 0 0 0 122 14L47,14A15 15 0 0 0 32 29A15 15 0 0 0 47 44Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="85" y="29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">table-name</text>
<polygon points="160,29 149,33 149,24" style="fill:rgb(0,0,0)"/>
<path d="M137,29L155,29"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="196,29 185,33 185,24" style="fill:rgb(0,0,0)"/>
<path d="M160,29L191,29"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M211,44A15 15 0 0 0 227 29A15 15 0 0 0 211 14A15 15 0 0 0 196 29A15 15 0 0 0 211 44Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="211" y="29" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="250,29 238,33 238,24" style="fill:rgb(0,0,0)"/>
<path d="M227,29L244,29"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="286,29 274,33 274,24" style="fill:rgb(0,0,0)"/>
<path d="M250,29L280,29"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M301,44L395,44A15 15 0 0 0 410 29A15 15 0 0 0 395 14L301,14A15 15 0 0 0 286 29A15 15 0 0 0 301 44Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="348" y="29" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">column-name</text>
<polygon points="446,29 434,33 434,24" style="fill:rgb(0,0,0)"/>
<path d="M410,29L440,29"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M461,44A15 15 0 0 0 476 29A15 15 0 0 0 461 14A15 15 0 0 0 446 29A15 15 0 0 0 461 44Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="461" y="29" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="511,29 499,33 499,24" style="fill:rgb(0,0,0)"/>
<path d="M476,29L505,29"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M47,165L51,165A15 15 0 0 0 66 150A15 15 0 0 0 51 135L47,135A15 15 0 0 0 32 150A15 15 0 0 0 47 165Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="49" y="150" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">AS</text>
<path d="M127,135L147,135A15 15 0 0 0 162 119A15 15 0 0 0 147 104L127,104A15 15 0 0 0 112 119A15 15 0 0 0 127 135Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="137" y="119" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NOT</text>
<path d="M219,135L337,135A15 15 0 0 0 352 119A15 15 0 0 0 337 104L219,104A15 15 0 0 0 204 119A15 15 0 0 0 219 135Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="278" y="119" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">MATERIALIZED</text>
<path d="M162,119L204,119"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M410,165A15 15 0 0 0 425 150A15 15 0 0 0 410 135A15 15 0 0 0 395 150A15 15 0 0 0 410 165Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="410" y="150" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="448,150 437,154 437,145" style="fill:rgb(0,0,0)"/>
<path d="M425,150L442,150"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M448,165L552,165L552,135L448,135Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="500" y="150" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">select-stmt</text>
<polygon points="575,150 564,154 564,145" style="fill:rgb(0,0,0)"/>
<path d="M552,150L570,150"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M591,165A15 15 0 0 0 606 150A15 15 0 0 0 591 135A15 15 0 0 0 575 150A15 15 0 0 0 591 165Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="591" y="150" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="629,150 617,154 617,145" style="fill:rgb(0,0,0)"/>
<path d="M606,150L623,150"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="632" cy="150" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M348,82A15 15 0 0 0 363 66A15 15 0 0 0 348 51A15 15 0 0 0 333 66A15 15 0 0 0 348 82Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="348" y="66" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="363,66 374,62 374,71" style="fill:rgb(0,0,0)"/>
<path d="M410,29 L 417,29 Q 425,29 425,44 L 425,51 Q 425,66 410,66 L 384,66 L 369,66"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M333,66 L 278,66 Q 263,66 263,51 L 263,44 Q 263,29 270,29 L 278,29"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="66,93 78,89 78,97" style="fill:rgb(0,0,0)"/>
<path d="M511,29 L 516,29 Q 522,29 522,44 L 522,78 Q 522,93 507,93 L 87,93 L 72,93"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="32,150 20,154 20,145" style="fill:rgb(0,0,0)"/>
<path d="M66,93 L 30,93 Q 15,93 15,108 L 15,135 Q 15,150 20,150 L 26,150"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="85,150 73,154 73,145" style="fill:rgb(0,0,0)"/>
<path d="M66,150L79,150"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="112,119 101,124 101,115" style="fill:rgb(0,0,0)"/>
<path d="M85,150 L 89,150 Q 92,150 92,135 L 92,134 Q 92,119 99,119 L 106,119"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="204,119 192,124 192,115" style="fill:rgb(0,0,0)"/>
<path d="M66,150 L 147,150 Q 162,150 170,150 Q 177,150 177,135 L 177,134 Q 177,119 188,119 L 198,119"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="395,150 383,154 383,145" style="fill:rgb(0,0,0)"/>
<path d="M352,119 L 360,119 Q 367,119 367,134 L 367,135 Q 367,150 378,150 L 389,150"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,150L395,150"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="348,6 336,10 336,2" style="fill:rgb(0,0,0)"/>
<path d="M160,29 L 168,29 Q 175,29 175,17 Q 175,6 190,6 L 327,6 L 342,6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M348,6 L 473,6 Q 488,6 488,17 Q 488,29 495,29 L 503,29"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>
<p><b><a href="https://www.sqlite.org/syntax/compound-operator.html" target="_blank">compound-operator:</a></b>
<button id='x6d4ba874' onclick='hideorshow("x6d4ba874","x35b8e9ff")'>show</button></p>
 <div id='x35b8e9ff' style='display:none;' class='imgcontainer'>
 <div style="max-width:293px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 293.842 147.96">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="32,17 20,21 20,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L26,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="68,17 56,21 56,12" style="fill:rgb(0,0,0)"/>
<path d="M32,17L62,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M83,32L127,32A15 15 0 0 0 142 17A15 15 0 0 0 127 2L83,2A15 15 0 0 0 68 17A15 15 0 0 0 83 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="105" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">UNION</text>
<path d="M83,70L127,70A15 15 0 0 0 142 55L142,55A15 15 0 0 0 127 39L83,39A15 15 0 0 0 68 55L68,55A15 15 0 0 0 83 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="105" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">UNION</text>
<path d="M83,108L168,108A15 15 0 0 0 183 92A15 15 0 0 0 168 77L83,77A15 15 0 0 0 68 92A15 15 0 0 0 83 108Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="125" y="92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">INTERSECT</text>
<path d="M83,145L135,145A15 15 0 0 0 150 130A15 15 0 0 0 135 115L83,115A15 15 0 0 0 68 130A15 15 0 0 0 83 145Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="109" y="130" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">EXCEPT</text>
<polygon points="165,55 153,59 153,50" style="fill:rgb(0,0,0)"/>
<path d="M142,55L159,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M180,70L195,70A15 15 0 0 0 210 55L210,55A15 15 0 0 0 195 39L180,39A15 15 0 0 0 165 55L165,55A15 15 0 0 0 180 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="187" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ALL</text>
<polygon points="233,55 221,59 221,50" style="fill:rgb(0,0,0)"/>
<path d="M210,55L227,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="284,17 272,21 272,12" style="fill:rgb(0,0,0)"/>
<path d="M233,55 L 240,55 Q 248,55 248,40 L 248,32 Q 248,17 263,17 L 263,17 L 278,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="288" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="68,55 56,59 56,50" style="fill:rgb(0,0,0)"/>
<path d="M32,17 L 39,17 Q 47,17 47,32 L 47,40 Q 47,55 55,55 L 62,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M142,17L276,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="68,92 56,97 56,88" style="fill:rgb(0,0,0)"/>
<path d="M47,39 L 47,77 Q 47,92 55,92 L 62,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="233,92 221,97 221,88" style="fill:rgb(0,0,0)"/>
<path d="M183,92L227,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M233,92 L 240,92 Q 248,92 248,77 L 248,54 L 248,39"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="68,130 56,135 56,126" style="fill:rgb(0,0,0)"/>
<path d="M47,77 L 47,115 Q 47,130 55,130 L 62,130"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="233,130 221,135 221,126" style="fill:rgb(0,0,0)"/>
<path d="M150,130L227,130"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M233,130 L 240,130 Q 248,130 248,115 L 248,92 L 248,77"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>
<p><b><a href="https://www.sqlite.org/syntax/join-clause.html" target="_blank">join-clause:</a></b>
<button id='xe3767332' onclick='hideorshow("xe3767332","x4385296b")'>show</button></p>
 <div id='x4385296b' style='display:none;' class='imgcontainer'>
 <div style="max-width:793px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 793.282 84.24">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="32,17 20,21 20,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L26,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M32,32L193,32L193,2L32,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="112" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">table-or-subquery</text>
<polygon points="259,47 247,51 247,43" style="fill:rgb(0,0,0)"/>
<path d="M193,17 L 200,17 Q 208,17 208,32 L 208,32 Q 208,47 223,47 L 238,47 L 253,47"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M259,62L380,62L380,32L259,32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="319" y="47" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">join-operator</text>
<polygon points="403,47 391,51 391,43" style="fill:rgb(0,0,0)"/>
<path d="M380,47L397,47"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M403,62L564,62L564,32L403,32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="483" y="47" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">table-or-subquery</text>
<polygon points="587,47 575,51 575,43" style="fill:rgb(0,0,0)"/>
<path d="M564,47L581,47"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M587,62L721,62L721,32L587,32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="654" y="47" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">join-constraint</text>
<polygon points="783,17 772,21 772,12" style="fill:rgb(0,0,0)"/>
<path d="M721,47 L 742,47 Q 757,47 757,32 L 757,32 Q 757,17 767,17 L 778,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="787" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="483,17 472,21 472,12" style="fill:rgb(0,0,0)"/>
<path d="M193,17L478,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M483,17L776,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="483,77 495,73 495,82" style="fill:rgb(0,0,0)"/>
<path d="M721,47 L 728,47 Q 736,47 736,62 L 736,62 Q 736,77 721,77 L 504,77 L 489,77"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M483,77 L 247,77 Q 232,77 232,62 L 232,62 Q 232,47 246,47 L 259,47"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
<p><b><a href="https://www.sqlite.org/syntax/join-constraint.html" target="_blank">join-constraint:</a></b>
<button id='x6a23a0c2' onclick='hideorshow("x6a23a0c2","x7e6421f6")'>show</button></p>
 <div id='x7e6421f6' style='display:none;' class='imgcontainer'>
 <div style="max-width:483px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 483.336 126.576">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,55 39,59 39,50" style="fill:rgb(0,0,0)"/>
<path d="M9,17 L 16,17 Q 24,17 24,32 L 24,40 Q 24,55 34,55 L 45,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,70L104,70A15 15 0 0 0 120 55L120,55A15 15 0 0 0 104 39L66,39A15 15 0 0 0 50 55L50,55A15 15 0 0 0 66 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="85" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">USING</text>
<polygon points="143,55 131,59 131,50" style="fill:rgb(0,0,0)"/>
<path d="M120,55L137,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M158,70A15 15 0 0 0 173 55L173,55A15 15 0 0 0 158 39A15 15 0 0 0 143 55L143,55A15 15 0 0 0 158 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="158" y="55" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="209,55 197,59 197,50" style="fill:rgb(0,0,0)"/>
<path d="M173,55L203,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M224,70L318,70A15 15 0 0 0 333 55L333,55A15 15 0 0 0 318 39L224,39A15 15 0 0 0 209 55L209,55A15 15 0 0 0 224 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="271" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">column-name</text>
<polygon points="369,55 358,59 358,50" style="fill:rgb(0,0,0)"/>
<path d="M333,55L363,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M384,70A15 15 0 0 0 399 55L399,55A15 15 0 0 0 384 39A15 15 0 0 0 369 55L369,55A15 15 0 0 0 384 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="384" y="55" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="422,55 411,59 411,50" style="fill:rgb(0,0,0)"/>
<path d="M399,55L417,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="473,17 462,21 462,12" style="fill:rgb(0,0,0)"/>
<path d="M422,55 L 430,55 Q 437,55 437,40 L 437,32 Q 437,17 452,17 L 453,17 L 468,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="477" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M271,108A15 15 0 0 0 286 92A15 15 0 0 0 271 77A15 15 0 0 0 256 92A15 15 0 0 0 271 108Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="271" y="92" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="286,92 298,88 298,97" style="fill:rgb(0,0,0)"/>
<path d="M333,55 L 341,55 Q 348,55 348,70 L 348,77 Q 348,92 333,92 L 307,92 L 292,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M256,92 L 197,92 Q 182,92 182,77 L 182,70 Q 182,55 190,55 L 197,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,17 39,21 39,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L45,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,32L74,32A15 15 0 0 0 90 17A15 15 0 0 0 74 2L66,2A15 15 0 0 0 50 17A15 15 0 0 0 66 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="70" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ON</text>
<polygon points="113,17 101,21 101,12" style="fill:rgb(0,0,0)"/>
<path d="M90,17L107,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M113,32L162,32L162,2L113,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="137" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="422,17 411,21 411,12" style="fill:rgb(0,0,0)"/>
<path d="M162,17L417,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M422,17L462,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="209,120 197,124 197,115" style="fill:rgb(0,0,0)"/>
<path d="M9,17 L 16,17 Q 24,17 24,32 L 24,105 Q 24,120 39,120 L 188,120 L 203,120"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M209,120 L 422,120 Q 437,120 437,105 L 437,54 L 437,39"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>
<p><b><a href="https://www.sqlite.org/syntax/join-operator.html" target="_blank">join-operator:</a></b>
<button id='xe35b322c' onclick='hideorshow("xe35b322c","x0c7186a6")'>show</button></p>
 <div id='x0c7186a6' style='display:none;' class='imgcontainer'>
 <div style="max-width:620px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 620.333 255.312">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,71 39,76 39,67" style="fill:rgb(0,0,0)"/>
<path d="M9,17 L 16,17 Q 24,17 24,32 L 24,56 Q 24,71 34,71 L 45,71"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,86L133,86A15 15 0 0 0 148 71A15 15 0 0 0 133 56L66,56A15 15 0 0 0 50 71A15 15 0 0 0 66 86Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="99" y="71" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NATURAL</text>
<polygon points="189,41 178,45 178,37" style="fill:rgb(0,0,0)"/>
<path d="M148,71 L 155,71 Q 163,71 163,56 L 163,56 Q 163,41 173,41 L 184,41"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="231,71 219,76 219,67" style="fill:rgb(0,0,0)"/>
<path d="M189,41 L 197,41 Q 204,41 204,56 L 204,56 Q 204,71 215,71 L 225,71"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M246,86L273,86A15 15 0 0 0 288 71A15 15 0 0 0 273 56L246,56A15 15 0 0 0 231 71A15 15 0 0 0 246 86Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="259" y="71" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">LEFT</text>
<polygon points="378,71 366,76 366,67" style="fill:rgb(0,0,0)"/>
<path d="M288,71L372,71"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M393,86L437,86A15 15 0 0 0 452 71A15 15 0 0 0 437 56L393,56A15 15 0 0 0 378 71A15 15 0 0 0 393 86Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="415" y="71" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">OUTER</text>
<polygon points="475,71 463,76 463,67" style="fill:rgb(0,0,0)"/>
<path d="M452,71L469,71"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="516,41 505,45 505,37" style="fill:rgb(0,0,0)"/>
<path d="M475,71 L 482,71 Q 490,71 490,56 L 490,56 Q 490,41 500,41 L 511,41"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M532,56L554,56A15 15 0 0 0 569 41A15 15 0 0 0 554 26L532,26A15 15 0 0 0 516 41A15 15 0 0 0 532 56Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="543" y="41" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">JOIN</text>
<polygon points="610,17 599,21 599,12" style="fill:rgb(0,0,0)"/>
<path d="M569,41 L 576,41 Q 584,41 584,29 Q 584,17 594,17 L 605,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="614" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M310,32A15 15 0 0 0 325 17A15 15 0 0 0 310 2A15 15 0 0 0 295 17A15 15 0 0 0 310 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="310" y="17" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="295,17 283,21 283,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L289,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M325,17L599,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="99,41 88,45 88,37" style="fill:rgb(0,0,0)"/>
<path d="M9,17 L 16,17 Q 24,17 24,29 Q 24,41 39,41 L 78,41 L 93,41"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M99,41L178,41"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M189,41L505,41"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="378,41 366,45 366,37" style="fill:rgb(0,0,0)"/>
<path d="M336,71 L 344,71 Q 351,71 351,56 L 351,56 Q 351,41 362,41 L 372,41"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="231,109 219,113 219,105" style="fill:rgb(0,0,0)"/>
<path d="M189,41 L 197,41 Q 204,41 204,56 L 204,94 Q 204,109 215,109 L 225,109"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M246,124L284,124A15 15 0 0 0 299 109A15 15 0 0 0 284 94L246,94A15 15 0 0 0 231 109A15 15 0 0 0 246 124Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="265" y="109" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">RIGHT</text>
<polygon points="341,71 329,76 329,67" style="fill:rgb(0,0,0)"/>
<path d="M299,109 L 307,109 Q 314,109 314,94 L 314,86 Q 314,71 324,71 L 335,71"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="231,147 219,151 219,142" style="fill:rgb(0,0,0)"/>
<path d="M189,41 L 197,41 Q 204,41 204,56 L 204,132 Q 204,147 215,147 L 225,147"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M246,162L274,162A15 15 0 0 0 289 147A15 15 0 0 0 274 132L246,132A15 15 0 0 0 231 147A15 15 0 0 0 246 162Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="260" y="147" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">FULL</text>
<path d="M289,147 L 302,147 Q 314,147 314,132 L 314,109 L 314,94"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="231,192 219,196 219,188" style="fill:rgb(0,0,0)"/>
<path d="M189,41 L 197,41 Q 204,41 204,56 L 204,177 Q 204,192 215,192 L 225,192"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M246,207L287,207A15 15 0 0 0 302 192A15 15 0 0 0 287 177L246,177A15 15 0 0 0 231 192A15 15 0 0 0 246 207Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="267" y="192" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">INNER</text>
<polygon points="475,192 463,196 463,188" style="fill:rgb(0,0,0)"/>
<path d="M302,192L469,192"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M475,192 L 482,192 Q 490,192 490,185 L 490,177"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="231,238 219,242 219,233" style="fill:rgb(0,0,0)"/>
<path d="M9,17 L 16,17 Q 24,17 24,32 L 24,223 Q 24,238 39,238 L 210,238 L 225,238"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M246,253L287,253A15 15 0 0 0 303 238A15 15 0 0 0 287 222L246,222A15 15 0 0 0 231 238A15 15 0 0 0 246 253Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="267" y="238" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CROSS</text>
<polygon points="475,238 463,242 463,233" style="fill:rgb(0,0,0)"/>
<path d="M303,238L469,238"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M475,238 L 482,238 Q 490,238 490,223 L 490,71 L 490,56"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>
</div>
<p><b><a href="https://www.sqlite.org/syntax/result-column.html" target="_blank">result-column:</a></b>
<button id='xcd8d10d3' onclick='hideorshow("xcd8d10d3","xd739ff23")'>show</button></p>
 <div id='xd739ff23' style='display:none;' class='imgcontainer'>
 <div style="max-width:398px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 398.054 163.08">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,17 33,21 33,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L39,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M45,32L94,32L94,2L45,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="69" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="136,55 124,59 124,50" style="fill:rgb(0,0,0)"/>
<path d="M94,17 L 102,17 Q 109,17 109,32 L 109,40 Q 109,55 119,55 L 130,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M151,70L155,70A15 15 0 0 0 170 55L170,55A15 15 0 0 0 155 39L151,39A15 15 0 0 0 136 55L136,55A15 15 0 0 0 151 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="153" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">AS</text>
<polygon points="206,55 194,59 194,50" style="fill:rgb(0,0,0)"/>
<path d="M170,55L200,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M221,70L309,70A15 15 0 0 0 324 55L324,55A15 15 0 0 0 309 39L221,39A15 15 0 0 0 206 55L206,55A15 15 0 0 0 221 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="265" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">column-alias</text>
<polygon points="347,55 335,59 335,50" style="fill:rgb(0,0,0)"/>
<path d="M324,55L341,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="388,17 377,21 377,12" style="fill:rgb(0,0,0)"/>
<path d="M347,55 L 354,55 Q 362,55 362,40 L 362,32 Q 362,17 372,17 L 382,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="392" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="153,85 141,89 141,81" style="fill:rgb(0,0,0)"/>
<path d="M109,39 L 109,70 Q 109,85 124,85 L 132,85 L 147,85"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M153,85 L 170,85 Q 185,85 185,70 L 185,70 Q 185,55 192,55 L 200,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="241,17 230,21 230,12" style="fill:rgb(0,0,0)"/>
<path d="M94,17L235,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M241,17L377,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,108 39,112 39,103" style="fill:rgb(0,0,0)"/>
<path d="M9,17 L 16,17 Q 24,17 24,32 L 24,93 Q 24,108 34,108 L 45,108"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,123A15 15 0 0 0 81 108A15 15 0 0 0 66 92A15 15 0 0 0 50 108A15 15 0 0 0 66 123Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="66" y="108" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">*</text>
<polygon points="347,108 335,112 335,103" style="fill:rgb(0,0,0)"/>
<path d="M81,108L341,108"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M347,108 L 354,108 Q 362,108 362,93 L 362,54 L 362,39"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,145 39,150 39,141" style="fill:rgb(0,0,0)"/>
<path d="M24,92 L 24,130 Q 24,145 34,145 L 45,145"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,160L141,160A15 15 0 0 0 156 145A15 15 0 0 0 141 130L66,130A15 15 0 0 0 50 145A15 15 0 0 0 66 160Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="103" y="145" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">table-name</text>
<polygon points="179,145 167,150 167,141" style="fill:rgb(0,0,0)"/>
<path d="M156,145L173,145"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M194,160A15 15 0 0 0 209 145A15 15 0 0 0 194 130A15 15 0 0 0 179 145A15 15 0 0 0 194 160Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="194" y="145" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">.</text>
<polygon points="232,145 221,150 221,141" style="fill:rgb(0,0,0)"/>
<path d="M209,145L226,145"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M247,160A15 15 0 0 0 262 145A15 15 0 0 0 247 130A15 15 0 0 0 232 145A15 15 0 0 0 247 160Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="247" y="145" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">*</text>
<polygon points="347,145 335,150 335,141" style="fill:rgb(0,0,0)"/>
<path d="M262,145L341,145"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M347,145 L 354,145 Q 362,145 362,130 L 362,107 L 362,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>
<p><b><a href="https://www.sqlite.org/syntax/table-or-subquery.html" target="_blank">table-or-subquery:</a></b>
<button id='x75615e62' onclick='hideorshow("x75615e62","xc0ec192d")'>show</button></p>
 <div id='xc0ec192d' style='display:none;' class='imgcontainer'>
 <div style="max-width:720px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 720.778 457.704">
<circle cx="5" cy="36" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,74 39,78 39,70" style="fill:rgb(0,0,0)"/>
<path d="M9,36 L 16,36 Q 24,36 24,51 L 24,59 Q 24,74 34,74 L 45,74"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,89L162,89A15 15 0 0 0 177 74L177,74A15 15 0 0 0 162 59L66,59A15 15 0 0 0 50 74L50,74A15 15 0 0 0 66 89Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="114" y="74" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">schema-name</text>
<polygon points="194,74 183,78 183,70" style="fill:rgb(0,0,0)"/>
<path d="M177,74L189,74"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M209,89A15 15 0 0 0 225 74L225,74A15 15 0 0 0 209 59A15 15 0 0 0 194 74L194,74A15 15 0 0 0 209 89Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="209" y="74" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">.</text>
<polygon points="266,36 255,41 255,32" style="fill:rgb(0,0,0)"/>
<path d="M225,74 L 232,74 Q 240,74 240,59 L 240,51 Q 240,36 250,36 L 260,36"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M281,51L356,51A15 15 0 0 0 371 36A15 15 0 0 0 356 21L281,21A15 15 0 0 0 266 36A15 15 0 0 0 281 51Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="319" y="36" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">table-name</text>
<polygon points="407,36 396,41 396,32" style="fill:rgb(0,0,0)"/>
<path d="M371,36L402,36"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M423,51L427,51A15 15 0 0 0 442 36A15 15 0 0 0 427 21L423,21A15 15 0 0 0 407 36A15 15 0 0 0 423 51Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="425" y="36" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">AS</text>
<polygon points="478,36 466,41 466,32" style="fill:rgb(0,0,0)"/>
<path d="M442,36L472,36"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M493,51L561,51A15 15 0 0 0 577 36A15 15 0 0 0 561 21L493,21A15 15 0 0 0 478 36A15 15 0 0 0 493 51Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="527" y="36" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">table-alias</text>
<path d="M9,36L255,36"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="422,6 411,10 411,2" style="fill:rgb(0,0,0)"/>
<path d="M371,36 L 379,36 Q 386,36 386,21 L 386,21 Q 386,6 401,6 L 402,6 L 417,6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M422,6 L 442,6 Q 457,6 457,21 L 457,21 Q 457,36 464,36 L 472,36"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M422,6 L 577,6 Q 592,6 592,21 L 592,21 Q 592,36 599,36 L 607,36"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M323,127L388,127A15 15 0 0 0 403 112A15 15 0 0 0 388 97L323,97A15 15 0 0 0 308 112A15 15 0 0 0 323 127Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="356" y="112" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">INDEXED</text>
<polygon points="426,112 415,116 415,108" style="fill:rgb(0,0,0)"/>
<path d="M403,112L420,112"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M441,127L445,127A15 15 0 0 0 460 112A15 15 0 0 0 445 97L441,97A15 15 0 0 0 426 112A15 15 0 0 0 441 127Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="443" y="112" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">BY</text>
<polygon points="483,112 472,116 472,108" style="fill:rgb(0,0,0)"/>
<path d="M460,112L478,112"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M499,127L577,127A15 15 0 0 0 592 112A15 15 0 0 0 577 97L499,97A15 15 0 0 0 483 112A15 15 0 0 0 499 127Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="538" y="112" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">index-name</text>
<path d="M323,165L343,165A15 15 0 0 0 359 150A15 15 0 0 0 343 135L323,135A15 15 0 0 0 308 150A15 15 0 0 0 323 165Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="333" y="150" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NOT</text>
<polygon points="382,150 370,154 370,145" style="fill:rgb(0,0,0)"/>
<path d="M359,150L376,150"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M397,165L461,165A15 15 0 0 0 476 150A15 15 0 0 0 461 135L397,135A15 15 0 0 0 382 150A15 15 0 0 0 397 165Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="429" y="150" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">INDEXED</text>
<polygon points="527,74 539,70 539,78" style="fill:rgb(0,0,0)"/>
<path d="M577,36 L 607,36 Q 622,36 622,51 L 622,59 Q 622,74 607,74 L 548,74 L 533,74"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="308,150 297,154 297,145" style="fill:rgb(0,0,0)"/>
<path d="M527,74 L 297,74 Q 282,74 282,89 L 282,135 Q 282,150 292,150 L 302,150"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="308,112 297,116 297,108" style="fill:rgb(0,0,0)"/>
<path d="M282,97 L 282,104 Q 282,112 292,112 L 302,112"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="266,213 255,217 255,209" style="fill:rgb(0,0,0)"/>
<path d="M9,36 L 16,36 Q 24,36 24,51 L 24,198 Q 24,213 39,213 L 245,213 L 260,213"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M281,228L431,228A15 15 0 0 0 446 213A15 15 0 0 0 431 198L281,198A15 15 0 0 0 266 213A15 15 0 0 0 281 228Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="356" y="213" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">table-function-name</text>
<polygon points="463,213 452,217 452,209" style="fill:rgb(0,0,0)"/>
<path d="M446,213L457,213"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M478,228A15 15 0 0 0 493 213A15 15 0 0 0 478 198A15 15 0 0 0 463 213A15 15 0 0 0 478 228Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="478" y="213" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="529,213 518,217 518,209" style="fill:rgb(0,0,0)"/>
<path d="M493,213L524,213"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M529,228L579,228L579,198L529,198Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="554" y="213" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="615,213 603,217 603,209" style="fill:rgb(0,0,0)"/>
<path d="M579,213L609,213"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M630,228A15 15 0 0 0 645 213A15 15 0 0 0 630 198A15 15 0 0 0 615 213A15 15 0 0 0 630 228Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="630" y="213" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="675,187 679,198 671,198" style="fill:rgb(0,0,0)"/>
<path d="M645,213 L 660,213 Q 675,213 675,203 L 675,192"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M554,190A15 15 0 0 0 569 175A15 15 0 0 0 554 160A15 15 0 0 0 539 175A15 15 0 0 0 554 190Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="554" y="175" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="569,175 581,171 581,180" style="fill:rgb(0,0,0)"/>
<path d="M579,213 L 586,213 Q 594,213 594,198 L 594,190 Q 594,175 584,175 L 575,175"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M539,175 L 518,175 Q 503,175 503,190 L 503,198 Q 503,213 510,213 L 518,213"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M225,74 L 232,74 Q 240,74 240,89 L 240,198 Q 240,213 247,213 L 255,213"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="660,112 648,116 648,108" style="fill:rgb(0,0,0)"/>
<path d="M592,112L654,112"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M660,112 L 667,112 Q 675,112 675,104 L 675,97"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="660,150 648,154 648,145" style="fill:rgb(0,0,0)"/>
<path d="M476,150L654,150"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M660,150 L 667,150 Q 675,150 675,142 L 675,135"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M577,36L690,36"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M407,304L411,304A15 15 0 0 0 426 289A15 15 0 0 0 411 274L407,274A15 15 0 0 0 392 289A15 15 0 0 0 407 304Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="409" y="289" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">AS</text>
<polygon points="498,289 487,293 487,284" style="fill:rgb(0,0,0)"/>
<path d="M426,289L492,289"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M513,304L582,304A15 15 0 0 0 597 289A15 15 0 0 0 582 274L513,274A15 15 0 0 0 498 289A15 15 0 0 0 513 304Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="548" y="289" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">table-alias</text>
<polygon points="660,289 648,293 648,284" style="fill:rgb(0,0,0)"/>
<path d="M597,289L654,289"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M660,289 L 667,289 Q 675,289 675,281 L 675,274"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="548,251 559,247 559,255" style="fill:rgb(0,0,0)"/>
<path d="M645,213 L 652,213 Q 660,213 660,228 L 660,236 Q 660,251 645,251 L 568,251 L 553,251"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="392,289 380,293 380,284" style="fill:rgb(0,0,0)"/>
<path d="M548,251 L 370,251 Q 355,251 355,266 L 355,274 Q 355,289 370,289 L 371,289 L 386,289"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M472,251 L 464,251 Q 457,251 457,266 L 457,274 Q 457,289 464,289 L 472,289"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,327 39,331 39,322" style="fill:rgb(0,0,0)"/>
<path d="M24,198 L 24,312 Q 24,327 34,327 L 45,327"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,342A15 15 0 0 0 81 327A15 15 0 0 0 66 311A15 15 0 0 0 50 327A15 15 0 0 0 66 342Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="66" y="327" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="104,327 92,331 92,322" style="fill:rgb(0,0,0)"/>
<path d="M81,327L98,327"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M104,342L208,342L208,311L104,311Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="156" y="327" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">select-stmt</text>
<polygon points="231,327 219,331 219,322" style="fill:rgb(0,0,0)"/>
<path d="M208,327L225,327"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M246,342A15 15 0 0 0 261 327A15 15 0 0 0 246 311A15 15 0 0 0 231 327A15 15 0 0 0 246 342Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="246" y="327" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="392,289 380,293 380,284" style="fill:rgb(0,0,0)"/>
<path d="M261,327 L 269,327 Q 276,327 276,312 L 276,304 Q 276,289 291,289 L 371,289 L 386,289"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="660,327 648,331 648,322" style="fill:rgb(0,0,0)"/>
<path d="M261,327L654,327"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M660,327 L 667,327 Q 675,327 675,319 L 675,312"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M424,327 L 432,327 Q 439,327 439,312 L 439,304 Q 439,289 447,289 L 454,289"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,364 39,369 39,360" style="fill:rgb(0,0,0)"/>
<path d="M24,311 L 24,349 Q 24,364 34,364 L 45,364"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M65,379A15 15 0 0 0 81 364A15 15 0 0 0 65 349A15 15 0 0 0 50 364A15 15 0 0 0 65 379Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="65" y="364" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="135,364 123,369 123,360" style="fill:rgb(0,0,0)"/>
<path d="M81,364L129,364"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M135,379L296,379L296,349L135,349Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="215" y="364" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">table-or-subquery</text>
<polygon points="350,364 338,369 338,360" style="fill:rgb(0,0,0)"/>
<path d="M296,364L344,364"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M365,379A15 15 0 0 0 380 364A15 15 0 0 0 365 349A15 15 0 0 0 350 364A15 15 0 0 0 365 379Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="365" y="364" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="660,364 648,369 648,360" style="fill:rgb(0,0,0)"/>
<path d="M380,364L654,364"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="711,36 699,41 699,32" style="fill:rgb(0,0,0)"/>
<path d="M660,364 L 667,364 Q 675,364 675,349 L 675,51 Q 675,36 690,36 L 690,36 L 705,36"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="715" cy="36" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M215,417A15 15 0 0 0 230 402A15 15 0 0 0 215 387A15 15 0 0 0 200 402A15 15 0 0 0 215 417Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="215" y="402" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="230,402 242,398 242,406" style="fill:rgb(0,0,0)"/>
<path d="M296,364 L 303,364 Q 311,364 311,379 L 311,387 Q 311,402 296,402 L 251,402 L 236,402"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M200,402 L 123,402 Q 108,402 108,387 L 108,379 Q 108,364 116,364 L 123,364"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="122,440 111,444 111,436" style="fill:rgb(0,0,0)"/>
<path d="M81,364 L 88,364 Q 96,364 96,379 L 96,425 Q 96,440 106,440 L 116,440"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M122,455L224,455L224,425L122,425Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="173" y="440" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">join-clause</text>
<path d="M224,440 L 308,440 Q 323,440 323,425 L 323,379 Q 323,364 331,364 L 338,364"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>
<p><b><a href="https://www.sqlite.org/syntax/window-defn.html" target="_blank">window-defn:</a></b>
<button id='x023b21e4' onclick='hideorshow("x023b21e4","x328b8438")'>show</button></p>
 <div id='x328b8438' style='display:none;' class='imgcontainer'>
 <div style="max-width:479px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 479.765 380.592">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="32,17 20,21 20,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L26,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M47,32A15 15 0 0 0 62 17A15 15 0 0 0 47 2A15 15 0 0 0 32 17A15 15 0 0 0 47 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="47" y="17" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="104,44 92,48 92,40" style="fill:rgb(0,0,0)"/>
<path d="M62,17 L 70,17 Q 77,17 77,30 Q 77,44 88,44 L 98,44"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M119,59L260,59A15 15 0 0 0 275 44L275,44A15 15 0 0 0 260 29L119,29A15 15 0 0 0 104 44L104,44A15 15 0 0 0 119 59Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="190" y="44" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">base-window-name</text>
<path d="M119,135L198,135A15 15 0 0 0 214 120A15 15 0 0 0 198 104L119,104A15 15 0 0 0 104 120A15 15 0 0 0 119 135Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="159" y="120" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">PARTITION</text>
<polygon points="237,120 225,124 225,115" style="fill:rgb(0,0,0)"/>
<path d="M214,120L231,120"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M252,135L256,135A15 15 0 0 0 271 120A15 15 0 0 0 256 104L252,104A15 15 0 0 0 237 120A15 15 0 0 0 252 135Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="254" y="120" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">BY</text>
<polygon points="307,120 295,124 295,115" style="fill:rgb(0,0,0)"/>
<path d="M271,120L301,120"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M307,135L356,135L356,104L307,104Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="332" y="120" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<path d="M332,173A15 15 0 0 0 347 157A15 15 0 0 0 332 142A15 15 0 0 0 316 157A15 15 0 0 0 332 173Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="332" y="157" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="347,157 358,153 358,162" style="fill:rgb(0,0,0)"/>
<path d="M356,120 L 364,120 Q 371,120 371,135 L 371,142 Q 371,157 362,157 L 352,157"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M316,157 L 295,157 Q 280,157 280,142 L 280,135 Q 280,120 288,120 L 295,120"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="190,17 178,21 178,12" style="fill:rgb(0,0,0)"/>
<path d="M62,17L184,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="190,82 201,77 201,86" style="fill:rgb(0,0,0)"/>
<path d="M190,17 L 298,17 Q 313,17 313,32 L 313,67 Q 313,82 298,82 L 210,82 L 195,82"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="104,120 92,124 92,115" style="fill:rgb(0,0,0)"/>
<path d="M190,82 L 77,82 Q 62,82 62,97 L 62,105 Q 62,120 77,120 L 83,120 L 98,120"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="298,44 287,48 287,40" style="fill:rgb(0,0,0)"/>
<path d="M275,44L293,44"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M298,44 L 306,44 Q 313,44 313,51 L 313,59"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M119,248L163,248A15 15 0 0 0 178 233A15 15 0 0 0 163 218L119,218A15 15 0 0 0 104 233A15 15 0 0 0 119 248Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="141" y="233" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ORDER</text>
<polygon points="201,233 190,237 190,229" style="fill:rgb(0,0,0)"/>
<path d="M178,233L196,233"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M217,248L221,248A15 15 0 0 0 236 233A15 15 0 0 0 221 218L217,218A15 15 0 0 0 201 233A15 15 0 0 0 217 248Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="219" y="233" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">BY</text>
<polygon points="272,233 260,237 260,229" style="fill:rgb(0,0,0)"/>
<path d="M236,233L266,233"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M272,248L402,248L402,218L272,218Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="337" y="233" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ordering-term</text>
<path d="M337,286A15 15 0 0 0 352 271A15 15 0 0 0 337 256A15 15 0 0 0 322 271A15 15 0 0 0 337 286Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="337" y="271" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="352,271 363,266 363,275" style="fill:rgb(0,0,0)"/>
<path d="M402,233 L 409,233 Q 417,233 417,248 L 417,256 Q 417,271 402,271 L 373,271 L 358,271"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M322,271 L 260,271 Q 245,271 245,256 L 245,248 Q 245,233 253,233 L 260,233"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="190,195 201,191 201,200" style="fill:rgb(0,0,0)"/>
<path d="M356,120 L 364,120 Q 371,120 371,135 L 371,180 Q 371,195 356,195 L 210,195 L 195,195"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="104,233 92,237 92,229" style="fill:rgb(0,0,0)"/>
<path d="M190,195 L 77,195 Q 62,195 62,210 L 62,218 Q 62,233 77,233 L 83,233 L 98,233"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="62,157 58,146 66,146" style="fill:rgb(0,0,0)"/>
<path d="M62,104L62,152"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M62,157L62,218"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M104,362L208,362L208,331L104,331Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="156" y="346" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">frame-spec</text>
<polygon points="417,346 405,351 405,342" style="fill:rgb(0,0,0)"/>
<path d="M208,346L411,346"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M432,362A15 15 0 0 0 447 346A15 15 0 0 0 432 331A15 15 0 0 0 417 346A15 15 0 0 0 432 362Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="432" y="346" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="470,346 458,351 458,342" style="fill:rgb(0,0,0)"/>
<path d="M447,346L464,346"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="474" cy="346" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="190,309 201,304 201,313" style="fill:rgb(0,0,0)"/>
<path d="M402,233 L 409,233 Q 417,233 417,248 L 417,294 Q 417,309 402,309 L 210,309 L 195,309"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="104,346 92,351 92,342" style="fill:rgb(0,0,0)"/>
<path d="M190,309 L 77,309 Q 62,309 62,324 L 62,331 Q 62,346 77,346 L 83,346 L 98,346"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="62,271 58,259 66,259" style="fill:rgb(0,0,0)"/>
<path d="M62,218L62,265"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M62,271L62,331"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="156,374 144,378 144,369" style="fill:rgb(0,0,0)"/>
<path d="M62,331 L 62,359 Q 62,374 77,374 L 135,374 L 150,374"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="278,346 266,351 266,342" style="fill:rgb(0,0,0)"/>
<path d="M156,374 L 233,374 Q 248,374 248,360 Q 248,346 260,346 L 272,346"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
<p><b><a href="https://www.sqlite.org/syntax/frame-spec.html" target="_blank">frame-spec:</a></b>
<button id='x85d69a33' onclick='hideorshow("x85d69a33","xb4ca64b3")'>show</button></p>
 <div id='xb4ca64b3' style='display:none;' class='imgcontainer'>
 <div style="max-width:1039px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 1039.65 522.72">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,92 39,97 39,88" style="fill:rgb(0,0,0)"/>
<path d="M9,17 L 16,17 Q 24,17 24,32 L 24,77 Q 24,92 34,92 L 45,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,108L120,108A15 15 0 0 0 135 92A15 15 0 0 0 120 77L66,77A15 15 0 0 0 50 92A15 15 0 0 0 66 108Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="93" y="92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">GROUPS</text>
<path d="M135,92 L 143,92 Q 150,92 150,77 L 150,32 Q 150,17 158,17 L 165,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="207,17 195,21 195,12" style="fill:rgb(0,0,0)"/>
<path d="M165,17L201,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M222,32L294,32A15 15 0 0 0 309 17A15 15 0 0 0 294 2L222,2A15 15 0 0 0 207 17A15 15 0 0 0 222 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="258" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">BETWEEN</text>
<polygon points="351,17 339,21 339,12" style="fill:rgb(0,0,0)"/>
<path d="M309,17L345,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M366,32L467,32A15 15 0 0 0 482 17A15 15 0 0 0 467 2L366,2A15 15 0 0 0 351 17A15 15 0 0 0 366 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="417" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">UNBOUNDED</text>
<polygon points="500,17 488,21 488,12" style="fill:rgb(0,0,0)"/>
<path d="M482,17L494,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M515,32L603,32A15 15 0 0 0 618 17A15 15 0 0 0 603 2L515,2A15 15 0 0 0 500 17A15 15 0 0 0 515 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="559" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">PRECEDING</text>
<polygon points="659,17 648,21 648,12" style="fill:rgb(0,0,0)"/>
<path d="M618,17L653,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M674,32L695,32A15 15 0 0 0 710 17A15 15 0 0 0 695 2L674,2A15 15 0 0 0 659 17A15 15 0 0 0 674 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="685" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">AND</text>
<polygon points="752,130 740,135 740,126" style="fill:rgb(0,0,0)"/>
<path d="M710,17 L 718,17 Q 725,17 725,32 L 725,115 Q 725,130 735,130 L 746,130"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M767,145L868,145A15 15 0 0 0 883 130A15 15 0 0 0 868 115L767,115A15 15 0 0 0 752 130A15 15 0 0 0 767 145Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="817" y="130" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">UNBOUNDED</text>
<polygon points="900,130 889,135 889,126" style="fill:rgb(0,0,0)"/>
<path d="M883,130L895,130"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M915,145L1007,145A15 15 0 0 0 1022 130A15 15 0 0 0 1007 115L915,115A15 15 0 0 0 900 130A15 15 0 0 0 915 145Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="961" y="130" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">FOLLOWING</text>
<path d="M1022,130 L 1029,130 Q 1037,130 1037,138 L 1037,145"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,17 39,21 39,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L45,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,32L109,32A15 15 0 0 0 125 17A15 15 0 0 0 109 2L66,2A15 15 0 0 0 50 17A15 15 0 0 0 66 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="87" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">RANGE</text>
<polygon points="142,17 130,21 130,12" style="fill:rgb(0,0,0)"/>
<path d="M125,17L136,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M142,17L157,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,55 39,59 39,50" style="fill:rgb(0,0,0)"/>
<path d="M9,17 L 16,17 Q 24,17 24,32 L 24,40 Q 24,55 34,55 L 45,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,70L101,70A15 15 0 0 0 116 55L116,55A15 15 0 0 0 101 39L66,39A15 15 0 0 0 50 55L50,55A15 15 0 0 0 66 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="83" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ROWS</text>
<polygon points="135,55 124,59 124,50" style="fill:rgb(0,0,0)"/>
<path d="M116,55L129,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M135,55 L 143,55 Q 150,55 150,47 L 150,40"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="207,168 195,172 195,164" style="fill:rgb(0,0,0)"/>
<path d="M165,17 L 173,17 Q 180,17 180,32 L 180,153 Q 180,168 190,168 L 201,168"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M222,183L323,183A15 15 0 0 0 338 168A15 15 0 0 0 323 153L222,153A15 15 0 0 0 207 168A15 15 0 0 0 222 183Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="272" y="168" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">UNBOUNDED</text>
<polygon points="361,168 350,172 350,164" style="fill:rgb(0,0,0)"/>
<path d="M338,168L355,168"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M376,183L464,183A15 15 0 0 0 479 168A15 15 0 0 0 464 153L376,153A15 15 0 0 0 361 168A15 15 0 0 0 376 183Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="420" y="168" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">PRECEDING</text>
<polygon points="1022,168 1010,172 1010,164" style="fill:rgb(0,0,0)"/>
<path d="M479,168L1016,168"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M1022,168 L 1029,168 Q 1037,168 1037,175 L 1037,183"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M207,221L256,221L256,191L207,191Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="231" y="206" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="279,206 267,210 267,201" style="fill:rgb(0,0,0)"/>
<path d="M256,206L273,206"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M294,221L382,221A15 15 0 0 0 397 206A15 15 0 0 0 382 191L294,191A15 15 0 0 0 279 206A15 15 0 0 0 294 221Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="338" y="206" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">PRECEDING</text>
<polygon points="1022,206 1010,210 1010,201" style="fill:rgb(0,0,0)"/>
<path d="M397,206L1016,206"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M1022,206 L 1029,206 Q 1037,206 1037,213 L 1037,221"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="207,206 195,210 195,201" style="fill:rgb(0,0,0)"/>
<path d="M180,153 L 180,191 Q 180,206 190,206 L 201,206"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M222,259L292,259A15 15 0 0 0 307 244A15 15 0 0 0 292 228L222,228A15 15 0 0 0 207 244A15 15 0 0 0 222 259Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="257" y="244" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CURRENT</text>
<polygon points="330,244 318,248 318,239" style="fill:rgb(0,0,0)"/>
<path d="M307,244L324,244"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M345,259L369,259A15 15 0 0 0 384 244A15 15 0 0 0 369 228L345,228A15 15 0 0 0 330 244A15 15 0 0 0 345 259Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="357" y="244" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ROW</text>
<polygon points="1022,244 1010,248 1010,239" style="fill:rgb(0,0,0)"/>
<path d="M384,244L1016,244"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M1022,244 L 1029,244 Q 1037,244 1037,251 L 1037,259"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="207,244 195,248 195,239" style="fill:rgb(0,0,0)"/>
<path d="M180,191 L 180,229 Q 180,244 190,244 L 201,244"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M351,70L400,70L400,39L351,39Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="375" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="423,55 412,59 412,50" style="fill:rgb(0,0,0)"/>
<path d="M400,55L417,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M438,70L526,70A15 15 0 0 0 541 55A15 15 0 0 0 526 39L438,39A15 15 0 0 0 423 55A15 15 0 0 0 438 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="482" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">PRECEDING</text>
<polygon points="618,55 606,59 606,50" style="fill:rgb(0,0,0)"/>
<path d="M541,55L612,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M618,55 L 625,55 Q 633,55 633,47 L 633,40"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="351,55 339,59 339,50" style="fill:rgb(0,0,0)"/>
<path d="M309,17 L 317,17 Q 324,17 324,32 L 324,40 Q 324,55 335,55 L 345,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M366,107L436,107A15 15 0 0 0 451 92A15 15 0 0 0 436 77L366,77A15 15 0 0 0 351 92A15 15 0 0 0 366 107Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="401" y="92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CURRENT</text>
<polygon points="474,92 462,97 462,88" style="fill:rgb(0,0,0)"/>
<path d="M451,92L468,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M489,108L513,108A15 15 0 0 0 528 92A15 15 0 0 0 513 77L489,77A15 15 0 0 0 474 92A15 15 0 0 0 489 108Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="501" y="92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ROW</text>
<polygon points="618,92 606,97 606,88" style="fill:rgb(0,0,0)"/>
<path d="M528,92L612,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M618,92 L 625,92 Q 633,92 633,85 L 633,77"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="351,92 339,97 339,88" style="fill:rgb(0,0,0)"/>
<path d="M324,39 L 324,77 Q 324,92 335,92 L 345,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M351,145L400,145L400,115L351,115Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="375" y="130" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="423,130 412,134 412,126" style="fill:rgb(0,0,0)"/>
<path d="M400,130L417,130"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M438,145L530,145A15 15 0 0 0 545 130A15 15 0 0 0 530 115L438,115A15 15 0 0 0 423 130A15 15 0 0 0 438 145Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="484" y="130" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">FOLLOWING</text>
<polygon points="618,130 606,134 606,126" style="fill:rgb(0,0,0)"/>
<path d="M545,130L612,130"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M618,130 L 625,130 Q 633,130 633,115 L 633,32 Q 633,17 640,17 L 648,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="351,130 339,134 339,126" style="fill:rgb(0,0,0)"/>
<path d="M324,77 L 324,115 Q 324,130 335,130 L 345,130"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="752,17 740,21 740,12" style="fill:rgb(0,0,0)"/>
<path d="M710,17L746,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M752,32L801,32L801,2L752,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="776" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="824,17 812,21 812,12" style="fill:rgb(0,0,0)"/>
<path d="M801,17L818,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M839,32L927,32A15 15 0 0 0 942 17A15 15 0 0 0 927 2L839,2A15 15 0 0 0 824 17A15 15 0 0 0 839 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="883" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">PRECEDING</text>
<polygon points="1022,17 1010,21 1010,12" style="fill:rgb(0,0,0)"/>
<path d="M942,17L1016,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M1022,17 L 1029,17 Q 1037,17 1037,32 L 1037,289 Q 1037,304 1022,304 L 1016,304 L 1001,304"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M767,70L837,70A15 15 0 0 0 852 55A15 15 0 0 0 837 39L767,39A15 15 0 0 0 752 55A15 15 0 0 0 767 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="802" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CURRENT</text>
<polygon points="875,55 863,59 863,50" style="fill:rgb(0,0,0)"/>
<path d="M852,55L869,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M890,70L914,70A15 15 0 0 0 929 55A15 15 0 0 0 914 39L890,39A15 15 0 0 0 875 55A15 15 0 0 0 890 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="902" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ROW</text>
<polygon points="1022,55 1010,59 1010,50" style="fill:rgb(0,0,0)"/>
<path d="M929,55L1016,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M1022,55 L 1029,55 Q 1037,55 1037,62 L 1037,70"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="752,55 740,59 740,50" style="fill:rgb(0,0,0)"/>
<path d="M710,17 L 718,17 Q 725,17 725,32 L 725,40 Q 725,55 735,55 L 746,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M752,107L801,107L801,77L752,77Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="776" y="92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="824,92 812,97 812,88" style="fill:rgb(0,0,0)"/>
<path d="M801,92L818,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M839,108L930,108A15 15 0 0 0 945 92A15 15 0 0 0 930 77L839,77A15 15 0 0 0 824 92A15 15 0 0 0 839 108Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="885" y="92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">FOLLOWING</text>
<polygon points="1022,92 1010,97 1010,88" style="fill:rgb(0,0,0)"/>
<path d="M945,92L1016,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M1022,92 L 1029,92 Q 1037,92 1037,100 L 1037,107"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="752,92 740,97 740,88" style="fill:rgb(0,0,0)"/>
<path d="M725,39 L 725,77 Q 725,92 735,92 L 746,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M461,410L529,410A15 15 0 0 0 544 395A15 15 0 0 0 529 380L461,380A15 15 0 0 0 446 395A15 15 0 0 0 461 410Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="495" y="395" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">EXCLUDE</text>
<polygon points="567,395 555,399 555,390" style="fill:rgb(0,0,0)"/>
<path d="M544,395L561,395"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M582,410L652,410A15 15 0 0 0 667 395A15 15 0 0 0 652 380L582,380A15 15 0 0 0 567 395A15 15 0 0 0 582 410Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="617" y="395" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CURRENT</text>
<polygon points="690,395 678,399 678,390" style="fill:rgb(0,0,0)"/>
<path d="M667,395L684,395"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M705,410L729,410A15 15 0 0 0 744 395A15 15 0 0 0 729 380L705,380A15 15 0 0 0 690 395A15 15 0 0 0 705 410Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="717" y="395" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ROW</text>
<polygon points="767,395 756,399 756,390" style="fill:rgb(0,0,0)"/>
<path d="M744,395L762,395"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M767,395 L 775,395 Q 782,395 782,402 L 782,410"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M461,448L529,448A15 15 0 0 0 544 433A15 15 0 0 0 529 417L461,417A15 15 0 0 0 446 433A15 15 0 0 0 461 448Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="495" y="433" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">EXCLUDE</text>
<polygon points="567,433 555,437 555,428" style="fill:rgb(0,0,0)"/>
<path d="M544,433L561,433"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M582,448L625,448A15 15 0 0 0 640 433A15 15 0 0 0 625 417L582,417A15 15 0 0 0 567 433A15 15 0 0 0 582 448Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="604" y="433" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">GROUP</text>
<polygon points="767,433 756,437 756,428" style="fill:rgb(0,0,0)"/>
<path d="M640,433L762,433"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M767,433 L 775,433 Q 782,433 782,440 L 782,448"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M461,486L529,486A15 15 0 0 0 544 470A15 15 0 0 0 529 455L461,455A15 15 0 0 0 446 470A15 15 0 0 0 461 486Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="495" y="470" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">EXCLUDE</text>
<polygon points="567,470 555,475 555,466" style="fill:rgb(0,0,0)"/>
<path d="M544,470L561,470"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M582,486L604,486A15 15 0 0 0 619 470A15 15 0 0 0 604 455L582,455A15 15 0 0 0 567 470A15 15 0 0 0 582 486Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="593" y="470" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">TIES</text>
<polygon points="767,470 756,475 756,466" style="fill:rgb(0,0,0)"/>
<path d="M619,470L762,470"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M767,470 L 775,470 Q 782,470 782,478 L 782,485"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M461,372L529,372A15 15 0 0 0 544 357A15 15 0 0 0 529 342L461,342A15 15 0 0 0 446 357A15 15 0 0 0 461 372Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="495" y="357" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">EXCLUDE</text>
<polygon points="567,357 555,361 555,353" style="fill:rgb(0,0,0)"/>
<path d="M544,357L561,357"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M582,372L591,372A15 15 0 0 0 606 357A15 15 0 0 0 591 342L582,342A15 15 0 0 0 567 357A15 15 0 0 0 582 372Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="586" y="357" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NO</text>
<polygon points="629,357 617,361 617,353" style="fill:rgb(0,0,0)"/>
<path d="M606,357L623,357"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M644,372L700,372A15 15 0 0 0 715 357A15 15 0 0 0 700 342L644,342A15 15 0 0 0 629 357A15 15 0 0 0 644 372Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="672" y="357" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">OTHERS</text>
<polygon points="767,357 756,361 756,353" style="fill:rgb(0,0,0)"/>
<path d="M715,357L762,357"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="890,516 879,520 879,511" style="fill:rgb(0,0,0)"/>
<path d="M767,357 L 775,357 Q 782,357 782,372 L 782,501 Q 782,516 797,516 L 870,516 L 885,516"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="894" cy="516" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="710,304 722,300 722,308" style="fill:rgb(0,0,0)"/>
<path d="M1001,304L716,304"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="527,516 516,520 516,511" style="fill:rgb(0,0,0)"/>
<path d="M710,304 L 434,304 Q 419,304 419,319 L 419,501 Q 419,516 434,516 L 507,516 L 522,516"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M527,516L797,516"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="446,357 434,361 434,353" style="fill:rgb(0,0,0)"/>
<path d="M419,342 L 419,349 Q 419,357 430,357 L 440,357"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="446,395 434,399 434,390" style="fill:rgb(0,0,0)"/>
<path d="M419,380 L 419,387 Q 419,395 430,395 L 440,395"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="446,433 434,437 434,428" style="fill:rgb(0,0,0)"/>
<path d="M419,417 L 419,425 Q 419,433 430,433 L 440,433"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="446,470 434,475 434,466" style="fill:rgb(0,0,0)"/>
<path d="M419,455 L 419,463 Q 419,470 430,470 L 440,470"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>
</div>
</div>
<p><b><a href="https://www.sqlite.org/syntax/type-name.html" target="_blank">type-name:</a></b>
<button id='x0968c67b' onclick='hideorshow("x0968c67b","x39373690")'>show</button></p>
 <div id='x39373690' style='display:none;' class='imgcontainer'>
 <div style="max-width:661px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 661.008 110.16">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="45,17 33,21 33,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L39,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M60,32L87,32A15 15 0 0 0 102 17A15 15 0 0 0 87 2L60,2A15 15 0 0 0 45 17A15 15 0 0 0 60 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="74" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">name</text>
<polygon points="165,92 153,97 153,88" style="fill:rgb(0,0,0)"/>
<path d="M102,17 L 123,17 Q 138,17 138,32 L 138,77 Q 138,92 149,92 L 159,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M180,108A15 15 0 0 0 195 92A15 15 0 0 0 180 77A15 15 0 0 0 165 92A15 15 0 0 0 180 108Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="180" y="92" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="212,92 201,97 201,88" style="fill:rgb(0,0,0)"/>
<path d="M195,92L207,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M212,108L350,108L350,77L212,77Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="281" y="92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">signed-number</text>
<polygon points="367,92 356,97 356,88" style="fill:rgb(0,0,0)"/>
<path d="M350,92L362,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M382,108A15 15 0 0 0 398 92A15 15 0 0 0 382 77A15 15 0 0 0 367 92A15 15 0 0 0 382 108Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="382" y="92" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">,</text>
<polygon points="415,92 403,97 403,88" style="fill:rgb(0,0,0)"/>
<path d="M398,92L409,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M415,108L553,108L553,77L415,77Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="484" y="92" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">signed-number</text>
<polygon points="570,92 558,97 558,88" style="fill:rgb(0,0,0)"/>
<path d="M553,92L564,92"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M585,108A15 15 0 0 0 600 92A15 15 0 0 0 585 77A15 15 0 0 0 570 92A15 15 0 0 0 585 108Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="585" y="92" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="651,17 640,21 640,12" style="fill:rgb(0,0,0)"/>
<path d="M600,92 L 608,92 Q 615,92 615,77 L 615,32 Q 615,17 630,17 L 630,17 L 645,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="655" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="165,55 153,59 153,50" style="fill:rgb(0,0,0)"/>
<path d="M102,17 L 123,17 Q 138,17 138,32 L 138,40 Q 138,55 149,55 L 159,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M180,70A15 15 0 0 0 195 55L195,55A15 15 0 0 0 180 39A15 15 0 0 0 165 55L165,55A15 15 0 0 0 180 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="180" y="55" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="212,55 201,59 201,50" style="fill:rgb(0,0,0)"/>
<path d="M195,55L207,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M212,70L350,70L350,39L212,39Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="281" y="55" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">signed-number</text>
<polygon points="367,55 356,59 356,50" style="fill:rgb(0,0,0)"/>
<path d="M350,55L362,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M382,70A15 15 0 0 0 398 55L398,55A15 15 0 0 0 382 39A15 15 0 0 0 367 55L367,55A15 15 0 0 0 382 70Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="382" y="55" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="600,55 589,59 589,50" style="fill:rgb(0,0,0)"/>
<path d="M398,55L594,55"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M600,55 L 608,55 Q 615,55 615,47 L 615,40"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="74,47 85,43 85,51" style="fill:rgb(0,0,0)"/>
<path d="M102,17 L 110,17 Q 117,17 117,32 L 117,32 Q 117,47 102,47 L 94,47 L 79,47"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M74,47 L 33,47 Q 18,47 18,32 L 18,32 Q 18,17 26,17 L 33,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="382,17 371,21 371,12" style="fill:rgb(0,0,0)"/>
<path d="M102,17L377,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M382,17L630,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
<p><b><a href="https://www.sqlite.org/syntax/signed-number.html" target="_blank">signed-number:</a></b>
<button id='x760f75df' onclick='hideorshow("x760f75df","x2ed92237")'>show</button></p>
 <div id='x2ed92237' style='display:none;' class='imgcontainer'>
 <div style="max-width:292px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 292.013 99.576">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,44 39,48 39,40" style="fill:rgb(0,0,0)"/>
<path d="M9,17 L 16,17 Q 24,17 24,30 Q 24,44 34,44 L 45,44"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,59A15 15 0 0 0 81 44L81,44A15 15 0 0 0 66 29A15 15 0 0 0 50 44L50,44A15 15 0 0 0 66 59Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="66" y="44" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">+</text>
<polygon points="122,17 111,21 111,12" style="fill:rgb(0,0,0)"/>
<path d="M81,44 L 88,44 Q 96,44 96,30 Q 96,17 106,17 L 116,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M137,32L244,32A15 15 0 0 0 259 17A15 15 0 0 0 244 2L137,2A15 15 0 0 0 122 17A15 15 0 0 0 137 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="191" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">numeric-literal</text>
<polygon points="282,17 271,21 271,12" style="fill:rgb(0,0,0)"/>
<path d="M259,17L276,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="286" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,82 39,86 39,77" style="fill:rgb(0,0,0)"/>
<path d="M9,17 L 16,17 Q 24,17 24,32 L 24,67 Q 24,82 34,82 L 45,82"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,97A15 15 0 0 0 81 82L81,82A15 15 0 0 0 66 67A15 15 0 0 0 50 82L50,82A15 15 0 0 0 66 97Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="66" y="82" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">-</text>
<path d="M81,82 L 88,82 Q 96,82 96,67 L 96,44 L 96,29"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="66,17 54,21 54,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L60,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M66,17L111,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>
</div>
</div>
<p><b><a href="https://www.sqlite.org/syntax/filter-clause.html" target="_blank">filter-clause:</a></b>
<button id='x0a2c23b6' onclick='hideorshow("x0a2c23b6","xfc7dfc35")'>show</button></p>
 <div id='xfc7dfc35' style='display:none;' class='imgcontainer'>
 <div style="max-width:422px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 422.381 34.56">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="32,17 20,21 20,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L26,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M47,32L93,32A15 15 0 0 0 108 17A15 15 0 0 0 93 2L47,2A15 15 0 0 0 32 17A15 15 0 0 0 47 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="70" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">FILTER</text>
<polygon points="131,17 119,21 119,12" style="fill:rgb(0,0,0)"/>
<path d="M108,17L125,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M146,32L146,32A15 15 0 0 0 161 17A15 15 0 0 0 146 2L146,2A15 15 0 0 0 131 17A15 15 0 0 0 146 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="146" y="17" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">(</text>
<polygon points="184,17 173,21 173,12" style="fill:rgb(0,0,0)"/>
<path d="M161,17L178,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M199,32L249,32A15 15 0 0 0 264 17A15 15 0 0 0 249 2L199,2A15 15 0 0 0 184 17A15 15 0 0 0 199 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="224" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">WHERE</text>
<polygon points="287,17 275,21 275,12" style="fill:rgb(0,0,0)"/>
<path d="M264,17L281,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M287,32L336,32L336,2L287,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="312" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="359,17 348,21 348,12" style="fill:rgb(0,0,0)"/>
<path d="M336,17L353,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M374,32A15 15 0 0 0 389 17A15 15 0 0 0 374 2A15 15 0 0 0 359 17A15 15 0 0 0 374 32Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="374" y="17" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">)</text>
<polygon points="413,17 401,21 401,12" style="fill:rgb(0,0,0)"/>
<path d="M389,17L407,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="416" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>
<p><b><a href="https://www.sqlite.org/syntax/ordering-term.html" target="_blank">ordering-term:</a></b>
<button id='x0c691371' onclick='hideorshow("x0c691371","x37157a20")'>show</button></p>
 <div id='x37157a20' style='display:none;' class='imgcontainer'>
 <div style="max-width:798px"><svg xmlns='http://www.w3.org/2000/svg' class="pikchr" viewBox="0 0 798.451 99.576">
<circle cx="5" cy="17" r="3.6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="32,17 20,21 20,12" style="fill:rgb(0,0,0)"/>
<path d="M9,17L26,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M32,32L81,32L81,2L32,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="56" y="17" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<polygon points="111,44 100,48 100,40" style="fill:rgb(0,0,0)"/>
<path d="M81,17 L 89,17 Q 96,17 96,30 Q 96,44 101,44 L 105,44"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M126,59L190,59A15 15 0 0 0 205 44L205,44A15 15 0 0 0 190 29L126,29A15 15 0 0 0 111 44L111,44A15 15 0 0 0 126 59Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="158" y="44" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">COLLATE</text>
<polygon points="228,44 217,48 217,40" style="fill:rgb(0,0,0)"/>
<path d="M205,44L223,44"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M244,59L349,59A15 15 0 0 0 364 44L364,44A15 15 0 0 0 349 29L244,29A15 15 0 0 0 228 44L228,44A15 15 0 0 0 244 59Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="296" y="44" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">collation-name</text>
<polygon points="406,17 394,21 394,12" style="fill:rgb(0,0,0)"/>
<path d="M364,44 L 372,44 Q 379,44 379,30 Q 379,17 389,17 L 400,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="243,17 232,21 232,12" style="fill:rgb(0,0,0)"/>
<path d="M81,17L238,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M243,17L394,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="447,82 436,86 436,77" style="fill:rgb(0,0,0)"/>
<path d="M406,17 L 413,17 Q 421,17 421,32 L 421,67 Q 421,82 431,82 L 441,82"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M462,97L492,97A15 15 0 0 0 508 82A15 15 0 0 0 492 67L462,67A15 15 0 0 0 447 82A15 15 0 0 0 462 97Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="477" y="82" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DESC</text>
<polygon points="549,17 538,21 538,12" style="fill:rgb(0,0,0)"/>
<path d="M508,82 L 515,82 Q 523,82 523,67 L 523,32 Q 523,17 533,17 L 543,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M462,59L479,59A15 15 0 0 0 494 44L494,44A15 15 0 0 0 479 29L462,29A15 15 0 0 0 447 44L447,44A15 15 0 0 0 462 59Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="471" y="44" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ASC</text>
<polygon points="447,44 436,48 436,40" style="fill:rgb(0,0,0)"/>
<path d="M421,29 L 421,36 Q 421,44 431,44 L 441,44"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M494,44 L 508,44 Q 523,44 523,36 L 523,29"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="477,17 466,21 466,12" style="fill:rgb(0,0,0)"/>
<path d="M406,17L472,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M477,17L538,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="591,44 579,48 579,40" style="fill:rgb(0,0,0)"/>
<path d="M549,17 L 557,17 Q 564,17 564,30 Q 564,44 574,44 L 585,44"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M606,59L648,59A15 15 0 0 0 663 44L663,44A15 15 0 0 0 648 29L606,29A15 15 0 0 0 591 44L591,44A15 15 0 0 0 606 59Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="627" y="44" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NULLS</text>
<polygon points="686,44 674,48 674,40" style="fill:rgb(0,0,0)"/>
<path d="M663,44L680,44"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M701,59L735,59A15 15 0 0 0 750 44L750,44A15 15 0 0 0 735 29L701,29A15 15 0 0 0 686 44L686,44A15 15 0 0 0 701 59Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="718" y="44" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">FIRST</text>
<polygon points="791,17 780,21 780,12" style="fill:rgb(0,0,0)"/>
<path d="M750,44 L 757,44 Q 765,44 765,30 Q 765,17 775,17 L 786,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M606,97L648,97A15 15 0 0 0 663 82A15 15 0 0 0 648 67L606,67A15 15 0 0 0 591 82A15 15 0 0 0 606 97Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="627" y="82" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">NULLS</text>
<polygon points="686,82 674,86 674,77" style="fill:rgb(0,0,0)"/>
<path d="M663,82L680,82"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M701,97L727,97A15 15 0 0 0 742 82A15 15 0 0 0 727 67L701,67A15 15 0 0 0 686 82A15 15 0 0 0 701 97Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="714" y="82" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">LAST</text>
<polygon points="591,82 579,86 579,77" style="fill:rgb(0,0,0)"/>
<path d="M564,29 L 564,67 Q 564,82 574,82 L 585,82"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M742,82 L 754,82 Q 765,82 765,67 L 765,44 L 765,29"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="670,17 659,21 659,12" style="fill:rgb(0,0,0)"/>
<path d="M549,17L665,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M670,17L780,17"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
</div>
</div>
</div>


<p>
The aggregate functions shown below are available by default. 
There are two more aggregates grouped with the <a href="https://www.sqlite.org/json1.html" target="_blank">JSON SQL functions</a>.
Applications can define custom aggregate functions using the
<a href="https://www.sqlite.org/c3ref/create_function.html" target="_blank">sqlite3_create_function()</a> interface.
API.</p>

<p>
In any aggregate function that takes a single argument, that argument
can be preceded by the keyword DISTINCT. In such cases, duplicate
elements are filtered before being passed into the aggregate function.
For example, the function "count(distinct X)" will return the number
of distinct values of column X instead of the total number of non-null
values in column X.
</p>

<a name="aggfilter"></a>

<p>
If a FILTER clause is provided, then only rows for which the <i>expr</i> is
true are included in the aggregate.
</p>

<a name="aggorderby"></a>

<p>
If an ORDER BY clause is provided, that clause determines the order in which
the inputs to the aggregate are processed. For aggregate functions like max()
and count(), the input order does not matter. But for things like
<a href="lang_aggfunc#group_concat">string_agg()</a> and <a href="https://www.sqlite.org/json1.html#jgroupobject" target="_blank">json_group_object()</a>, the ORDER BY clause will make a
difference in the result. If no ORDER BY clause is specified, the inputs to the
aggregate occur in an arbitrary order that might change from one invocation
to the next.
</p>

<p>
See also: <a href="lang_corefunc">scalar functions</a> and <a href="https://www.sqlite.org/windowfunctions.html" target="_blank">window functions</a>.

<a name="aggfunclist"></a>

</p><h2 id="list_of_built_in_aggregate_functions"><span>2. </span>List of built-in aggregate functions</h2>

<div class='columns' >
<ul style='padding-top:0;'>
<li><a href='lang_aggfunc.html#avg'>avg(X)</a></li>
<li><a href='lang_aggfunc.html#count'>count(*)</a></li>
<li><a href='lang_aggfunc.html#count'>count(X)</a></li>
<li><a href='lang_aggfunc.html#group_concat'>group_concat(X)</a></li>
<li><a href='lang_aggfunc.html#group_concat'>group_concat(X,Y)</a></li>
<li><a href='lang_aggfunc.html#max_agg'>max(X)</a></li>
<li><a href='lang_aggfunc.html#min_agg'>min(X)</a></li>
<li><a href='lang_aggfunc.html#group_concat'>string_agg(X,Y)</a></li>
<li><a href='lang_aggfunc.html#sumunc'>sum(X)</a></li>
<li><a href='lang_aggfunc.html#sumunc'>total(X)</a></li>
</ul>
</div>


<h2 id="descriptions_of_built_in_aggregate_functions"><span>3. </span>Descriptions of built-in aggregate functions</h2>
<dl>

<a name="avg"></a>
<dt><p><b>avg(<i>X</i>)</b></dt><dd><p>
The avg() function
returns the average value of all non-NULL <i>X</i> within a
group. String and BLOB values that do not look like numbers are
interpreted as 0.
The result of avg() is always a floating point value whenever
there is at least one non-NULL input even if all
inputs are integers. The result of avg() is NULL if
there are no non-NULL inputs. The result of avg() is computed
as <a href="lang_aggfunc#sumunc">total()</a>/<a href="lang_aggfunc#count">count()</a> so all of the constraints that apply to
<a href="lang_aggfunc#sumunc">total()</a> also apply to avg().
</dd>
<a name="count"></a>
<dt><p><b>count(<i>X</i>)<br />count(*)</b></dt><dd><p>
The count(X) function returns
a count of the number of times
that <i>X</i> is not NULL in a group. The count(*) function
(with no arguments) returns the total number of rows in the group.
</dd>
<a name="group_concat"></a>
<dt><p><b>group_concat(<i>X</i>)<br />group_concat(<i>X</i>,<i>Y</i>)<br />string_agg(<i>X</i>,<i>Y</i>)</b></dt><dd><p>
The group_concat() function returns
a string which is the concatenation of
all non-NULL values of <i>X</i>. If parameter <i>Y</i> is present then
it is used as the separator
between instances of <i>X</i>.A comma (",") is used as the separator
if <i>Y</i> is omitted.
<p>
The string_agg(X,Y) function is an alias
for group_concat(X,Y). String_agg() is compatible with PostgreSQL
and SQL-Server and group_concat() is compatible with MySQL.
<p>
The order of the concatenated elements is arbitrary unless an
ORDER BY argument is included immediately after the last parameter.
</dd>
<a name="max_agg"></a>
<dt><p><b>max(<i>X</i>)</b></dt><dd><p>
The max() aggregate function
returns the maximum value of all values in the group.
The maximum value is the value that would be returned last in an
ORDER BY on the same column. Aggregate max() returns NULL 
if and only if there are no non-NULL values in the group.
</dd>
<a name="min_agg"></a>
<dt><p><b>min(<i>X</i>)</b></dt><dd><p>
The min() aggregate function
returns the minimum non-NULL value of all values in the group.
The minimum value is the first non-NULL value that would appear
in an ORDER BY of the column.
Aggregate min() returns NULL if and only if there are no non-NULL
values in the group.
</dd>
<a name="sumunc"></a>
<dt><p><b>sum(<i>X</i>)<br />total(<i>X</i>)</b></dt><dd><p>
The sum() and total() aggregate functions
return the sum of all non-NULL values in the group.
If there are no non-NULL input rows then sum() returns
NULL but total() returns 0.0.
NULL is not normally a helpful result for the sum of no rows
but the SQL standard requires it and most other
SQL database engines implement sum() that way so SQLite does it in the
same way in order to be compatible.The non-standard total() function
is provided as a convenient way to work around this design problem
in the SQL language.</p>

<p>The result of total() is always a floating point value.
The result of sum() is an integer value if all non-NULL inputs are integers.
If any input to sum() is neither an integer nor a NULL,
then sum() returns a floating point value
which is an approximation of the mathematical sum.</p>

<p>Sum() will throw an "integer overflow" exception if all inputs
are integers or NULL
and an integer overflow occurs at any point during the computation.
No overflow error is ever raised if any prior input was a floating point
value.
Total() never throws an integer overflow.

<p>When summing floating-point values, if the magnitudes of the values
differ wildly then the resulting sum might be imprecise due to the fact that
<a href="https://www.sqlite.org/floatingpoint.html#fpapprox" target="_blank">IEEE 754 floating point values are approximations</a>.
Use the decimal_sum(X) aggregate in the <a href="https://www.sqlite.org/floatingpoint.html#decext" target="_blank">decimal extension</a> to obtain
an exact summation of floating point numbers. Consider this test case:

<p><blockquote><pre>
CREATE TABLE t1(x REAL);
INSERT INTO t1 VALUES(1.55e+308),(1.23),(3.2e-16),(-1.23),(-1.55e308);
SELECT sum(x), decimal_sum(x) FROM t1;
</pre></blockquote></p>

<p>The large values &plusmn;1.55e+308 cancel each other out, but the
cancellation does not occur until the end of the sum and in the meantime
the large +1.55e+308 swamps the tiny 3.2e-16 value. The end result is
an imprecise result for the sum(). The decimal_sum() aggregate
generates an exact answer, at the cost of additional CPU and memory usage.
Note also that decimal_sum() is not built into the SQLite core; it is a
<a href="https://www.sqlite.org/loadext.html" target="_blank">loadable extension</a>.

<p>If sum of inputs is too large to represent as a IEEE 754 floating
point value, then a +Infinity or -Infinity result may be returned.
If very large values with differing signs are used
such that the SUM() or TOTAL() function is
unable to determine if the correct result is +Infinity or -Infinity
or some other value in between, then the result is NULL. Hence, for
example, the following query returns NULL:

<p><blockquote><pre>
WITH t1(x) AS (VALUES(1.0),(-9e+999),(2.0),(+9e+999),(3.0))
 SELECT sum(x) FROM t1;
</pre></blockquote></p>
</dd>

</dl>

