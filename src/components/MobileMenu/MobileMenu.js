/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content aria-label="Menu">
        <Header>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close" />
          </UnstyledButton>
        </Header>
        <Body>
          <Nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </Nav>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Body>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(DialogContent)`
  position: absolute;
  background: white;
  width: clamp(300px, 65%, 90%);
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
  & > a {
    color: ${ COLORS.gray[900] };
    text-decoration: none;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px 32px 32px;
  flex: 1;

  ${ Nav } {
    flex: 1;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  & > a {
    font-size: 0.8rem;
    color: ${ COLORS.gray[700] };
    text-decoration: none;
  }
`;

export default MobileMenu;
