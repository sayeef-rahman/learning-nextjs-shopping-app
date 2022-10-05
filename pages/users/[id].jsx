import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UserDetails = () => {
  const { query } = useRouter();
  const { id } = query;
  console.log("id:", query);
  const url = `https://jsonplaceholder.typicode.com/users/8`;

  const { data, error } = useSWR(url, fetcher);
  useEffect(() => {
    // if (error) {
    //   return "error occured in user";
    // }
    // if (!data) {
    //   return "loading data....";
    // }
    console.log("object");
    if (data) console.log("data: ", data);
  }, [error, data]);

  // if (data) console.log("data: ", data);

  //   return (
  //     <>
  //       {data && !error && <div>{data?.id}</div>}
  //       {!data && <div>loadConfig...</div>}
  //     </>
  //   );
  if (error) {
    return <>fff</>;
  }
  if (!data) {
    return <>xxx</>;
  }
  return <>{data.id}</>;
};

export default UserDetails;
