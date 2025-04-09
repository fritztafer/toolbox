// formatter

function formatter() {
	document.getElementById("formatter").innerHTML =
        '<textarea id="formatterInputTextarea" class="formatterTextarea" wrap="off"></textarea>' +
        '<div id="formatterMenu">' +
            'In > Out' +
            '<input class="formatterButton" type="button" value="Run" onclick="formatterRun()"><br>' +
            '<input class="formatterButton" type="button" value="Clear" onclick="formatterClear()">' +
        '</div>' +
        '<textarea readonly id="formatterOutputTextarea" class="formatterTextarea" wrap="off"></textarea>' +
        '<div id="formatterExtraOptions">' +
            'Format: <textarea id="formatterFormat" class="formatterExtraOption"></textarea>' +
        '</div>';
}

function formatterRun() {
    var format = document.getElementById("formatterFormat").value;
    var items = document.getElementById("formatterInputTextarea").value.split("\n");
    var output = [];

    for (line in items) {
        let char = 0;
        let word = 0;
        output[line] = "";

        for (i in format) {
            if (format[i] == "?") {
                if (items[line][char] === undefined) {}
                else {output[line] += items[line][char];}
                char += 1;
            } else if (format[i] == "*") {
                let words = items[line].split(" ");
                if (words[word] === undefined) {}
                else {
                    output[line] += words[word];
                    char += words[word].length + 1;
                }
                word += 1;
            } else {
                output[line] += format[i];
            }
        }
    }

    document.getElementById("formatterOutputTextarea").value = output.join("\n")
}

function formatterClear() {
    document.getElementById("formatterInputTextarea").value = "";
    document.getElementById("formatterOutputTextarea").value = "";
    document.getElementById("formatterFormat").value = "";
}