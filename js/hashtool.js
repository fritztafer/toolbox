// hasher.js

function hashtool() {
    document.getElementById("hashtool").innerHTML =
        '<textarea id="hashtool-input" class="hashtool-textarea" wrap="off"></textarea>' +
        '<div id="hashtool-menu">' +
            'In > Out' +
            '<div id="hashtool-options">' +
                '<input type="radio" name="hashtool-algorithm" value="SHA-1"><label for="SHA-1">SHA1</label><br>' +
				'<input type="radio" name="hashtool-algorithm" value="SHA-256" checked="true"><label for="SHA-256">SHA256</label><br>' +
				'<input type="radio" name="hashtool-algorithm" value="SHA-384"><label for="SHA-384">SHA384</label><br>' +
                '<input type="radio" name="hashtool-algorithm" value="SHA-512"><label for="SHA-512">SHA512</label><br>' +
			'</div>' +
            '<input class="hashtool-button" type="button" value="Run" onclick="hashtoolRun()"><br>' +
            '<input class="hashtool-button" type="button" value="Clear" onclick="hashtoolClear()">' +
        '</div>' +
        '<textarea readonly id="hashtool-output" class="hashtool-textarea" wrap="off"></textarea>' +
        '<div id="hashtool-extra">' +
			'<input type="file" id="hashtool-fileInput">' +
		'</div>';

    document.querySelector('#hashtool-fileInput').addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (file) {
            document.getElementById("hashtool-input").value = "";
            const hash = await hashFile(file);
            document.getElementById("hashtool-output").value = hash;
        }
    });
}

async function hashtoolRun() {
    document.getElementById("hashtool-fileInput").value = "";
    document.getElementById("hashtool-output").value = await hashText(document.getElementById("hashtool-input").value);
}

function hashtoolClear() {
    document.getElementById("hashtool-input").value = "";
	document.getElementById("hashtool-output").value = "";
    document.getElementById("hashtool-fileInput").value = "";
}

async function hashText(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest(getAlgorithm(), data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex.toUpperCase();
}

async function hashFile(file) {
    const arrayBuffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest(getAlgorithm(), arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex.toUpperCase();
}

function getAlgorithm() {
    for (let radio of document.querySelectorAll("input[name='hashtool-algorithm']")) {
        if (radio.checked) {
            return radio.value;
        }
    }
}