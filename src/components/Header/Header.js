import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  max-width: 980px;
  margin: 0 auto 200px auto;
  overflow: hidden;
`;

const Navigation = styled.nav``;

const List = styled.ul`
  margin: 0;
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

const Button = styled.button`
  background: #235EFF;
  background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#4997FF), to(#235EFF));
  background-image: -webkit-linear-gradient(left, #4997FF, #235EFF);
  background-image: -moz-linear-gradient(left, #4997FF, #235EFF);
  background-image: -o-linear-gradient(left, #4997FF, #235EFF);
  box-shadow: 0 3px 8px 0 rgba(35,94,255,0.2);
  
  cursor: pointer;
  color: #FFFFFF;
  font-family: Roboto-Medium, sans-serif;
  font-size: 14px;
  padding: 10px 20px;
  margin-left: 35px;
  border: none;
  border-radius: 3px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => (
  <Wrapper>
    <Navigation>
      <List>
        <NavItem>
          <Link>About me</Link>
        </NavItem>
        <NavItem>
          <Link>Skills</Link>
        </NavItem>
        <NavItem>
          <Link>Testimonials</Link>
        </NavItem>
        <NavItem>
          <Button>Get in touch</Button>
        </NavItem>
      </List>
    </Navigation>
  </Wrapper>
);

export default Header;
