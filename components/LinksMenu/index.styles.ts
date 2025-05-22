import styled from 'styled-components';

export const ContactButton = styled.button`
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
