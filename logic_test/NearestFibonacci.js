function nearestFibo(n) {
	if (n == 0) {
		return "Your number is Fibonacci";
	}

	if (
		Math.sqrt(5 * n ** 2 + 4) % 1 == 0 ||
		Math.sqrt(5 * n ** 2 - 4) % 1 == 0
	) {
		return "Your number is Fibonacci";
	} else {
		let addons = 0;

		while (true) {
			addons += 1;

			if (
				Math.sqrt(5 * (n + addons) ** 2 + 4) % 1 == 0 ||
				Math.sqrt(5 * (n + addons) ** 2 - 4) % 1 == 0
			) {
				return (
					"Nearest Fibonacci Number from " +
					n +
					" is " +
					(n + addons) +
					" by doing " +
					n +
					" + " +
					addons
				);
			}

			if (
				Math.sqrt(5 * (n - addons) ** 2 + 4) % 1 == 0 ||
				Math.sqrt(5 * (n - addons) ** 2 - 4) % 1 == 0
			) {
				return (
					"Nearest Fibonacci Number from " +
					n +
					" is " +
					(n + addons) +
					" by doing " +
					n +
					" - " +
					addons
				);
			}
		}
	}
}

const arr = [15, 3, 1];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
}

console.log(nearestFibo(sum));
