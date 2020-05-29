import React from 'react';

import { FormGroup, TextArea } from 'carbon-components-react';

import './TextAreaQuestion.scss';

class TextAreaQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _updateWhatIsMissing(answer, missing) {
    answer.missing = missing;
    this.props.handleAnswer(answer);
  }

  render() {
    const { id, text, answer } = this.props;
    return (
      <FormGroup legendText="">
        <h4 className="question__ask">{text}</h4>
        <TextArea
          cols={50}
          id={id}
          invalidText="A valid value is required"
          labelText="Your answer is important:"
          placeholder="The analysis could..."
          rows={4}
          value={answer.missing}
          onChange={event =>
            this._updateWhatIsMissing(answer, event.target.value)
          }
        />
      </FormGroup>
    );
  }
}

export default TextAreaQuestion;
