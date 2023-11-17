import UserList from "./component/UserList";
import React from "react";

const App = () => {
  return (
    <div className="bg-slate-100 w-screen h-screen py-2 ">
      <h1 className="text-6xl font-bold text-center pt-1 text-gray-700">
        Meet Our Team
      </h1>
      <UserList />
    </div>
  );
};

export default App;
