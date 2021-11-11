import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
const JobForm = () => {
  const submitForm = () => {
    setData({ ...data, ["id"]: Math.floor(Date.now() / 1000) });
    let job_list = JSON.parse(localStorage.getItem("job_list")) || [];
    job_list.push(data);
    localStorage.setItem("job_list", JSON.stringify(job_list));
    console.log(job_list);
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
      <div>
        <h2 className="text-center mb-5">Create Job</h2>
        <div className="row ">
          <div className="col-xl-11 mx-auto  background p-5">
            <div className="row">
              <div className="col-xl-5 mt-5 mx-auto ">
                <p className="title-style orange-clr">Name</p>
                <input
                  type="text"
                  name="job_name"
                  placeholder="Enter job name"
                  className="form-input"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="col-xl-5 mt-5 mx-auto ">
                <p className="title-style orange-clr">Description</p>
                <input
                  type="text"
                  placeholder="Enter some description"
                  className="form-input"
                  name="job_description"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="col-xl-5 mt-5 mx-auto ">
                <p className="title-style orange-clr">Technologies</p>

                <select
                  className="form-input"
                  onChange={handleChange}
                  name="job_technology"
                >
                  <option value="">Select</option>
                  <option value="PHP">PHP</option>
                  <option value="ASP.NET">ASP.NET</option>
                  <option value="Ruby on Rails">Ruby on Rails </option>
                  <option value="Python">Python </option>
                </select>
              </div>
              <div className="col-xl-5 mt-5 mx-auto text-center">
                <button
                  onClick={submitForm}
                  className="colour-style btn-padding mt-4 text-center"
                >
                  {" "}
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

export default JobForm;
