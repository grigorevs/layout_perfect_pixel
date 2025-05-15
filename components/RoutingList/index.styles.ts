import styled from 'styled-components';

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    margin-right: 32px;
  }
  a:last-of-type {
    margin: 0;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    a {
      margin-right: 0;
    }
  }
`;

const StyledListItem = styled.a`
  cursor: pointer;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
  color: #1d1e25;
`;

export { StyledList, StyledListItem };
