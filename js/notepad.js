// notepad

function notepad() {
	document.getElementById("notepad").innerHTML =
		'<textarea id="textbox"></textarea><br>' +
		'Filename: <input id="notepadTitle">.txt' +
		'<input class="notepadButton" type="button" value="Save" onclick="saveNotepad()">' +
		'<input class="notepadButton" type="button" value="Clear" onclick="clearNotepad()">' +
		'<input class="notepadButton" id="notepadWrapButton" type="button" value="Wrap: ON" onclick="notepadWrap()">';
}

function notepadWrap() {
	var wrapStatus = document.getElementById("notepadWrapButton").value;
	if (wrapStatus == "Wrap: ON") {
		document.getElementById("notepadWrapButton").value = "Wrap: OFF";
		document.getElementById("textbox").style.whiteSpace = "preserve nowrap";
	}
	if (wrapStatus == "Wrap: OFF") {
		document.getElementById("notepadWrapButton").value = "Wrap: ON";
		document.getElementById("textbox").style.whiteSpace = "pre-wrap";
	}
}

function saveNotepad() {
	var text = document.getElementById("textbox").value;
	text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
	var blob = new Blob([text], { type: "text/plain"});
	var anchor = document.createElement("a");
	anchor.download = document.getElementById("notepadTitle").value + ".txt";
	if (anchor.download == ".txt") {anchor.download = new Date().toLocaleString() + ".txt";};
	anchor.href = window.URL.createObjectURL(blob);
	anchor.target = "_blank";
	anchor.style.display = "none"; // just to be safe!
	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);
 }

function clearNotepad() {
	document.getElementById("textbox").value = "";
	document.getElementById("notepadTitle").value = "";
}