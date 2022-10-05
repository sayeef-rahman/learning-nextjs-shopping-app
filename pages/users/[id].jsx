import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UserDetails = () => {
  const { query } = useRouter();
  const { id } = query;
  console.log("id:", query);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const { data, error } = useSWR(url, fetcher);

  if (error) {
    return "error occured in user";
  }
  if (!data) {
    return "loading data....";
  }
  

  return (
    <>
      <div className="container mx-auto text-center row">
        <div className="card col m-3" style={{ width: "18rem" }} key={data.id}>
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{data.email}</h6>
            <p className="card-text">{data?.company?.catchPhrase}</p>
          </div>
        </div>
      </div>
      <div className="w-25 text-center row mx-auto">
        <Link href={`/users`}>
          <button className="btn btn-primary">Back to users</button>
        </Link>
      </div>
    </>
  );
};

export default UserDetails;
