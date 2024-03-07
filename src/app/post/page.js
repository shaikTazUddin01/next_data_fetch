import Link from 'next/link';
import React from 'react';

const page = async () => {
    const res = await fetch('http://localhost:5000/posts',
    {
        // cache:'force-cache'
        // next:{
        //     revalidate:1
        // }
        cache:"no-store"
    });
    const posts = await res.json()
    console.log(posts)
    return (
        <div>
            <h1>Total Post:{posts.length}</h1>
            {
                posts?.map(post =>
                    <div className="card w-[70%] mx-auto mt-5 text-center bg-gray-100 shadow-xl " key={post?.id}>
                        <div className="card-body">
                            <h2 className="text-center text-3xl ">{post.title}</h2>
                            <p>{post?.description}</p>
                            <div className="card-actions justify-around">
                                <button className="btn btn-primary">{post?.likeCount}</button>
                                <Link href={`/post/${post?.id}`}>
                                <button className="btn btn-primary">see more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default page;