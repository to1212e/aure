import React, { useEffect } from 'react';
import './Experience.css';
import Navbar from './Navbar';
import boy2Image from './img/IMG_20240708_143541_634.jpg';
import boy1Image from './img/IMG_20240708_143541_646.jpg';
import boy3Image from './img/IMG_20240708_143541_866.jpg';
import jov2Image from './img/IMG_20240708_143542_197.jpg';
import pictureImage from './img/ad69c13e-6da0-4d08-b45f-7ca58ea463e0.jpg';
import picture1Image from './img/IMG_20240529_184504.jpg';
import picture2Image from './img/IMG_20240110_165732_042.jpg';
import certificateImage from './img/IMG_20240708_143542_127.jpg';
import certificate1Image from './img/IMG_20240708_150253_915.jpg';
import certificate2Image from './img/IMG_20240110_165723_634.jpg';

const Experience = () => {
  useEffect(() => {
    // Any side-effects or initialization code can go here
  }, []);

  return (
    <>
      <Navbar />
      <div id="experience-info">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold text-white display-1 text-center mt-5 pt-5 text-shadow">
                Experiences Page
              </h1>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>

      <div id="exp">
        <div className="container mt-5 bg-white">
          <h1 className="text-black text-center">Work Experiences</h1>
          <div className="row mt-5 justify-content-center">
            <hr />
            <div className="col mr-5 portfolio-item d-flex flex-column align-items-center">
              <img className="one" src={boy2Image} alt="Compiling Documents" />
              <h4 className="mt-5 text-black">Ring Binding</h4>
            </div>
            <div className="col portfolio-item d-flex flex-column align-items-center">
              <img className="two" src={boy1Image} alt="Printing" />
              <h4 className="mt-5 text-black">Printing</h4>
            </div>
            <div className="col portfolio-item d-flex flex-column align-items-center">
              <img className="three" src={boy3Image} alt="Ring Binding" />
              <h4 className="mt-5 text-black">Scanning Documents</h4>
            </div>
            <div className="col portfolio-item d-flex flex-column align-items-center">
              <img className="four" src={jov2Image} alt="Documents" />
              <h4 className="mt-5 text-black"> Filing Documents</h4>
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <hr />
            <div className="col portfolio-item d-flex flex-column align-items-center">
              <img className="two" src={pictureImage} alt="Thesis Development" />
              <h4 className="mt-5 text-black">Thesis Developing</h4>
            </div>
            <div className="col portfolio-item d-flex flex-column align-items-center">
              <img className="three" src={picture1Image} alt="Meeting" />
              <h4 className="mt-5 text-black"> Thesis Defense</h4>
            </div>
            <div className="col portfolio-item d-flex flex-column align-items-center">
              <img className="three" src={picture2Image} alt="Meeting" />
              <h4 className="mt-5 text-black">Accepting Certificate</h4>
            </div>
          </div>
            <hr />
          <h1 className="text-black text-center">Certificates</h1>
          <div className="row mt-5 justify-content-center">
          
            <div className="col portfolio-item d-flex flex-column align-items-center">
              <img className="two" src={certificateImage} alt="OJT Certificate" />
              <h4 className="mt-5 text-black">OJT Certificate</h4>
            </div>
            <div className="col portfolio-item d-flex flex-column align-items-center">
              <img className="three" src={certificate2Image} alt="Colloquium Certificate" />
              <h4 className="mt-5 text-black">Certificate of Hardwork</h4>
            </div>
            <div className="col portfolio-item d-flex flex-column align-items-center">
              <img className="three" src={certificate1Image} alt="Colloquium Certificate" />
              <h4 className="mt-5 text-black">Colloquium Certificate</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
