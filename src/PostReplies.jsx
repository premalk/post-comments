import React from 'react';

const PostReplies = ({
  comments,
}) => {
  return (
    <>
    <h5 className="uk-card-title">Comments</h5>
    {
      comments && comments.length && comments.map((obj, key)=>{
        const {name, description } = obj;
        return (
          <dl className="uk-description-list" key={key}>
            <dt>{name}</dt>
            <dd>{description}</dd>
          </dl>
        );
      })
    }
    </>
  );
};

export default PostReplies;
