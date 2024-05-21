import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="f-col-center w-full h-screen gap-6">
      <h2 className="text-4xl text-green-700 font-mono font-bold"><span className="text-red-500">404</span> Page Not Found</h2>
      <img src="https://media.tenor.com/i3Qc4TdcXwMAAAAi/duck-meme.gif" alt="duck jumping gif" className="h-1/2 invert" />
      <div className="text-center">
        <p className="text-violet-500 font-mono text-xl font-bold m-0 leading-none">Go Back or Go Look Somewhere Else</p>
        <small className="text-lg text-yellow-400 font-mono m-0 leading-none">Thanks</small>
      </div>
      <Link to={"/"} className="btn btn--blueGray">Back to Home</Link>
    </div>
  );
};

export default NotFound;
