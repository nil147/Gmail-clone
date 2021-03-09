import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar, IconButton } from "@material-ui/core";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";


function Header() {
  const user = useSelector(selectUser);


  return (
    <HeaderContainer>
      <HeaderLeft>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt="Logo"
        />
      </HeaderLeft>
      <HeaderCenter>
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <IconButton>
          <ArrowDropDownIcon fontSize="small" />
        </IconButton>
      </HeaderCenter>
      <HeaderRight>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <Avatar src={user.photoUrl} />
        </IconButton>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px;

  > img {
    object-fit: contain;
    height: 50px;
  }
`;
const HeaderCenter = styled.div`
  display: flex;
  align-items: center;

  border-radius: 5px;
  flex: 0.7;
  padding: 0px 10px;
  margin: 0px 10px;
  background-color: whitesmoke;
  color: gray;

  > input {
    width: 100%;
    outline: none;
    border: none;
    padding: 5px 0px;
    background-color: transparent;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
