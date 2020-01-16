const { Student } = require('../database/models');

const seedDatabase = async () => {
  await Promise.all([
    Student.create({
      firstName: "Kyrie",
      lastName: "Irving"
    }),
    Student.create({
      firstName: "LeBron",
      lastName: "James"
    }),
    Student.create({
      firstName: "Luka",
      lastName: "Doncic"
    })
  ]);
}

module.exports = seedDatabase;
