import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const styles = {
    homePage: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#1c1e29",
    },
    form: {
      textAlign: "center",
      background: "#282a36",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    },
    mainLabel: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#fff",
    },
    inputForm: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    inputBox: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    joinBtn: {
      backgroundColor: "#007BFF",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    createInfo: {
      marginTop: "10px",
      fontSize: "14px",
      color: "#ccc",
    },
    createNewBtn: {
      color: "#007BFF",
      textDecoration: "none",
    },
  };

  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("Created New Room");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("ROOM ID & Username is required");
      return;
    }
    navigate(`/editor/${roomId}`, {
      state: { username },
    });
  };

  const handleChangeEnter = (e) => {
    if (e.keyCode === 13) {
      //13 is the keycode for enter key
      joinRoom();
    }
  };

  return (
    <div style={styles.homePage}>
      <div style={styles.form}>
        <img src="#" alt="Codify" />
        <h4 style={styles.mainLabel}>Enter Invitation ROOM ID</h4>
        <div style={styles.inputForm}>
          <input
            type="text"
            style={styles.inputBox}
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleChangeEnter}
          />
          <input
            type="text"
            style={styles.inputBox}
            placeholder="USERNAME"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleChangeEnter}
          />
          <button style={styles.joinBtn} onClick={joinRoom}>
            Join
          </button>
          <span style={styles.createInfo}>
            If you Don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href="" style={styles.createNewBtn}>
              new room
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
