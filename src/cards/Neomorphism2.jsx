import React from "react";
import { Avatar } from "ui-neumorphism";
import {
  Fab,
  Card,
  CardContent,
  Subtitle2,
  Body2,
  CardAction,
  Button,
  H5,
  H6,
  ProgressCircular,
  IconButton,
} from "ui-neumorphism";

const Neomorphism2 = () => {
  return (
    <>
      <Card
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "50px",
          borderRadius: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Plan List</h1>
          <Fab>
            <span style={{ fontSize: "20px" }}>&#43;</span>
          </Fab>
        </div>
        <Card
          style={{
            width: 250,
            height: 250,
            borderRadius: 250,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            marginLeft: 60,
          }}
        >
          <img
            src="src/assets/run.png"
            alt=""
            style={{
              width: 50,
              height: 50,
            }}
          />
          <h2 style={{ marginTop: "10px" }}>8.690</h2>
          <p disabled style={{ margin: "10px" }}>
            Goal 12k
          </p>
        </Card>

        <Card
          style={{
            marginTop: "70px",
            height: "150px",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CardContent style={{ display: "flex" }}>
            <Avatar
              alt="Ankit Kumar Pandit"
              src="src/assets/hand.png"
              style={{ backgroundColor: "#e4ebf5" }}
            />
            <div style={{ marginLeft: "30px" }}>
              <H5>Completed:4 group</H5>
              <H6>Goal:3 Goals</H6>
            </div>
            <ProgressCircular value={70} style={{ marginLeft: "25px" }} />
          </CardContent>
        </Card>

        <Card
          style={{
            marginTop: "30px",
            height: "150px",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CardContent style={{ display: "flex" }}>
            <Avatar
              alt="Ankit Kumar Pandit"
              src="src/assets/yoogo.png"
              style={{ backgroundColor: "#e4ebf5" }}
            />
            <div style={{ marginLeft: "30px" }}>
              <H5>Completed:4 group</H5>
              <H6>Goal:3 Goals</H6>
            </div>
            <ProgressCircular value={100} style={{ marginLeft: "25px" }} />
          </CardContent>
        </Card>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
            backgroundColor: "v#e4ebf5",
          }}
        >
          <IconButton text={false} size="large" color="var(--primary)">
            <i className="fa-solid fa-house"></i>
          </IconButton>
          <IconButton text={false} size="large" color="var(--black)">
            <i className="fa-regular fa-bell"></i>
          </IconButton>
          <IconButton text={false} size="large" color="var(--black)">
            <i className="fa-solid fa-user"></i>
          </IconButton>
          <IconButton text={false} size="large" color="var(--black)">
            <i className="fa-solid fa-litecoin-sign"></i>
          </IconButton>
        </div>
      </Card>
    </>
  );
};

export default Neomorphism2;
