import "../App.css";

const TopBar = () => {
    return (
        <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="icon-top text-center text-sm-center text-md-left text-lg-left text-xl-left"
                  >
                    <div className="icons">
                      <a href="#"> <i className="fa fa-facebook"></i> </a>
                    </div>
                    <div className="icons">
                      <a href="#"> <i className="fa fa-twitter"></i> </a>
                    </div>
                    <div className="icons">
                      <a href="#"> <i className="fa fa-youtube-play"></i></a>
                    </div>
                    <div className="icons">
                      <a href="#"> <i className="fa fa-pinterest"></i></a>
                    </div>
                    <div className="icons">
                      <a href="#"> <i className="fa fa-instagram"></i></a>
                    </div>
                    <div className="icons">
                      <a href="#"> <i className="fa fa-whatsapp"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="text-center text-sm-center text-md-right text-lg-right text-xl-right"
                  >
                    <div className="toplocation text-white">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <span className="locaitonfont">Ubicación</span>

                      <select id="openonarrow">
                        <option>Cusco</option>
                        <option>Wanchaq</option>
                        <option>Santiago</option>
                        <option>San Sebastian</option>
                        <option>San Jerónimo</option>
                      </select>

                      <span className="arrowdonwing">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default TopBar