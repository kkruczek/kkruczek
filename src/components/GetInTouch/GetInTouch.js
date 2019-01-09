import React from 'react';
import styled from 'styled-components';
import avatarImage from '../../assets/images/kkr.jpg';

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 30px 0 50px 0;
`;

const Heading = styled.h2`
  color: #0B1C4C;
  font-family: Roboto-Regular, sans-serif;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
`;

const Paragraph = styled.p`
  max-width: 470px;
  color: #0B1C4C;
  font-family: Roboto-Regular, sans-serif;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  opacity: 0.6;
  margin: 0 auto;
`;

const ContactContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  
  &:after {
    clear: both;
    content: "";
    display: block;
  }
`;

const ContactInfoContainer = styled.div`
  float: left;
  width: 50%;
  border-radius: 0 3px 3px 0;
  margin: 55px 0;
  
  background: #235EFF;
  background: linear-gradient(135deg, #4997FF 0%, #235EFF 100%);
  box-shadow: 0 3px 8px 0 rgba(35,94,255,0.2);
`;

const ContactInfo = styled.div`
  max-width: 490px;
  width: 100%;
  padding: 60px 0;
  float: right;
`;

const Avatar = styled.img`
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 2px solid white;
`;

const Table = styled.table``;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  color: #FFFFFF;
  font-size: ${props => (props.smallText ? '12px' : '16px')};
  font-family: Roboto-Regular, sans-serif;
  font-weight: 500;
  opacity: ${props => (props.smallText ? '0.4' : '1')};
  padding: 5px 40px 5px 0;
`;

const FindMeTitle = styled.p`
  color: #FFFFFF;
  font-family: Roboto-Regular, sans-serif;
  font-size: 20px;
  margin-top: 50px;
`;

const Link = styled.a`
  cursor: pointer;
  color: #FFFFFF;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ContactFormContainer = styled.div`
  float: left;
  width: 50%;
`;

const ContactForm = styled.div`
  max-width: 410px;
  width: 100%;
  float: left;
  padding-left: 80px;
`;

const InputGroup = styled.div`
  display: table;
  width: 100%;
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: table-row-group;
  
  font-size: 12px;
  font-family: Roboto-Regular, sans-serif;
  letter-spacing: 1px;
  color: #333C48;
  opacity: 0.6;
`;

const Input = styled.input`
  display: table-header-group;
  
  font-size: 16px;
  font-family: Roboto-Regular, sans-serif;
  color: #333C48;
  padding: 21px 16px;
  border: 1px solid rgba(51, 60, 72, 0.2);
  border-radius: 5px;
  background: rgba(249, 249, 250, 0.2);
  box-sizing: border-box;
  width: 100%;
  margin-top: 5px;
  
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
`;

const GetInTouch = () => (
  <Wrapper>
    <Heading>
      {'Get in touch'}
    </Heading>
    <Paragraph>
      {'If you\'d like to discuss a project or simply have a query, feel free to drop me question at hello@kkruczek.com or send me a direct message using the contact form.'}
    </Paragraph>
    <ContactContainer>
      <ContactInfoContainer>
        <ContactInfo>
          <Avatar src={avatarImage} role="presentation"/>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell smallText>email</TableCell>
                <TableCell smallText>phone</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link
                    href="mailto:hello@kkruczek.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {'hello@kkruczek.com'}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    href="tel:+48321456456"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {'+48 321 456 456'}
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <FindMeTitle>
            {'You can find me also on:'}
          </FindMeTitle>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell smallText>linkedin</TableCell>
                <TableCell smallText>github</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link
                    href="https://www.linkedin.com/in/kamil-kruczek"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {'/kamil-kruczek'}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    href="http://github.com/kkruczek"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {'/kkruczek'}
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ContactInfo>
      </ContactInfoContainer>
      <ContactFormContainer>
        <ContactForm>
          <InputGroup>
            <Label htmlFor="name">
              {'Your name:'}
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="How should I call you?"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">
              {'Your email address:'}
            </Label>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="On which I should respond?"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="subject">
              {'Subject:'}
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter email subject here"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="message">
              {'Message:'}
            </Label>
            <Input
              id="message"
              name="message"
              type="textarea"
              placeholder="Try describe a bit your need"
            />
          </InputGroup>
        </ContactForm>
      </ContactFormContainer>
    </ContactContainer>
  </Wrapper>
);

export default GetInTouch;
