import React, { useState } from "react";

const users = [
  {
    id: "001",
    name: "Thang",
    age: 18,
    email: "thang@gmail.com",
    address: "TPHCM",
  },
  {
    id: "002",
    name: "Long",
    age: 19,
    email: "long@gmail.com",
    address: "TPHCM",
  },
];
const Home = () => {
  const [data, setData] = useState(users);
  const [selected, setSelected] = useState(null);
  const handleClick = (id) => {
    setSelected(id);
  };
  return (
    <div>
      <div className="grid grid-cols-2">
        <h1 className="mb-4">Home page</h1>
        <div className="flex justify-end h-[40px] items-center">
          <button className="px-4 py-2 border-2 rounded-lg bg-green-500 text-white hover:bg-green-600">
            <i className="fa-solid fa-plus"></i> Add
          </button>
          <button className="px-4 py-2 border-2 rounded-lg bg-red-500 text-white hover:bg-red-600">
            <i className="fa-regular fa-trash-can"></i> Delete
          </button>
          <button className="px-4 py-2 border-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600">
            <i className="fa-regular fa-pen-to-square"></i> Edit
          </button>
        </div>
      </div>

      <table className="text-start">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`cursor-pointer ${
                selected === item.id ? "bg-blue-200" : ""
              }`}
            >
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
