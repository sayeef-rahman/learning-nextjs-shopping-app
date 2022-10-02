import Link from "next/link";

const BlogsPage = (props) => {
  const { blogs } = props;
  return (
    <>
    <h1 style={{textAlign: 'center'}}>All Blogs</h1>
      {blogs.slice(0, 5).map((blog) => {
        return (
          <div key={blog.id}>
            <h4>Title: {blog.title}</h4>
            <h4>Blog ID: {blog.id}</h4>
            <button>
              <Link href={"/blogs/" + blog.id}>Blog Details</Link>
            </button>
          </div>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await res.json();

  return {
    props: {
      blogs,
    },
  };
}

export default BlogsPage;
