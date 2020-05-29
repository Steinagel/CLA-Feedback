import React from 'react';

import {
  // RadioButtonGroup,
  // RadioButton,
  FormGroup,
  // TextArea,
  TextInput,
} from 'carbon-components-react';

import './PersonalQuestions.scss';

class PersonalQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _updateName(answer, name) {
    answer.question0.personal.name = name;
    this.props.handleAnswer(answer);
  }

  _updateEmail(answer, email) {
    answer.question0.personal.email = email;
    this.props.handleAnswer(answer);
  }

  _updateCountry(answer, country) {
    answer.question0.personal.country = country;
    this.props.handleAnswer(answer);
  }

  _validButtonStatus() {
    const { personal } = this.props.answer.question0;
    return personal.name.trim() !== '' &&
      personal.email.trim() !== '' &&
      personal.country.trim() !== ''
      ? 1
      : 0;
  }

  componentDidUpdate() {
    //Updating button
    if (this.props.curStep === 0) {
      const validStatus = this._validButtonStatus();
      if (validStatus !== this.props.buttonStatus)
        this.props.handleButtonStatus(validStatus);
    }
  }

  render() {
    const { _id, answer } = this.props;
    const { name, email, country } = answer.question0.personal;

    return (
      <FormGroup legendText="Answer bellow:" className="question__form-group">
        <h4 className="question__ask">Please, tell us who you are?</h4>
        <TextInput
          helperText=""
          id={`nameInput_${_id}`}
          invalidText="Please, your opinion is important!"
          labelText="Please enter your Name:"
          placeholder="John..."
          className="personal__input"
          value={name}
          onChange={event => this._updateName(answer, event.target.value)}
        />
        <TextInput
          helperText=""
          id={`emailInput_${_id}`}
          invalidText="Please, your opinion is important!"
          labelText="Email:"
          placeholder="john@example.com"
          className="personal__input"
          value={email}
          onChange={event => this._updateEmail(answer, event.target.value)}
        />
        <TextInput
          helperText=""
          id={`countryInput_${_id}`}
          invalidText="Please, your opinion is important!"
          labelText="Your Country:"
          placeholder="Madagascar"
          className="personal__input"
          value={country}
          onChange={event => this._updateCountry(answer, event.target.value)}
        />
      </FormGroup>
    );
  }
}

export default PersonalQuestions;
