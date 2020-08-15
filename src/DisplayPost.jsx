import React, {useState} from 'react';
import Post from './Post.jsx';
import PostReplies from './PostReplies.jsx';

const DisplayPost = ({
  name, 
  description,
}) => {
  const [showReplyTool, setShowReplyTool] = useState(false);
  const [comments, setComments] = useState([]);
  const handleReplyButton = (e) => {
    e.preventDefault();
    setShowReplyTool(!showReplyTool);
  }
  const latestComments = (comments) => {
    setComments(comments);
  };
  return (
    <>
    <dl className="uk-description-list">
      <dt>{name}</dt>
      <dd>{description}</dd>
    </dl>
    <div>
      <a
        className="uk-link-muted"
        onClick={(e) => {handleReplyButton(e)}}>Reply to post</a>
    </div>
    <PostReplies comments={comments}/>
    {
      showReplyTool ? <Post commentsCallBack={latestComments}/> : null
    }
    </>
  );
};

export default DisplayPost;
