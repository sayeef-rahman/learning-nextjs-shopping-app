import { useRouter } from "next/router";
import { useState } from "react";
import fs from "fs/promises";
import path from "path";

const HomePage = (props) => {
  const [data, setData] = useState([]);
  const { products } = props;
  console.log(products);
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

// export async function getStaticProps() {
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

// get data from dummyData.json file in data directory(folder) projects

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummyData.json");
  const jsonData = await fs.readFile(filePath);
  const products = JSON.parse(jsonData);

  return {
    props:{
      products
    }
  }
}

// get static data from api with getStaticProps()

// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();

//   const products = [
//     { id: 1, title: "iPhone 9" },
//     { id: 2, title: "iPhone 10" },
//     { id: 3, title: "iPhone 11" },
//   ];

//   return {
//     props: {
//       posts,
//       products,
//     },
//   };
// }


// get data from serverSide

// export async function getServerSideProps(){
//   const res = await fetch("https://dummyjson.com/products?skip=0&limit=20");
//   const serverProducts = await res.json();

//   return {
//     props:{
//       serverProducts
//     }
//   }
// }

export default HomePage;
