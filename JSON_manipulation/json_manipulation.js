const data = require("./data.json");

class JManip {
	static item_in_meeting_room() {
		let text = "";
		for (let i = 0; i < data.length; i++) {
			if (data[i].placement.name == "Meeting Room") {
				text += data[i].name + ", ";
			}
		}
		let tn = text.trim().slice(0, -1);
		return tn;
	}

	static electronic_device() {
		let text = "";
		for (let i = 0; i < data.length; i++) {
			if (data[i].type == "electronic") {
				text += data[i].name + ", ";
			}
		}
		let tn = text.trim().slice(0, -1);
		return tn;
	}

	static find_furniture() {
		let text = "";
		for (let i = 0; i < data.length; i++) {
			if (data[i].tags.includes("furniture")) {
				text += data[i].name + ", ";
			}
		}
		let tn = text.trim().slice(0, -1);
		return tn;
	}

	static items_purcased_at() {
		let text = "";
		const op = {year: "numeric", month: "long", day: "numeric"};
		let date = "";
		const tgl = "";
		for (let i = 0; i < data.length; i++) {
			// tgl = parseInt(data[i].purchased_at) * 1000;
			date = new Date(data[i].purchased_at * 1000).toLocaleDateString(
				"id-ID",
				op
			);
			if (date == "16 Januari 2020") {
				text += data[i].name + ", ";
			}
		}
		let tn = text.trim().slice(0, -1);
		return tn;
	}

	static find_color() {
		let text = "";
		for (let i = 0; i < data.length; i++) {
			if (data[i].tags.includes("brown")) {
				text += data[i].name + ", ";
			}
		}
		let tn = text.trim().slice(0, -1);
		return tn;
	}
}

console.log(JManip.item_in_meeting_room());
console.log(JManip.electronic_device());
console.log(JManip.find_furniture());
console.log(JManip.items_purcased_at());
console.log(JManip.find_color());
