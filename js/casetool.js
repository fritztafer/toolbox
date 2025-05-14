// casetool

function casetool() {
	document.getElementById("casetool").innerHTML =
		'<textarea id="ctInput" class="ctTextarea" wrap="off"></textarea>' +
		'<div id="ctMenu">' +
			'In > Out' +
			'<div id="ctOptions">' +
				'<input type="radio" id="ctUp" name="ctDirection" value="Up"><label for="Up">UP</label><br>' +
				'<input type="radio" id="ctDown" name="ctDirection" value="Down"><label for="Down">down</label><br>' +
				'<input type="radio" id="ctTitle" name="ctDirection" value="Title"><label for="Title">Title</label><br>' +
				'<input type="radio" id="ctCamel" name="ctDirection" value="Camel"><label for="Camel">cCase</label><br>' +
			'</div>' +
			'<input class="ctButton" type="button" value="Run" onclick="ctRun()"><br>' +
			'<input class="ctButton" type="button" value="Clear" onclick="ctClear()">' +
		'</div>' +
		'<textarea readonly id="ctOutput" class="ctTextarea" wrap="off"></textarea>';
}

function ctRun() {
	var input = document.getElementById("ctInput").value;
	var output = "";
	
	if (document.getElementById("ctUp").checked) {
		output = input.toUpperCase();
	
	} else if (document.getElementById("ctDown").checked) {
		output = input.toLowerCase();
	
	} else if (document.getElementById("ctTitle").checked) {
		var t = "";
		var l = input.length;
		var i = 0;
		var r = 0;
		
		while (i < l) {
			r = input.indexOf(" ", i) + 1;
					
			if (r > i) {
				t = input.substring(i, r);
				t = t.replace(t.substring(0, 1), t.substring(0, 1).toUpperCase());
				output += t;
				i = r;
			} else if (r <= i) {
				t = input.substring(i, l);
				t = t.replace(t.substring(0, 1), t.substring(0, 1).toUpperCase());
				output += t;
				i = l
			}
		}

	} else if (document.getElementById("ctCamel").checked) {
		var t = "";
		var l = input.length;
		var i = 0;
		var r = 0;
		
		while (i < l) {
			r = input.indexOf(" ", i) + 1;
					
			if (r > i) {
				t = input.substring(i, r);
				t = t.replace(t.substring(0, 1), t.substring(0, 1).toUpperCase());
				output += t.trim();
				i = r;
			} else if (r <= i) {
				t = input.substring(i, l);
				t = t.replace(t.substring(0, 1), t.substring(0, 1).toUpperCase());
				output += t;
				i = l
			}
		}

	} else {
		output = "Select an operation";
	}

	document.getElementById("ctOutput").value = output;
}

function ctClear() {
	document.getElementById("ctInput").value = "";
	document.getElementById("ctOutput").value = "";
	document.getElementById("ctUp").checked = false;
	document.getElementById("ctDown").checked = false;
	document.getElementById("ctTitle").checked = false;
	document.getElementById("ctCamel").checked = false;
}