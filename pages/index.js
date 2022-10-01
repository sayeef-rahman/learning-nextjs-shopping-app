import { useRouter } from "next/router";

const HomePage = (props) => {
    const {products} = props;
  console.log(props);
  const router = useRouter();
  const handleViewClients = () => {
    router.push("/clients");
  };
  return (
    <div>
      <div>
        <h1>The Home Page</h1>
        <button onClick={handleViewClients}>View Clients</button>
      </div>
      <div>
        <h1>Products</h1>
        <div>
          {products?.map((product) => {
            return <h1 key={product.id}>{product.title}</h1>;
          })}
        </div>
      </div>
    </div>
  );
};

// get static data with getStaticPorps()

// export async function getStaticPorps() {
//   const products = [
//     { id: 1, title: "iPhone 9" },
//     { id: 2, title: "iPhone 10" },
//     { id: 3, title: "iPhone 11" },
//   ];
//   return {
//     props: {
//       products,
//     },
//   };
// }

// get static data with getStaticPorps()

export async function getStaticProps() {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const posts = await res.json();
  const products = [
    { id: 1, title: "iPhone 9" },
    { id: 2, title: "iPhone 10" },
    { id: 3, title: "iPhone 11" },
  ];
  return {
    props: {
      products,
    },
  };
}

export default HomePage;
