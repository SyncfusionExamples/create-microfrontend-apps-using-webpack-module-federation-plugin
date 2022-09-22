export var workoutChartData;

getChartWorkoutData();

function getChartWorkoutData() {
  let count = 30,
    date;
  let sampleData = [];
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
  workoutChartData = sampleData;
}
