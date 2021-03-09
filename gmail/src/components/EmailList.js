import { Checkbox, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LoaclOfferIcon from "@material-ui/icons/LocalOffer";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "../firebase";

function EmailList() {
  const [allMails, setAllMails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setAllMails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <EmailListContainer>
      <EmailListSetting>
        <SettingsLeft>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </SettingsLeft>
        <SettingsRight>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </SettingsRight>
      </EmailListSetting>
      <EmailListSections>
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
        <Section Icon={LoaclOfferIcon} title="Promotions" color="green" />
      </EmailListSections>
      <AllEmails>
        
        {allMails.map(({id, data: { to, subject, message, timestamp }}) => (
            <EmailRow
            key={id}
            title={to}
            subject={subject}
            description={message}
            id={id}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </AllEmails>
    </EmailListContainer>
  );
}

export default EmailList;

const EmailListContainer = styled.div`
  flex: 1;
  overflow: scroll;
  padding-bottom: 20%;

  &::-webkit-scrollbar {
      display: none;
  }

  
`;

const EmailListSetting = styled.div`
  top: 0;
  position: sticky;
  border-bottom: 1px solid whitesmoke;
  background-color: white;
  display: flex;
  justify-content: space-between;
  z-index: 9999;
  padding-right: 10px;
`;

const SettingsLeft = styled.div``;

const SettingsRight = styled.div``;

const EmailListSections = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  border-bottom: 1px solid whitesmoke;
  background-color: white;
  z-index: 99999;
`;

const AllEmails = styled.div``;
