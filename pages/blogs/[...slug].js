import { useRouter } from 'next/router';
import React from 'react';

const BlogPostPage = () => {
    const router = useRouter();
    // console.log("catch all route: ",router.query.blogs);
    return (
        <div>
            <h1>The Blog Page </h1>
        </div>
    );
};

export default BlogPostPage;