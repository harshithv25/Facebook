import React, { useState } from "react";
// eslint-disable-next-line
import { Avatar, IconButton, Icon } from "@material-ui/core";
import "./MessageSender.css";
import { useStateValue } from "./StateProvider";
import db from './firebase';
import firebase from 'firebase';

function MessageSender() {

  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const [imageInput, setimageInput] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();

    if (input === '' || input === ' ' && imageInput === '' || imageInput === ' ') {
      return null;
    } else {
      db.collection('Posts').add({
        message: input,
        image: imageInput,
        userName: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL
      })

      setInput("");
      setimageInput("");
    }
  };

  // db.collection("Posts")
  //   .get()
  //   .then(res => {
  //     res.forEach(element => {
  //       element.ref.delete();
  //     });
  //   });

  return (
    <div className="messagesender" id="post">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind(Doesnot matter), ${user.displayName}?`}
          />
          <input
            placeholder="Image URL(Optional)"
            value={imageInput}
            type="text"
            onChange={(e) => setimageInput(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MessageSender;
