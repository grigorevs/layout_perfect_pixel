'use client';

import {
  ContactButton,
  HeaderContainer,
  HeaderIconButton,
  HeaderWrapper,
  MobileMenu,
  MobileMenuWrap,
  StyledList,
  StyledListItem,
} from './index.styles';
import Image from 'next/image';
import Logo from '../../public/images/Logo.svg';
import IconButton from '../../public/images/home/HeaderButtonIcon.svg';
import { useState } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <Image src={Logo} alt="Logo" />
        <HeaderContainer>
          <StyledList>
            <StyledListItem>Home</StyledListItem>
            <StyledListItem>About</StyledListItem>
            <StyledListItem>Blog</StyledListItem>
            <StyledListItem>Pricing</StyledListItem>
          </StyledList>
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
          <StyledList>
            <StyledListItem>Home</StyledListItem>
            <StyledListItem>About</StyledListItem>
            <StyledListItem>Blog</StyledListItem>
            <StyledListItem>Pricing</StyledListItem>
          </StyledList>
          <ContactButton>Contact Us →</ContactButton>
        </MobileMenuWrap>
      </MobileMenu>
    </>
  );
};

export default Header;
