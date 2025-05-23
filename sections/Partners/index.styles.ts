import styled from 'styled-components';

export const PartnersWrap = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
    width: 335px;
    gap: 32px;
    margin-bottom: 23px;
  }

  @media (min-width: 1200px) {
    padding: 100.5px 0;
    justify-content: center;
    gap: 40px;
    width: 1200px;
  }
`;

export const PartnersBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const PartnersTextBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    gap: 8px;
  }

  @media (min-width: 1200px) {
    gap: 16px;
  }
`;

export const PartnersTitle = styled.h1`
  font-family: 'Inter-SemiBold';
  color: #1d1e25;

  @media (max-width: 1200px) {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0;
  }

  @media (min-width: 1200px) {
    font-size: 48px;
    line-height: 120%;
    letter-spacing: -2px;
  }
`;

export const PartnersText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    width: 231px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0;
    width: 323px;
  }
`;

export const PartnersImagesBlock = styled.div`
  padding-top: 18px;
  display: flex;
  column-gap: 93px;
  row-gap: 40px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1200px) {
    width: auto;
    row-gap: 70px;

    img {
      width: 75px;
      height: 23px;
    }

    img:nth-child(1) {
      position: relative;
      right: 21px;
      top: 5px;
      width: 80px;
      height: 24px;
    }

    img:nth-child(2) {
      position: relative;
      right: 53px;
      top: 5px;
    }

    img:nth-child(3) {
      position: relative;
      right: 14px;
      top: -2px;
    }

    img:nth-child(4) {
      position: relative;
      right: 52px;
      top: -1px;
      width: 89px;
      height: 19px;
    }

    img:nth-child(5) {
      position: relative;
      right: 21px;
      top: 76px;
    }

    img:nth-child(6) {
      position: relative;
      right: 52px;
      top: 77px;
    }

    img:nth-child(7) {
      position: relative;
      right: -110px;
      top: -101px;
      width: 89px;
      height: 21px;
    }

    img:nth-child(8) {
      position: relative;
      left: -196px;
      top: -103px;
      width: 62px;
      height: 24px;
    }
  }

  @media (min-width: 1200px) {
    width: 730px;

    img:nth-child(-n + 4) {
      position: relative;
      right: -4px;
      top: -2px;
    }

    img:nth-child(4) {
      position: relative;
      right: 4px;
      top: -1px;
    }

    img:nth-child(5) {
      position: relative;
      right: 7px;
      top: 3px;
    }

    img:nth-child(6) {
      position: relative;
      right: 2px;
      top: 2px;
    }

    img:nth-child(7) {
      position: relative;
      right: 8px;
      top: 4px;
    }

    img:nth-child(8) {
      position: relative;
      right: 8px;
      top: 3px;
    }
  }
`;
