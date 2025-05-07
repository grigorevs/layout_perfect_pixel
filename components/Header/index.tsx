'use client';

import {
  ContactButton,
  HeaderContainer,
  HeaderIconButton,
  HeaderWrapper,
  MobileMenu,
  MobileMenuWrap,
} from './index.styles';
import Image from 'next/image';
import Logo from '../../public/images/Logo.svg';
import IconButton from '../../public/images/home/HeaderButtonIcon.svg';
import { useState } from 'react';
import RoutingList from '../RoutingList';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <Image src={Logo} alt="Logo" />
        <HeaderContainer>
          <RoutingList />
          <ContactButton>Contact Us →</ContactButton>
        </HeaderContainer>
        <HeaderIconButton
          src={IconButton}
          onClick={() => setIsVisible(!isVisible)}
          alt="Navigation Menu"
        />
      </HeaderWrapper>
      <MobileMenu isVisible={isVisible}>
        <MobileMenuWrap>
          <RoutingList />
          <ContactButton>Contact Us →</ContactButton>
        </MobileMenuWrap>
      </MobileMenu>
    </>
  );
};

export default Header;
