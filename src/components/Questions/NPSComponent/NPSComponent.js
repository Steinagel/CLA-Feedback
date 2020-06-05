import React from 'react';

import { FormGroup, Slider } from 'carbon-components-react';

import './NPSComponent.scss';

class TextAreaQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _updateQuestion(answer, score) {
    answer.question3 = score;
    this.props.handleAnswer(answer);
  }

  render() {
    const { id, frame, answer } = this.props;
    const { npsValue } = answer.question3;
    return (
      <FormGroup legendText="Slice the bar" className="question__form-group">
        <h4 className="question__ask">{frame}</h4>
        <Slider
          ariaLabelInput="Label for slider value"
          id={id}
          labelText="Slider Label"
          max={10}
          min={0}
          step={1}
          stepMultiplier={1}
          value={!npsValue ? 5 : npsValue}
          onChange={value => this._updateQuestion(answer, value)}
        />
      </FormGroup>
    );
  }
}

export default TextAreaQuestion;
