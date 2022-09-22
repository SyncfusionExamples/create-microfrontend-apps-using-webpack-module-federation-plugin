export var dietChartData;

getDietChartData();

function getDietChartData() {
  let count = 30;
  let sampleData = [],
    date;
  for (let i = count - 1; i >= 0; i--) {
    date = new Date();
    let data = {
      x: new Date(
        new Date(date.setDate(date.getDate() - i)).setHours(0, 0, 0, 0)
      ),
      y: Number(
        (Math.random() * (90 - 50) + 50).toFixed(2).replace(/[.,]00$/, "")
      ),
    };
    sampleData.push(data);
  }
  dietChartData = sampleData;
}
