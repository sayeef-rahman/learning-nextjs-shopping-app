import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();
  console.log("router: ", router);
  console.log("pathname: ", router.pathname);
  console.log("query: ", router.query);
  console.log("route: ", router.route);
  return (
    <div>
      <h1>Thi Portfolio Project Page</h1>
    </div>
  );
};

export default PortfolioProjectPage;