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

export { HeaderWrapper, HeaderContainer, HeaderIconButton };
