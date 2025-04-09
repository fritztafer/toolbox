// global

function run() {
	let url = window.location.pathname;
	let shortname = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."));
	if (shortname == "/") {shortname = "index"};

	let toolScript = Object.assign(document.createElement("script"),{src:"js/" + shortname + ".js"});
	let toolTitle = Object.assign(document.createElement("h1"),{innerText:shortname});
	let toolDiv = Object.assign(document.createElement("div"),{id:shortname});
	let toolRun = Object.assign(document.createElement("script"),{innerHTML:shortname + "();"});
	let banner = Object.assign(document.createElement("div"),{id:"banner"});

	tools = // used by index.html. Add new tools here, eventually use jQuery/http server to pull names of .html files
		'<a href="index.html"><img class="bannerImg" src="img/index.png" title="index"></a>' +
		'<a href="notepad.html"><img class="bannerImg" src="img/notepad.png" title="notepad"></a>' +
		'<a href="calculator.html"><img class="bannerImg" src="img/calculator.png" title="calculator"></a>' +
		'<a href="findreplace.html"><img class="bannerImg" src="img/findreplace.png" title="findreplace"></a>' +
		'<a href="reverser.html"><img class="bannerImg" src="img/reverser.png" title="reverser"></a>' +
		'<a href="sorter.html"><img class="bannerImg" src="img/sorter.png" title="sorter"></a>' +
		'<a href="textinfo.html"><img class="bannerImg" src="img/textinfo.png" title="textinfo"></a>' +
		'<a href="casetool.html"><img class="bannerImg" src="img/casetool.png" title="casetool"></a>' +
		'<a href="spacetool.html"><img class="bannerImg" src="img/spacetool.png" title="spacetool"></a>' +
		'<a href="formatter.html"><img class="bannerImg" src="img/formatter.png" title="formatter"></a>' +
		'<a href="timetool.html"><img class="bannerImg" src="img/timetool.png" title="timetool"></a>' +
		'<a href="request.html"><img class="bannerImg" src="img/request.png" title="request"></a>' +
		'<a href="jsprep.html"><img class="bannerImg" src="img/jsprep.png" title="jsprep"></a>' +
		'<button id="lightButton" onclick="lightMode();">Dark Mode Toggle</button>';
	let activeTool = tools.indexOf(shortname) - 7;
	if (activeTool > 0) {
		banner.innerHTML = tools.substring(0, activeTool) + ' id="active"' + tools.substring(activeTool);
	} else {banner.innerHTML = tools};

	document.head.prepend(Object.assign(document.createElement("title"),{textContent:"toolbox - " + shortname}));
	document.head.append(toolScript);
	document.body.append(banner, toolTitle, toolDiv);
	window.onload = function() {document.body.append(toolRun)};
}

function lightMode() {
	let element = document.body;
	element.classList.toggle("light");
}