import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.status;
    }
  });

const AllUsers = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (error) {
    return "An error has occurred.";
  } else if (!data) {
    return "Loading...";
  }
  console.log(data);
  return (
    <>
      <div className="text-center container">
        <h1>All Users</h1>
        <Link href={"/"}>
          <button>Back To Home</button>
        </Link>
      </div>
      <div style={{ marginTop: "25px" }} className=" container mx-auto row">
        {data?.map((user) => {
          return (
            <div
              className="card col-lg-3 m-3"
              style={{ width: "18rem" }}
              key={user.id}
            >
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                <p className="card-text">{user.company.catchPhrase}</p>
                <Link href={`/users/${user.id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllUsers;
