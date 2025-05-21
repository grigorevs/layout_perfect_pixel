'use client';

import Partners from '@/sections/Partners';
import styled from 'styled-components';

const StyledFrame = styled.div`
  @media (min-width: 1200px) {
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    position: relative;
    top: -4px;

    h1,
    p {
      position: relative;
      left: 5px;
      top: 2px;
    }

    /* div:nth-of-type(1) img {
      position: relative;
      top: -2px;
      right: -2px;
    } */
  }
`;

const Parteners = () => {
  return (
    <StyledFrame>
      <Partners />
    </StyledFrame>
  );
};

export default Parteners;
