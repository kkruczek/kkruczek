import React from 'react';
import styled from 'styled-components';
import desktopLogo from '../../assets/images/kk-desktop.svg';
import mobileLogo from '../../assets/images/kk-mobile.svg';
import StyledButton from '../../components/Button/Button';

const Wrapper = styled.header`
  max-width: 980px;
  margin: 0 auto 200px auto;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    max-width: 100%;
    margin: 0 0 200px 0;
    padding: 0 16px;
  }
  
  @media (max-width: 768px) {
    margin: 0 0 100px 0;
  }
`;

const Navigation = styled.nav``;

const List = styled.ul`
  margin: 0;
  padding: 0;
  float: right;
`;

const Link = styled.a`
  font-size: 14px;
  font-family: Roboto-Regular, sans-serif;
  color: #0B1C4C;
  text-decoration: none;
  position: relative;
  display: inline-block;
  margin: 25px;
  user-select: none;
  
  &:after {
    content: '';
    position: absolute;
    height: 2px;
    background: transparent;
    bottom: -10px;
    left: 0;
    right: 0;
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    margin: 28px 15px;
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  display: inline-block;
  
  &:hover {
    ${Link} {
      color: #235EFF;
      
      &:after {
        background: #235EFF;
        background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#4997FF), to(#235EFF));
        background-image: -webkit-linear-gradient(left, #4997FF, #235EFF);
        background-image: -moz-linear-gradient(left, #4997FF, #235EFF);
        background-image: -o-linear-gradient(left, #4997FF, #235EFF);
        box-shadow: 0 3px 8px 0 rgba(35,94,255,0.1);
      }
    }
  }
`;

const Button = styled(StyledButton)`
  @media (max-width: 768px) {
    margin-left: 10px;
    padding: 10px 8px;
  }
`;

const HomeLink = styled.a`
  padding-top: 10px;
`;

const LogoMobile = styled.img`
  width: 40px;
  height: 40px;
  display: none;
  
  @media (max-width: 568px) {
    display: inline;
    margin-top: 15px;
  }
`;

const LogoDesktop = styled.img`
  width: 52px;
  height: 52px;
  display: inline;
  margin-top: 10px;
  
  @media (max-width: 568px) {
    display: none;
  }
`;

const Header = () => (
  <Wrapper>
    <Navigation>
      <HomeLink href="/">
        <LogoMobile src={mobileLogo}/>
      </HomeLink>
      <HomeLink href="/">
        <LogoDesktop src={desktopLogo}/>
      </HomeLink>
      <List>
        <NavItem>
          <Link>About me</Link>
        </NavItem>
        <NavItem>
          <Link>Skills</Link>
        </NavItem>
        <NavItem>
          <Button>Get in touch</Button>
        </NavItem>
      </List>
    </Navigation>
  </Wrapper>
);

export default Header;
