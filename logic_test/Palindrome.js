let checkPalindrome = (str) => {
	let small = str.replace(/\W/g, "").toLowerCase();
	let reverse = small.split("").reverse().join("");

	if (small === reverse) {
		return "Palindrome sentence!";
	} else {
		return "Not a Palindrome sentence";
	}
};

// const input = prompt("Check your sentence here...");
// console.log(checkPalindrome(input));
console.log(checkPalindrome("Radar"));
console.log(checkPalindrome("Malam"));
console.log(checkPalindrome("Kasur ini rusak"));
console.log(checkPalindrome("Ibu Ratna antar ubi"));
console.log(checkPalindrome("Malas"));
console.log(checkPalindrome("Makan nasi goreng"));
console.log(checkPalindrome("Balonku ada lima"));
