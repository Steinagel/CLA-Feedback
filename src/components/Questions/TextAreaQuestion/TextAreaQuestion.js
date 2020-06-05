import React from 'react';

import { FormGroup, TextArea } from 'carbon-components-react';

import './TextAreaQuestion.scss';

class TextAreaQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _updateQuestion(value) {
    let { answer } = this.props;
    const { question, selector } = this.props;

    answer[question][selector] = value;

    this.props.handleAnswer(answer);
  }

  render() {
    const { id, answer, question, selector, className } = this.props;
    const { frame } = this.props;
    return (
      <FormGroup
        legendText="Answer bellow"
        className={`question__form-group ${className}`}>
        <h4 className="question__ask">{frame}</h4>
        <TextArea
          cols={50}
          id={id}
          labelText="Please, input here:"
          placeholder="Placeholder text."
          rows={4}
          value={answer[question][selector]}
          onChange={event => this._updateQuestion(event.target.value)}
        />
      </FormGroup>
    );
  }
}

export default TextAreaQuestion;
