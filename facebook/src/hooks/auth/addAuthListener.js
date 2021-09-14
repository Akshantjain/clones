import {getAuth, onAuthStateChanged} from 'firebase/auth';

export const addAuthListener = (callback) => {
    const onChange = (user) => {
        if (user) {
            callback({ });
        } else {
            callback(null);
        }
    }

    return onAuthStateChanged(getAuth(), onChange);
}