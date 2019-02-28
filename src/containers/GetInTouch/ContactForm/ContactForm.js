import Formsy from 'formsy-react';
import React from 'react';
import styled from 'styled-components';
import NotificationSystem from 'react-notification-system';
import Input from '../../../components/Input/Input';
import Textarea from '../../../components/Textarea/Textarea';
import Loader from '../../../components/Loader/Loader';

const API_URL = 'http://strapi.kkruczek.com';

const StyledContactForm = styled.div`
  box-sizing: border-box;
  max-width: 490px;
  width: 100%;
  float: left;
  padding-left: 80px;
  position: relative;
  
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
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
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
  
  transition: opacity 0.2s ease;
  
  &:hover {
    text-decoration: ${props => (props.disabled ? 'none' : 'underline')};
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 48px;
  }
`;

export const notificationStyles = {
  Containers: {
    DefaultStyle: {
      padding: '5px 20px 20px 0'
    }
  },

  NotificationItem: {
    DefaultStyle: {
      padding: '16px',
      height: 'auto',
      WebkitBorderRadius: '3px',
      MozBorderRadius: '3px',
      borderRadius: '3px',
      WebkitBoxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.16)',
      MozBoxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.16)',
      boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.16)',
      backgroundColor: '#FFFFFF',
      borderTopWidth: '3px'
    },

    success: {
      color: '#65AD3D',
      borderTopColor: '#65AD3D'
    },

    error: {
      color: '#C02425',
      borderTopColor: '#C02425'
    }
  },

  Title: {
    DefaultStyle: {
      fontSize: '12px',
      fontFamily: 'Roboto-Medium, sans-serif',
      fontWeight: 500,
      margin: '0 0 10px 0',
      padding: 0
    },

    success: {
      color: '#65AD3D'
    },

    error: {
      color: '#C02425'
    }
  },

  MessageWrapper: {
    DefaultStyle: {
      fontSize: '16px',
      fontFamily: 'Roboto-Light, sans-serif',
      fontWeight: 300,
      color: 'rgba(51, 60, 72, 0.7)',
      lineHeight: '21px'
    }
  },

  Dismiss: {
    DefaultStyle: {
      top: '14px',
      right: '10px'
    },

    success: {
      color: '#FFFFFF',
      backgroundColor: '#65AD3D'
    },

    error: {
      color: '#FFFFFF',
      backgroundColor: '#C02425'
    }
  }
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.addNotification = this.addNotification.bind(this);

    this.formRef = React.createRef();
    this.notificationSystemRef = React.createRef();

    this.state = { canSubmit: false, sendingForm: false };
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  addNotification(title, message, level) {
    this.notificationSystemRef.current.addNotification({
      title,
      message,
      level,
      autoDismiss: 5,
      position: 'tr'
    });
  }

  submitForm(model) {
    this.setState({ canSubmit: false, sendingForm: true });
    setTimeout(() => fetch(`${API_URL}/sendMessage`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: 'POST',
      body: JSON.stringify(model)
    }).then((response) => {
      this.setState({ sendingForm: false });
      if (response.ok) {
        this.addNotification(
          'Message successfully sent',
          'Thank you, I will respond as soon as possible.',
          'success'
        );
        this.resetForm();
      } else {
        this.setState({ canSubmit: true });
        this.addNotification(
          'Something went wrong',
          'Your message can not be send right now. Please try again later.',
          'error'
        );
      }
    }).catch(() => {
      this.setState({ canSubmit: true, sendingForm: false });
      this.addNotification(
        'Something went wrong',
        'Your message can not be send right now. Please try again later.',
        'error'
      );
    }), 1000);
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
            {`${this.state.sendingForm ? 'Sending message...' : 'Send message'}`}
          </Button>
          {
            this.state.sendingForm && <Loader/>
          }
        </Formsy>
        <NotificationSystem
          ref={this.notificationSystemRef}
          style={notificationStyles}
        />
      </StyledContactForm>
    );
  }
}

export default ContactForm;
