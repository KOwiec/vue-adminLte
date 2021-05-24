const faker = require('faker');

function generateData () {
    var messages = [];
    for (let id = 1; id < 10; id++) {
        let priority = faker.random.number({min: 1, max: 2});
        let date = faker.date.between("2018-01-01", "2018-07-31").toISOString().split("T")[0];
        let fromId = faker.random.number({min: 1000, max: 9999});
        let message = faker.hacker.phrase();
        let status = faker.random.number(1);
        messages.push({
            "id": id,
            "userId": fromId,
            "date_sent": date,
            "priority": priority,
            "message": message,
            "status": status
        });
    }

    return {messages};
}

module.exports = generateData;