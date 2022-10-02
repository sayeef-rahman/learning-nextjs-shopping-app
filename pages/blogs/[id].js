import { useRouter } from "next/router";

const SingleBlog = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Single Blog Page with ID: {router.query.id}</h1>
        </div>
    );
};

// export async

export default SingleBlog;