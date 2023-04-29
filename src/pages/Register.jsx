import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FcAddImage } from "react-icons/fc";
import { auth, db, storage } from "../firebase";
import { useContext, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../context/AuthProvider";

const fileStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

const Register = () => {
  const [error, setError] = useState(false);
  const { handleRegister, user } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const file = e.target.file.files[0];
    try {
      handleRegister(email, password);
      console.log(user);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Sumon Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" id="name" placeholder="Enter name" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
          <input
            type="file"
            name="file"
            id="file"
            style={{ display: "none" }}
          />
          <label htmlFor="file" style={fileStyle}>
            <FcAddImage style={{ fontSize: "3rem" }} />{" "}
            <span>Add an avatar</span>
          </label>
          {error && (
            <span style={{ fontWeight: "bolder" }}>
              Something went wrong !!
            </span>
          )}
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? please login</p>
      </div>
    </div>
  );
};

export default Register;
