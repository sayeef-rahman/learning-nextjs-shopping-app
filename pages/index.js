import { useRouter } from "next/router";
import { useState } from "react";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import Image from "next/image";

const HomePage = (props) => {
  const { products } = props;
  const router = useRouter();
  const handleViewClients = () => {
    router.push("/clients");
  };

  return (
    <div>
      <div>
        <h1 className="text-center my-3">The Home Page</h1>
        <div className="d-flex justify-content-center mt-4">
          <button onClick={handleViewClients} className="btn btn-primary me-2">
            View Clients
          </button>
          <Link href={"/blogs"}>
            <button className="btn btn-primary me-2 fw-bold">View Blogs</button>
          </Link>
          <Link href={"/users"} className="m-2">
            <button className="btn btn-primary">View Users</button>
          </Link>
        </div>
      </div>
      <div className="container my-3">
        <h1>Products</h1>
        <div className="row">
          {products?.map((product) => {
            const productImage = product.images[0];
            console.log("productImage: ", productImage);
            return (
              <div
                className="card col-2 m-3"
                style={{ width: "18rem" }}
                key={product.id}
              >
                {/* <Image src={productImage} className="card-img-top" alt="product image" width={500}
        height={500} /> */}
                <img
                  src={productImage}
                  className="card-img-top mt-2"
                  alt="product image"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            );
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
    props: {
      products,
    },
  };
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
