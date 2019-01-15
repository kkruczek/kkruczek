/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import avatarImage from '../../assets/images/kkr.jpg';
import ContactForm from './ContactForm/ContactForm';

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 30px 0 50px 0;
  
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

const Heading = styled.h2`
  color: #0B1C4C;
  font-family: Roboto-Regular, sans-serif;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  margin: 15px 0;
  
  @media (max-width: 1024px) {
    padding: 0 16px;
  }
  
  @media (max-width: 768px) {
    font-size: 21px;
    line-height: 31px;
  }
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
  
  @media (max-width: 1024px) {
    padding: 0 16px;
  }
`;

const ContactContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  
  &:after {
    clear: both;
    content: "";
    display: block;
  }
  
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const ContactInfoContainer = styled.div`
  float: left;
  width: 50%;
  border-radius: 0 3px 3px 0;
  box-sizing: border-box;
  margin: 55px 0;
  
  background: #235EFF;
  background: linear-gradient(135deg, #4997FF 0%, #235EFF 100%);
  box-shadow: 0 3px 8px 0 rgba(35,94,255,0.2);
  
  @media (max-width: 768px) {
    width: 100%;
    float: none;
    margin-top: 30px;
    margin-bottom: 25px;
  }
`;

const ContactInfo = styled.div`
  box-sizing: border-box;
  max-width: 490px;
  width: 100%;
  padding: 60px 0;
  float: right;
  
  @media (max-width: 1024px) {
    max-width: 100%;
    float: none;
    padding: 60px 16px;
  }
  
  @media (max-width: 768px) {
    padding: 30px 16px;
  }
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
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    float: none;
    width: 100%;
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
                <TableCell smallText>name</TableCell>
                <TableCell smallText>surname</TableCell>
                <TableCell smallText>email</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  {'Kamil'}
                </TableCell>
                <TableCell>
                  {'Kruczek'}
                </TableCell>
                <TableCell>
                  <Link
                    href="mailto:hello@kkruczek.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {'hello@kkruczek.com'}
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
        <ContactForm/>
      </ContactFormContainer>
    </ContactContainer>
  </Wrapper>
);

export default GetInTouch;
