import styled from 'styled-components';
import Image from 'next/image';

const HeaderWrapper = styled.div`
  height: 114px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 100vw;
    padding: 0 20px;
    position: relative;
    top: -7px;

    img:nth-child(1) {
      width: 112px;
      height: 52px;
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;
    padding: 0;
  }
`;

const ContactButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 12px 0;
  position: relative;
  color: #000000;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  font-weight: 600;
  letter-spacing: 0;
  font-family: 'Inter-Bold';

  &::after {
    content: '';
    position: absolute;
    bottom: 6px;
    left: 0;
    width: 100%;
    height: 1px;
    border: 1px;
    background-color: #000000;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const HeaderIconButton = styled(Image)`
  display: none;

  @media (max-width: 699px) {
    display: block;
  }
`;

export const MobileMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isVisible',
})<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  padding-bottom: 30px;

  @media (min-width: 700px) {
    overflow: hidden;
  }
`;

export const MobileMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { HeaderWrapper, ContactButton, HeaderContainer, HeaderIconButton };
