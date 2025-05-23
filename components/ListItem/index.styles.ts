import styled from 'styled-components';

export const ListItemWrap = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 1200px) {
    img {
      width: 21px !important;
      height: 21px !important;
    }

    @media (min-width: 1200px) {
      img {
        width: 25px !important;
        height: 25px !important;
      }
    }
  }
`;

export const ListItemText = styled.p.withConfig({
  shouldForwardProp: (disabledStyle) => disabledStyle !== 'disabledStyle',
})<{ disabledStyle: boolean }>`
  color: ${({ disabledStyle }) => (disabledStyle ? '#7E8492' : '#1D1E25')};
  font-family: 'Inter-Medium';
  font-weight: '500';
  text-decoration: ${({ disabledStyle }) => (disabledStyle ? 'line-through' : 'none')};

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 26px;
  }
`;
