// spacetool

function spacetool() {
	document.getElementById("spacetool").innerHTML =
		'<textarea id="spacetoolInput" class="spacetoolTextarea" wrap="off"></textarea>' +
		'<div id="spacetoolMenu">' +
			'In > Out' +
			'<div id="spacetoolOptions">' +
				'<input type="radio" id="spacetoolNewLine" name="spacetoolCharacter" value="NewLine"><label for="NewLine">\\n</label><br>' +
				'<input type="radio" id="spacetoolComma" name="spacetoolCharacter" value="Comma"><label for="Comma"> ,</label><br>' +
				'<input type="radio" id="spacetoolCustom" name="spacetoolCharacter" value="Custom"><label for="Custom">' +
					'<textarea id="spacetoolCustomChar"></textarea>' +
				'</label><br>' +
			'</div>' +
			'<input class="spacetoolButton" type="button" value="Run" onclick="spacetoolRun()"><br>' +
			'<input class="spacetoolButton" type="button" value="Clear" onclick="spacetoolClear()">' +
		'</div>' +
		'<textarea readonly id="spacetoolOutput" class="spacetoolTextarea" wrap="off"></textarea>' +
		'<div id="spacetoolExtraOptions">' +
			'Delimiter: <textarea id="spacetoolDelimiter" class="spacetoolExtraOption" wrap="off"></textarea><br>' +
			'Iteration: <textarea id="spacetoolIteration" class="spacetoolExtraOption" wrap="off"></textarea><br>' +
		'</div>';
}

function spacetoolRun() {
	var input = document.getElementById("spacetoolInput").value;
	var delimiter = document.getElementById("spacetoolDelimiter").value;
	var iteration = parseInt(document.getElementById("spacetoolIteration").value);
	var output = "";
	var items = [];
	var index = 0;
	var l = input.length;
	var i = 0;
	var r = 0;

	// crashes when iteration = 1
	if (isNaN(iteration)) { // insert charcter when delimiter is found
		while (i < l) {
			r = input.indexOf(delimiter, i) + 1;

			if (r > i) {
				items[index] = input.substring(i, r).trim();
				index += 1;
				i = r;
			} else if (r <= i) {
				items[index] = input.substring(i, l).trim();
				i = l;
			}
		}
	} else if (delimiter == "" && iteration > 0) { // insert character every iteration
		while (i < l) {
			r = iteration + i;

			if (r > i) {
				items[index] = input.substring(i, r);
				items[index + 1] = "";
				index += 2;
				i = r;
			} else if (r <= i) {
				items[index] = input.substring(i, l);
				i = l;
			}
		}
	} else if (delimiter != "" && iteration > 0) { // insert character when iteration of delimiter is found (currently not working)
		let skip = 1;

		while (i < l) {
			r = input.indexOf(delimiter, i) + 1;

			if (r > i) {
				if (skip == 1) {
					items[index] = input.substring(i, r).trim() + delimiter;
					i = r;
					skip += 1;
				} else if (skip < iteration) {
					items[index] += input.substring(i, r).trim() + delimiter;
					i = r;
					skip += 1;
				} else if (skip == iteration) {
					items[index] += input.substring(i, r).trim();
					i = r;
					skip = 1;
					index += 1;
				}
			} else if (r <= i) {
				if (skip == 1) {
					items[index] = input.substring(i, l).trim();
					i = l;
				} else if (skip <= iteration) {
					items[index] += input.substring(i, l).trim();
					i = l;
				}
			}

		}
	}

	for (let i in items) {
		if (items[i] == "" || items[i] == " ") {
			items.splice(i, 1);
		}
	}

	if (document.getElementById("spacetoolNewLine").checked) {
		output = items.join("\n");
	} else if (document.getElementById("spacetoolComma").checked) {
		output = items.join(", ");
	} else if (document.getElementById("spacetoolCustom").checked) {
		output = items.join(document.getElementById("spacetoolCustomChar").value);
	} else {
		output = "Select an operation";
	}

	document.getElementById("spacetoolOutput").value = output;
}

function spacetoolClear() {
	document.getElementById("spacetoolInput").value = "";
	document.getElementById("spacetoolOutput").value = "";
	document.getElementById("spacetoolNewLine").checked = false;
	document.getElementById("spacetoolComma").checked = false;
	document.getElementById("spacetoolDelimiter").checked = false;
}