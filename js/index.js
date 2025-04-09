// index

function index() {
	let toolArray = tools.split("</a>");
	console.log(toolArray);
	for (i in toolArray) {
		if (i < toolArray.length - 1 && i != 0) { // dont include index or dark mode button
			let tool = toolArray[i].substring(toolArray[i].indexOf("tool/") + 5, toolArray[i].indexOf("."));
			document.getElementById("index").innerHTML += "<a href=\"/tool/" + tool + ".html\"><p>" + tool + "</p></a>";
		}
	}
}