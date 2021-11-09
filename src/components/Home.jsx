import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <div className="p-2">
            <h1 className="text-center font-weight-bold">
            Restaurant L'Edelweiss <br/> Spécialités savoyardes
            </h1>
          </div>
          <div className="p-2">
          <img
              className="img-fluid"
              src="http://cdn.simplesite.com/i/85/a5/283726782914274693/i283726789586884737._szw1280h1280_.jpg"
              alt=""
            />
          </div>
          <div className="p-2">
          <img
              className="img-fluid"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;