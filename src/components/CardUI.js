import React, { useState, useEffect, Component } from "react";
import { Button, Modal } from "react-bootstrap";
import QRCode from "react-google-qrcode";
const CardUI = (props) => {
  console.log(props.applicants);
  const [show, setShow] = useState(false);
  const url = "http://localhost:3001/applicant-details-page/";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row">
      <div className="col-xl-11 mx-auto ">
        <div className="row ">
          {props.applicants &&
            props.applicants.map((item) => (
              <div
                className="col-xl-4 mt-5 m-2  background p-4"
                style={{ maxWidth: "400px" }}
                onClick={handleShow}
                id={item.job_code}
              >
                <p className="title-style orange-clr">
                  Name : {item.applicant_name}
                </p>
                <p className="title-style orange-clr">
                  Technology : {item.job_technology}
                </p>
                <p className="title-style orange-clr">
                  Notice Period : {item.notice_period}
                </p>
                <p className="title-style orange-clr">Salary : {item.salary}</p>

                <QRCode data={url + item.id} size={130} framed />

                <Modal
                  show={show}
                  id={item.job_code}
                  onHide={handleClose}
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <p className="title-style orange-clr">
                        {item.applicant_name}
                      </p>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="row">
                      <div className="col-xl-11 mx-auto">
                        <p className="title-style orange-clr">
                          ID : {item.job_code}
                        </p>
                        <p className="title-style orange-clr">
                          Name : {item.applicant_name}
                        </p>
                        <p className="title-style orange-clr">
                          Technology : {item.job_technology}
                        </p>
                        <p className="title-style orange-clr">
                          Notice Period : {item.notice_period}
                        </p>
                        <p className="title-style orange-clr">
                          Salary Asked : {item.salary}
                        </p>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardUI;
