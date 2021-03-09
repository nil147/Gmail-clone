import { Button, IconButton } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LableImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExoandMoreIcon from "@material-ui/icons/ExpandMore";
import PhoneIcon from "@material-ui/icons/Phone";
import DuoIcon from "@material-ui/icons/Duo";
import PersonIcon from "@material-ui/icons/Person";
import { openSendMessage } from "../features/mailSlice";
import { useDispatch } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <SidebarContainer>
      <Button
        startIcon={<AddIcon fontSize="large" />}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        selected={true}
        Icon={InboxIcon}
        title="Inbox"
        number={54}
      />
      <SidebarOption Icon={StarIcon} title="Inbox" number={54} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SidebarOption Icon={LableImportantIcon} title="Important" number={54} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={54} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
      <SidebarOption Icon={ExoandMoreIcon} title="More" number={54} />

      <SidebarFooter>
        <SidebarFooterIcons>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </SidebarFooterIcons>
      </SidebarFooter>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  flex: 0.3;
  max-width: 300px;
  padding-right: 20px;

  > button {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
    text-transform: capitalize;
    color: gray;
    padding: 15px;
    border-radius: 30px;
    box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
  }
`;

const SidebarFooter = styled.div`
  display: flex;
  justify-content: center;
`;

const SidebarFooterIcons = styled.div``;
