// reverser

function reverser() {
	document.getElementById("reverser").innerHTML =
		'<textarea id="reverserInput" class="reverserTextarea" wrap="off"></textarea>' +
		'<div id="reverserMenu">' +
			'In > Out<br>' +
			'<input class="reverserButton" type="button" value="Run" onclick="reverserRun()"><br>' +
			'<input class="reverserButton" type="button" value="Clear" onclick="reverserClear()">' +
		'</div>' +
		'<textarea readonly id="reverserOutput" class="reverserTextarea" wrap="off"></textarea>';
}

function reverserRun() {
	document.getElementById("reverserOutput").value = document.getElementById("reverserInput").value.split("").reverse().join("");;
}

function reverserClear() {
	document.getElementById("reverserInput").value = "";
	document.getElementById("reverserOutput").value = "";
}