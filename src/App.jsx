import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="menuLateral">
        <i className="fa-brands fa-facebook" style={{ color: "white" }}></i>
        <i className="fa-brands fa-twitter" style={{ color: "white" }}></i>
        <i className="fa-brands fa-instagram" style={{ color: "white" }}></i>
        <i className="fa-brands fa-youtube" style={{ color: "white" }}></i>
        <i className="fa-brands fa-tiktok" style={{ color: "white" }}></i>
      </div>
      <header>
        <div>
          <span className="isLive">
            Live &nbsp;&nbsp;<i className="fa-solid fa-satellite-dish"></i>
          </span>
          <span> Lorem ipsu dolor sit amet </span>
          <span className="isJoin">
            Join Now &nbsp;&nbsp;<i className="fa-solid fa-circle-play"></i>
          </span>
        </div>
      </header>
      <nav>
        <img
          src="public\Prb_Header.png"
          alt="prb_header"
          className="Navbackground"
        />
        <div className="contentNav">
          <div className="headerNav">
            <img
              src="public\icongrab.png"
              alt="grab"
              className="iconHeadernNav"
            />
            <div className="contentNavBody">
              <div className="routeNav">
                <a href="" className="route">
                  LOREM IPSUM
                </a>
                <a href="" className="route">
                  LOREM IPSUM
                </a>
                <a href="" className="route">
                  LOREM IPSUM
                </a>
                <a href="" className="route">
                  LOREM IPSUM
                </a>
                <a href="" className="route">
                  LOREM IPSUM
                </a>
                <a href="" className="route">
                  LOREM IPSUM
                </a>
              </div>
              <div className="bodyNav">
                <h1 className="bodyNavTitle">LOREM IPSUM</h1>
                <h1 className="bodyNavTitle2">LOREM IPSUM DOLOR &nbsp;</h1>
                <h1 className="bodyNavTitle">LOREM IPSUM</h1>
                <button className="bodyNavButton">WHAT IS NEXT</button>
              </div>
            </div>
          </div>

          <div className="footerNav">
            <div className="footerContenTextNav">
              <p>Lorem ipsum dolor sit amet, consetetur</p>
            </div>
            <div className="footerContenTimeNav">
              <div className="blockTime">
                <span>170</span>
                <span className="blockSpan">days&nbsp; </span>
              </div>
              <hr className="divider" />
              <div className="blockTime">
                <span> 13</span>
                <span className="blockSpan">Hours &nbsp; </span>
              </div>
              <hr className="divider" />
              <div className="blockTime">
                <span>39</span>
                <span className="blockSpan">Minutes&nbsp; </span>
              </div>
              <hr className="divider" />
              <div className="blockTime">
                <span>29</span>
                <span className="blockSpan">Seconds&nbsp; </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="firstCard">
          <div className="textFirst">
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit
            </p>
          </div>
          <img src="public\Pic1.png" alt="pic1" className="imageFirstCard" />
        </div>
        <div className="secondCard">
          <h1 style={{ fontSize: "56px" }}>Lorem ipsum</h1>
          <p
            style={{
              fontSize: "24px",
              width: "50%",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <div className="secondCardContent">
            <div className="card">
              <img src="public\Pic2.png" alt="pic2" className="cardImage" />
              <button className="btnCard">LOREM IPSUM</button>
            </div>
            <div className="card">
              <img src="public\Pic3.png" alt="pic2" className="cardImage" />
              <button className="btnCard">LOREM IPSUM</button>
            </div>
            <div className="card">
              <img src="public\Pic4.png" alt="pic2" className="cardImage" />
              <button className="btnCard">LOREM IPSUM</button>
            </div>
          </div>
          <button className="btnSecondCard">LEARN MORE</button>
        </div>
        <div className="threeCard">
          <div className="threeCardContent">
            <p className="textCardThree">
              Lorem ipsum dolor sit amet, consetetur
            </p>
            <button className="btnThreeCard">LOREM IPSUM DOLOR SIT</button>
            <button className="btnThreeCard2">
              LOREM IPSUM DOLOR SIT AMET
            </button>
          </div>
          <img src="public\Pic5.png" alt="pic5" className="threeCardImage" />
        </div>
        <div className="fourCard">
          <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
            Latest videos
          </h1>
          <div className="fourCardContent">
            <div className="fourCardFile">
              <i
                className="fa-solid fa-play"
                style={{ position: "absolute", color: "white" }}
              ></i>
              <img
                src="public\Pic1.png"
                alt="file"
                style={{ objectFit: "cover", maxWidth: "250px" }}
              />
              <p style={{ marginTop: "5%" }}>
                Lorem ipsum dolor sit amet, consetetur
              </p>
            </div>
            <div className="fourCardFile">
              <i
                className="fa-solid fa-play"
                style={{ position: "absolute", color: "white" }}
              ></i>
              <img
                src="public\Pic1.png"
                alt="file"
                style={{ objectFit: "cover", maxWidth: "250px" }}
              />
              <p style={{ marginTop: "5%" }}>
                Lorem ipsum dolor sit amet, consetetur
              </p>
            </div>
            <div className="fourCardFile">
              <i
                className="fa-solid fa-play"
                style={{ position: "absolute", color: "white" }}
              ></i>
              <img
                src="public\Pic1.png"
                alt="file"
                style={{ objectFit: "cover", maxWidth: "250px" }}
              />
              <p style={{ marginTop: "5%" }}>
                Lorem ipsum dolor sit amet, consetetur
              </p>
            </div>
            <div className="fourCardFile">
              <i
                className="fa-solid fa-play"
                style={{ position: "absolute", color: "white" }}
              ></i>
              <img
                src="public\Pic1.png"
                alt="file"
                style={{ objectFit: "cover", maxWidth: "250px" }}
              />
              <p style={{ marginTop: "5%" }}>
                Lorem ipsum dolor sit amet, consetetur
              </p>
            </div>
            <div className="fourCardFile">
              <i
                className="fa-solid fa-play"
                style={{ position: "absolute", color: "white" }}
              ></i>
              <img
                src="public\Pic1.png"
                alt="file"
                style={{ objectFit: "cover", maxWidth: "250px" }}
              />
              <p style={{ marginTop: "5%" }}>
                Lorem ipsum dolor sit amet, consetetur
              </p>
            </div>
            <div className="fourCardFile">
              <i
                className="fa-solid fa-play"
                style={{ position: "absolute", color: "white" }}
              ></i>
              <img
                src="public\Pic1.png"
                alt="file"
                style={{ objectFit: "cover", maxWidth: "250px" }}
              />
              <p style={{ marginTop: "5%" }}>
                Lorem ipsum dolor sit amet, consetetur
              </p>
            </div>
          </div>
          <button className="btnFourCard">VIEW ALL</button>
        </div>
        <div className="fiveCard">
          <img
            src="public\Join Us.png"
            alt="background"
            style={{
              position: "absolute",
              width: "100%",
              objectFit: "fill",
              zIndex: "-1",
              maxHeight: "100%",
            }}
          />
          <div className="formFiveCard">
            <h1
              style={{
                fontSize: "56px",
                fontWeight: "bold",
                color: "white",
                margin: "2%",
              }}
            >
              JOIN US
            </h1>
            <h1
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "white",
                margin: "2%",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            </h1>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                className="inputFormBasic"
                placeholder="Name"
                style={{ marginRight: "0px", width: "100%" }}
              />
              <input
                type="text"
                className="inputFormBasic"
                placeholder="Username"
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                className="inputFormBasic"
                placeholder="Phone"
                style={{ marginRight: "0px", width: "100%" }}
              />
              <input
                type="text"
                className="inputFormBasic"
                placeholder="Email"
                style={{ width: "100%" }}
              />
            </div>
            <input
              type="text"
              className="inputFormBasic"
              placeholder="Departamen"
            />
            <textarea
              className="inputFormBasic"
              placeholder="Mensajse"
              style={{ height: "120px", paddingTop: "16px" }}
            ></textarea>
            <button
              className="btnStandar"
              style={{ maxWidth: "fit-content", margin: "2%" }}
            >
              I’M IN
            </button>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
                marginTop: "2%",
                marginLeft: "2%",
                textAlign: "center",
                zIndex: "1",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </p>
          </div>
        </div>
        <div className="sixCard">
          <div
            style={{
              position: "relative",
              width: "40%",
              marginLeft: "5%",
              zIndex: "1",
              marginTop: "10%",
            }}
          >
            <h1
              style={{
                marginTop: "50%",
                top: 0,
                left: 0,
                fontSize: "56px",
                color: "black",
              }}
            >
              Lorem ipsum
            </h1>
            <p
              style={{
                fontSize: "36px",
                position: "absolute",
                marginTop: "10%",
                width: "50",
                zIndex: 1,
                color: "black",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <button
              className="btnStandar"
              style={{
                marginTop: "10%",
                zIndex: 1,
                position: "absolute",
                marginTop: "10%",
                top: 900,
                left: 50,
              }}
            >
              VIEW ALL
            </button>
            <img
              src="public\Pic6.png"
              alt="background"
              style={{
                height: "50%",
                width: "180%",
                position: "relative",
                backgroundColor: "whitesmoke",
              }}
            />
          </div>
        </div>
        <div className="sevenCard">
          <h1 style={{ fontSize: "56px", color: "white" }}>Lorem ipsum</h1>
          <div style={{ display: "flex", gap: "5%" }}>
            <img
              src="public\Pic7.png"
              alt="pci"
              style={{ objectFit: "fill", width: "300px", height: "400px" }}
            />
            <img
              src="public\Pic8.png"
              alt="pci"
              style={{ objectFit: "fill", width: "300px", height: "400px" }}
            />
            <img
              src="public\Pic9.png"
              alt="pci"
              style={{ objectFit: "fill", width: "300px", height: "400px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "2%",
              width: "100%",
              justifyContent: "center",
              gap: "2%",
            }}
          >
            <i className="fa-solid fa-circle" style={{ color: "white" }}></i>
            <i className="fa-regular fa-circle" style={{ color: "white" }}></i>
            <i className="fa-regular fa-circle" style={{ color: "white" }}></i>
          </div>
          <button
            className="btnStandar"
            style={{
              color: "black",
              backgroundColor: "white",
              marginTop: "2%",
            }}
          >
            VIEW ALL
          </button>
        </div>
      </main>
      <footer
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: "2%",
          paddingBottom: "2%",
        }}
      >
        <p style={{ fontWeight: "bold", width: "350px", textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </p>
        <img
          src="https://github.com/EliezerBarrios/testfrontendeliezer/blob/fe8d5fa3ae1b38b377dd754e76eeda6d0cb79c76/public/icongrab.png"
          alt="prb_header"
          style={{ objectFit: "fill", height: "90px", width: "200px" }}
        />
        <p
          style={{ fontWeight: "bolder", width: "200px", textAlign: "center" }}
        >
          All rights reserved to Lorem Ipsum© 2022
        </p>
      </footer>
    </>
  );
}

export default App;
