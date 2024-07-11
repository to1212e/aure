import "./Home.css";
import Navbar from "./Navbar";

import myImage from "./img/1713592570299.png"
import ibisImage from "./img/10464408.png"
import vscodeImage from "./img/330685-P9SESK-66.jpg"
import gcbImage from "./img/wattpad-icon.png"
const Home = () => {
  return (
    <>
      <Navbar />



    <div className="wrapper">
      <div className="overlay">
        <div className="container1">

    <div id="home-info" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>

        <div className="container mt-5">
          <div className="row ok">
            <div className="col-lg-6">
            <img src={myImage} alt="" />
            </div>
            <div className="col-lg-6 jao">
              <div className="card">
              <h2 className="display-3 text-center text-light pt-5 mb-5">
                Greetings... <br/> I'm Che Cheng T. Aure
              </h2>
              <h4 className=" text-light text-center mt-5"> Im a Web Developer, Listener and a Reader  </h4>
              <center>
              <a href="/about" className="btn shadow mt-5">
                Explore More
              </a>
              </center>
              </div>
            </div>
          </div>
        </div>
      </div>
          
        </div>
      </div>
    </div>

    <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
            <div className="card p-5 shadow" style={{ border: "2px solid black" }}>
                <img src={ibisImage} alt="IbisPaintX" className="smaller-image" />
                <h4 className="text-center title"><b>Facebook</b></h4>
                <p>A website which allows users,to connect with friends, work colleagues or people they don’t know, online. </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow" style={{ border: "2px solid black" }}>
                <img src={vscodeImage} alt="Visual Studio Code" className="smaller-image" />
                <h4 className="text-center title"><b>Youtube</b></h4>
                <p> A very popular and free video sharing website that allows registered users to upload and share video clips online.</p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow" style={{ border: "2px solid black" }}>
                <img src={gcbImage} alt="Gaming Center Base" className="smaller-image" />
                <h4 className="text-center title"><b>Wattpad</b></h4>
                <p>A social storytelling platform where users connect with your favourite writers, read and write original stories.</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
