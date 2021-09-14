import './App.css';
import { Fragment } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { ProtectedRoute } from './hooks/auth';

import 'firebase/auth'
import 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { SignIn } from './components/SignIn';
import { Feed } from './pages/Feed';
import { MarketPlace } from './pages/MarketPlace';
import { Watch } from './pages/Watch';
import { Groups } from './pages/Groups';

require('dotenv').config()
require('firebase/app')

const firebaseConfig = {
  apiKey: "AIzaSyBucN_ejm6KykhI2rK9KuRFBNQcpQ7D79c",
  authDomain: "aj-clones.firebaseapp.com",
  databaseURL: "https://aj-clones-default-rtdb.firebaseio.com",
  projectId: "aj-clones",
  storageBucket: "aj-clones.appspot.com",
  messagingSenderId: "344095942119",
  appId: "1:344095942119:web:0a7de55d2d308c26f8c942",
  measurementId: "G-EMKJT2XFX0"
  // apiKey: process.env.FACEBOOK_API_KEY,
  // authDomain: process.env.FACEBOOK_AUTH_DOMAIN,
  // databaseURL: process.env.FACEBOOK_DATABASE_URL,
  // projectId: process.env.FACEBOOK_PROJECT_ID,
  // storageBucket: process.env.FACEBOOK_STORAGE_BUCKET,
  // messagingSenderId: process.env.FACEBOOK_MESSAGING_SENDER_ID,
  // appId: process.env.FACEBOOK_APP_ID,
  // measurementId: process.env.FACEBOOK_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

function App() {


  return (
    <Fragment>
      <div id="main" className="bg-gray-100 h-screen">
        <Router>
          <Switch>
            <Route path="/signIn"> <SignIn /> </Route>

            <ProtectedRoute path="/" exact>
              <Feed />
            </ProtectedRoute>

            <ProtectedRoute
              path="/marketplace">
              <MarketPlace />
            </ProtectedRoute>

            <ProtectedRoute
              path="/watch">
              <Watch />
            </ProtectedRoute>

            <ProtectedRoute
              path="/groups">
              <Groups />
            </ProtectedRoute>


            <ProtectedRoute
              path="/:username">
            </ProtectedRoute>

            <Redirect to="/signIn" />
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
