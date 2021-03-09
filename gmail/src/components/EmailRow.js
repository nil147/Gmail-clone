import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LableImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice";

function EmailRow({ title, subject, description, id, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push("/mail");
  };

  return (
    <EmailRowContainer onClick={() => openMail()}>
      <RowOptions>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LableImportantOutlinedIcon />
        </IconButton>
      </RowOptions>
      <RowTitle>
        <h3>{title}</h3>
      </RowTitle>
      <RowMessage>
        <h4>{subject}</h4>
        <RowDescription>- {description}</RowDescription>
      </RowMessage>
      <RowTime>{time}</RowTime>
    </EmailRowContainer>
  );
}

export default EmailRow;

const EmailRowContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid whitesmoke;
  cursor: pointer;
  z-index: 9999;

  &:hover {
    border-top: 1px solid whitesmoke;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
  }
`;

const RowOptions = styled.div`
  display: flex;
`;
const RowTitle = styled.div`
  font-size: 13px;
  flex: 0.2;
`;
const RowMessage = styled.div`
  display: flex;
  flex: 0.8;
  align-items: center;
  font-size: 13px;

  > h4 {
    max-width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 5px;
    padding-right: 5px;
  }
`;
const RowDescription = styled.div`
  font-weight: 400;
  color: gray;
`;
const RowTime = styled.div`
  padding-right: 15px;
  font-size: 9px;
  font-weight: bold;
`;
