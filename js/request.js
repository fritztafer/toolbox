// request

function request() {}


// active elements with dynamic quantities are tracked here until request is prepared
var active = {"requests":{[0]:{"parameters":{[0]:{},"count":0},"headers":{[0]:{},"count":0}},"count":0}};

function resCb(data) { // this is useful for tracking/handling responses
	console.log(data);
	return JSON.stringify(data);
}

function sendReq() {
	for (request in Object.keys(active.requests)) {
		let index = Object.keys(active.requests)[request];

		if (index !== "count") {
			let [data, undefined] = gencURL(index);

			getResponse = function(callback) {
				var xhr = new XMLHttpRequest();

				xhr.onreadystatechange = function() { // whats different handling stuff here VS a callback function?
					if (xhr.readyState === 4 && xhr.status === 200) {
						console.log("done!\n", xhr);
						callback(xhr);
					} else {
						console.log("not done...\n", xhr);
					};
				};

				xhr.open(data.method, data.url, true);
				if (Object.keys(data.headers) != "") {
					for (i in Object.keys(data.headers)) {
						xhr.setRequestHeader(Object.keys(data.headers)[i], data.headers[Object.keys(data.headers)[i]]);
					}
				};
				xhr.send(data.body);
			};

			 // callback is not being fed into this correctly

			// https://stackoverflow.com/questions/5485495/how-can-i-take-advantage-of-callback-functions-for-asynchronous-xmlhttprequest
			
			/* let getData = (callback) => {
				var xhr = new XMLHttpRequest();

				xhr.addEventListener("readystatechange", () => {
					if (xhr.readyState === 4 && xhr.status === 200) {
						let response = xhr;
						callback(undefined, response);
					} else if (xhr.readyState === 4) {
						callback("something wrong with the request", undefined); // is this description accurate?
					} else {
						callback("no response recieved", undefined); // is this description accurate?
					};
				});

				xhr.open(data.method, data.url, true);

				if (Object.keys(data.headers) != "") {
					for (ii in Object.keys(data.headers)) {
						xhr.setRequestHeader(Object.keys(data.headers)[ii], data.headers[Object.keys(data.headers)[ii]]);
					}
				};

				xhr.send(data.body);
			}; */
			/* xhr.onload = function(){ // using addEventListener above is more customizable
				// use callback to push response to an object when ready
				console.log(xhr);
			}; */ 

			let newRep = Object.assign(document.createElement("div"),{id: "resNum-" + index});
			newRep.setAttribute("class","toolbox-request-responses");
			newRep.innerHTML =
				'<div id="resHead-' + index + '">\n' +
					'<h2 style="display:inline;">Response ' + String.fromCharCode(parseInt(index) + 65) + '</h2>\n' +
				'</div>\n' +
				'<div id="resInfo-' + index + '">\n' +
					'<h3>Request Info</h3>\n' +
					'Date & Time:\n' +
					new Date().toLocaleString() + '<br>\n' +
					'Method & URI:\n' +
					data.method + ' ' + data.url + '<br>\n' +
					'Headers:\n' +
					JSON.stringify(data.headers) + '<br>\n' +
					'Body:\n' +
					data.body + '\n' +
				'</div>\n' +
				'<div id="resText-' + index + '">\n' +
					'<h3>Response Text</h3>\n' +
					getResponse(resCb) + '\n' +
				'</div>\n';

			document.getElementById("resContainer").prepend(newRep);
		} else {};
	};
}

function resetAll() {}

function deleteAll() {
	// request();
	// active = {"requests":{[0]:{"parameters":{[0]:{},"count":0},"headers":{[0]:{},"count":0}},"count":0}};
}

