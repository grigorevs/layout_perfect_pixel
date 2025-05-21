import styled from 'styled-components';
import Image from 'next/image';

export const OverviewWrap = styled.div`
  background-color: #1d1e25;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const OverviewBlock = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    align-items: center;
  }

  @media (min-width: 1200px) {
    align-items: baseline;
  }
`;

export const OverviewTitle = styled.h1`
  font-family: 'Inter-SemiBold';
  color: #ffffff;

  @media (max-width: 1200px) {
    width: 335px;
    margin: 40px 0 16px;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0;
  }

  @media (min-width: 1200px) {
    width: 816px;
    margin: 100px 0 24px;
    font-size: 56px;
    line-height: 120%;
    letter-spacing: -2px;
  }
`;

export const OverviewText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    width: 336px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0;
    width: 660px;
  }
`;

export const OverviewDetailsWrap = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin: 32px 0 39px;

    div:nth-child(1) h3 {
      position: relative;
      top: -6px;
    }
    div:nth-child(1) p {
      position: relative;
      top: -16px;
    }

    div:nth-child(2) img {
      position: relative;
      top: 3px;
      width: 22px;
      height: 22px;
    }

    div:nth-child(2) h3 {
      position: relative;
      top: -2px;
    }

    div:nth-child(2) p {
      position: relative;
      top: -11px;
      width: 340px;
    }

    div:nth-child(3) img {
      position: relative;
      top: 8px;
      left: 1px;
      width: 21px;
      height: 21px;
    }

    div:nth-child(3) h3 {
      position: relative;
      top: 4px;
    }

    div:nth-child(3) p {
      position: relative;
      top: -5px;
    }

    div:nth-child(4) img {
      position: relative;
      top: 16px;
      left: 1px;
      width: 21px;
      height: 21px;
    }

    div:nth-child(4) h3 {
      position: relative;
      top: 9px;
      font-size: 16px;
    }

    div:nth-child(4) p {
      width: 340px;
    }
  }

  @media (min-width: 1200px) {
    flex-wrap: wrap;
    row-gap: 56px;
    column-gap: 259px;
    margin: 80px 0 100px;

    div:nth-child(1) p {
      width: 450px;
    }

    div:nth-child(2) img {
      width: 35px;
      height: 35px;
      padding: 3px 0 0 4px;
    }

    div:nth-child(2) h3 {
      padding-top: 5px;
    }

    div:nth-child(2) p {
      position: relative;
      bottom: 2px;
      width: 400px;
    }

    div:nth-child(3) img {
      width: 37px;
      height: 37px;
      position: relative;
      right: -2px;
    }

    div:nth-child(3) h3 {
      width: 200px;
      position: relative;
      bottom: -3px;
    }

    div:nth-child(3) p {
      position: relative;
      bottom: -2px;
    }

    div:nth-child(4) img {
      width: 38px;
      height: 38px;
      position: relative;
      right: -2px;
    }

    div:nth-child(4) h3 {
      position: relative;
      bottom: -3px;
    }

    div:nth-child(4) p {
      position: relative;
      bottom: -2px;
    }
  }
`;

export const OverviewDetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1200px) {
    width: 335px;
  }

  @media (min-width: 1200px) {
    width: 453px;
  }
`;

export const OverviewDetailsItemTitle = styled.h3`
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  color: #ffffff;

  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0;
    width: 335px;
    overflow-wrap: normal;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -1px;
    width: 275px;
  }
`;

export const OverviewDetailsItemText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    width: 336px;
    overflow-wrap: break-word;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
    width: 460px;
  }
`;

export const Icon = styled(Image)`
  @media (max-width: 1200px) {
    height: 24px;
    width: 24px;
  }
`;
