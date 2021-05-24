module.exports = function() {
    var faker = require("faker");
    //var _ = require("lodash");

    return {
        people: _.times(100, function(n) {
            return {
                id: n + 1,
                name: faker.name.findName(),
                avatar: faker.image.avatar(),
                street: faker.address.streetAddress(),
                city: faker.address.city(),
                zipCode: faker.address.zipCode(),
                stateAbbr: faker.address.stateAbbr(),
                phone: faker.phone.phoneNumber(),
                email: faker.internet.email(),
                department: _.sample(["Customer Support", "Engineering", "Sales", "Finance", "Marketing", "Production",
                                      "R&D", "Human Resource Management"]),
                jobs: _.sample(['analyst', 'economist', 'Secretary', 'management board', 'wholesale distributing manager',
                'export sales manager', 'sales manager', 'sales representative', 'service engineer', 'purchasing assistent',
                'assistent', 'CEO (Chief Executive Officer)', 'treasurer, CFO (Chief Financial Officer)', 'warehouse worker',
                'warehouse manager', 'service engineer', 'commercial agent', 'co-director', 'managing director', 'director general',
                'purchasing manager', 'buyer', 'director of boards'])
            };
        })
    };
};