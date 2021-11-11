import React, { useState, useEffect } from "react";
import CardUI from "./CardUI";
import Dashboard from "./Dashboard";
const SearchPage = (props) => {
  const [noticePeriod, setNoticePeriod] = useState("");
  const [salary, setSalary] = useState("");
  const [mainSearch, setMainSearch] = useState("");
  const [applicantList, setApplicantList] = useState([]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  console.log(JSON.parse(localStorage.getItem("applicant_list")));

  // <-------All data of Applicants------->
  useEffect(() => {
    setApplicantList(JSON.parse(localStorage.getItem("applicant_list")));
    setOutput(JSON.parse(localStorage.getItem("applicant_list")));
  }, []);

  // <--------Search based on Technology Used --------->
  useEffect(() => {
    setOutput([]);
    applicantList.filter((val) => {
      if (val.job_technology.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [input]);

  // <--------Search based on Notice Period --------->
  useEffect(() => {
    setOutput([]);
    applicantList.filter((val) => {
      if (val.notice_period.includes(noticePeriod)) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [noticePeriod]);

  // <--------Search based on Salary --------->
  useEffect(() => {
    setOutput([]);
    applicantList.filter((val) => {
      if (val.salary.includes(salary)) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [salary]);

  // <--------All Search --------->
  useEffect(() => {
    setOutput([]);
    applicantList.filter((val) => {
      if (val.job_technology.toLowerCase().includes(mainSearch.toLowerCase())) {
        setOutput((output) => [...output, val]);
      } else if (val.notice_period.includes(mainSearch)) {
        setOutput((output) => [...output, val]);
      } else if (val.salary.includes(mainSearch)) {
        setOutput((output) => [...output, val]);
      } else if (
        val.applicant_name.toLowerCase().includes(mainSearch.toLowerCase())
      ) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [mainSearch]);

  console.log("Applicant List", applicantList);

  return (
    <>
      <Dashboard />
      <div>
        <div className="row">
          <div className="col-xl-11 mx-auto  ">
            <div className="row">
              <div
                className="col-xl-3 mt-3 mx-auto  background p-3"
                style={{ maxWidth: "320px" }}
              >
                <p className="title-style orange-clr">Search by Technology</p>
                <select
                  className="form-input"
                  name="job_technology"
                  onChange={(e) => setInput(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="PHP">PHP</option>
                  <option value="ASP.NET">ASP.NET</option>
                  <option value="Ruby on Rails">Ruby on Rails </option>
                  <option value="Python">Python </option>
                </select>
              </div>

              <div
                className="col-xl-3 mt-3 mx-auto  background p-3"
                style={{ maxWidth: "320px" }}
              >
                <p className="title-style orange-clr">Search </p>
                <input
                  type="text"
                  placeholder="Search"
                  className="form-input"
                  onChange={(e) => setMainSearch(e.target.value)}
                ></input>
              </div>
              <div
                className="col-xl-3 mt-3 mx-auto  background p-3"
                style={{ maxWidth: "320px" }}
              >
                <p className="title-style orange-clr">Notice Period </p>
                <input
                  type="text"
                  placeholder="Search"
                  className="form-input"
                  onChange={(e) => setNoticePeriod(e.target.value)}
                ></input>
              </div>
              <div
                className="col-xl-3 mt-3 mx-auto  background p-3"
                style={{ maxWidth: "320px" }}
              >
                <p className="title-style orange-clr">Salary </p>
                <input
                  type="text"
                  placeholder="Search"
                  className="form-input"
                  onChange={(e) => setSalary(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row">
              <CardUI applicants={output} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
