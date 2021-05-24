const faker = require('faker');
const fs = require('fs');

function generateUsers() {
    let users = [];

    for (let id = 1; id <= 25; id++) {
        let userName = faker.internet.userName();
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let avatar = faker.image.avatar();
        let email = faker.internet.email();

        users.push({
            id: id,
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            avatar: avatar,
            email: email,
        });
    }
    return { users: users };
}

module.exports = generateUsers;
  // write to file
  let dataObj = generateUsers();
  let file = './faker-server/data/users.json';
  fs.writeFileSync(file, JSON.stringify(dataObj, null, '\t'));


// read file
//let usersString = fs.readFileSync(file);
//let users = JSON.parse(usersString);
//console.log(`ID: ${users.id} FIRST NAME : ${users.first_name} LAST NAME : ${users.last_name} EMAIL: ${users.email}`);


// script: npm run json, see: package.json

//------------------------------------------------------------------second
//generate dummy data without using a for loop
//
//let faker = require('faker');
//let fs = require('fs');
//var _ = require("lodash");
//
//const generateUser = () => {
//    return {
//        id: faker.random.uuid(),
//        userName: faker.internet.userName();
//        firstName: faker.name.firstName();
//        lastName: faker.name.lastName();
//        avatar: faker.image.avatar(),
//        phone: faker.phone.phoneNumber(),
//        email: faker.internet.email(),
//    };
//};

//const generateUsers = (numUsers) => {
//    return Array.from({ length: numUsers }, generateUser);
//};

//let dataObj = generateUsers(25);
//fs.writeFileSync('db.json', JSON.stringify(dataObj, null, '\t'));
