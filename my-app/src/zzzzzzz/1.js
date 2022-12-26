let arr1 = [
  { id: 1, shirt: 2 },
  { id: 2, pant: 2 },
  { id: 1, shirt: 2 },
];
let wantedArr = [...arr1];
const updatedArr = arr1.map((eachitem) => {
  if (arr1.includes(eachitem.id)) {
    console.log(eachitem);
  } else {
  }
});
console.log(arr1.id);
