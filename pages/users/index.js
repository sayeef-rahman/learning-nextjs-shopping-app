import Link from "next/link";
import React from "react";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url).then((res) => {
    if (res.ok) {
        return res.json();
    }else{
        return res.status;
    }
  });

const AllUsers = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  console.log("data: ", data);
  console.log("error: ", error);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div style={{ textAlign: "center" }}>
      <h1>All Users</h1>
      <Link href={"/"}>
        <button>Back To Home</button>
      </Link>

      <div style={{ marginTop: "25px" }}>{
        
      }</div>
    </div>
  );
};

export default AllUsers;
