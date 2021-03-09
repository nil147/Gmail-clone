import React from "react";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);


  return (
    <Router>
      <AppContainer>
        <Header />
        <AppBody>
        <Sidebar />
        <Switch>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route path="/">
            <EmailList />
          </Route>
        </Switch>
        </AppBody>
        {sendMessageIsOpen && <SendMail />}
      </AppContainer>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
height: 100vh;
`;
const AppBody = styled.div`
display: flex;
height: 100%;
flex: 1;
`;
