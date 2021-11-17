function nearestFibo(n) {
	if (n == 0) {
		return;
	}

	let n1 = 0,
		n2 = 1;
	let n3 = n1 + n2;

	while (n3 <= n) {
		n1 = n2;
		n2 = n3;
		n3 = n1 + n2;
	}

	let ans = Math.abs(n3 - n) >= Math.abs(n2 - n) ? n3 : n2;
	return ans;
}

const arr = [15, 3, 1];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
}

console.log("Nearest Fibo from " + sum + " is " + nearestFibo(sum));
