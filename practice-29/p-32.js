// ! Write a program that calculates the tip amounts based on the bill total and percentages entered by the user (Tip Calculator)

function tipCalculator(totalBill) {
  const tip_2 = 0.02; // * 2% Tip
  const tip_5 = 0.05; // * 5% Tip
  const tip_10 = 0.1; // * 10% Tip
  const tip_15 = 0.15; // * 15% Tip

  let tipDisplay = [
    tip_2 * totalBill,
    tip_5 * totalBill,
    tip_10 * totalBill,
    tip_15 * totalBill,
  ];

  const formatter = Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
  });

  // Print each tip amount
  tipDisplay.forEach((tip, index) => {
    console.log(`${[2, 5, 10, 15][index]}% Tip: ${formatter.format(tip)}`);
  });
}

const totalBill = 10900;
tipCalculator(totalBill);
