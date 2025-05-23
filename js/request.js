// request

function request() {
	document.getElementById("request").innerHTML =
		`
		<div id="requests" style="margin-left:20px;overflow-y:auto;height:800px;width:760px;display:inline-block;">
			<span style="background-color:black;position:-webkit-sticky;position:sticky;top:0px;z-index:999;padding-top:10px;padding-bottom:10px;padding-right:10px;margin-left:10px;">
				<h2 style="display:inline;">Requests</h2>
				<button onclick="addReq()">Add request</button>
				<span class="toolbox-request-buttons" style="margin-left:280px;">
					<button onclick="deleteAll()" class="request-button-delete">Delete all</button>
					<button class="request-button-reset" onclick="resetAll()">Reset all</button>
					<button onclick="sendReq()" style="background-color:green;color:white;">Send requests</button>
				</span>
			</span>
			<div id="reqNum-0" class="toolbox-request-requests">
				<div id="reqHeader-0">
					<h2 style="display:inline;">Request A</h2>
				</div>
				<div id="reqRequired-0">
					<h3>Method & URL</h3>
					<select id="reqMethod-0" class="toolbox-select" style="width:85px">
						<option value="GET">GET</option>
						<option value="POST">POST</option>
						<option value="PUT">PUT</option>
						<option value="DELETE">DELETE</option>
						<option value="PATCH">PATCH</option>
						<option value="HEAD">HEAD</option>
						<option value="OPTIONS">OPTIONS</option>
						<option value="CONNECT">CONNECT</option>
						<option value="TRACE">TRACE</option>
					</select>
					<input type="url" placeholder="url" id="reqURL-0" class="toolbox-request-input" value="" style="width:600px">
				</div>
				<div id="reqParams-0">
					<h3>Parameters</h3>
					<div id="reqParam-0,0">
						<button type="button" class="toolbox-request-adddel-button" onclick="addParam(0)">+</button>
						<input type="" placeholder="key" id="reqParamKey-0,0" class="toolbox-request-input" value="">
						<input type="" placeholder="value" id="reqParamValue-0,0" class="toolbox-request-input" value="">
					</div>
				</div>
				<div id="reqHeads-0">
					<h3>Headers</h3>
					<div id="reqHead-0,0">
						<button type="button" class="toolbox-request-adddel-button" onclick="addHead(0)">+</button>
						<input type="" placeholder="key" id="reqHeadKey-0,0" class="toolbox-request-input" value="">
						<input type="" placeholder="value" id="reqHeadValue-0,0" class="toolbox-request-input" value="">
					</div>
				</div>
				<div id="reqBody-0">
					<h3>Request Body</h3>
					<textarea placeholder="json data" id="reqInput-0" class="toolbox-request-textarea" value=""></textarea>
				</div>
				<div id="reqDelay-0" style="display:inline;">
					<h3>Delay (ms)</h3>
					<input placeholder="0" id="reqTime-0" class="toolbox-request-input" value="" style="width:140px;">
				</div>
				<span class="toolbox-request-buttons" style="margin-left:320px;">
					<button class="request-button-delete" onclick="delReq(0)">Delete</button>
					<button class="request-button-reset" onclick="resetReq(0)">Reset</button>
					<button onclick="curlPopup(0)">Generate cURL</button>
				</span>
			</div>
		</div>
		<span style="margin-left:200px;"></span>
		<div id="responses" style="overflow-y:auto;height:800px;width:739px;display:inline-block">
			<span style="background-color:black;position:-webkit-sticky;position:sticky;top:0px;z-index:999;padding-top:10px;padding-bottom:10px;padding-right:10px;margin-left:10px;">
				<h2 style="display:inline;">Responses</h2>
			</span>
			<span id="resContainer"></span>
		</div>
		`
}

// active elements with dynamic quantities are tracked here until request is prepared
var active = {"requests":{[0]:{"parameters":{[0]:{},"count":0},"headers":{[0]:{},"count":0}},"count":0}};
var responseIndex = 0; // iterable to provide more functinality in responses

