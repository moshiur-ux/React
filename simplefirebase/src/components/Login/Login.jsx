import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGoogleSignOUT = () => {
    signOut(auth)
      .then(result => {
        console.log(result)
        setUser(null);
      })

      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      { user ?

<button className="text-center font-extrabold" onClick={handleGoogleSignOUT}>Sign Out</button>:
        <button onClick={handleGoogleSignIn}>Google login</button> 
        
        
  
      }
      {user && (
        <div>
          <h3>User:{user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;