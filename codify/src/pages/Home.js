import React from "react";

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

  return (
    <div style={styles.homePage}>
      <div style={styles.form}>
        <img src="#" alt="Codify" />
        <h4 style={styles.mainLabel}>Enter Invitation ROOM ID</h4>
        <div style={styles.inputForm}>
          <input type="text" style={styles.inputBox} placeholder="ROOM ID" />
          <input type="text" style={styles.inputBox} placeholder="USERNAME" />
          <button style={styles.joinBtn}>Join</button>
          <span style={styles.createInfo}>
            If you Don't have an invite then create &nbsp;
            <a href="" style={styles.createNewBtn}>
              new room
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
