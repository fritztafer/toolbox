// textinfo

function textinfo() {
	document.getElementById("textinfo").innerHTML =
		'<textarea id="textinfoInput" class="textinfoTextarea" wrap="on"></textarea>' +
		'<div id="textinfoMenu">' +
			'In > Out<br>' +
			'<input class="textinfoButton" type="button" value="Run" onclick="textinfoRun()"><br>' +
			'<input class="textinfoButton" type="button" value="Clear" onclick="textinfoClear()">' +
		'</div>' +
		'<textarea id="textinfoOutput" class="textinfoTextarea" style="white-space: pre-wrap;"></textarea>';
}

function textinfoRun() {
	let input = document.getElementById("textinfoInput").value,
		characters = "Characters: " + input.length,
		wordcount =  "Word Count: " + textinfoWordcount(input),
		sentences =  "Sentences : " + textinfoSentences(input),
		paragraphs = "Paragraphs: " + textinfoParagraphs(input),
		wordOccur =  "Word Occur: " + textinfoWordOccur(input),
		charOccur =  "Char Occur: " + textinfoCharOccur(input),
		output = [characters, wordcount, sentences, paragraphs, wordOccur, charOccur];
	document.getElementById("textinfoOutput").value = output.join("\n");
}

function textinfoClear() {
	document.getElementById("textinfoInput").value = "";
	document.getElementById("textinfoOutput").value = "";
}

function textinfoWordcount(input) { // if input isn't blank, split by spaces or new lines and filter nulls then return length else return zero
	if (input.replaceAll(" ", "").replaceAll("\n", "") != "") {
		return input.split(/ |\n/).filter(function (value) {return value != ""}).length;
	} else {return 0;}
}

function textinfoSentences(input) { // split by sentences and filter nulls then return length
	return input.split(/[.!?\n]/).filter(function (value) {return value!= ""}).length;
}

function textinfoParagraphs(input) { // split by new lines and filter nulls then return length
	return input.split("\n").filter(function (value) {return value != ""}).length;
}

function textinfoWordOccur(input) { // clean input, count and sort the words, format the data for presentation
	let inClean = textinfoWordOccurClean(input);
	let words = {};
	let output = "";

	for (word of inClean) {words[word] = (words[word] || 0) + 1;}
	words = textinfoOccurSort(words);

	for (word in words) {
		output += word + ": " + words[word];
		if (Object.keys(words).indexOf(word) < Object.keys(words).length - 1) {output += ", ";}
	}

	return output;
}

function textinfoWordOccurClean(input) { // removes anything that is not a lowercase letter, number, or space, then splits to array and filters nulls
	let output = "";
	for (v of input) {if (/[a-z0-9'-\s]/i.test(v)) {output += v.toLowerCase()} else {output += " "}}
	return output.split(/ |\n|\t/).filter(function (value) {return value != ""});
}

function textinfoCharOccur(input) { // need to replace new line with \n and others
	let escapeMap = {"\n":"\\n","\t":"\\t","\r":"\\r","\b":"\\b","\f":"\\f","\v":"\\v","\0":"\\0"};
	let chars = {};
	let output = "";

	for (char of input.split("")) {chars[char] = (chars[char] || 0) + 1;}
	chars = textinfoOccurSort(chars);

    let keys = Object.keys(chars);
    keys.forEach((char, i) => {
        let displayChar = escapeMap[char] || char;
        output += `${displayChar}: ${chars[char]}`;
        if (i < keys.length - 1) output += ", ";
    });

	return output;
}

function textinfoOccurSort(input) { // sorts words alphabetically then by their occurrences from highest to lowest
	let words = Object.entries(input);

	words.sort(Intl.Collator().compare).sort(([, valueA], [, valueB]) => valueB - valueA);

	let sortedWords = {};
	words.forEach(([key, value]) => {sortedWords[key] = value;});

	return sortedWords;
}