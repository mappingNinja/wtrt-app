import React, { useEffect, useState } from "react";
import sampleJSONData from "../../sampleData/SampleData.json";
import { useDispatch } from "react-redux";
import { saveAnswersAction } from "../../redux/actions/answersAction";
import { useNavigate } from "react-router-dom";

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
const Questions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answerSelected, setAnswerSelected] = useState({});
  const [isValid, setIsValid] = useState(true);

  const setAnswers = () => {
    dispatch(saveAnswersAction(answerSelected));
  };

  useEffect(() => {
    setAnswers();
  }, []);

  const handleAnswerSelect = (questionIndex, answer) => {
    setAnswerSelected((prevState) => ({
      ...prevState,
      [questionIndex]: answer,
    }));
  };

  const validateAnswers = () => {
    let isValidate = true;
    questions.forEach((question, index) => {
      if (question.validations.required && !answerSelected[index]) {
        isValidate = false;
      }
    });

    return isValidate;
  };

  const handleAnswersSave = () => {
    const isValidAnswers = validateAnswers();

    if (!isValidAnswers) {
      setIsValid(false);
    }

    setAnswers();
    navigate("/viewAnswers");
  };

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
                Answer the Following Questions
              </span>
              {questions &&
                questions.map((question, index) => (
                  <div key={index + 1}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <h5 className="card-title mt-3">{`${index + 1}. ${
                        question.title
                      }`}</h5>
                      {question?.validations?.required ? (
                        <span className="text-danger">&nbsp;*</span>
                      ) : null}
                    </div>
                    <div className="mt-3">
                      {question?.Options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className={`btn ${
                            answerSelected[index] === option.option
                              ? "btn-success"
                              : "btn-secondary"
                          } me-2`}
                          onClick={() =>
                            handleAnswerSelect(index, option.option)
                          }
                        >
                          {option.option}
                        </button>
                      ))}
                    </div>
                    {question?.rules.map((rule, ruleIndex) => {
                      return answerSelected[index] === rule.rule ? (
                        rule.action === "Image" ? (
                          <div key={ruleIndex} className="mt-4">
                            <i className="fa fa-camera"></i>
                          </div>
                        ) : rule.action === "Comment" ? (
                          <div key={ruleIndex}>
                            <div className="mb-3">
                              <input
                                type="text"
                                className="form-control mt-4"
                                id="commentBox"
                                placeholder="Comment Box"
                              />
                            </div>
                          </div>
                        ) : null
                      ) : null;
                    })}
                    <hr />
                  </div>
                ))}

              <div>
                {!isValid ? (
                  <div className="text-danger">
                    *Please select all required field
                  </div>
                ) : null}
              </div>

              <button className="btn btn-primary" onClick={handleAnswersSave}>
                Save Answers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
