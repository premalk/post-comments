import React, {useState, useEffect} from 'react';
import Post from './Post.jsx';
import DisplayPost from './DisplayPost.jsx';

const CreatePost = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isPostDisplay, setIsPostDisplay] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [description, setDescription] = useState('');
  const handleOnChange = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    if (!(name === '') || !(description === '')) setIsButtonDisabled(false);
    else setIsButtonDisabled(true);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPostDisplay(true);
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    setAuthorName(name);
    setDescription(description);
  };
  return(
  <>
  <div className="uk-child-width-1@s uk-grid-match" uk-grid="true">
    <div>
        <div className="uk-card uk-card-hover uk-card-body">
            <h3 className="uk-card-title">Create Post</h3>
      <div className="uk-margin">
        <input className="uk-input" id="name" type="text" placeholder="Enter Your Name" onChange={(e) => {handleOnChange(e)}} />
      </div>
      <div className="uk-margin">
        <input className="uk-input" type="text" id="description" placeholder="Enter Your Post" onChange={(e) => {handleOnChange(e)}} />
      </div>
      <button className="uk-button uk-button-primary" disabled={isButtonDisabled} onClick={(e)=> {handleSubmit(e)}}>Submit</button>
        </div>
    </div>
  </div>
  {isPostDisplay ? <div className="uk-child-width-1@s uk-grid-match" uk-grid="true">
    <DisplayPost
      name={authorName}
      description={description}
    />
  </div> : null}
  </>
  )
}
export default CreatePost;
