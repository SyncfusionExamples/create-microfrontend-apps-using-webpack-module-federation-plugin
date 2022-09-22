export var activityValues;
generateData();

export default function generateData() {
    let count = 30, min, date;
    let sampleData = [];
    for (let i = count - 1; i >= 0; i--) {
        date = new Date();
        min = Math.round(Math.random() * (480 - 300) + 300);
        let data = {
            activityDate: new Date(new Date(date.setDate(date.getDate() - i)).setHours(0, 0, 0, 0)),
            heartRate: Math.round(Math.random() * (100 - 70) + 70),
            steps:{
                mWalk: Math.round(Math.random() * (3000 - 1000) + 1000),
                eWalk: Math.round(Math.random() * (3000 - 1000) + 1000)
            },
            calories: Math.round(Math.random() * (3000 - 1000) + 1000),
            sleep: Math.floor(min / 60) + 'h' + ' ' + (min % 60) + 'm'
        };
        sampleData.push(data);
    }
    activityValues = sampleData;
}