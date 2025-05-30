let obj = {
  name: "thang",
  price: 100,
  image: "1.png",
  chil: {
    name: "Hien",
  },
};

let {
  name: parentName,
  chil: { name },
} = obj;

console.log(obj);
