function reverse(str) {
	const arrStr = str.split(" ");
	let arrRev = [];
	arrStr.forEach((s) => {
		let rev = s.split("").reverse().join("");
		if (s[0] === s[0].toUpperCase()) {
			rev = rev
				.trim()
				.toLowerCase()
				.replace(/^\w/, (c) => c.toUpperCase());
		}
		arrRev.push(rev);
	});

	return arrRev;
}

let show = reverse("I am A Great human").toString();
console.log(show.replace(/,/g, " "));
