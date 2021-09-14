import { onAuthStateChanged } from "@firebase/auth";
import { useState } from "react";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Fragment } from "react/cjs/react.production.min";
import { getCurrentUser } from "../hooks/auth/currentUser";
import { signInWithFacebook } from "../hooks/auth/signInWithFacebook"
import { SignOutFromFacebook } from "../hooks/auth/SignOutFromFacebook"
import { getAuth } from "firebase/auth";

export const SignIn = () => {
    const [user, setUser] = useState(getCurrentUser());
    
    onAuthStateChanged(getAuth() ,() => setUser(user));

    const history = useHistory();

    const signIn = async () => {
        await signInWithFacebook();
        history.push('/');
    }

    return (
        <Fragment>
            {user ? <div>
                <button onClick={signIn} className="mx-2 px-2 my-1 py-1 rounded-md bg-white font-bold">SignIn</button>
                <button onClick={SignOutFromFacebook} className="mx-2 px-2 my-1 py-1 rounded-md bg-white font-bold">Sign Out</button>
            </div> : <Redirect to="/"/>}
        </Fragment>
    )
}
