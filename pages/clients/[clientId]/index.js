import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  const checkProjectDetails = () =>{
    // router.push("clientid/clientProjectId"); //menual way
    // router.replace("/clients/clientProjectId"); //menual way

    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: {id: 'sayeef',
      clientProjectId: "sindabad"}
    }); //dynamic way
  }
  return (
    <div>
      <h1>The Projects for a Given Client</h1>
      <h1>Client Name: {router.query.clientId}</h1>
      <button onClick={checkProjectDetails}>Project Details</button>
    </div>
  );
};

export default ClientProjectsPage;
