export var gridActivities;

getGridData();

function getGridData() {
  let workout = ["Running", "Swimming", "Walking", "Yoga"];
  let average = [10, 18, 22];
  let hours = [8, 7, 6, 6];
  let minutes = [0, 0, 30, 0];
  let caloriesBurned = [10, 15, 30];
  let count = 30;
  let burnedCalories = 0;
  let date, time, distance;
  let sampleData = [];
  for (let i = count - 1; i >= 0; i--) {
    date = new Date();
    time = new Date(new Date(date.setDate(date.getDate() - i)));
    for (let j = 0; j < workout.length; j++) {
      distance =
        workout[j] === "Yoga"
          ? ""
          : workout[j] === "Running"
          ? Math.random() * (5 - 1) + 1
          : Math.random() * (2 - 1) + 1;
      let data = {
        Workout: workout[j],
        Distance: distance,
        Duration:
          workout[j] === "Yoga"
            ? Math.random() * (30 - 10) + 10
            : distance * average[j],
        Date: new Date(time.setHours(hours[j], minutes[j], 0, 0)),
        Completion: Math.random() * (30 - 10) + 10,
      };
      sampleData.push(data);
      burnedCalories +=
        workout[j] === "Yoga"
          ? 0
          : Math.round((data["Duration"] / caloriesBurned[j]) * 100);
    }
  }
  gridActivities = sampleData;
}
