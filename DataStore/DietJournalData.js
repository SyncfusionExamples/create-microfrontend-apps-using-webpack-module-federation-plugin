export var dietJournalData;

getDietJournal();

function getDietJournal() {
  const breakfastMenu = [
    { item: "Banana", cal: 105 },
    { item: "Bread", cal: 77 },
    { item: "Boiled Egg", cal: 785 },
    { item: "Wheat Chapathi", cal: 120 },
    { item: "Dosa", cal: 168 },
    { item: "Tea", cal: 5 },
    { item: "Coffee", cal: 2 },
    { item: "Milk", cal: 122 },
  ];
  const snackMenu = [
    { item: "Banana", cal: 105 },
    { item: "Apple", cal: 95 },
    { item: "Orange", cal: 69 },
    { item: "Samosa", cal: 262 },
    { item: "Peas", cal: 134 },
    { item: "Tea", cal: 5 },
    { item: "Coffee", cal: 2 },
    { item: "Biscuits", cal: 37 },
  ];

  const lunchMenu = [
    { item: "Plain Rice", cal: 205 },
    { item: "Roti", cal: 120 },
    { item: "Moong Dal", cal: 236 },
    { item: "Mixed Vegetables", cal: 45 },
    { item: "Curd Rice", cal: 207 },
    { item: "Chicken Curry", cal: 243 },
  ];
  let count = 30,
    mWalk,
    breakWaterTaken,
    lunchWaterTaken;
  let breakFastText, bText, breakCalories, sText, snack1Text, snackCalories;
  let lunchCalories, lunchText, lText;
  let sampleData = [],
    date,
    jDate;
  let expectedAmount = 2400,
    expectedCalories = 3000;
  for (let i = count - 1; i >= 0; i--) {
    date = new Date();
    mWalk = Math.round(Math.random() * (3000 - 1000) + 1000);
    breakWaterTaken = Math.round(Math.random() * (5 - 2) + 2);
    lunchWaterTaken = Math.round(Math.random() * (5 - 2) + 2);
    breakFastText = breakfastMenu
      .sort(() => Math.random() - Math.random())
      .slice(0, 3);
    bText = breakFastText
      .map(function (elem) {
        return elem.item;
      })
      .join(", ");
    breakCalories = breakFastText.reduce(
      (a, item) => a + (item.cal ? parseInt(item.cal) : 0),
      0
    );

    snack1Text = snackMenu
      .sort(() => Math.random() - Math.random())
      .slice(0, 3);
    sText = snack1Text
      .map(function (elem) {
        return elem.item;
      })
      .join(", ");
    snackCalories = snack1Text.reduce(
      (a, item) => a + (item.cal ? parseInt(item.cal) : 0),
      0
    );

    lunchText = lunchMenu.sort(() => Math.random() - Math.random()).slice(0, 3);
    lText = lunchText
      .map(function (elem) {
        return elem.item;
      })
      .join(", ");
    lunchCalories = lunchText.reduce(
      (a, item) => a + (item.cal ? parseInt(item.cal) : 0),
      0
    );

    jDate = new Date(
      new Date(date.setDate(date.getDate() - i)).setHours(0, 0, 0, 0)
    );
    sampleData.push(
      {
        date: jDate,
        name: "Morning Walk",
        activity: "Morning Walk",
        duration: "30m",
        distance: (mWalk / 1312).toFixed(2).replace(/[.,]00$/, "") + "km",
        percentage:
          ((mWalk / 6000) * 100).toFixed(2).replace(/[.,]00$/, "") + "%",
        time: "7:00 AM",
      },
      {
        date: jDate,
        name: "Breakfast Water",
        activity: "Water Taken",
        count: breakWaterTaken,
        amount: breakWaterTaken + " Glasses",
        percentage:
          (((breakWaterTaken * 150) / expectedAmount) * 100)
            .toFixed(2)
            .replace(/[.,]00$/, "") + "%",
        time: "7:40 AM",
      },
      {
        date: jDate,
        name: "Breakfast",
        activity: "Breakfast",
        amount: bText,
        percentage:
          ((breakCalories / expectedCalories) * 100)
            .toFixed(2)
            .replace(/[.,]00$/, "") + "%",
        time: "9:00 AM",
      },
      {
        date: jDate,
        name: "Snack1",
        activity: "Snack",
        amount: sText,
        percentage:
          ((snackCalories / expectedCalories) * 100)
            .toFixed(2)
            .replace(/[.,]00$/, "") + "%",
        time: "11:00 AM",
      },
      {
        date: jDate,
        name: "Lunch Water",
        activity: "Water Taken",
        count: lunchWaterTaken,
        amount: lunchWaterTaken + " Glasses",
        percentage:
          (((lunchWaterTaken * 150) / expectedAmount) * 100)
            .toFixed(2)
            .replace(/[.,]00$/, "") + "%",
        time: "12:00 PM",
      },
      {
        date: jDate,
        name: "Lunch",
        activity: "Lunch",
        amount: lText,
        percentage:
          ((lunchCalories / expectedCalories) * 100)
            .toFixed(2)
            .replace(/[.,]00$/, "") + "%",
        time: "1:00 PM",
      }
    );
  }
  dietJournalData = sampleData;
}
