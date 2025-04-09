// calculator
function calculator() {
	var cDisplay = document.getElementById("cDisplay");
	var cHistory = document.getElementById("cHistory");

	getCalculator();
}

function getCalculator() {
	document.getElementById("calculator").innerHTML =
		'<input id="cDisplay">' +
		'<div class="numberbox">' +
			'<button class="cButton" onclick="appendToDisplay(1)">1</button>' +
			'<button class="cButton" onclick="appendToDisplay(2)">2</button>' +
			'<button class="cButton" onclick="appendToDisplay(3)">3</button>' +
			'<button class="cButton" onclick="appendToDisplay(\' + \')">+</button>' +
			'<br>' +
			'<button class="cButton" onclick="appendToDisplay(4)">4</button>' +
			'<button class="cButton" onclick="appendToDisplay(5)">5</button>' +
			'<button class="cButton" onclick="appendToDisplay(6)">6</button>' +
			'<button class="cButton" onclick="appendToDisplay(\' - \')">-</button>' +
			'<br>' +
			'<button class="cButton" onclick="appendToDisplay(7)">7</button>' +
			'<button class="cButton" onclick="appendToDisplay(8)">8</button>' +
			'<button class="cButton" onclick="appendToDisplay(9)">9</button>' +
			'<button class="cButton" onclick="appendToDisplay(\' * \')">*</button>' +
			'<br>' +
			'<button class="cButton" onclick="appendToDisplay(0)">0</button>' +
			'<button class="cButton" onclick="clearDisplay()">C</button>' +
			'<button class="cButton" onclick="calculate()">=</button>' +
			'<button class="cButton" onclick="appendToDisplay(\' / \')">/</button>' +
			'<br>' +
			'<button class="cButton" onclick="appendToDisplay(\'(\')">(</button>' +
			'<button class="cButton" onclick="appendToDisplay(\')\')">)</button>' +
			'<button class="cButton" onclick="appendToDisplay(\'.\')">.</button>' +
			'<button class="cButton" onclick="appendToDisplay(\' ** \')">**</button>' +
		'</div>' +
		'History:' +
		'<div id="cHistory"></div>';

	document.getElementById("cDisplay").addEventListener("keydown", function(e) {
		var keyCode = e.keyCode;
		if (keyCode === 13) {
			calculate();
		} else {return};
	});
}

function appendToDisplay(value) {
	cDisplay.value += value.toString();
}

function clearDisplay() {
	cDisplay.value = "";
}

function appendToHistory(expression, result) {
	cHistory.innerText =
		expression + " = " + result + "\n" + cHistory.innerText;
}

function calculate() {
	try {
		const expression = cDisplay.value;
		const result = eval(expression);
		appendToHistory(expression, result);
		cDisplay.value = result;
	} catch (error) {cDisplay.value = "Error";}
}