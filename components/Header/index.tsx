'use client';

import { useState } from 'react';
import {
  HeaderContainer,
  HeaderIconButton,
  HeaderWrapper,
  MobileMenu,
  MobileMenuWrap,
} from './index.styles';
import Image from 'next/image';
import Logo from '@/public/images/Logo.svg';
import IconButton from '@/public/images/home/HeaderButtonIcon.svg';
import LinksMenu from '../LinksMenu';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <Image src={Logo} alt="Logo" />
        <HeaderContainer>
          <LinksMenu />
        </HeaderContainer>
        <HeaderIconButton
          src={IconButton}
          onClick={() => setIsVisible(!isVisible)}
          alt="Navigation Menu"
        />
      </HeaderWrapper>
      <MobileMenu isVisible={isVisible}>
        <MobileMenuWrap>
          <LinksMenu />
        </MobileMenuWrap>
      </MobileMenu>
    </>
  );
};

export default Header;
