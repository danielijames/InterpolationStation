document.querySelector("Button")
.addEventListener("click", function() {
	LowV = document.querySelector('input').value;
	console.log(LowV);
	HighV = document.querySelectorAll('input')[1].value;
	console.log(HighV);
	knownAlterV = document.querySelectorAll('input')[2].value;
	console.log(knownAlterV);
	HighAlterV = document.querySelectorAll('input')[3].value;
	console.log(HighAlterV);
	LowAlterV = document.querySelectorAll('input')[4].value;
	console.log(LowAlterV);

	// document.querySelectorAll("Button")[1]
	let solution = Number(LowV) + (Number(HighV) - Number(LowV)) * ((Number(knownAlterV) - Number(LowAlterV) ) / (Number(HighAlterV) - Number(LowAlterV)));
	let sol = solution.toFixed(10);
	let x =document.createElement("div");
	x.textContent = sol;
	document.querySelectorAll("h3")[0].appendChild(x);

	let quality = ((Number(knownAlterV) - Number(LowAlterV) ) / (Number(HighAlterV) - Number(LowAlterV)));
	let qual = quality.toFixed(10);
	let y = document.createElement("div");
	y.textContent = qual;
	document.querySelectorAll("h3")[1].appendChild(y);

})

// document.querySelectorAll("Button")[1]
// .addEventListener("click", function (){
// 	let solution = Number(LowV) + (Number(HighV) - Number(LowV)) * ((Number(knownAlterV) - Number(LowAlterV) ) / (Number(HighAlterV) - Number(LowAlterV)))
// 	let sol = solution.toFixed(3);
// 	let x =document.createElement("div");
// 	x.textContent = sol;
// 	document.body.appendChild(x);
// })




