import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SingleBlog = () => {
  const [blogData, setBlogData] = useState();
  const router = useRouter();
  const blogId = router?.query?.id;
  // console.log(blogData);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
      .then((res) => {
        if (res?.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((data) => setBlogData(data));
  }, [blogId]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Blog Details: {blogId}</h1>
      <h3>{blogData?.title.toUpperCase()}</h3>
      <p>{blogData?.body}</p>
      <Link href={"/"}>
        <button>Back To Home</button>
      </Link>
    </div>
  );
};

export default SingleBlog;
