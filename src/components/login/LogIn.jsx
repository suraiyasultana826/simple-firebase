import React, { useState } from 'react';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.init';

const LogIn = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    console.log(app)
    const provider = new GoogleAuthProvider;
    const handleGoogleSignIn =() => {
        signInWithPopup(auth, provider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log("error", error.message)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Login</button>
           { user && <div>
                <h3>User: {user.displayName}</h3>
            </div>}
        </div>
    );
};

export default LogIn;