import styled from 'styled-components';

const HeaderWrapper = styled.div`
  @media (min-width: 1440px) {
    height: 114px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    margin-right: 32px;
  }
  li:last-of-type {
    margin: 0;
  }
`;

const StyledListItem = styled.li`
  cursor: pointer;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
  color: #1d1e25;
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
`;

export { HeaderWrapper, StyledList, StyledListItem, ContactButton, HeaderContainer };
