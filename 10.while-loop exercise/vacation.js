function vacation(input) {
	let vacationCost = Number(input[0]);
	let currentAmount = Number(input[1]);
	let spendingDaysInARow = 0;
	let daysCount = 0;
	let index = 0;
 
	while (currentAmount < vacationCost) {
		daysCount++;
		index += 2;
		let action = input[index];
		if (action === "spend") {
			spendingDaysInARow++;
			if (spendingDaysInARow === 5) {
				console.log("You can't save the money.");
				console.log(daysCount);
				break;
			}
			currentAmount -= Number(input[index + 1]);
			if (currentAmount < 0) {
				currentAmount = 0;
			}
		} else {
			spendingDaysInARow = 0;
			currentAmount += Number(input[index + 1]);
		}
	}
 
	if (currentAmount >= vacationCost) {
		console.log(`You saved the money for ${daysCount} days.`);
	}
}

vacation(["110","60","spend","10","spend","10","spend","10","spend","10","spend", "10"])