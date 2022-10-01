import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  const handleViewClients = () => {
    router.push("/clients");
  };
  return (
    <div>
      <h1>The Home Page</h1>
      <button onClick={handleViewClients}>View Clients</button>
    </div>
  );
};

export default HomePage;
