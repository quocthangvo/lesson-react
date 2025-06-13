import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const userInfo = {
  id: "",
  name: "",
  username: "",
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
    name: "",
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
`;
const SpanStyle = styled.span`
  color: #000;
  font-weight: bold;
`;
const ViewUser = (props) => {
  const [userData, setUserData] = useState(userInfo);
  const getUserById = async () => {
    try {
      const response = await axios.get(
        "https://684bd4a0ed2578be881c9fef.mockapi.io/List/" + props.userId
      );
      setUserData(response.data);
      return;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserById();
  }, []);

  return (
    <div className="">
      <h2 className=" mb-2">User Detail</h2>
      <div className="my-3">
        <h3>Basic Info</h3>
        <DivInfoStyle>
          <DivStyle>
            Name:
            <SpanStyle> {userData.name}</SpanStyle>
          </DivStyle>
          <DivStyle>
            Age: <SpanStyle> {userData.age}</SpanStyle>
          </DivStyle>
          <DivStyle>
            Email: <SpanStyle> {userData.email}</SpanStyle>
          </DivStyle>
          <DivStyle>
            Phone: <SpanStyle> {userData.phone}</SpanStyle>
          </DivStyle>
          <DivStyle>
            Website: <SpanStyle> {userData.website}</SpanStyle>
          </DivStyle>
        </DivInfoStyle>
      </div>
      <div className="my-3">
        <h3>Address Info</h3>
        <DivInfoStyle>
          <DivStyle>
            Street:
            <SpanStyle> {userData.street}</SpanStyle>
          </DivStyle>
          <DivStyle>
            Suite: <SpanStyle> {userData.suite}</SpanStyle>
          </DivStyle>
          <DivStyle>
            City: <SpanStyle> {userData.city}</SpanStyle>
          </DivStyle>
          <DivStyle>
            Zipcode: <SpanStyle> {userData.zipcode}</SpanStyle>
          </DivStyle>
          <DivStyle>
            Geo Lat: <SpanStyle> {userData.lat}</SpanStyle>
          </DivStyle>
          <DivStyle>
            Lng: <SpanStyle> {userData.lng}</SpanStyle>
          </DivStyle>
        </DivInfoStyle>
      </div>
      <div className="my-3">
        <h3>Company Info</h3>
        <DivInfoStyle>
          <DivStyle>
            Name:
            <SpanStyle> {userData.name}</SpanStyle>
          </DivStyle>
          <DivStyle>
            Catch Phrase:
            <SpanStyle> {userData.catchPhrase}</SpanStyle>
          </DivStyle>
          <DivStyle>
            BS: <SpanStyle> {userData.bs}</SpanStyle>
          </DivStyle>
        </DivInfoStyle>
      </div>
    </div>
  );
};

export default ViewUser;
