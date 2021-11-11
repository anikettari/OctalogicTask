import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="row">
        <div className="col-xl-11 mx-auto  background mt-5">
          <div className="row mt-3">
            <div className="col-xl-3 mx-auto  ">
              <Link to="/job-form" className="underline-none">
                <p className="title-style text-center colour-style padding-title  ">
                  {" "}
                  Create a Job
                </p>
              </Link>
            </div>
            <div className="col-xl-3 mx-auto ">
              <Link to="/applicant-form" className="underline-none">
                <p className="title-style text-center colour-style padding-title ">
                  Create Applicant
                </p>
              </Link>
            </div>
            <div className="col-xl-3 mx-auto ">
              <Link to="/search-page" className="underline-none">
                <p className="title-style text-center colour-style padding-title ">
                  {" "}
                  List of Applicants{" "}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
