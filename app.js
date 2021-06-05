const fs = require('fs');

const gender = ['female', 'male'];
const maleName = ['Oskar', 'Patryk', 'Łukasz', 'Kamil', 'Wojtek', 'Maciej'];
const femaleName = ['Karolina', 'Katarzyna', 'Barbara', 'Amelka', 'Teresa', 'Blanka',];
const lastName = ['Rkatsiteli ', 'Saperavi', 'Kindzmarauli', 'Alexandreuli', 'Khikhvi', 'Tavkveri', 'Tsinandali'];

const randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const people = [];

for (let i = 1; i <= 20; i++) {
  const randomGender = randChoice(gender);
  const randomFirstName = randomGender === 'female' ? randChoice(femaleName) : randChoice(maleName);
  const randomLastName = randChoice(lastName);
  const randomAge = Math.floor(Math.random() * (105 - 18 + 1) + 18);
  const personEmail = `${randomFirstName}.${randomLastName}@gmail.com`;
  const randomPhone = + Math.floor(Math.random() * (999999999 - 600000000 + 1) + 600000000)

  console.log(randomPhone)

  const person = {
    gender: randomGender,
    firstName: randomFirstName,
    lastName: randomLastName,
    age: randomAge,
    email: personEmail,
    phone: randomPhone

  };
  people.push(person);
}
const peopleJSON = JSON.stringify(people);



fs.writeFile('people.json', peopleJSON, err => {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json');
});