import React, { useEffect, useState } from "react";
import ViewUser from "../components/menu/ViewUser";
import AddUser from "../components/menu/AddUser";
import axios from "axios";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(false); // mở modal theo dòng
  const [showAddModal, setShowAddModal] = useState(false); // mở modal theo dòng
  const [selectedUser, setSelectedUser] = useState(null); //chon user de lay id
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/users`)
    //   .then((response) => response.json())
    //   .then((posts) => setPosts(posts));
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        "https://684bd4a0ed2578be881c9fef.mockapi.io/List"
      );
      if (response) {
        setPosts(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        "https://684bd4a0ed2578be881c9fef.mockapi.io/List/" + id
      );
      if (response) {
        getAllUsers();
        toast.success("Đã xóa thành công");
      }
      setDeleteIndex(null);
      setShowDeleteModal(false);
    } catch (error) {
      toast.error("Đã xóa thành công");
    }
  };
  const actionTemplate = (rowData, rowIndex) => {
    return (
      <>
        <button
          className="text-[20px] px-2 m-1 text-white rounded-lg bg-red-500"
          onClick={(e) => {
            e.stopPropagation();
            setDeleteIndex(rowData.id);
            setShowDeleteModal(true);
            console.log(rowData.id);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
        <button
          className="text-[20px] px-2 m-1 text-white rounded-lg bg-yellow-500"
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
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 border-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
            >
              <i className="fa-solid fa-plus"></i> Add
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
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.street}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.name}</td>
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

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg w-[55vw] transition-all duration-300 ease-out transform scale-100 opacity-100">
            <div className="flex justify-end">
              <button onClick={() => setShowAddModal(false)}>
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>
            <div className="mt-2">
              <AddUser
                onClose={() => setShowAddModal(false)}
                setUserAdded={() => {
                  // setShowAddModal(false);
                  getAllUsers();
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 ">
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-[500px]
          animate-fadeIn"
          >
            <div className="flex">
              <i className="fa-solid fa-triangle-exclamation text-[50px] text-red-400"></i>
              <div className="ml-4">
                <p className="text-lg font-semibold text-red-500">
                  Xóa dữ liệu
                </p>
                <span>Bạn có chắc muốn xoá?</span>
              </div>
            </div>

            <div className="flex justify-end mt-5">
              <button
                className="px-6 py-1 rounded hover:bg-gray-400 border-2 mr-2"
                onClick={() => setShowDeleteModal(false)}
              >
                Huỷ
              </button>
              <button
                className="px-6 py-1 bg-red-400 text-white rounded hover:bg-red-600"
                onClick={() => handleDelete(deleteIndex)}
              >
                Xoá
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
