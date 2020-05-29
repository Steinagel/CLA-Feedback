import React from 'react';

import {
  FormGroup,
  RadioButtonGroup,
  RadioButton,
} from 'carbon-components-react';

import './MultiOptionsQuestion.scss';

class MultiOptionsRadio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _updateUsage(answer, usage) {
    answer.question0.toolUsage = usage;
    this.props.handleAnswer(answer);
  }

  _validAnswer() {
    const { toolUsage } = this.props.answer.question0;
    return toolUsage === undefined || toolUsage === null ? -1 : toolUsage;
  }

  componentDidUpdate() {
    const {
      curStep,
      curQuestions,
      handleAddQuestionItem,
      handleRemoveQuestionItem,
    } = this.props;

    if (curStep === 1) {
      const answerNumber = this._validAnswer();
      if ([0, 1, 2].includes(answerNumber) && !curQuestions.includes(1.1)) {
        handleRemoveQuestionItem(1.2);
        handleAddQuestionItem(1.1);
      } else if ([3, 4].includes(answerNumber) && !curQuestions.includes(1.2)) {
        handleRemoveQuestionItem(1.1);
        handleAddQuestionItem(1.2);
      }
    }
  }

  render() {
    const { answer } = this.props;
    const { question, options } = this.props.frame;

    return (
      <FormGroup legendText="Selecte one:" className="question__form-group">
        <h4 className="question__ask">{question}</h4>
        <FormGroup className="group--spacing" legendText="Options">
          <RadioButtonGroup
            orientation="vertical"
            defaultSelected="default-selected"
            legend="Group Legend"
            name="radio-button-group"
            onChange={value => this._updateUsage(answer, value)}>
            {options.map((option, _id) => (
              <RadioButton
                id={`radio_${_id}`}
                value={_id}
                key={_id}
                labelText={option}
              />
            ))}
          </RadioButtonGroup>
        </FormGroup>
      </FormGroup>
    );
  }
}

class MultiOptionsCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _updateOptions(answer, options) {
    answer.options = options;
    this.props.handleAnswer(answer);
  }

  _validButtonStatus() {
    const { toolUsage } = this.props.answer;
    return toolUsage === undefined || toolUsage === null ? 0 : 1;
  }

  componentDidUpdate() {
    //Updating button
    console.log(this.props.curStep);
    if (this.props.curStep === 1) {
      console.log(this._validButtonStatus());
      const validStatus = this._validButtonStatus();
      if (validStatus !== this.props.button_status)
        this.props.handleButtonStatus(validStatus);
    }
  }

  render() {
    // const { answer } = this.props;

    return (
      <FormGroup
        legendText="Selecte multiple:"
        className="question__form-group">
        <h4 className="question__ask">RADIO KRL</h4>
      </FormGroup>
    );
  }
}

export { MultiOptionsCheck, MultiOptionsRadio };
