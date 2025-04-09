// jsprep

function jsprep() {
	document.getElementById("jsprep").innerHTML =
		'<textarea id="jpInput" class="jpTextarea" wrap="off"></textarea>' +
		'<div id="jpMenu">' +
			'In > Out' +
			'<div id="jpOptions">' +
				'<input type="radio" id="jpPrep" name="jpDirection" value="Prep"><label for="Prep">Prep</label><br>' +
				'<input type="radio" id="jpParse" name="jpDirection" value="Parse"><label for="Parse">Parse</label><br>' +
			'</div>' +
			'<input class="jpButton" type="button" value="Run" onclick="jpRun()"><br>' +
			'<input class="jpButton" type="button" value="Clear" onclick="jpClear()">' +
		'</div>' +
		'<textarea readonly id="jpOutput" class="jpTextarea" wrap="off"></textarea>';
}

function jpRun() {
	var input = document.getElementById("jpInput").value;
	var output = "";
	var temp = "";
	var t = "";
	var l = input.length;
	var i = 0;
	var r = 0;

	if (document.getElementById("jpPrep").checked) {
		while (i < l) {
			r = input.indexOf("\n", i) + 1;
			
			if (r > i) {
				temp = input.substring(i, r);
				t = temp.substring(0, temp.lastIndexOf("\t") + 1);
				output += temp.replace(t, t + "'");
				i = r;
			} else if (r <= i) {
				temp = input.substring(i, l);
				t = temp.substring(0, temp.lastIndexOf("\t") + 1);
				output += temp.replace(t, t + "'") + "';";
				i = l;
			}
		}
	output = output.replace(/\n/g, "' +\n").replace(/'' \+/g, "");

	} else if (document.getElementById("jpParse").checked) {
		while (i < l) {
			r = input.indexOf("\n", i) + 1;

			if (r > i) {
				temp = input.substring(i, r);
				t = temp.substring(0, temp.indexOf("'") + 1);
				output += temp.replace(t, t.substring(0, t.length - 1));
				i = r;
			} else if (r <= i) {
				temp = input.substring(i, l).replace("';", "");
				t = temp.substring(0, temp.indexOf("'") + 1);
				output += temp.replace(t, t.substring(0, t.length - 1));
				i = l;
			}
		}
	output = output.replace(/' \+/g, "");

	} else {
		output = "Select an operation";
	}

	document.getElementById("jpOutput").value = output;
}

function jpClear() {
	document.getElementById("jpInput").value = "";
	document.getElementById("jpOutput").value = "";
	document.getElementById("jpPrep").checked = false;
	document.getElementById("jpParse").checked = false;
}