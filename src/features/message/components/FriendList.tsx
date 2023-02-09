import React from "react";
import { useSelector } from "react-redux";
import Userbox from "../../../components/Userbox";

export default function FriendsList() {
  const friends = [""];

  return (
    <>
      {friends.map((friend) => (
        <Userbox />
      ))}
    </>
  );
}
