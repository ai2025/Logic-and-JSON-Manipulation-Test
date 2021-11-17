function range(start, end) {
	var rangeThn = [];
	for (let i = start; i <= end; i++) {
		rangeThn.push(i);
	}
	return rangeThn;
}

let tahun = range(1900, 2020);

var ans = [];

let check = tahun.forEach((h) => {
	const opr1 = h % 4 == 0;
	const opr2 = h % 100 == 0;
	const opr3 = h % 400 == 0;

	if ((opr1 && opr2 && opr3) || (opr1 && !opr2)) {
		ans.push(" " + h);
	}
});

check;

let show = ans.toString();
console.log(show);
