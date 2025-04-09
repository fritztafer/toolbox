// sorter

function sorter() {
	document.getElementById("sorter").innerHTML =
		'<textarea id="sorterInput" class="sorterTextarea" wrap="off"></textarea>' +
		'<div id="sorterMenu">' +
			'In > Out' +
			'<div id="sorterOptions">' +
				'<input type="radio" id="sorterDescend" name="sorterDirection" value="Descend"><label for="Descend">↓</label><br>' +
				'<input type="radio" id="sorterAscend" name="sorterDirection" value="Ascend"><label for="Ascend">↑</label><br>' +
			'</div>' +
			'<input class="sorterButton" type="button" value="Run" onclick="sorterRun()"><br>' +
			'<input class="sorterButton" type="button" value="Clear" onclick="sorterClear()">' +
		'</div>' +
		'<textarea readonly id="sorterOutput" class="sorterTextarea" wrap="off"></textarea>' +
		'<div id="sorterContainer">' +
			'Delimiter: <textarea id="sorterDelimiter" wrap="off"></textarea><br>' +
		'</div>';
}

function sorterRun() {
	var input = document.getElementById("sorterInput").value;
	var delimiter = document.getElementById("sorterDelimiter").value;
	var output = input.split(delimiter).sort(Intl.Collator().compare);

	if (document.getElementById("sorterDescend").checked) {}
	else if (document.getElementById("sorterAscend").checked) {output.reverse()}
	else {output = "Select an operation".split()}

	document.getElementById("sorterOutput").value = output.join(delimiter);
}

function sorterClear() {
	document.getElementById("sorterInput").value = "";
	document.getElementById("sorterOutput").value = "";
	document.getElementById("sorterDelimiter").value = "";
	document.getElementById("sorterDescend").checked = false;
	document.getElementById("sorterAscend").checked = false;
}