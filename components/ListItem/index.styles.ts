import styled from 'styled-components';

export const ListItemWrap = styled.div`
  display: flex;
  gap: 8px;
`;

export const ListItemText = styled.p<{ disabledStyle: 'boolean' }>`
  color: ${({ disabledStyle }) => (disabledStyle ? '#7E8492' : '#1D1E25')};
  font-family: 'Inter-Medium';
  font-weight: '500';
  font-size: '16px';
  line-height: '26px';
  text-decoration: ${({ disabledStyle }) => (disabledStyle ? 'line-through' : 'none')};
`;
