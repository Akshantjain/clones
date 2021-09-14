import { getAuth, signOut } from "firebase/auth";

export const SignOutFromFacebook = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("Signout!")
    }).catch((error) => {
        console.log("Signout")
    });
}
