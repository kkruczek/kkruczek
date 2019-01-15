import Formsy from 'formsy-react';
import React from 'react';
import styled from 'styled-components';
import Input from '../../../components/Input/Input';
import Textarea from '../../../components/Textarea/Textarea';

const StyledContactForm = styled.div`
  box-sizing: border-box;
  max-width: 490px;
  width: 100%;
  float: left;
  padding-left: 80px;
  
  @media (max-width: 1024px) {
    max-width: 100%;
    float: none;
    padding-left: 40px;
    padding-right: 16px;
  }
  
  @media (max-width: 768px) {
    padding-left: 16px;
  }
`;

const InputGroup = styled.div`
  display: table;
  width: 100%;
  margin-bottom: 25px;
`;

const Button = styled.button`
  background: #235EFF;
  background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#4997FF), to(#235EFF));
  background-image: -webkit-linear-gradient(left, #4997FF, #235EFF);
  background-image: -moz-linear-gradient(left, #4997FF, #235EFF);
  background-image: -o-linear-gradient(left, #4997FF, #235EFF);
  box-shadow: 0 3px 8px 0 rgba(35,94,255,0.2);
  
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  color: #FFFFFF;
  font-family: Roboto-Medium, sans-serif;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  
  float: right;
  
  &:hover {
    text-decoration: ${props => (props.disabled ? 'none' : 'underline')};
  }
`;

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.resetForm = this.resetForm.bind(this);

    this.formRef = React.createRef();

    this.state = { canSubmit: false };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  submitForm(model) {
    // TODO: call to API here, after 200 response request - clear form
    console.log(model);
    setTimeout(() => {
      this.resetForm();
    }, 2000);
  }

  resetForm() {
    this.formRef.current.reset();
  }

  render() {
    return (
      <StyledContactForm>
        <Formsy
          onValidSubmit={this.submitForm}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          ref={this.formRef}
        >
          <InputGroup>
            <Input
              id="name"
              name="name"
              type="text"
              title="Your name"
              placeholder="How should I call you?"
              required
            />
          </InputGroup>
          <InputGroup>
            <Input
              id="email"
              name="email"
              type="text"
              title="Your email address"
              placeholder="On which I should respond?"
              validations="isEmail"
              validationError="Please enter a valid email"
              required
            />
          </InputGroup>
          <InputGroup>
            <Input
              id="subject"
              name="subject"
              type="text"
              title="Subject"
              placeholder="Enter email subject here"
              required
            />
          </InputGroup>
          <InputGroup>
            <Textarea
              id="message"
              name="message"
              title="Message"
              placeholder="Try describe a bit your need"
              validations={{
                maxLength: 5000
              }}
              validationErrors={{
                maxLength: 'You can not type in more than 5000 characters'
              }}
              required
            />
          </InputGroup>
          <Button
            type="submit"
            disabled={!this.state.canSubmit}
          >
            {'Send message'}
          </Button>
        </Formsy>
      </StyledContactForm>
    );
  }
}

export default ContactForm;
