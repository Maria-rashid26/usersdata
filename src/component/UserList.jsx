import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/UserSlice";
import Pagination from "./Pagination";
import { useQuery } from "react-query";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

const UserList = () => {
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    const request1 = await axios.get("https://reqres.in/api/users?page=1");
    const request2 = await axios.get("https://reqres.in/api/users?page=2");
    const response = await axios.all([request1, request2]);
    return response.flatMap((res) => res.data.data);
  };

  useEffect(() => {
    dispatch(changeColor());
  }, [dispatch]);

  const { isLoading, data = [], error } = useQuery("Users", fetchUsers, {});

  const [currentPage, setCurrentPage] = useState(2);
  const [membersPerPage, setMembersPerPage] = useState(6);
  const lastMemberIndex = currentPage * membersPerPage;
  const firstMemberIndex = lastMemberIndex - membersPerPage;
  const currentMembers = data.slice(firstMemberIndex, lastMemberIndex);
  const colors = [
    "green",
    "blue",
    "red",
    "purple",
    "IndianRed",
    "Salmon",
    "teal",
    "DarkRed",
    "MediumVioletRed",
    "Tomato",
    "OrangeRed",
    "Navy",
    "DarkCyan",
    "DarkGoldenrod",
    "DarkGreen",
    "DarkTurquoise",
    "indigo",
  ];

  const handleChangeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    dispatch(changeColor(randomColor));
  };

  if (isLoading) {
    return (
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-3 w-[900px] h-[500px] mx-auto mt-5 gap-5 ">
      {data.length > 0 ? (
        currentMembers.map((user) => (
          <div
            key={user.id}
            className="grid items-center justify-center "
            onLoad={handleChangeColor}
          >
            <div
              className="h-44 w-44 rounded-full  flex items-center ml-6"
              style={{
                backgroundColor:
                  colors[Math.floor(Math.random() * colors.length)],
              }}
            >
              <img
                src={user.avatar}
                alt=""
                className={` border-white h-40 mx-auto rounded-full border-[9px]`}
              />
            </div>

            <div
              style={{
                color: colors[Math.floor(Math.random() * colors.length)],
              }}
              className="px-9 border rounded-3xl h-9  bg-white shadow-xl w-[226px] text-center text-[1.2rem] font-semibold  text-green-600 -mt-6"
            >
              {user.first_name} {user.last_name}
            </div>

            <p className="text-center text-gray-600 text-[0.9rem] font-semibold align-middle rounded-full my-2">
              {user.email}
            </p>
          </div>
        ))
      ) : (
        <div>No data available.</div>
      )}
      <Pagination
        totalmember={data.length}
        membersPerPage={membersPerPage}
        setCurrentPage={setCurrentPage}
        setMembersPerPage={setMembersPerPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default UserList;
