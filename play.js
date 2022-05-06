//const hobbies = ["Sports", "Cooking"];
//const copiedArray = [...hobbies];
//console.log(copiedArray);

// const person = {
//   name: "Ismoiljon",
//   age: 24,
//   greet() {
//     console.log("Hey this is " + this.name + " and I am " + this.age);
//   },
// };

// const printName = ({ name, age }) => {
//   console.log(name + " and " + age + " years old");
// };

// printName(person);

// const copiedArray2 = { ...person };
// console.log(copiedArray2);

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");

  fetchData((text) => {
    console.log(text);
  });
}, 2000);

console.log("Hello");
console.log("Hi dude");
