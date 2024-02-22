import React from "react";
import Comment from "./comment";

const comments = [
    {
        name: "재민",
        comment: "안녕.",
    },
    {
        name: "동혁",
        comment: "하이.",
    },
    {
        name: "제노",
        comment: "안녕하세요.",
    },
];
function CommentList(props) {
    return (
        <div>
            {comments.map((comment) =>  {
                return (
                    <Comment name={comment.name} comment={comment.comment}  />
                );
            })}
        </div>
    );
}
export default CommentList;