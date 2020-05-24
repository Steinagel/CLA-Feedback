import React from 'react';

import {
  RadioButtonGroup,
  RadioButton,
  FormGroup,
  TextArea,
  TextInput,
} from 'carbon-components-react';

import './Questions.scss';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.syncQuestions = this.syncQuestions.bind(this);
    this.handleClasses = this.handleClasses.bind(this);
    this.handleSubClasses = this.handleSubClasses.bind(this);
    this.handleAreaLabel = this.handleAreaLabel.bind(this);
  }

  syncQuestions(answer, questions, curr) {
    questions[curr].answer = answer;
    return questions;
  }

  handleClasses(curr, q_number) {
    return curr === q_number
      ? 'question__current--showed'
      : 'question__current--hidden';
  }

  handleFirstSubClass(curr, q_number, radio_answer) {
    return curr === q_number && radio_answer === true
      ? 'question__sub--showed'
      : 'question__sub--hidden';
  }

  handleSubClasses(curr, q_number, radio_answer) {
    return (
      (curr === q_number && radio_answer !== null && 'question__sub--showed') ||
      'question__sub--hidden'
    );
  }

  handleAreaLabel(question) {
    if (question.answer.question === true) return question.yes;
    else if (question.answer.question === false) return question.no;
    else return 'Waiting answer...';
  }

  render() {
    const { questions, curr, handleQuestions } = this.props;
    const q_0 = questions[0];
    const q_1 = questions[1];
    const q_2 = questions[2];
    const q_3 = questions[3];
    const q_4 = questions[4];

    return (
      <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-12 feedback__question">
        {/* QUESTION ONE */}
        <FormGroup
          legendText="Answer bellow:"
          className={`question__text-formgroup ${this.handleClasses(curr, 0)}`}>
          <h4 className="question__ask">{q_0.question}</h4>
          <FormGroup className="question__text-formgroup" legendText="">
            <RadioButtonGroup
              defaultSelected="No"
              legend="Answers"
              name="radio-button-group_1"
              onChange={value => {
                q_0.answer.question = value === 'yes' ? true : false;
                this.syncQuestions(q_0.answer, questions, 0);
                handleQuestions(questions);
              }}>
              <RadioButton id={`radio-01`} labelText="Yes" value="yes" />
              <RadioButton id={`radio-02`} labelText="No" value="no" />
            </RadioButtonGroup>
          </FormGroup>
          {/* SUB QUESTION ONE */}
          <FormGroup
            className={`question__text-formgroup 
              ${this.handleFirstSubClass(curr, 0, q_0.answer.question)}`}
            legendText="">
            <TextInput
              helperText=""
              id="text_input_1"
              invalidText="A valid value is required"
              labelText={q_0.sub[0]}
              placeholder="John..."
              className="question__text-input"
              value={q_0.answer.sub.name}
              onChange={event => {
                q_0.answer.sub.name = event.target.value;
                this.syncQuestions(q_0.answer, questions, 0);
                handleQuestions(questions);
              }}
            />
            <TextInput
              helperText=""
              id="text_input_2"
              invalidText="A valid value is required"
              labelText={q_0.sub[1]}
              placeholder="john@example.com"
              className="question__text-input"
              value={q_0.answer.sub.email}
              onChange={event => {
                q_0.answer.sub.email = event.target.value;
                this.syncQuestions(q_0.answer, questions, 0);
                handleQuestions(questions);
              }}
            />
            <TextInput
              helperText=""
              id="text_input_3"
              invalidText="A valid value is required"
              labelText={q_0.sub[2]}
              placeholder="Brazil"
              className="question__text-input"
              value={q_0.answer.sub.country}
              onChange={event => {
                q_0.answer.sub.country = event.target.value;
                this.syncQuestions(q_0.answer, questions, 0);
                handleQuestions(questions);
              }}
            />
          </FormGroup>
          <FormGroup
            className={`question__text-formgroup 
              ${this.handleFirstSubClass(
                curr,
                0,
                q_0.answer.question !== null ? !q_0.answer.question : null
              )}`}
            legendText="">
            <h4 className="question__h4--marged question__h4--resize">
              Sorry for that. Please let us know your email, so we will not send
              you again.
            </h4>
            <TextInput
              helperText=""
              id="text_input_4"
              invalidText="A valid value is required"
              labelText={q_0.sub[1]}
              placeholder="john@example.com"
              className="question__text-input"
              value={q_0.answer.sub.email}
              onChange={event => {
                q_0.answer.sub.email = event.target.value;
                this.syncQuestions(q_0.answer, questions, 0);
                handleQuestions(questions);
              }}
            />
          </FormGroup>
        </FormGroup>
        {/* QUESTION TWO */}
        <FormGroup
          legendText="Answer bellow:"
          className={`question__text-formgroup ${this.handleClasses(curr, 1)}`}>
          <h4 className="question__ask">{q_1.question}</h4>
          <FormGroup className="question__text-formgroup" legendText="">
            <RadioButtonGroup
              defaultSelected="No"
              legend="Answers"
              name="radio-button-group_2"
              onChange={value => {
                q_1.answer.question = value === 'yes' ? true : false;
                this.syncQuestions(q_1.answer, questions, 1);
                handleQuestions(questions);
              }}>
              <RadioButton id={`radio-11`} labelText="Yes" value="yes" />
              <RadioButton id={`radio-12`} labelText="No" value="no" />
            </RadioButtonGroup>
          </FormGroup>
          {/* SUBQUESTION TWO */}
          <FormGroup
            className={`question__text-formgroup 
              ${this.handleSubClasses(curr, 1, q_1.answer.question)}`}
            legendText="">
            <TextArea
              cols={50}
              id="text_area_1"
              invalidText="A valid value is required"
              labelText={this.handleAreaLabel(q_1)}
              placeholder="Placeholder text."
              rows={4}
              value={q_1.answer.sub}
              onChange={event => {
                q_1.answer.sub = event.target.value;
                this.syncQuestions(q_1.answer, questions, 1);
                handleQuestions(questions);
              }}
            />
          </FormGroup>
        </FormGroup>
        {/* QUESTION THREE */}
        <FormGroup
          legendText="Answer bellow:"
          className={`question__text-formgroup ${this.handleClasses(curr, 2)}`}>
          <h4 className="question__ask">{q_2.question}</h4>
          <FormGroup className="question__text-formgroup" legendText="">
            <RadioButtonGroup
              defaultSelected="No"
              legend="Answers"
              name="radio-button-group_3"
              onChange={value => {
                q_2.answer.question = value === 'yes' ? true : false;
                this.syncQuestions(q_2.answer, questions, 2);
                handleQuestions(questions);
              }}>
              <RadioButton id={`radio-21`} labelText="Yes" value="yes" />
              <RadioButton id={`radio-22`} labelText="No" value="no" />
            </RadioButtonGroup>
          </FormGroup>
          {/* SUBQUESTION THREE */}
          <FormGroup
            className={`question__text-formgroup 
              ${this.handleSubClasses(curr, 2, q_2.answer.question)}`}
            legendText="">
            <TextArea
              cols={50}
              id="text_area_2"
              invalidText="A valid value is required"
              labelText={this.handleAreaLabel(q_2)}
              placeholder="Placeholder text."
              rows={4}
              value={q_2.answer.sub}
              onChange={event => {
                q_2.answer.sub = event.target.value;
                this.syncQuestions(q_2.answer, questions, 2);
                handleQuestions(questions);
              }}
            />
          </FormGroup>
        </FormGroup>
        {/* QUESTION FOUR */}
        <FormGroup
          legendText="Answer bellow:"
          className={`question__text-formgroup ${this.handleClasses(curr, 3)}`}>
          <h4 className="question__ask">{q_3.question}</h4>
          <FormGroup className="question__text-formgroup" legendText="">
            <RadioButtonGroup
              defaultSelected="No"
              legend="Answers"
              name="radio-button-group_4"
              onChange={value => {
                q_3.answer.question = value === 'yes' ? true : false;
                this.syncQuestions(q_3.answer, questions, 3);
                handleQuestions(questions);
              }}>
              <RadioButton id={`radio-31`} labelText="Yes" value="yes" />
              <RadioButton id={`radio-32`} labelText="No" value="no" />
            </RadioButtonGroup>
          </FormGroup>
          {/* SUBQUESTION FOUR */}
          <FormGroup
            className={`question__text-formgroup 
              ${this.handleSubClasses(curr, 3, q_3.answer.question)}`}
            legendText="">
            <TextArea
              cols={50}
              id="text_area_3"
              invalidText="A valid value is required"
              labelText={this.handleAreaLabel(q_3)}
              placeholder="Placeholder text."
              rows={4}
              value={q_3.answer.sub}
              onChange={event => {
                q_3.answer.sub = event.target.value;
                this.syncQuestions(q_3.answer, questions, 3);
                handleQuestions(questions);
              }}
            />
          </FormGroup>
        </FormGroup>
        {/* QUESTION FIVE */}
        <FormGroup
          legendText="Answer bellow:"
          className={`question__text-formgroup ${this.handleClasses(curr, 4)}`}>
          <h4 className="question__ask">{q_4.question}</h4>
          <FormGroup className="question__text-formgroup" legendText="">
            <RadioButtonGroup
              defaultSelected="No"
              legend="Answers"
              name="radio-button-group_5"
              onChange={value => {
                q_4.answer.question = value === 'yes' ? true : false;
                this.syncQuestions(q_4.answer, questions, 4);
                handleQuestions(questions);
              }}>
              <RadioButton id={`radio-41`} labelText="Yes" value="yes" />
              <RadioButton id={`radio-42`} labelText="No" value="no" />
            </RadioButtonGroup>
          </FormGroup>
          {/* SUBQUESTION FIVE */}
          <FormGroup
            className={`question__text-formgroup 
              ${this.handleFirstSubClass(curr, 4, q_4.answer.question)}`}
            legendText="">
            <TextArea
              cols={50}
              id="text_area_4"
              invalidText="A valid value is required"
              labelText={this.handleAreaLabel(q_4)}
              placeholder="Placeholder text."
              rows={4}
              value={q_4.answer.sub}
              onChange={event => {
                q_4.answer.sub = event.target.value;
                this.syncQuestions(q_4.answer, questions, 4);
                handleQuestions(questions);
              }}
            />
          </FormGroup>
          <FormGroup
            className={`question__text-formgroup 
              ${this.handleFirstSubClass(
                curr,
                4,
                q_4.answer.question !== null ? !q_4.answer.question : null
              )}`}
            legendText="">
            <h4 className="question__h4--resize">
              Thank you!! Your feedback will be carefully evaluated!
            </h4>
          </FormGroup>
        </FormGroup>
      </div>
    );
  }
}

export default Question;
