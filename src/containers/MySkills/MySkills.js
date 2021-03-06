import React from 'react';
import styled, { css } from 'styled-components';
import StyledButton from '../../components/Button/Button';

const Wrapper = styled.section`
  max-width: 980px;
  margin: 0 auto;
  padding: 30px 0 50px 0;
  
  @media(max-width: 1024px) {
    max-width: 100%;
    margin: 0;
  }
`;

const Heading = styled.h2`
  color: #0B1C4C;
  font-family: Roboto-Regular, sans-serif;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  margin: 15px 0;
  
  @media(max-width: 1024px) {
    padding: 0 16px;
  }
  
  @media(max-width: 768px) {
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
  
  @media(max-width: 1024px) {
    padding: 0 16px;
  }
`;

const SkillsContainer = styled.div`
  margin-left: -20px;
  margin-right: -20px;
  margin-top: 10px;
  
  @media (max-width: 1024px) {
    padding-left: 8px;
    padding-right: 8px;

    margin-left: 0;
    margin-right: 0;
    margin-top: 20px;
  }
  
  &:after {
    clear: both;
    content: "";
    display: block;
  }
`;

const withGradientLine = props => props.lineGradientStartColor && props.lineGradientEndColor && css`
  &:after {
    content: '';
    position: absolute;
    height: 3px;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0 0 3px 3px;
    background: ${props.lineGradientEndColor};
    background-image: -webkit-gradient(linear, 0 0, 100% 0, from(${props.lineGradientStartColor}), to(${props.lineGradientEndColor}));
    background-image: -webkit-linear-gradient(left, ${props.lineGradientStartColor}, ${props.lineGradientEndColor});
    background-image: -moz-linear-gradient(left, ${props.lineGradientStartColor}, ${props.lineGradientEndColor});
    background-image: -o-linear-gradient(left, ${props.lineGradientStartColor}, ${props.lineGradientEndColor});
  }
`;

const SkillContent = styled.div`
  padding: 30px;
  background: ${props => (props.transparent ? 'transparent' : '#FFFFFF')};
  text-align: ${props => (props.centered ? 'center' : 'left')};
  box-shadow: ${props => (props.transparent ? 'none' : '0 3px 8px 0 rgba(35,94,255,0.1)')};
  border-radius: 3px;
  position: relative;    
  height: 158px;
  
  ${withGradientLine};
  
  @media (max-width: 768px) {
    padding: 30px 16px;
    height: auto;
  }
`;

const SkillWrapper = styled.div`
  float: left;
  width: 25%;
  box-sizing: border-box;
  padding: 20px;
  
  @media (max-width: 1024px) {
    width: 33.333333%;
    padding: 8px;
  }
  
  @media (max-width: 768px) {
    width: ${props => (props.mobileStretched ? '100%' : '50%')};
  }
`;

const SkillTitle = styled.p`
  color: #0B1C4C;
  font-family: Roboto-Medium, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  margin-top: 0;
`;

const SkillDescription = styled.span`
  color: #0B1C4C;
  font-family: Roboto-Regular, sans-serif;
  font-size: 12px;
  line-height: 21px;
  opacity: 0.6;
`;

const Button = styled(StyledButton)`
  margin-top: 15px;
  margin-left: 0;
  
  @media (max-width: 768px) {
    margin: 15px auto 0 auto;
    display: block;
  }
`;

const MySkills = () => (
  <Wrapper>
    <Heading>
      {'My skills'}
    </Heading>
    <Paragraph>
      {'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
    </Paragraph>
    <SkillsContainer>
      <SkillWrapper>
        <SkillContent
          lineGradientStartColor="#9ED670"
          lineGradientEndColor="#65AD3D"
        >
          <SkillTitle>
            {'HTML / CSS'}
          </SkillTitle>
          <SkillDescription>
            {'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
          </SkillDescription>
        </SkillContent>
      </SkillWrapper>
      <SkillWrapper>
        <SkillContent
          lineGradientStartColor="#C2E59C"
          lineGradientEndColor="#64B3F4"
        >
          <SkillTitle>
            {'Backbone / React'}
          </SkillTitle>
          <SkillDescription>
            {'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
          </SkillDescription>
        </SkillContent>
      </SkillWrapper>
      <SkillWrapper>
        <SkillContent
          lineGradientStartColor="#C02425"
          lineGradientEndColor="#F0CB35"
        >
          <SkillTitle>
            {'SASS / LESS'}
          </SkillTitle>
          <SkillDescription>
            {'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
          </SkillDescription>
        </SkillContent>
      </SkillWrapper>
      <SkillWrapper>
        <SkillContent
          lineGradientStartColor="#C2E59C"
          lineGradientEndColor="#64B3F4"
        >
          <SkillTitle>
            {'Angular / Meteor'}
          </SkillTitle>
          <SkillDescription>
            {'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
          </SkillDescription>
        </SkillContent>
      </SkillWrapper>
      <SkillWrapper>
        <SkillContent
          lineGradientStartColor="#C02425"
          lineGradientEndColor="#F0CB35"
        >
          <SkillTitle>
            {'WordPress / Drupal'}
          </SkillTitle>
          <SkillDescription>
            {'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
          </SkillDescription>
        </SkillContent>
      </SkillWrapper>
      <SkillWrapper>
        <SkillContent
          lineGradientStartColor="#C2E59C"
          lineGradientEndColor="#64B3F4"
        >
          <SkillTitle>
            {'JavaScript / jQuery'}
          </SkillTitle>
          <SkillDescription>
            {'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
          </SkillDescription>
        </SkillContent>
      </SkillWrapper>
      <SkillWrapper mobileStretched>
        <SkillContent transparent centered withoutBottomLine>
          <SkillTitle>
            {'You are not sure about technology?'}
          </SkillTitle>
          <SkillDescription>
            {'Feel free to ask a question. I\'m sure I can find solution that will works for you.'}
          </SkillDescription>
          <Button>
            {'Send question'}
          </Button>
        </SkillContent>
      </SkillWrapper>
    </SkillsContainer>
  </Wrapper>
);

export default MySkills;