function sendReq() {
	for (request in Object.keys(active.requests)) {
		let index = Object.keys(active.requests)[request];

		if (index !== "count") {
			let [data, undefined] = gencURL(index);
			let responseDiv = Object.assign(document.createElement("div"),{id: "resText-" + index + "-" + responseIndex, innerHTML: "<h3>Response Text</h3><pre>Waiting...</pre>"});
			let newRep = Object.assign(document.createElement("div"),{id: "resNum-" + index + "-" + responseIndex, className: "toolbox-request-responses"});

			newRep.innerHTML =
				'<div id="resHead-' + index + '-' + responseIndex + '">' +
					'<h2 style="display:inline;">Response ' + String.fromCharCode(parseInt(index) + 65) + '</h2>' +
				'</div>' +
				'<div id="resInfo-' + index + '-' + responseIndex + '">' +
					'<h3>Request Info</h3>' +
					'Date & Time: ' +
					new Date().toLocaleString() + ` (${data.delay} ms delay)` + '<br>' +
					'Method & URI: ' +
					data.method + ' ' + data.url + '<br>' +
					'Headers: ' +
					data.headers + '<br>' +
					'Body: ' +
					data.body +
				'</div>';

			newRep.appendChild(responseDiv);
			document.getElementById("resContainer").prepend(newRep);

			setTimeout(() => {
				getResponse(function(xhr) {
					responseDiv.innerHTML = 
						`
						<h3>Response Text</h3>
						<button onclick="copyToCB(document.querySelector('#resText-${index}-${responseIndex}').lastElementChild);">Copy</button>
						<button onclick="prettify(document.querySelector('#resText-${index}-${responseIndex}').lastElementChild);">Prettify</button>
						<button onclick="minify(document.querySelector('#resText-${index}-${responseIndex}').lastElementChild);">Minify</button>
						<pre>${xhr.responseText}</pre>
						`
				});
			}, data.delay);

			function getResponse(callback) {
				var xhr = new XMLHttpRequest();

				xhr.onreadystatechange = function() {
					if (xhr.readyState === 4 && xhr.status === 200) {
						console.log("done!\n", xhr);
						callback(xhr);
						responseIndex += 1;
					} else {
						console.log("not done...\n", xhr);
					}
				}

				xhr.open(data.method, data.url, true);
				if (Object.keys(data.headers) != "") {
					for (i in Object.keys(data.headers)) {
						xhr.setRequestHeader(Object.keys(data.headers)[i], data.headers[Object.keys(data.headers)[i]]);
					}
				}
				xhr.send(data.body);
			}
		}
	}
}

function resetAll() {
	for (let req of Object.keys(active.requests)) {
		if (req === "count") {break;}
		resetReq(parseInt(req));
	}
}

function deleteAll() {
	request();
	active = {"requests":{[0]:{"parameters":{[0]:{},"count":0},"headers":{[0]:{},"count":0}},"count":0}};
}

function addReq() {
	active.requests.count += 1;
	let count = active.requests.count;
	active.requests[count] = {"parameters":{[0]:{},"count":0},"headers":{[0]:{},"count":0}};

	let newReq = Object.assign(document.createElement("div"),{id:"reqNum-" + count});
	newReq.setAttribute("class","toolbox-request-requests");
	newReq.innerHTML =
		`
		<div id="reqHeader-${count}">
			<h2 style="display:inline;">Request ${String.fromCharCode(count + 65)}</h2>
		</div>
		<div id="reqRequired-${count}">
			<h3>Method & URL</h3>
			<select id="reqMethod-${count}" class="toolbox-select" style="width:85px">
				<option value="GET">GET</option>
				<option value="POST">POST</option>
				<option value="PUT">PUT</option>
				<option value="DELETE">DELETE</option>
				<option value="PATCH">PATCH</option>
				<option value="HEAD">HEAD</option>
				<option value="OPTIONS">OPTIONS</option>
				<option value="CONNECT">CONNECT</option>
				<option value="TRACE">TRACE</option>
			</select>
			<input type="url" placeholder="url" id="reqURL-${count}" class="toolbox-request-input" value="" style="width:600px">
		</div>
		<div id="reqParams-${count}">
			<h3>Parameters</h3>
			<div id="reqParam-${count},0">
				<button type="button" class="toolbox-request-adddel-button" onclick="addParam(${count})">+</button>
				<input type="" placeholder="key" id="reqParamKey-${count},0" class="toolbox-request-input" value="">
				<input type="" placeholder="value" id="reqParamValue-${count},0" class="toolbox-request-input" value="">
			</div>
		</div>
		<div id="reqHeads-${count}">
			<h3>Headers</h3>
			<div id="reqHead-${count},0">
				<button type="button" class="toolbox-request-adddel-button" onclick="addHead(${count})">+</button>
				<input type="" placeholder="key" id="reqHeadKey-${count},0" class="toolbox-request-input" value="">
				<input type="" placeholder="value" id="reqHeadValue-${count},0" class="toolbox-request-input" value="">
			</div>
		</div>
		<div id="reqBody-${count}">
			<h3>Request Body</h3>
			<textarea placeholder="json data" id="reqInput-${count}" class="toolbox-request-textarea" value=""></textarea>
		</div>
		<div id="reqDelay-${count}" style="display:inline;">
			<h3>Delay (ms)</h3>
			<input placeholder="0" id="reqTime-${count}" class="toolbox-request-input" value="" style="width:140px;">
		</div>
		<span class="toolbox-request-buttons" style="margin-left:320px;">
			<button class="request-button-delete" onclick="delReq(${count})">Delete</button>
			<button class="request-button-reset" onclick="resetReq(${count})">Reset</button>
			<button onclick="curlPopup(${count})">Generate cURL</button>
		</span>
		`
	document.getElementById("requests").append(newReq);
}

