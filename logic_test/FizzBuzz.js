function fizzBuzz(n) {
	let i = 1;
	let arr = [];
	while (i <= n) {
		if (i % 3 == 0 && i % 5 == 0) {
			arr.push("FizzBuzz");
		} else if (i % 3 == 0) {
			arr.push("Fizz");
		} else if (i % 5 == 0) {
			arr.push("Buzz");
		} else {
			arr.push(i.toString());
		}
		i++;
	}
	return arr;
}

let n = 15;
console.log(fizzBuzz(n));
