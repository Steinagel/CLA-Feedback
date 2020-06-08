import React from 'react';
import {
  ProgressIndicator,
  ProgressStep,
  Button,
  ModalWrapper,
} from 'carbon-components-react';

import {
  PersonalQuestions,
  MultiOptionsQuestion,
  TextAreaQuestion,
  NPSComponent,
} from '../../components/Questions';

import {
  stepNumber,
  answer,
  frameQuestion1,
  frameQuestion11,
  frameQuestion12,
  frameQuestion13,
  frameQuestion14,
  frameQuestion2,
  frameQuestion21,
  frameQuestion3,
  frameQuestion31,
} from './Config';

import './Feedback.scss';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: answer,
      curStep: 0,
      buttonStatus: -1, //-1: anonimized, 0: waiting answer/disabled/null, 1: next/enabled/handleCurrent, 2: finish/enabled/finishQuestionary, N: error
      hasFinished: false,
    };

    this.stepNumber = stepNumber;

    this.frameQuestion1 = frameQuestion1;
    this.frameQuestion11 = frameQuestion11;
    this.frameQuestion12 = frameQuestion12;
    this.frameQuestion13 = frameQuestion13;
    this.frameQuestion14 = frameQuestion14;
    this.frameQuestion2 = frameQuestion2;
    this.frameQuestion21 = frameQuestion21;
    this.frameQuestion3 = frameQuestion3;
    this.frameQuestion31 = frameQuestion31;

    this.handlecurStep = this.handlecurStep.bind(this);
    this.handleCurrentQuestions = this.handleCurrentQuestions.bind(this);
    this.handleButtonStatus = this.handleButtonStatus.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleButtonStatus = this.handleButtonStatus.bind(this);
    this._getButtonProps = this._getButtonProps.bind(this);
  }

  handlecurStep(curStep) {
    this.setState({ curStep });
  }

  handleCurrentQuestions(curQuestions) {
    this.setState({ curQuestions });
  }

  handleAnswer(answer) {
    this.setState({ answer });
  }

  handleButtonStatus(buttonStatus) {
    this.setState({ buttonStatus });
  }

  handleSubmit = event => {
    const hasFinished = this.state.hasFinished;
    if (!hasFinished) {
      this.setState({ hasFinished: true });
      var data = JSON.stringify({
        questions: this.state.answer,
      });

      var xhr = new XMLHttpRequest();

      xhr.addEventListener('readystatechange', function() {
        if (this.readyState === this.DONE) {
        }
      });

      xhr.open('POST', 'http://localhost:8000/api/questions', true);
      xhr.withCredentials = true;
      xhr.setRequestHeader('content-type', 'application/json');

      xhr.send(data);
    } else {
      alert('Form already sent!');
    }
  };

  _incrementcurStep = event => {
    event.preventDefault();

    const _lastCur = this.state.curStep;
    if (_lastCur < this.stepNumber) {
      this.handlecurStep(_lastCur + 1);
      this.handleButtonStatus(0);
    }
  };

  componentDidUpdate() {
    const status = this._verifyQuestionsForButtonState();
    if (status !== this.state.buttonStatus)
      this.setState({ buttonStatus: status });
  }

  _getButtonProps() {
    const status = this.state.buttonStatus;

    if (status === -1)
      return {
        text: 'Go unknown',
        disabled: false,
        onClick: this._incrementcurStep,
      };
    else if (status === 1)
      return {
        text: 'Next',
        disabled: false,
        onClick: this._incrementcurStep,
      };
    else if (status === 0)
      return { text: 'Waiting answer', disabled: true, onClick: null };
    else if (status === 1)
      return {
        text: 'Next',
        disabled: false,
        onClick: this._incrementcurStep,
      };
    else if (status === 2)
      return {
        text: 'Submit',
        disabled: false,
        onClick: this.handleSubmit,
      };
    else
      return {
        text: 'Error :/',
        disabled: true,
        onClick: null,
      };
  }

  _verifyQuestionsForButtonState() {
    const { answer, curStep } = this.state;

    if (curStep === 0) {
      const { personal } = answer.question0;
      if (personal.contact === 'on') {
        if (
          personal.name === '' ||
          personal.email === '' ||
          personal.country === ''
        ) {
          return 0;
        } else return 1;
      } else {
        if (personal.name !== '' && personal.email !== '') {
          return 1;
        } else return -1;
      }
    } else if (curStep === 1) {
      const { isMissing } = answer.question1_2_3;
      const { neverUse, xpSuggest } = answer.question1_4_5;
      if (isMissing !== '' || neverUse !== '' || xpSuggest !== '') {
        return 1;
      } else return 0;
    } else if (curStep === 2) {
      const { howSatisfied } = answer.question2;
      const { comment } = answer.question2_1;
      if ([0, 1].includes(howSatisfied) || comment !== '') return 1;
      else return 0;
    } else if (curStep === 3) return 2;
  }

  _getClassQ11(answers) {
    const answer1 = answers.question1.toolUsage;
    if ([0, 1, 2].includes(answer1)) return 'question--shown';
    return 'question--hidden';
  }

  _getClassQ12(answers) {
    const answer1 = answers.question1.toolUsage;
    if ([3, 4].includes(answer1)) return 'question--shown';
    return 'question--hidden';
  }

  _getClassQ13(answers) {
    const answer13 = answers.question1_2_3.moreValue;
    if (
      answer13.slice(0, 5).includes(true) &&
      !answer13.slice(5, 6).includes(true)
    )
      return 'question--shown';
    return 'question--hidden';
  }

  _getClassQ14(answers) {
    const answer13 = answers.question1_2_3.moreValue;
    if (answer13.slice(5, 6).includes(true)) return 'question--shown';
    return 'question--hidden';
  }

  _getClassQ21(answers) {
    const answer2 = answers.question2.howSatisfied;
    if ([2, 3, 4].includes(answer2)) return 'question--shown';
    return 'question--hidden';
  }

  _getQuestions() {
    const { answer, curStep } = this.state;

    if (curStep === 0)
      return (
        <PersonalQuestions
          answer={answer}
          handleAnswer={this.handleAnswer}
          id={0}
        />
      );
    else if (curStep === 1)
      return (
        <>
          <MultiOptionsQuestion.Radio
            id="q1"
            frame={this.frameQuestion1}
            answer={answer}
            handleAnswer={this.handleAnswer}
            question="question1"
            selector="toolUsage"
          />
          <TextAreaQuestion
            id="text-area-0"
            frame={this.frameQuestion11}
            answer={answer}
            handleAnswer={this.handleAnswer}
            question="question1_2_3"
            selector="isMissing"
            className={this._getClassQ11(answer)}
          />
          <MultiOptionsQuestion.Check
            id="check-0"
            frame={this.frameQuestion12}
            answer={answer}
            handleAnswer={this.handleAnswer}
            question="question1_2_3"
            selector="moreValue"
            className={this._getClassQ12(answer)}
          />
          <TextAreaQuestion
            id="text-area-1"
            frame={this.frameQuestion13}
            answer={answer}
            handleAnswer={this.handleAnswer}
            question="question1_4_5"
            selector="xpSuggest"
            className={this._getClassQ13(answer)}
          />
          <TextAreaQuestion
            id="text-area-2"
            frame={this.frameQuestion14}
            answer={answer}
            handleAnswer={this.handleAnswer}
            question="question1_4_5"
            selector="neverUse"
            className={this._getClassQ14(answer)}
          />
        </>
      );
    else if (curStep === 2)
      return (
        <>
          <MultiOptionsQuestion.Radio
            id="q2"
            frame={this.frameQuestion2}
            answer={answer}
            handleAnswer={this.handleAnswer}
            question="question2"
            selector="howSatisfied"
          />
          <TextAreaQuestion
            id="text-area-3"
            frame={this.frameQuestion21}
            answer={answer}
            handleAnswer={this.handleAnswer}
            question="question2_1"
            selector="comment"
            className={this._getClassQ21(answer)}
          />
        </>
      );
    else if (curStep === 3)
      return (
        <>
          <NPSComponent
            id="nps-0"
            frame={this.frameQuestion3}
            answer={answer}
            handleAnswer={this.handleAnswer}
          />
          <TextAreaQuestion
            id="text-area-4"
            frame={this.frameQuestion31}
            answer={answer}
            handleAnswer={this.handleAnswer}
            question="question3_1"
            selector="comment"
          />
        </>
      );
  }

  render() {
    const { curStep, hasFinished } = this.state;
    const { text, disabled, onClick } = this._getButtonProps();

    const shownQuestion = this._getQuestions();
    return (
      <>
        <div className="bx--grid bx--grid--full-width">
          <div className="bx--row">
            <div className="bx--col-sm-4 bx--col-md-6 bx--offset-md-1 bx--col-lg-6 bx--offset-lg-3">
              <div className="bx--row main">
                <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-12 feedback__body">
                  {!hasFinished ? (
                    <>
                      <ProgressIndicator currentIndex={curStep}>
                        <ProgressStep
                          key="1"
                          current={curStep === 0}
                          label="Step 1"
                        />
                        <ProgressStep
                          key="2"
                          current={curStep === 1}
                          label="Step 2"
                        />
                        <ProgressStep
                          key="3"
                          current={curStep === 2}
                          label="Step 3"
                        />
                        <ProgressStep
                          key="4"
                          current={curStep === 3}
                          label="Finish"
                        />
                      </ProgressIndicator>

                      {shownQuestion}

                      {curStep < 3 ? (
                        <Button
                          disabled={disabled || hasFinished}
                          onClick={onClick}>
                          {text}
                        </Button>
                      ) : (
                        <ModalWrapper
                          buttonTriggerText="Submit"
                          modalHeading="Your feedbacks have been sent successfully!"
                          modalLabel="CLA Feedback"
                          handleSubmit={this.handleSubmit}
                          disabled={hasFinished}>
                          <p>
                            {' '}
                            Thanks for your time. We hope to make CLA an
                            increasingly better tool to make your job simpler
                            and more fun.{' '}
                          </p>
                        </ModalWrapper>
                      )}
                    </>
                  ) : (
                    <div className="form__centered">
                      <h4 className="form__centered--header">
                        Your feedbacks have been sent successfully!
                      </h4>
                      <p className="form__centered--content">
                        <br /> Thanks for your time.
                        <p className="form__centered--last">
                          {' '}
                          We hope to make <span>CLA</span> an increasingly
                          better tool to make{' '}
                          <span>your job simpler and more fun</span>.
                        </p>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Feedback;
