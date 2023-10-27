import React, {useEffect} from "react";
import { useDispatch,useSelector} from "react-redux";
import { fetchPosts} from "./postSlice";

export function PostList () {

    const dispatch= useDispatch()
    const PostList = useSelector(({posts: {postList}}) => postList )

    useEffect(() =>{
        dispatch(fetchPosts())
    },[])

    return (
        <>
            <div>
                {PostList?.map((post, index) =>(
                    <div style={{margin:30,border:'1px solid #E0E0E0',padding:20}} key={post.id}>
                        <span>{post.title}</span>
                    <br/>
                        <span>{post.body}</span>
                    </div>
                ))}
            </div>
        </>
    )
}