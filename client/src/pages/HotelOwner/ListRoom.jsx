import React, { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);
  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Room Listings"
        subTitle="View, edit, or manage all listed rooms. keep the information u-to-date to provide the best experience for users"
      />
      <p className="text-gray-500 mt-8">All Rooms</p>
    </div>
  );
};

export default ListRoom;
