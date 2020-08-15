import React, {useState} from 'react';
const Post = ({
  commentsCallBack,
}) => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [authorName, setAuthorName] = useState('');
  const [description, setDescription] = useState('');
  const [commentsArray, setCommentsArray] = useState([]);
  const handleOnChange = (e) => {
    e.preventDefault();
    const name = document.getElementById('re_name').value;
    const description = document.getElementById('re_description').value;
    if (!(name === '') || !(description === '')) setIsSubmitDisabled(false);
    else setIsSubmitDisabled(true);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('re_name').value;
    const desc = document.getElementById('re_description').value;
    setAuthorName(name);
    setDescription(desc);
    const obj = {name:authorName, description:description} ;
    setCommentsArray([...commentsArray, obj]);
    commentsCallBack([...commentsArray, obj]);
  };
  return(
    <>
      <div className="uk-child-width-1@s uk-grid-match" uk-grid="true">
      <div className="uk-card uk-card-hover uk-card-body">
      <div className="uk-margin">
        <input className="uk-input" type="text" id="re_name" placeholder="Enter Your Name" onChange={(e) => {handleOnChange(e)}} />
      </div>
      <div className="uk-margin">
        <input className="uk-input" type="text" id="re_description" placeholder="Enter Your Post" onChange={(e) => {handleOnChange(e)}} />
      </div>
      <button className="uk-button uk-button-primary" disabled={isSubmitDisabled} onClick={(e)=>{handleSubmit(e)}}>Submit</button>
      </div>
      </div>
    </>
  )
}
export default Post;
