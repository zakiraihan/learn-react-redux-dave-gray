import React from 'react'
import { reactionAdded } from "./postSlice";
import { useDispatch } from "react-redux";

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕'
}

function ReactionButtons(props) {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type={"button"}
        className={"reactionButton"}
        onClick={() => 
          dispatch(reactionAdded({ postId: props.post.id, reaction: name }))
        }
      >
        {emoji} {props.post.reactions[name]}
      </button>
    )
  })
  
  return (
    <div>{reactionButtons}</div>
  )
}

export default ReactionButtons