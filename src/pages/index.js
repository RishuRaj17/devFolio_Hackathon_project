import Head from "next/head";
import "../flow/config";
import { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";

export default function Home() {
  const [user, setUser] = useState({ loggedIn: null });

  useEffect(() => fcl.currentUser.subscribe(setUser), []);

  const AuthedState = () => {
    return (
      <div>
        <div>Address: {user?.addr ?? "No Address"}</div>
        <button onClick={fcl.unauthenticate}>Log Out</button>
      </div>
    );
  };

  const UnauthenticatedState = () => {
    return (
      <div>
        <button onClick={fcl.logIn}>Log In</button>
        <button onClick={fcl.signUp}>Sign Up</button>
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>FCL Quickstart with NextJS</title>
        <meta name="description" content="My first web3 app on Flow!" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div class="navigation">
        <ul>
          <li class="list active">
            <a href="#">
              <span class="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span class="text">Home</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span class="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span class="text">Profile</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span class="icon">
                <ion-icon name="chatbubble-outline"></ion-icon>
              </span>
              <span class="text">Massages</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span class="icon">
                <ion-icon name="camera-outline"></ion-icon>
              </span>
              <span class="text">Photos</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span class="icon">
                <ion-icon name="settings-outline"></ion-icon>
              </span>
              <span class="text">Settings</span>
            </a>
          </li>
          <div class="indicator"></div>
        </ul>
      </div>
      <div>
        <center>
          <h1>Flow App</h1>
        </center>
      </div>

      {user.loggedIn ? <AuthedState /> : <UnauthenticatedState />}
    </div>
  );
}
