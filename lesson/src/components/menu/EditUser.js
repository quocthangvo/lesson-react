import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";

const userInfo = {
  id: "",
  name: "",
  age: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    nameCompany: "",
    catchPhrase: "",
    bs: "",
  },
};
const DivInfoStyle = styled.div`
  border-width: 2px;
  padding: 12px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
const DivStyle = styled.div`
  color: gray;
  display: flex;
  align-items: center;
`;
const InputStyle = styled.input`
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-left: 10px;
  padding: 5px;
  width: 100%;
  color: black;
`;

const EditUser = (props) => {
  const [userData, setUserData] = useState(userInfo);

  useEffect(() => {
    // setUserData({ ...userData, id: props.userId });
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://684bd4a0ed2578be881c9fef.mockapi.io/List/" + props.userId
      );
      if (response) {
        console.log(response);
        setUserData(response.data);
      }
    } catch (e) {
      toast.error("Sửa thất bại");
    }
  };

  const editUser = async () => {
    try {
      const response = await axios.put(
        "https://684bd4a0ed2578be881c9fef.mockapi.io/List/" + props.userId,
        userData
      );
      if (response) {
        if (response.status === 201 || response.status === 200) {
          props.setUserEdited(); // gọi để reload danh sách
          props.onClose(); // đóng modal
          toast.success("Sửa thành công");
        }
      }
    } catch (e) {
      toast.error("Sửa thất bại");
    }
  };

  return (
    <div className="">
      <h2 className=" mb-2">Add User</h2>
      <div className="my-3">
        <h3>Basic Info</h3>

        <DivInfoStyle>
          <DivStyle>
            Name:
            <InputStyle
              type="text"
              placeholder="Enter"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </DivStyle>
          <DivStyle>
            Age:
            <InputStyle
              type="text"
              placeholder="Enter"
              value={userData.age}
              onChange={(e) =>
                setUserData({ ...userData, age: e.target.value })
              }
            />
          </DivStyle>
          <DivStyle>
            Email:{" "}
            <InputStyle
              type="text"
              placeholder="Enter"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </DivStyle>
          <DivStyle>
            Phone:{" "}
            <InputStyle
              type="text"
              placeholder="Enter"
              value={userData.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
          </DivStyle>
          <DivStyle>
            Website:{" "}
            <InputStyle
              type="text"
              placeholder="Enter"
              value={userData.website}
              onChange={(e) =>
                setUserData({ ...userData, website: e.target.value })
              }
            />
          </DivStyle>
        </DivInfoStyle>
      </div>
      <div className="my-3">
        <h3>Address Info</h3>
        <DivInfoStyle>
          <DivStyle>
            Street:
            <InputStyle
              type="text"
              placeholder="Enter"
              value={userData.address.street}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  address: { ...userData.address, street: e.target.value },
                })
              }
            />
          </DivStyle>
          <DivStyle>
            Suite:{" "}
            <InputStyle
              type="text"
              placeholder="Enter"
              value={userData.address.suite}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  address: { ...userData.address, suite: e.target.value },
                })
              }
            />
          </DivStyle>
          <DivStyle>
            City:
            <InputStyle
              type="text"
              placeholder="Enter"
              value={userData.address.city}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  address: { ...userData.address, city: e.target.value },
                })
              }
            />
          </DivStyle>
          <DivStyle>
            Zipcode:
            <InputStyle
              type="text"
              placeholder="Enter"
              value={userData.address.zipcode}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  address: { ...userData.address, zipcode: e.target.value },
                })
              }
            />
          </DivStyle>
        </DivInfoStyle>
      </div>
      <div className="my-3">
        <h3>Company Info</h3>
        <DivInfoStyle>
          <DivStyle>
            Name:
            <InputStyle
              type="text"
              placeholder="Enter"
              value={userData.company.nameCompany}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  company: { ...userData.company, nameCompany: e.target.value },
                })
              }
            />
          </DivStyle>
          <DivStyle>
            CatchPhrase:
            <InputStyle
              type="text"
              placeholder="Enter"
              value={userData.company.catchPhrase}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  company: { ...userData.company, catchPhrase: e.target.value },
                })
              }
            />
          </DivStyle>
          <DivStyle>
            BS:
            <InputStyle
              type="text"
              placeholder="Enter"
              value={userData.company.bs}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  company: { ...userData.company, bs: e.target.value },
                })
              }
            />
          </DivStyle>
        </DivInfoStyle>
      </div>
      <div className="text-end mt-4">
        <button
          className="px-4 py-2 ml-2 bg-green-500 text-white rounded-lg"
          onClick={() => editUser()}
        >
          Save
        </button>
        <button
          className="px-4 py-2 ml-2 bg-red-500 text-white rounded-lg"
          onClick={props.onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EditUser;
