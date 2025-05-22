import styled from 'styled-components';

export const StyledSlider = styled.div`
  display: flex;
  position: relative;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  cursor: grab;
  user-select: none;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;

  @media (min-width: 375px) {
    scroll-snap-type: x proximity;
    left: 22px;
    gap: 16px;
    width: 375px;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
    width: 1200px;
    gap: 32px;
    left: 0;
  }
`;

export const StyledWideSlider = styled.div`
  display: flex;
  position: relative;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  cursor: grab;
  user-select: none;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;

  @media (min-width: 375px) {
    scroll-snap-type: x proximity;
    left: 22px;
    gap: 16px;
    width: 375px;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
    width: 1600px;
    gap: 32px;
  }
`;
