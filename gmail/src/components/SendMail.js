import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase";
import firebase from "firebase";

function SendMail() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage())
  };

  return (
    <SendMailContainer>
      <SendMailHeader>
        <h3>New Message</h3>
        <CloseIcon onClick={() => dispatch(closeSendMessage())} />
      </SendMailHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register({ required: true })}
          name="to"
          placeholder="To"
          type="email"
        />
        <MailError>{errors.to && <p>To is required!</p>}</MailError>

        <input
          ref={register({ required: true })}
          name="subject"
          placeholder="Subject"
          type="text"
        />
        <MailError>{errors.subject && <p>Subject is required!</p>}</MailError>
        <Message
          ref={register({ required: true })}
          name="message"
          placeholder="Message"
          type="text"
        ></Message>
        <MailError>{errors.message && <p>Message is required!</p>}</MailError>
        <SendOptions>
          <Button onClick={handleSubmit(onSubmit)}>Send</Button>
        </SendOptions>
      </form>
    </SendMailContainer>
  );
}

export default SendMail;

const SendMailContainer = styled.div`
  position: absolute;
  bottom: 0px;
  right: 50px;
  background-color: #404040;
  width: 40%;
  height: 40%;
  max-width: 500px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);

  > form {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  > form > input {
    height: 30px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid whitesmoke;
    outline: none;
  }
`;

const Message = styled.input`
  flex: 1;
`;

const SendMailHeader = styled.div`
  padding: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;

  > h3 {
    color: whitesmoke;
    font-size: 13px;
  }

  > .MuiSvgIcon-root {
    cursor: pointer;
  }
`;
const SendOptions = styled.div`
  > button {
    background-color: #3079ed;
    text-transform: capitalize;
    margin: 15px;
  }
`;

const MailError = styled.p`
  background-color: white;
  color: red;
  text-align: right;
  padding: 2px;
`;
