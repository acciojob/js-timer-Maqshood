function showTime() {
	let now = new Date();
	let day = now.getDate();
	let month = now.getMonth()+1;
	let year = now.getFullYear();

	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();

	let timeString = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

	document.getElementById("timer").textContent= timeString;
}

setInterval(showTime,1000);
showTime();