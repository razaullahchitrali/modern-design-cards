import React from "react";
import { Card, Button } from "ui-neumorphism";
import {
  CardContent,
  Subtitle2,
  H5,
  Body2,
  Avatar,
  H6,
  H3,
  H2,
  Fab,
  IconButton,
} from "ui-neumorphism";

const Neomorphism1 = () => {
  return (
    <>
      <Card
        style={{
          width: "500px",

          padding: "50px",
          backgroundColor: "#e4ebf5",
          borderRadius: "30px",
        }}
      >
        <h1 style={{ display: "flex", marginBottom: "50px" }}>Program</h1>
        <div style={{ display: "flex" }}>
          <Card
            bordered
            style={{
              width: "200px",
              height: "200px",
              alignItems: "start",
              alignItems: "baseline",
              margin: "EdgeInsets.zero",
            }}
          >
            <div
              style={{
                alignItems: "flex-start",
                padding: "7px",
                margin: "0px",
              }}
            >
              <Avatar
                alt="Ankit Kumar Pandit"
                src="src/assets/hand.png"
                style={{
                  marginLeft: "60px",
                  width: 50,
                  height: 50,
                  backgroundColor: "#e4ebf5",
                }}
              />

              <H5 style={{ marginTop: "10px", padding: "8px" }}>
                {" "}
                Arm training
              </H5>

              <p
                style={{
                  marginTop: "30px",
                  marginLeft: "none",
                }}
              >
                In Progress..
              </p>
            </div>
          </Card>

          <Card
            bordered
            style={{
              width: "200px",
              height: "200px",
              margin: "50px",
              alignItems: "baseline",
              margin: "EdgeInsets.zero",
              marginLeft: "15px",
            }}
          >
            <div style={{ alignItems: "flex-start", padding: "7px" }}>
              <Avatar
                alt="Ankit Kumar Pandit"
                src="src/assets/weight.png"
                style={{ marginLeft: "60px", backgroundColor: "#e4ebf5" }}
              />

              <H5 style={{ marginTop: "10px", padding: "8px" }}>
                {" "}
                Weight training
              </H5>

              <p
                style={{
                  marginTop: "10px",
                  marginLeft: "none",
                }}
              >
                Have Finished
              </p>
            </div>
          </Card>
        </div>

        <div style={{ display: "flex", marginTop: "20px" }}>
          <Card
            bordered
            style={{
              width: "200px",
              height: "200px",
              alignItems: "start",
              alignItems: "baseline",
              margin: "EdgeInsets.zero",
            }}
          >
            <div
              style={{
                alignItems: "flex-start",
                padding: "7px",
                margin: "0px",
              }}
            >
              <Avatar
                alt="Ankit Kumar Pandit"
                src="src/assets/yoogo.png"
                style={{ marginLeft: "60px", backgroundColor: "#e4ebf5" }}
              />

              <H5 style={{ marginTop: "10px", padding: "8px" }}>
                {" "}
                Run training
              </H5>

              <p
                style={{
                  marginTop: "30px",
                  marginLeft: "none",
                }}
              >
                In Progress..
              </p>
            </div>
          </Card>

          <Card
            bordered
            style={{
              width: "200px",
              height: "200px",
              margin: "50px",
              alignItems: "baseline",
              margin: "EdgeInsets.zero",
              marginLeft: "15px",
            }}
          >
            <div style={{ alignItems: "flex-start", padding: "7px" }}>
              <Avatar
                alt="Ankit Kumar Pandit"
                src="src/assets/run.png"
                style={{ marginLeft: "60px", backgroundColor: "#e4ebf5" }}
              />

              <H5 style={{ marginTop: "10px", padding: "8px" }}>
                {" "}
                Yogo training
              </H5>

              <p
                style={{
                  marginTop: "30px",
                  marginLeft: "none",
                }}
              >
                No Task
              </p>
            </div>
          </Card>
        </div>
        <h2
          style={{ fontSize: "40px", marginRight: "65px", marginTop: "10px" }}
        >
          Course collection
        </h2>

        <Card
          bordered
          style={{
            width: "400px",
            height: "100px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "15px",
              marginLeft: "30px",
            }}
          >
            <Avatar
              square
              size="large"
              src="src/assets/Raza.png"
              style={{ borderRadius: "10px" }}
            />
            <div style={{ marginLeft: "20px" }}>
              <H5>Courses I attented</H5>
              <H6>11 course in total</H6>
            </div>
          </div>
        </Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            backgroundColor: "v#e4ebf5",
          }}
        >
          <IconButton text={false} size="large" color="var(--primary)">
            <i class="fa-solid fa-house"></i>
          </IconButton>
          <IconButton text={false} size="large" color="var(--black)">
            <i class="fa-regular fa-bell"></i>
          </IconButton>
          <IconButton text={false} size="large" color="var(--black)">
            <i class="fa-solid fa-user"></i>
          </IconButton>
          <IconButton text={false} size="large" color="var(--black)">
            <i class="fa-solid fa-litecoin-sign"></i>
          </IconButton>
        </div>
      </Card>
    </>
  );
};

export default Neomorphism1;
//
