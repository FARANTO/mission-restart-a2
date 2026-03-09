import "./banner.css";
import  LeftVector  from "../banner/Vector.svg?react"; 
import  RightVector  from "../banner/Vector 1.svg?react";

function Banner({ inProgressCount, resolvedCount }) {
  return (
    <div className="banner">
      <div className="banner-container">

        <div className="stat-card progress">
        <LeftVector className="vector left-vector" />
        <div className="stat-content">
          <p className="stat-title">In-Progress</p>
          <h2 className="stat-number">{inProgressCount}</h2>
          </div>
          <RightVector className="vector right-vector" />
        </div>

        <div className="stat-card resolved">
         <LeftVector className="vector left-vector" /> 
         <div className="stat-content">
          <p className="stat-title">Resolved</p>
          <h2 className="stat-number">{resolvedCount}</h2>
        </div>
        <RightVector className="vector right-vector" />
        </div>


      </div>
    </div>
  );
}

export default Banner;