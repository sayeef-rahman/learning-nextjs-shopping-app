import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Thi Portfolio Project Page</h1>
      <h1>Portfolio Id: {router.query.portfolioId}</h1>
    </div>
  );
};

export default PortfolioProjectPage;