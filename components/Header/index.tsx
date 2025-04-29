'use client';

import {
  ContactButton,
  HeaderContainer,
  HeaderWrapper,
  StyledList,
  StyledListItem,
} from './index.styles';
import Image from 'next/image';
import Logo from '../../public/images/Logo.svg';

const Header = () => {
  return (
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
    </HeaderWrapper>
  );
};

export default Header;
