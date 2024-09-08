import React, { useState } from "react";
import './App.css';

const App = () => {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });
  const [error, setError] = useState("");
  const [submittedName, setSubmittedName] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName.firstName === "" || fullName.lastName === "") {
      setError("Both fields are required");
      setSubmittedName("");
    } 
    else {
      setError("");
      setSubmittedName(`${fullName.firstName} ${fullName.lastName}`); 
    }
  };

  const changeHandler = (e) => {
    //const { name, value } = e.target;
    setFullName((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="App">
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={fullName.firstName}
                onChange={changeHandler}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={fullName.lastName}
                onChange={changeHandler}
                required
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {submittedName && <h2>Full Name: {submittedName}</h2>} 
      </div>
    </div>
  );
};

export default App;
