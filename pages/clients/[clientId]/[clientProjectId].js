import { useRouter } from "next/router";

const SelectedClientprojectPage = () => {
    const router = useRouter();
    return (
        <div>
            <h1>The Project Page for a specific Project for a Selected Client</h1>
            <h1>Client Name: {router.query.clientId}</h1>
            <h1>Project Id: {router.query.clientProjectId}</h1>
        </div>
    );
};

export default SelectedClientprojectPage;