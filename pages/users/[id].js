import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => {
  fetch(url).then((res) => {
    if (res.ok) {
      console.log(res);
      return res.json();
    } else {
      return res.status;
    }
  });
};

const UserDetails = () => {
  const router = useRouter();
  const userId = router?.query?.id;
  console.log(userId);

  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    fetcher
  );
  console.log(data);

  if (error) {
    return "error occured in user";
  }
  if (!data) {
    return "loading data....";
  }

  return <div>{data.id}</div>;
};

export default UserDetails;
