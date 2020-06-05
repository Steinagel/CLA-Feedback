import React from 'react';

import {
  FormGroup,
  RadioButtonGroup,
  RadioButton,
  Checkbox,
} from 'carbon-components-react';

import './MultiOptionsQuestion.scss';

class MultiOptionsRadio extends React.Component {
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
    const { id, className } = this.props;
    const { question, options } = this.props.frame;

    return (
      <FormGroup
        legendText="Selecte one"
        className={`question__form-group ${className}`}>
        <h4 className="question__ask">{question}</h4>
        <RadioButtonGroup
          id={id}
          orientation="vertical"
          legend=""
          valueSelected={2}
          name={`radio-button-group-${id}`}
          onChange={value => this._updateQuestion(value)}>
          {options.map((option, _index) => (
            <RadioButton
              id={`radio--${id}_${_index}`}
              value={_index}
              key={id + _index}
              labelText={option}
            />
          ))}
        </RadioButtonGroup>
      </FormGroup>
    );
  }
}

class MultiOptionsCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLast: false,
    };
  }

  _updateQuestion(_id, value, options) {
    let { answer } = this.props;
    const { question, selector } = this.props;

    if (_id === options.length - 1 && value) {
      this.setState({ isLast: true });
    } else this.setState({ isLast: false });

    answer[question][selector][_id] = value;

    this.props.handleAnswer(answer);
  }

  _mustBeDisabled(_id, options) {
    const length = options.length;
    if (this.state.isLast && _id !== length - 1) return true;
    return false;
  }

  render() {
    const { id, className } = this.props;
    const { question, options } = this.props.frame;

    return (
      <FormGroup
        legendText="Selecte one"
        className={`question__form-group ${className}`}>
        <h4 className="question__ask">{question}</h4>
        <fieldset className="bx--fieldset" id={id}>
          <legend className="bx--label">Choose:</legend>
          {options.map((option, _id) => {
            return (
              <Checkbox
                labelText={option}
                key={_id}
                id={`check-item-${_id}`}
                onChange={value => this._updateQuestion(_id, value, options)}
                disabled={this._mustBeDisabled(_id, options)}
              />
            );
          })}
        </fieldset>
      </FormGroup>
    );
  }
}

export { MultiOptionsCheck, MultiOptionsRadio };
