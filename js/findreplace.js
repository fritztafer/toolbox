// findreplace

function findreplace() {
	document.getElementById("findreplace").innerHTML =
		'<textarea id="frInput" class="frTextarea" wrap="off"></textarea>' +
		'<div id="frMenu">' +
			'In > Out<br>' +
			'<input class="frButton" type="button" value="Run" onclick="frRun()"><br>' +
			'<input class="frButton" type="button" value="Clear" onclick="frClear()"><br>' +
			'<input class="frButton" type="button" value="In<Out" onclick="frCopy()">' +
		'</div>' +
		'<textarea readonly id="frOutput" class="frTextarea" wrap="off"></textarea>' +
		'<div id="frContainer">' +
			'Find: <textarea id="frFind" class="frFindReplace" wrap="off"></textarea><br>' +
			'Replace: <textarea id="frReplace" class="frFindReplace" wrap="off"></textarea>' +
		'</div>';
}

function frRun() {
	var input = document.getElementById("frInput").value;
	var find = document.getElementById("frFind").value;
	var replace = document.getElementById("frReplace").value;
	
	document.getElementById("frOutput").value = input.replaceAll(find, replace);
}

function frClear() {
	document.getElementById("frInput").value = "";
	document.getElementById("frOutput").value = "";
	document.getElementById("frFind").value = "";
	document.getElementById("frReplace").value = "";
}

function frCopy() {
	document.getElementById("frInput").value = document.getElementById("frOutput").value;
}