function addReq() {
	active.requests.count += 1;
	let count = active.requests.count;
	active.requests[count] = {"parameters":{[0]:{},"count":0},"headers":{[0]:{},"count":0}};

	let newReq = Object.assign(document.createElement("div"),{id:"reqNum-" + count});
	newReq.setAttribute("class","toolbox-request-requests");
	newReq.innerHTML =
		'<div id="reqHeader-' + `${count}` + '">\n' +
			'<h2 style="display:inline;">Request ' + String.fromCharCode(count + 65) + '</h2>\n' +
		'</div>\n' +
		'<div id="reqRequired-' + `${count}` + '">\n' +
			'<h3>Method & URL</h3>\n' +
			'<select id="reqMethod-' + `${count}` + '" class="toolbox-select" style="width:85px">\n' +
				'<option value="GET">GET</option>\n' +
				'<option value="POST">POST</option>\n' +
				'<option value="PUT">PUT</option>\n' +
				'<option value="DELETE">DELETE</option>\n' +
				'<option value="PATCH">PATCH</option>\n' +
				'<option value="HEAD">HEAD</option>\n' +
				'<option value="OPTIONS">OPTIONS</option>\n' +
				'<option value="CONNECT">CONNECT</option>\n' +
				'<option value="TRACE">TRACE</option>\n' +
			'</select>\n' +
			'<input type="url" placeholder="url" id="reqURL-' + `${count}` + '" class="toolbox-request-input" value="" style="width:600px">\n' +
		'</div>\n' +
		'<div id="reqParams-' + `${count}` + '">\n' +
			'<h3>Parameters</h3>\n' +
			'<div id="reqParam-' + `${count}` + ',0">\n' +
				'<button type="button" class="toolbox-request-adddel-button" onclick="addParam(' + `${count}` + ')">+</button>\n' +
				'<input type="" placeholder="key" id="reqParamKey-' + `${count}` + ',0" class="toolbox-request-input" value="">\n' +
				'<input type="" placeholder="value" id="reqParamValue-' + `${count}` + ',0" class="toolbox-request-input" value="">\n' +
			'</div>\n' +
		'</div>\n' +
		'<div id="reqHeads-' + `${count}` + '">\n' +
			'<h3>Headers</h3>\n' +
			'<div id="reqHead-' + `${count}` + ',0">\n' +
				'<button type="button" class="toolbox-request-adddel-button" onclick="addHead(' + `${count}` + ')">+</button>\n' +
				'<input type="" placeholder="key" id="reqHeadKey-' + `${count}` + ',0" class="toolbox-request-input" value="">\n' +
				'<input type="" placeholder="value" id="reqHeadValue-' + `${count}` + ',0" class="toolbox-request-input" value="">\n' +
			'</div>\n' +
		'</div>\n' +
		'<div id="reqBody-' + `${count}` + '">\n' +
			'<h3>Request Body</h3>\n' +
			'<textarea placeholder="json data" id="reqInput-' + `${count}` + '" class="toolbox-request-textarea" value=""></textarea>\n' +
		'</div>\n' +
		'<div id="reqDelay-' + `${count}` + '" style="display:inline;">\n' +
			'<h3>Delay (ms)</h3>\n' +
			'<input placeholder="0" id="reqTime-' + `${count}` + '" class="toolbox-request-input" value="" style="width:140px;">\n' +
		'</div>\n' +
		'<span class="toolbox-request-buttons" style="margin-left:320px;">\n' +
			'<button class="request-button-delete" onclick="delReq(' + `${count}` + ')">Delete</button>\n' +
			'<button class="request-button-reset" onclick="resetReq(' + `${count}` + ')">Reset</button>\n' +
			'<button onclick="curlPopup(' + `${count}` + ')">Generate cURL</button>\n' +
		'</span>\n';
	document.getElementById("requests").append(newReq);
}

function curlPopup(request) {
	let curlPopup = Object.assign(document.createElement("div"),{
		id:"curlPopup-" + request,
		style:"margin-top: 9px;",
		innerHTML:gencURL(request)[1] +
		"<br><button onclick=\"copyToCB(" + request + ");\">Copy</button>" +
		"<button onclick=\"curlPopupClose(" + request + ");\">Close</button>"});

	if (document.getElementById("curlPopup-" + request) === null) {
		document.getElementById("reqNum-" + request).append(curlPopup);
	} else {
		document.getElementById("curlPopup-" + request).innerHTML = curlPopup.innerHTML;
	};
}

