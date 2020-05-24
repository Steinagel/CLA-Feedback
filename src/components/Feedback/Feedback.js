import React from 'react';

import {
  ProgressStep,
  ProgressIndicator,
  Button,
} from 'carbon-components-react';
import Questions from '../../components/Questions';

import './Feedback.scss';

const _questions = [
  {
    id: 0,
    question: 'Do you know Contract Language Analyzer application? :D',
    sub: [
      'Please, type your full name here:',
      'Your mail:',
      'Country you are now:',
    ],
    answer: {
      question: null,
      sub: {
        name: '',
        email: '',
        country: '',
      },
    },
  },
  {
    id: 1,
    question: 'Has CLA ( Contract Language Analyzer) helped you in your work?',
    yes: "That's great! Tell us a bit more please :D",
    no: 'Why not? Tell us a bit more, please :(',
    answer: { question: null, sub: '' },
  },
  {
    id: 2,
    question: 'Would you recommend us?',
    yes: 'Amazing! Which feature helped you the most? *_*',
    no: 'Why not? What is missing? :(',
    answer: { question: null, sub: '' },
  },
  {
    id: 3,
    question: 'Do we facilitate your daily work?',
    yes: 'That is really good! Tell us how please :D',
    no:
      'What functionality do we need to improve to help you in your daily works? :(',
    answer: { question: null, sub: '' },
  },
  {
    id: 4,
    question: 'Would you like to leave a final suggestion? :)',
    yes: 'Leave your suggestion bellow. We will love to know what you think <3',
    no: false,
    answer: { question: null, sub: '' },
  },
];

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: _questions,
      current: 0,
    };

    this.handleCurrent = this.handleCurrent.bind(this);
    this.handleQuestions = this.handleQuestions.bind(this);
    this.btnText = this.btnText.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  handleCurrent(current) {
    this.setState({ current: current + 1 });
  }

  handleQuestions(questions) {
    this.setState({ questions });
  }

  finishQuestionary(current) {}

  btnText(question) {
    let btnText;
    let btnEnabled = false;
    let btnFunction;

    if (question.answer.question === null) {
      btnText = 'Waiting answer...';
      btnEnabled = false;
    } else if (question.id === 0) {
      if (!question.answer.question) {
        btnText = 'Finish';
        btnEnabled = true;
        btnFunction = this.finishQuestionary;
      } else if (question.answer.question) {
        if (
          question.answer.sub.name.trim() === '' ||
          question.answer.sub.email.trim() === '' ||
          question.answer.sub.country.trim() === ''
        ) {
          btnText = 'Waiting answer...';
          btnEnabled = false;
        } else {
          btnText = 'Next';
          btnEnabled = true;
          btnFunction = this.handleCurrent;
        }
      }
    } else {
      if (!question.answer.question) {
        if (question.no === false) {
          btnEnabled = true;
          btnText = 'Finish';
          btnFunction = this.finishQuestionary;
        } else {
          if (question.answer.sub.trim() === '') {
            btnText = 'Waiting answer...';
            btnEnabled = false;
          } else {
            btnEnabled = true;
            btnText = 'Next';
            btnFunction = this.handleCurrent;
          }
        }
      } else {
        if (question.no === false && question.answer.sub.trim() !== '') {
          btnEnabled = true;
          btnText = 'Finish';
          btnFunction = this.finishQuestionary;
        } else if (question.answer.sub.trim() === '') {
          btnText = 'Waiting answer...';
          btnEnabled = false;
        } else {
          btnText = 'Next';
          btnEnabled = true;
          btnFunction = this.handleCurrent;
        }
      }
    }

    return { btnText, btnEnabled, btnFunction };
  }

  sendData() {
    // Save questions in new file
  }

  render() {
    const curr = this.state.current;
    const questions = this.state.questions;

    const { btnText, btnEnabled, btnFunction } = this.btnText(questions[curr]);

    return (
      <>
        <div className="bx--grid bx--grid--full-width">
          <div className="bx--row">
            <div className="bx--col-sm-4 bx--col-md-6 bx--offset-md-1 bx--col-lg-8 bx--offset-lg-2">
              <div className="bx--row main">
                <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-12">
                  <ProgressIndicator currentIndex={curr}>
                    {questions.map(question => (
                      <ProgressStep
                        key={question.id}
                        current={curr === question.id ? true : false}
                        label={`Step ${question.id + 1}`}
                        description={question.description}
                      />
                    ))}
                  </ProgressIndicator>
                  {console.log(questions[curr])}
                  <Questions
                    questions={questions}
                    curr={curr}
                    handleQuestions={this.handleQuestions}
                  />
                  <Button
                    disabled={!btnEnabled}
                    onClick={() => btnFunction(curr)}
                    className="main__button">
                    {btnText}
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

export default Feedback;
