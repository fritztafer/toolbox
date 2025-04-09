// index

function index() {
	var toolArray = tools.split("</a>");
	for (let i in toolArray) {
		if (i < toolArray.length - 1) { // minus one to not include dark mode button
			var tool = toolArray[i].substring(toolArray[i].indexOf("\"") + 1, toolArray[i].indexOf("."));
			document.getElementById("index").innerHTML += "<a href=\"" + tool + ".html\"><p>" + tool + "</p></a>";
		} else {return}
	}
}