import React, {useState} from 'react';
import axios from 'axios'
import UsersCard from './components/UsersCard';
function App () {
  const [photo, setPhoto] = useState ('');
  const [name, setName] = useState ('');
  const [email, setemail] = useState ('');

  function handleFormSubmittion (e) {
   try{
    e.preventDefault ();

    let form = document.getElementById ('form');
    let formData = new FormData (form);

    // new line added
    axios.post ('http://localhost:5000/user/upload', formData);
   }catch(err){
    console.log(err)
   }
  }
  function handleFileTitle (e) {
    setName (e.target.value);
  }

function handelemial(z){
  setemail(z.target.value)
}
  function handleUploadedFile (e) {
    setPhoto (e.target.value);
  }

  return (
    <React.Fragment>
      <h1>File upload</h1>
      <form
        encType="multipart/form-data"
        onSubmit={handleFormSubmittion}
        id="form"
      >
        <input
          type="file"
          name="uploadedFile"
          value={photo}
          onChange={handleUploadedFile}
          required
        />
        <br />
        <br />

        <label>File title:</label><br />
        <input
          type="text"
          placeholder="Enter file title"
          name="fileTitle"
          value={name}
          onChange={handleFileTitle}
          required
        />
        <br />
        <br />
        <label>File title:</label><br />
        <input
          type="text"
          placeholder="Enter email title"
          name="email"
          value={email}
          onChange={handelemial}
          required
        />
        <br />
        <br />
        <button type="submit">Submit Form</button>
      </form>
     <UsersCard/> 
    </React.Fragment>
  );
}

export default App;
