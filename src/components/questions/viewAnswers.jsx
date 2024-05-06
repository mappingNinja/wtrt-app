import React, { useEffect, useState } from "react";
import sampleJSONData from "../../sampleData/SampleData.json";

const defaultAnswers = {
  0: "Yes",
  1: "Yes",
  2: "Yes",
  3: "Yes",
  4: "Yes",
  5: "Yes",
  6: "Yes",
  7: "Yes",
  8: "Yes",
  9: "Yes",
  10: "Yes",
  11: "Yes",
  12: "Yes",
  13: "Yes",
  14: "Yes",
  15: "Yes",
  16: "Yes",
};

const ViewAnswers = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    
    const extractedQuestions = sampleJSONData?.category[0]?.forms[0]?.questions;
    setQuestions(extractedQuestions);
  }, []);

  return (
    <div className="container-fluid" style={{ marginTop: "100px" }}>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <span
                className=" position-absolute top-0  translate-middle badge rounded-pill bg-secondary"
                style={{ left: "50%", zIndex: "3" }}
              >
                Displaying Your Answers
              </span>
              {questions &&
                questions.map((question, index) => (
                  <div key={index}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <h5 className="card-title mt-3">{`${index}. ${question.title}`}</h5>
                      {question?.validations?.required ? (
                        <span className="text-danger">&nbsp;*</span>
                      ) : null}
                    </div>
                    <div className="mt-3">
                      {question?.Options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className={`btn ${
                            defaultAnswers[index] === option.option
                              ? "btn-success"
                              : "btn-secondary"
                          } me-2`}
                          disabled
                        >
                          {option.option}
                        </button>
                      ))}
                    </div>

                    <hr />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAnswers;
