// index

function index() {
	let toolArray = Array.from(document.getElementById("banner").children);
	for (let i = 0; i < toolArray.length; i++) {
		if (i < toolArray.length - 1 && i !== 0) { // skip index and dark mode button
			let href = toolArray[i].getAttribute("href");
			if (href && href.includes("tool/")) {
				let tool = href.substring(href.indexOf("tool/") + 5, href.indexOf("."));
				document.getElementById("index").innerHTML += `<a href="/tool/${tool}.html"><p>${tool}</p></a>`;
			}
		}
	}
}