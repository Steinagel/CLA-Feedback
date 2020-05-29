import React from 'react';
import {
  ProgressIndicator,
  ProgressStep,
  Button,
} from 'carbon-components-react';

import {
  PersonalQuestions,
  MultiOptionsQuestion,
  TextAreaQuestion,
} from '../../components/Questions';

import {
  stepNumber,
  answer,
  frameQuestion1,
  frameQuestion1_1,
  frameQuestion1_2,
  frameQuestion1_3,
  frameQuestion1_4,
  frameQuestion2,
  frameQuestion2_1,
  framQuestion3,
  framQuestion3_1,
} from './Config';

import './Feedback.scss';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: answer,
      curStep: 0,
      curQuestions: [0],
      buttonStatus: 0, //0: waiting answer/disabled/null, 1: next/enabled/handleCurrent, 2: finish/enabled/finishQuestionary, N: error
    };

    this.stepNumber = stepNumber;
    this.frameQuestion1 = frameQuestion1;
    this.frameQuestion1_1 = frameQuestion1_1;
    this.frameQuestion1_2 = frameQuestion1_2;
    this.frameQuestion1_3 = frameQuestion1_3;
    this.frameQuestion1_4 = frameQuestion1_4;
    this.frameQuestion2 = frameQuestion2;
    this.frameQuestion2_1 = frameQuestion2_1;
    this.framQuestion3 = framQuestion3;
    this.framQuestion3_1 = framQuestion3_1;

    this.handleCurrentStep = this.handleCurrentStep.bind(this);
    this.handleCurrentQuestion = this.handleCurrentQuestion.bind(this);
    this.handleButtonStatus = this.handleButtonStatus.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this._finishQuestionary = this._finishQuestionary.bind(this);
    this._incrementCurrentStep = this._incrementCurrentStep.bind(this);
    this._getButtonProps = this._getButtonProps.bind(this);
    this.handleAddQuestionItem = this.handleAddQuestionItem.bind(this);
    this.handleRemoveQuestionItem = this.handleRemoveQuestionItem.bind(this);
    this._getStepClass = this._getStepClass.bind(this);
    this._getSubQuestionClass = this._getSubQuestionClass.bind(this);
    this._sendData = this._sendData.bind(this);
  }

  handleCurrentStep(curStep) {
    this.setState({ curStep });
  }

  handleCurrentQuestion(curQuestions) {
    this.setState({ curQuestions });
  }

  handleAddQuestionItem(item) {
    const curQuestions = this.state.curQuestions;
    if (!curQuestions.includes(item)) {
      curQuestions.push(item);
      this.setState({ curQuestions });
    }
  }

  handleRemoveQuestionItem(item) {
    const curQuestions = this.state.curQuestions;
    this.setState({ curQuestions: remove(curQuestions, item) });
  }

  handleAnswer(answer) {
    this.setState({ answer });
  }

  handleButtonStatus(buttonStatus) {
    this.setState({ buttonStatus });
  }

  _incrementCurrentStep() {
    const _lastCur = this.state.curStep;
    if (_lastCur < this.stepNumber) {
      this.handleCurrentStep(_lastCur + 1);
      this.handleAddQuestionItem((_lastCur | 0) + 1);
      this.handleButtonStatus(0);
    }
  }

  _getStepClass(step) {
    const curStep = this.state.curStep;
    return (
      (curStep === step && 'current--step question--shown') ||
      'question--hidden'
    );
  }

  _getSubQuestionClass(sub) {
    const curQuestions = this.state.curQuestions;
    return (
      (curQuestions === sub && 'current--subquestion question--shown') ||
      'question--hidden'
    );
  }

  _getButtonProps() {
    const status = this.state.buttonStatus;

    if (status === 0)
      return { text: 'Waiting answer', disabled: true, onClick: null };
    else if (status === 1)
      return {
        text: 'Next',
        disabled: false,
        onClick: this._incrementCurrentStep,
      };
    else if (status === 2)
      return {
        text: 'Finish',
        disabled: false,
        onClick: this._finishQuestionary,
      };
    else
      return {
        text: 'Error :/',
        disabled: true,
        onClick: null,
      };
  }

  _finishQuestionary() {}

  _sendData() {}

  render() {
    const { curStep, curQuestions } = this.state;
    console.log(curQuestions);
    const answer = this.state.answer;
    const { text, disabled, onClick } = this._getButtonProps();

    return (
      <>
        <div className="bx--grid bx--grid--full-width">
          <div className="bx--row">
            <div className="bx--col-sm-4 bx--col-md-6 bx--offset-md-1 bx--col-lg-6 bx--offset-lg-3">
              <div className="bx--row main">
                <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-12">
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

                  <div className={this._getStepClass(0)}>
                    <PersonalQuestions
                      answer={answer}
                      handleAnswer={this.handleAnswer}
                      buttonStatus={this.state.buttonStatus}
                      handleButtonStatus={this.handleButtonStatus}
                      curStep={curStep}
                      _id={0}
                    />
                  </div>
                  <div className={this._getStepClass(1)}>
                    <MultiOptionsQuestion.Radio
                      frame={this.frameQuestion1}
                      answer={answer}
                      handleAnswer={this.handleAnswer}
                      curQuestions={curQuestions}
                      handleAddQuestionItem={this.handleAddQuestionItem}
                      handleRemoveQuestionItem={this.handleRemoveQuestionItem}
                      curStep={curStep}
                    />
                    <div className={this._getSubQuestionClass(1.1)}>
                      <TextAreaQuestion
                        handleAnswer={this.handleAnswer}
                        id="text-area-0"
                        text={this.frameQuestion1_1}
                        answer={answer}
                      />
                    </div>
                    <div className={this._getSubQuestionClass(1.2)}>
                      MULT OPTIONS QUESTION COMPONENT CHECK
                    </div>
                  </div>

                  <Button disabled={disabled} onClick={onClick}>
                    {text}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function remove(array, element) {
  return array.filter(el => el !== element);
}

export default Feedback;
