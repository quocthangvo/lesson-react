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

const ViewUser = (props) => {
  const [userData, setUserData] = useState([]);
  const getUserById = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + props.userId
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

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-2">User Detail</h2>
      <div className="my-3">
        <h3>Basic Info</h3>
        <DivInfoStyle>
          <DivStyle>
            Name:
            <SpanStyle> {userData.name}</SpanStyle>
          </DivStyle>
          <DivStyle>
            User Name: <SpanStyle> {userData.username}</SpanStyle>
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
            <SpanStyle> {userData.address?.street}</SpanStyle>
          </DivStyle>
          <DivStyle>
            Suite: <SpanStyle> {userData.address?.suite}</SpanStyle>
          </DivStyle>
          <DivStyle>
            City: <SpanStyle> {userData.address?.city}</SpanStyle>
          </DivStyle>
          <DivStyle>
            Zipcode: <SpanStyle> {userData.address?.zipcode}</SpanStyle>
          </DivStyle>
          <DivStyle>
            Geo Lat: <SpanStyle> {userData.address?.geo.lat}</SpanStyle>
          </DivStyle>
          <DivStyle>
            Lng: <SpanStyle> {userData.address?.geo.lng}</SpanStyle>
          </DivStyle>
        </DivInfoStyle>
      </div>
      <div className="my-3">
        <h3>Company Info</h3>
        <DivInfoStyle>
          <DivStyle>
            Name:
            <SpanStyle> {userData.company?.name}</SpanStyle>
          </DivStyle>
          <DivStyle>
            Catch Phrase:{" "}
            <SpanStyle> {userData.company?.catchPhrase}</SpanStyle>
          </DivStyle>
          <DivStyle>
            BS: <SpanStyle> {userData.company?.bs}</SpanStyle>
          </DivStyle>
        </DivInfoStyle>
      </div>
    </div>
  );
};

export default ViewUser;
