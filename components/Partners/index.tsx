'use client';

import Partners from '@/sections/Partners';
import styled from 'styled-components';

const StyledFrame = styled.div`
  @media (min-width: 1200px) {
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
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
