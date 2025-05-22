import styled from 'styled-components';
import Image from 'next/image';

export const StarsWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const StarsIcon = styled(Image)`
  @media (max-width: 1200px) {
    width: 16px;
    height: 16px;
  }

  @media (min-width: 1200px) {
    width: 20px;
    height: 20px;
  }
`;
