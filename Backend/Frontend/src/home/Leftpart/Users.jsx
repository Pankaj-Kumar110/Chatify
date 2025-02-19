import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";



function Users() {
  const [allUsers, loading] = useGetAllUsers();



  // console.log(allUsers);
  return (
    <div>
      <div
        className="py-6 flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(84vh - 12vh)" }}
      >
        {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;
