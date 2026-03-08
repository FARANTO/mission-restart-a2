import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-container">

        <div className="stat-card progress">
          <p className="stat-title">In-Progress</p>
          <h2 className="stat-number">0</h2>
        </div>

        <div className="stat-card resolved">
          <p className="stat-title">Resolved</p>
          <h2 className="stat-number">0</h2>
        </div>

      </div>
    </div>
  );
}

export default Banner;