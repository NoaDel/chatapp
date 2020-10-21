import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './Assets/styles.scss';
import ProfilePic from './components/ProfilePic';
import ChannelForm from './components/ChannelForm';
import NavigationButton from './components/NavigationButton';
import MessageDisplay from './components/MessageDisplay';
import ChatBox from './components/ChatBox';
import firebase from 'firebase'
import FirebaseKey from './Keys/Key.js'
// import { db } from '../services/firebase'



// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
require('firebase/database');
const firebaseConfig = FirebaseKey;
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth
export const db = firebase.firestore()
var database = firebase.database();
var members = ["Tommy", "Billy"];
class App extends React.Component {
    render() {
      return (
      <>
          <div className="topBar">
            <NavigationButton/>
            <ChannelForm/>
            <ProfilePic/>
          </div>
            <ChatBox/>
            <MessageDisplay/>
      </>
      );
    }
  }
  var connectedRef = firebase.database().ref(".info/connected");
  connectedRef.on("value", function(snap) {
    if (snap.val() === true) {
      alert("connected");
    } else {
      alert("not connected");
    }
  });
  // return (
  //   <>
  //       <div className="topBar">
  //           <NavigationButton/>
  //         <ProfilePic/>
  //       </div>
  //         <ChatBox/>
  //         <MessageDisplay/>
  //   </>
  // );


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
console.log("returnAfter");

var readTest = firebase.database().ref('messages/general/m1/message');
var usernameish;
readTest.on('value', function(snapshot) {
  usernameish = snapshot.val();
});
var rootRef = firebase.database().ref().child('messages/general/m1');
rootRef.update({
  message:"hhaha haha",
  timestamp: new Date().getHours()
});
console.log(usernameish);
console.log(new Date().getHours());

export function addChatterChannel(name, userId) {
  return db.collection('channels').add({
    name,
    creator: userId,
    members: [],
    public: true,
    dateCreated: new Date()
  })
}

export function addChannelMessage(message) {
  return db.collection('messages').add({
    text: message.text,
    userId: message.userId,
    dateCreated: new Date(),
    channelId: message.channelId
  })
}

export function deleteChannel(channelId) {
  return db.collection('channels').doc(channelId).delete()
}

export function addNewUser(user) {
  return db.collection('users').add({
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL
  })
}

export function joinChannel(channel, userId) {
  console.log(channel, userId)
  return db.collection('channels').doc(channel.id).set({
    members: [
      ...channel.members,
      userId
    ]
  }, { merge: true })
}