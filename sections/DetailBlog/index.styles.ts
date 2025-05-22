import { styled } from 'styled-components';

export const BlogWrap = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
  }

  @media (min-width: 1200px) {
    position: relative;
    left: 14px;
    padding-bottom: 35px;
  }
`;

export const BlogTitle = styled.h1`
  color: #1d1e25;
  font-family: 'Inter-Bold';
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1px;
    width: 350px;
    position: relative;
    left: 7px;
    top: -4px;
  }

  @media (min-width: 1200px) {
    font-size: 72px;
    line-height: 120%;
    letter-spacing: -3px;
    width: 970px;
    padding: 80px 0 48px;
  }
`;

export const BlogUserName = styled.p`
  color: #1d1e25;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-family: 'Inter-Medium';
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 1200px) {
    font-family: 'Inter-SemiBold';
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
  }
`;

export const BlogUserPost = styled.p`
  color: #7e8492;
  letter-spacing: 0;
  font-family: 'Inter-Medium';

  @media (max-width: 1200px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 1200px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
  }
`;

export const BlogPostDate = styled.p`
  color: #7e8492;
  letter-spacing: 0;
  font-family: 'Inter-Medium';

  @media (max-width: 1200px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 1200px) {
    align-self: end;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
  }
`;

export const BlogAuthorTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BlogAuthorWrap = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    gap: 8px;

    img {
      width: 32px !important;
      height: 32px !important;
    }
  }

  @media (min-width: 1200px) {
    gap: 24px;

    img {
      width: 56px !important;
      height: 56px !important;
    }
  }
`;

export const BlogAuthorBlock = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    padding: 56px 0 8px;
    gap: 16px;
    flex-direction: column;
  }

  @media (min-width: 1200px) {
    padding: 32px 0 24px;
    width: 940px;
    justify-content: space-between;
  }
`;

export const BlogPost = styled.div`
  @media (max-width: 1200px) {
    img {
      width: 335px;
      height: 194px;
    }

    padding-bottom: 32px;
    position: relative;
    right: -7px;
    top: -6px;
  }

  @media (min-width: 1200px) {
    img {
      width: 940px;
      height: 545px;
    }

    padding-bottom: 80px;
  }
`;

export const BlogText = styled.p`
  color: #1d1e25;
  letter-spacing: 0;
  font-weight: 400;

  @media (max-width: 1200px) {
    font-family: 'Inter-Medium';
    font-size: 14px;
    line-height: 20px;
    width: 340px;
    position: relative;
    left: 7px;
    top: -9px;
  }

  @media (min-width: 1200px) {
    font-family: 'Inter';
    font-size: 18px;
    line-height: 32px;
    width: 940px;
  }
`;

export const BlogTextTitle = styled.h3`
  font-family: 'Inter-SemiBold';
  color: #000000;
  letter-spacing: 0;
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 26px;
    padding: 32px 0 16px;
    position: relative;
    left: 7px;
    top: -8px;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
    line-height: 120%;
    padding: 56px 0 24px;
  }
`;

export const AuthorName = styled.p`
  color: #1d1e25;
  font-family: 'Inter-SemiBold';
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -1px;
  }
`;

export const BlogUserWrap = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    gap: 16px;
    padding: 23px 0 16px;

    img {
      width: 199px;
      height: 209px;
      object-fit: cover;
    }
  }

  @media (min-width: 1200px) {
    gap: 48px;
    width: 893px;
    padding: 56px 0 120px;
  }
`;

export const BlogUserTextWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 120px;
    gap: 8px;

    :last-child {
      display: none;
    }
  }

  @media (min-width: 1200px) {
    gap: 16px;

    p {
      width: 645px;
    }
  }
`;

export const BlogDesciptionText = styled(BlogText)`
  @media (max-width: 1200px) {
    display: block;
    padding-bottom: 77px;
    position: relative;
    top: -1px;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const BlogLogosBlock = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    gap: 8px;
    padding-left: 8px;

    img {
      width: 20px;
      height: 20px;
    }
  }

  @media (min-width: 1200px) {
    gap: 32px;
  }
`;

export const BlogShareBlock = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 8px;

    p {
      position: relative;
      left: 0px;
      top: 3px;
    }
  }

  @media (min-width: 1200px) {
    gap: 24px;
  }
`;

export const BlogAboutBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    gap: 56px;
    width: 120px;
  }

  @media (min-width: 1200px) {
    gap: 14px;
    width: 645px;
  }
`;

export const BlogWrittenByText = styled.p`
  color: #7e8492;
  letter-spacing: 0;
  font-weight: 400;
  font-family: 'Inter';
  font-size: 16px;
  line-height: 24px;
`;
