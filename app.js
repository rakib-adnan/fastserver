const devs = [
  {
    id: 1,
    name: "rakib adnan",
    skill: "IOS Devloper",
    age: 22,
    location: "barishal",
  },
  {
    id: 2,
    name: "Mohon",
    skill: "Blockchin Devloper",
    age: 24,
    location: "Mirpur",
  },
  {
    id: 3,
    name: "adnan",
    skill: "React Devloper",
    age: 30,
    location: "Dhaka",
  },
  {
    id: 4,
    name: "rakib",
    skill: "IOS Devloper",
    age: 21,
    location: "barishal",
  },
  {
    id: 5,
    name: "Taijul Islam ",
    skill: "Python Devloper",
    age: 211,
    location: "barishal",
  },
  {
    id: 6,
    name: "Robiul Hossen",
    skill: "JavaScript Devloper",
    age: 24,
    location: "Mirpur",
  },
];

let index = devs.findIndex((data) => {
  return data.id == 3;
});

devs[index] = {
  id: 3,
  name: "Adnan Ahmed",
  skill: "React Devloper",
  age: 56,
  location: "Savar",
};

console.log(devs);
