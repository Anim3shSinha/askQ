import { Avatar } from "@mui/material";
import React from "react";
import "./css/QuoraBox.css";
import { selectUser } from "../feature/userSlice";
import { useSelector } from "react-redux";
function QuoraBox() {
  const user = useSelector(selectUser);
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar style={{ marginBottom: "10px" }} src={user?.photo} />
      </div>
      <h5>What is your question?</h5>
    </div>
  );
}

export default QuoraBox;
