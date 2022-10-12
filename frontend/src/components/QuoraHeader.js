import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import {
  AssignmentTurnedIn,
  Close,
  ExpandMore,
  FeaturedPlayListOutlined,
  NotificationAddOutlined,
  PeopleAltOutlined,
  Search,
} from "@mui/icons-material";
import { Avatar, Button, Input } from "@mui/material";
import "./css/Quoraheader.css";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from "axios";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../feature/userSlice";

function QuoraHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const close = <Close />;
  const [question, setQuestion] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user,
      };
      await axios
        .post("/api/questions/", body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");
        });
    }
  };
  const handleLogout = () => {
    if (window.confirm("Are you sure to log out?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
          console.log("Logged Out");
        })
        .catch(() => {
          console.log("Error in logging out");
        });
    }
  };
  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://media1.giphy.com/media/5n1U4DoZkwllUk6cPD/giphy.gif?cid=6c09b952tz34vj4o45vlx7xu97bataz9qxh8rd9zti6s1k71&rid=giphy.gif&ct=s"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <HomeIcon />
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListOutlined />
          </div>
          <div className="qHeader__icon">
            <AssignmentTurnedIn />
          </div>
          <div className="qHeader__icon">
            <PeopleAltOutlined />
          </div>
          <div className="qHeader__icon">
            <NotificationAddOutlined />
          </div>
        </div>
        <div className="qHeader__input">
          <Search />
          <input type="text" placeholder="search questions" />
        </div>
        <div className="qHeader__Rem">
          <span onClick={handleLogout}>
            <Avatar src={user?.photo} />
          </span>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          style={{
            backgroundColor: "darkred",
            margin: "10px",
            color: "whitesmoke",
          }}
        >
          Add Question
        </Button>
        <Modal
          open={isModalOpen}
          closeIcon={close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{ overlay: { height: "auto" } }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar src={user?.photo} className="avatar" />
            <div className="modal__scope">
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input
              type="text"
              placeholder="Ask your question here..."
              onChange={(e) => setQuestion(e.target.value)}
              value={question}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                type="text"
                placeholder="include a image that give context"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                style={{
                  margin: "5px 0px",
                  border: "1px solid lightgrey",
                  padding: "10px",
                  outline: "2px solid #000",
                }}
              />
              {inputUrl !== "" && (
                <img
                  src={inputUrl}
                  alt=""
                  style={{
                    height: "300px",
                    objectFit: "contain",
                    margin: "10px",
                  }}
                />
              )}
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancel" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button
              className="add"
              type="submit"
              style={{ margin: "5px" }}
              onClick={handleSubmit}
            >
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default QuoraHeader;