function curlPopupClose(request) {
	document.getElementById("curlPopup-" + request).remove();
}

function copyToCB(request) {
  window.getSelection().removeAllRanges();
  let range = document.createRange();
  range.selectNode(document.getElementById("curlPopup-" + request));
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}

function gencURL(request) {
	let method = document.getElementById("reqMethod-" + request).value;
	let url = document.getElementById("reqURL-" + request).value;
	let parameters = getParam(request);
	let headers = getHead(request);
	let body = document.getElementById("reqInput-" + request).value;
	let delay = document.getElementById("reqTime-" + request).value;

	let [preppedURL, preppedParam, preppedHead, preppedBody, iterateMe] = ["", "", "", "", 1];

	for (i in Object.keys(parameters)) {
		let index = Object.keys(parameters)[i]; // cant we just use i?
		
		if (index != "" && iterateMe < Object.keys(parameters).length) {
			preppedParam += index + "=" + parameters[index] + "&";
			iterateMe += 1;
		} else if (index != "" && iterateMe == Object.keys(parameters).length){
			preppedParam += index + "=" + parameters[index];
			iterateMe = 1;
		} else {};
	};

	for (i in Object.keys(headers)) {
		let index = Object.keys(headers)[i];
		
		if (index != "" && iterateMe <= Object.keys(headers).length) {
			preppedHead += "-H " + "\"" + index + ": " + headers[index] + "\" ";
			iterateMe += 1;
		} else {};
	};

	if (preppedParam != "") {
		preppedURL += url + "?" + preppedParam.replaceAll(" ", "+");
	} else {preppedURL = url;};

	if (body != "") {
		preppedBody = "-d '" + body + "'";	
	} else {};

	let data = {"method":method, "url":preppedURL, "headers":headers, "body":body, "delay":delay};
	let command = "curl -X " + method + " \"" + preppedURL + "\" " + preppedHead + preppedBody;

	return [data, command];
}

function getParam(request) {
	let data = {};

	for (let i in Object.keys(active.requests[request].parameters)) {
		let index = Object.keys(active.requests[request].parameters)[i];

		if (index !== "count") {
			let key = document.getElementById("reqParamKey-" + request + "," + index).value;
			let value = document.getElementById("reqParamValue-" + request + "," + index).value;
			data[key] = value;
		} else {};
	}

	return data;
}

function getHead(request) {
	let data = {};

	for (let i in Object.keys(active.requests[request].headers)) {
		let index = Object.keys(active.requests[request].headers)[i];

		if (index !== "count") {
			let key = document.getElementById("reqHeadKey-" + request + "," + index).value;
			let value = document.getElementById("reqHeadValue-" + request + "," + index).value;
			data[key] = value;
		} else {};
	}

	return data;
}

