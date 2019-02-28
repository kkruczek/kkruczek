import React from 'react';
import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: table-row-group;
  
  font-size: 12px;
  font-family: Roboto-Regular, sans-serif;
  letter-spacing: 1px;
  color: ${props => (props.errorMessage ? '#DC291E' : '#333C48')};
  opacity: ${props => (props.errorMessage ? '1' : '0.6')};
  
  transition: opacity 0.3s ease, color 0.3s ease;
`;

const StyledInput = styled.input`
  display: table-header-group;

  font-size: 16px;
  font-family: Roboto-Regular, sans-serif;
  color: #333C48;
  padding: 0 16px;
  height: 64px;
  border: ${props => (props.errorMessage ? '1px solid #DC291E' : '1px solid rgba(51, 60, 72, 0.2)')};
  border-radius: 5px;
  background: rgba(249, 249, 250, 0.2);
  box-sizing: border-box;
  width: 100%;
  margin-top: 5px;
  margin-bottom: ${props => (props.errorMessage ? '5px' : '0')};
  
  transition: margin-bottom 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:active,
  &:focus {
    outline: 0;
    border: ${props => (props.errorMessage ? '1px solid #DC291E' : '1px solid #4997FF')};
    box-shadow: ${props => (props.errorMessage ? '0 0 0 2px rgba(220, 41, 30, 0.2)' : '0 0 0 2px rgba(74, 152, 255, 0.25)')};
  }

  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: rgba(51, 60, 72, 0.4);
  }
  &::-moz-placeholder { /* Firefox 19+ */
    color: rgba(51, 60, 72, 0.4);
  }
  &:-ms-input-placeholder { /* IE 10+ */
    color: rgba(51, 60, 72, 0.4);
  }
  &:-moz-placeholder { /* Firefox 18- */
    color: rgba(51, 60, 72, 0.4);
  }
  
  @media (max-width: 768px) {
    height: 48px;
  }
`;

const StyledErrorMessage = styled.span`
  font-size: 12px;
  color: #DC291E;
  letter-spacing: 1px;
`;

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  }

  handleFocus() {
    this.setState({ blurred: false });
  }

  handleBlur() {
    this.setState({ blurred: true });
  }

  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.state && this.state.blurred ? this.props.getErrorMessage() : '';

    return (
      <React.Fragment>
        <StyledLabel
          htmlFor={this.props.name}
          errorMessage={errorMessage}
        >
          {this.props.title}
        </StyledLabel>
        <StyledInput
          onChange={this.changeValue}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          type="text"
          value={this.props.getValue() || ''}
          errorMessage={errorMessage}
          placeholder={this.props.placeholder}
        />
        {
          errorMessage && (
            <StyledErrorMessage>
              {errorMessage}
            </StyledErrorMessage>
          )
        }
      </React.Fragment>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  setValue: PropTypes.func,
  getValue: PropTypes.func,
  getErrorMessage: PropTypes.func
};

Input.defaultProps = {
  placeholder: '',
  setValue() {},
  getValue() {},
  getErrorMessage() {}
};

export default withFormsy(Input);
