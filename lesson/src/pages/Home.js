import React, { useEffect, useState } from "react";
import ViewUser from "../components/menu/ViewUser";
// import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(false); // mở modal theo dòng
  const [selectedUser, setSelectedUser] = useState(null); //chon user de lay id
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  const actionTemplate = (rowData) => {
    return (
      <>
        <button
          className="text-[20px] px-2 mx-1 text-white rounded-lg bg-red-500"
          onClick={(e) => {
            e.stopPropagation();
            console.log(rowData.id);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
        <button
          className="text-[20px] px-2 mx-1 text-white rounded-lg bg-yellow-500"
          onClick={(e) => {
            e.stopPropagation();
            console.log(rowData.id);
          }}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
      </>
    );
  };
  return (
    <div>
      <div>
        <div className="grid grid-cols-2">
          <h1 className="mb-4">Home page</h1>
          <div className="flex justify-end h-[40px] items-center">
            <button className="px-4 py-2 border-2 rounded-lg bg-green-500 text-white hover:bg-green-600">
              <i className="fa-solid fa-plus"></i> Add
            </button>
          </div>
        </div>

        <table className="text-start">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item, index) => (
              <tr
                key={item.id}
                onClick={() => {
                  setSelectedUser(item.id);
                  setVisible(true);
                }}
                className="cursor-pointer"
              >
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address?.street}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.company?.name}</td>
                <td>{actionTemplate(item)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {visible && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg w-[55vw] transition-all duration-300 ease-out transform scale-100 opacity-100">
            <div className="flex justify-end">
              <button onClick={() => setVisible(false)}>
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>
            <div className="mt-2">
              <ViewUser userId={selectedUser} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