function resetReq(request) {
	active.requests[request] = {"parameters":{[0]:{},"count":0},"headers":{[0]:{},"count":0}};
	
	document.getElementById("reqNum-" + request).innerHTML = 
		'<div id="reqHeader-' + request + '">\n' +
			'<h2 style="display:inline;">Request ' + String.fromCharCode(request + 65) + '</h2>\n' +
		'</div>\n' +
		'<div id="reqRequired-' + request + '">\n' +
			'<h3>Method & URL</h3>\n' +
			'<select id="reqMethod-' + request + '" class="toolbox-select" style="width:85px">\n' +
				'<option value="GET">GET</option>\n' +
				'<option value="POST">POST</option>\n' +
				'<option value="PUT">PUT</option>\n' +
				'<option value="DELETE">DELETE</option>\n' +
				'<option value="PATCH">PATCH</option>\n' +
				'<option value="HEAD">HEAD</option>\n' +
				'<option value="OPTIONS">OPTIONS</option>\n' +
				'<option value="CONNECT">CONNECT</option>\n' +
				'<option value="TRACE">TRACE</option>\n' +
			'</select>\n' +
			'<input type="url" placeholder="url" id="reqURL-' + request + '" class="toolbox-request-input" value="" style="width:600px">\n' +
		'</div>\n' +
		'<div id="reqParams-' + request + '">\n' +
			'<h3>Parameters</h3>\n' +
			'<div id="reqParam-' + request + ',0">\n' +
				'<button type="button" class="toolbox-request-adddel-button" onclick="addParam(' + request + ')">+</button>\n' +
				'<input type="" placeholder="key" id="reqParamKey-' + request + ',0" class="toolbox-request-input" value="">\n' +
				'<input type="" placeholder="value" id="reqParamValue-' + request + ',0" class="toolbox-request-input" value="">\n' +
			'</div>\n' +
		'</div>\n' +
		'<div id="reqHeads-' + request + '">\n' +
			'<h3>Headers</h3>\n' +
			'<div id="reqHead-' + request + ',0">\n' +
				'<button type="button" class="toolbox-request-adddel-button" onclick="addHead(' + request + ')">+</button>\n' +
				'<input type="" placeholder="key" id="reqHeadKey-' + request + ',0" class="toolbox-request-input" value="">\n' +
				'<input type="" placeholder="value" id="reqHeadValue-' + request + ',0" class="toolbox-request-input" value="">\n' +
			'</div>\n' +
		'</div>\n' +
		'<div id="reqBody-' + request + '">\n' +
			'<h3>Request Body</h3>\n' +
			'<textarea placeholder="json data" id="reqInput-' + request + '" class="toolbox-request-textarea" value=""></textarea>\n' +
		'</div>\n' +
		'<div id="reqDelay-' + request + '" style="display:inline;">\n' +
			'<h3>Delay (ms)</h3>\n' +
			'<input placeholder="0" id="reqTime-' + request + '" class="toolbox-request-input" value="" style="width:140px;">\n' +
		'</div>\n' +
		'<span class="toolbox-request-buttons" style="margin-left:320px;">\n' +
			'<button style="pointer-events:none;color:#c0c0c0;background-color:#ffffff;" onclick="delReq()">Delete</button>\n' +
			'<button class="request-button-reset" onclick="resetReq(' + request + ')">Reset</button>\n' +
			'<button onclick="curlPopup(' + request + ')">Generate cURL</button>\n' +
		'</span>\n';
}

function delReq(request) {
	document.getElementById("reqNum-" + request).remove();
	delete active.requests[request];
}

function addParam(request) {
	active.requests[request].parameters.count += 1;
	let count = active.requests[request].parameters.count;
	active.requests[request].parameters[count] = {};

	let newParam = document.createElement("div"); 
	newParam.setAttribute("id", "reqParam-" + request + "," + count);
	newParam.innerHTML =
		'<button type="button" class="toolbox-request-adddel-button" onclick="delParam(' + `${request},${count}` + ')">-</button>\n' +
		'<input type="" placeholder="key" id="reqParamKey-' + `${request},${count}` + '" class="toolbox-request-input" value="">\n' +
		'<input type="" placeholder="value" id="reqParamValue-' + `${request},${count}` + '" class="toolbox-request-input" value="">\n';
	document.getElementById("reqParams-" + request).append(newParam);
}

function delParam(request, parameter) {
	document.getElementById("reqParam-" + request + "," + parameter).remove();
	delete active.requests[request].parameters[parameter];
}

function addHead(request) {
	active.requests[request].headers.count += 1;
	let count = active.requests[request].headers.count;
	active.requests[request].headers[count] = {};

	let newHead = document.createElement("div");
	newHead.setAttribute("id", "reqHead-" + request + "," + count);
	newHead.innerHTML =
		'<button type="button" class="toolbox-request-adddel-button" onclick="delHead(' + `${request},${count}` + ')">-</button>\n' +
		'<input type="" placeholder="key" id="reqHeadKey-' + `${request},${count}` + '" class="toolbox-request-input" value="">\n' +
		'<input type="" placeholder="value" id="reqHeadValue-' + `${request},${count}` + '" class="toolbox-request-input" value="">\n';
	document.getElementById("reqHeads-" + request).append(newHead);
}

function delHead(request, header) {
	document.getElementById("reqHead-" + request + "," + header).remove();
	delete active.requests[request].headers[header];
}