import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
const ApplicantForm = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const submitForm = () => {
    handleIncrement();
    setData({ ...data, ["id"]: count });
    let applicant_list =
      JSON.parse(localStorage.getItem("applicant_list")) || [];
    applicant_list.push(data);
    localStorage.setItem("applicant_list", JSON.stringify(applicant_list));
    console.log(applicant_list);
  };

  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Dashboard />
      <div className="mt-5">
        <h2 className="text-center mb-5">Applicant Form</h2>
        <div className="row">
          <div className="col-xl-11 mx-auto  background p-5">
            <div className="row">
              <div className="col-xl-5 mt-5 mx-auto ">
                <p className="title-style orange-clr">Job Code</p>
                <input
                  name="job_code"
                  className="form-input"
                  placeholder="Enter the job code"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="col-xl-5 mt-5 mx-auto ">
                <p className="title-style orange-clr">Name of the Applicant</p>
                <input
                  name="applicant_name"
                  className="form-input"
                  placeholder="Enter the name of the applicant"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="col-xl-5 mt-5 mx-auto ">
                <p className="title-style orange-clr">Notes</p>
                <input
                  className="form-input"
                  placeholder="add notes"
                  name="notes"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="col-xl-5 mt-5 mx-auto ">
                <p className="title-style orange-clr">Technologies</p>
                <select
                  className="form-input"
                  name="job_technology"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="PHP">PHP</option>
                  <option value="ASP.NET">ASP.NET</option>
                  <option value="Ruby on Rails">Ruby on Rails </option>
                  <option value="Python">Python </option>
                </select>
              </div>
              <div className="col-xl-5 mt-5 mx-auto ">
                <p className="title-style orange-clr">
                  Notice Period (in days)
                </p>
                <input
                  name="notice_period"
                  className="form-input"
                  placeholder="Enter the notice period in days"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="col-xl-5 mt-5 mx-auto ">
                <p className="title-style orange-clr">Salary Asked</p>
                <input
                  name="salary"
                  className="form-input"
                  placeholder="Enter the salary"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="col-xl-6 mt-5 mx-auto  text-center">
                <button
                  onClick={submitForm}
                  className="colour-style btn-padding mt-4 text-center"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicantForm;