function curlPopup(request) {
	let curlPopup = Object.assign(document.createElement("div"),{
			id:"curlPopup-" + request,
			style:"margin-top: 9px;",
			innerHTML:
				`<div id="curlCommand-${request}">${gencURL(request)[1].trim()}</div><br>
				<button onclick="copyToCB(document.querySelector('#curlCommand-${request}'));">Copy</button>
				<button onclick="curlPopupClose(${request});">Close</button>`
		});

	if (document.getElementById("curlPopup-" + request) === null) {
		document.getElementById("reqNum-" + request).append(curlPopup);
	} else {
		document.getElementById("curlPopup-" + request).innerHTML = curlPopup.innerHTML;
	}
}

function curlPopupClose(request) {
	document.getElementById("curlPopup-" + request).remove();
}

function copyToCB(element) {
  window.getSelection().removeAllRanges();
  let range = document.createRange();
  range.selectNode(element);
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}

function prettify(element) {
	element.innerText = JSON.stringify(JSON.parse(element.innerText), null, 2);
}

function minify(element) {
	element.innerText = JSON.stringify(JSON.parse(element.innerText));
}

function gencURL(request) {
	let method = document.getElementById("reqMethod-" + request).value;
	let url = document.getElementById("reqURL-" + request).value;
	let parameters = getParam(request);
	let headers = getHead(request);
	let body = document.getElementById("reqInput-" + request).value;
	let delay = parseInt(document.getElementById("reqTime-" + request).value) || 0;

	let [preppedURL, preppedParam, preppedHead, preppedBody, iterateMe] = ["", "", "", "", 1];

	for (i in Object.keys(parameters)) {
		let index = Object.keys(parameters)[i];
		
		if (index != "" && iterateMe < Object.keys(parameters).length) {
			preppedParam += index + "=" + parameters[index] + "&";
			iterateMe += 1;
		} else if (index != "" && iterateMe == Object.keys(parameters).length){
			preppedParam += index + "=" + parameters[index];
			iterateMe = 1;
		}
	}

	for (i in Object.keys(headers)) {
		let index = Object.keys(headers)[i];
		
		if (index != "" && iterateMe <= Object.keys(headers).length) {
			preppedHead += "-H '" + index + ": " + headers[index] + "' ";
			iterateMe += 1;
		}
	}
	if (headers != "") {headers = JSON.stringify(headers);}

	if (preppedParam != "") {
		preppedURL = " " + url + "?" + preppedParam.replaceAll(" ", "+") + " ";
	} else {preppedURL = " " + url + " ";}

	if (body != "") {
		preppedBody = "-d '" + body + "'";	
	}

	let data = {"method":method, "url":preppedURL, "headers":headers, "body":body, "delay":delay};
	let command = "curl -X " + method + preppedURL + preppedHead + preppedBody;

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
		}
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
		}
	}

	if (Object.keys(data) == "") {return "";}

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
			'<button class="request-button-delete" onclick="delReq(' + request + ')">Delete</button>\n' +
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