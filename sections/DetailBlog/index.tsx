'use client';

import Image from 'next/image';
import UserAvatar from '@/public/images/detail-blog/UserPic.svg';
import PostImage from '@/public/images/detail-blog/Pic.png';
import UserPic from '@/public/images/detail-blog/Img.svg';
import FBLogo from '@/public/images/detail-blog/Facebook.svg';
import TLogo from '@/public/images/detail-blog/Twitter.svg';
import LILogo from '@/public/images/detail-blog/Linkedin.svg';
import IGLogo from '@/public/images/detail-blog/Inst.svg';
import {
  AuthorName,
  BlogAboutBlock,
  BlogAuthorBlock,
  BlogAuthorTextWrap,
  BlogAuthorWrap,
  BlogDesciptionText,
  BlogLogosBlock,
  BlogPost,
  BlogPostDate,
  BlogShareBlock,
  BlogText,
  BlogTextTitle,
  BlogTitle,
  BlogUserName,
  BlogUserPost,
  BlogUserTextWrap,
  BlogUserWrap,
  BlogWrap,
  BlogWrittenByText,
} from './index.styles';
import { description, post, info } from './data';

const DetailBlog = () => {
  return (
    <BlogWrap>
      <div>
        <BlogTitle>How we perform long-running tasks using AWS services</BlogTitle>
        <BlogPost>
          <BlogAuthorBlock>
            <BlogAuthorWrap>
              <Image src={UserAvatar} alt="UserAvatar" />
              <BlogAuthorTextWrap>
                <BlogUserName>Renee Wells</BlogUserName>
                <BlogUserPost>Product Designer, Quotient</BlogUserPost>
              </BlogAuthorTextWrap>
            </BlogAuthorWrap>
            <BlogPostDate>10 min read November 10, 2023</BlogPostDate>
          </BlogAuthorBlock>
          <Image src={PostImage} alt="PostImage" />
        </BlogPost>
        <BlogText>{description}</BlogText>
        <BlogTextTitle>Initial approach</BlogTextTitle>
        <BlogText>{post}</BlogText>
        <BlogUserWrap>
          <Image src={UserPic} alt="UserPic" />
          <BlogAboutBlock>
            <BlogShareBlock>
              <BlogLogosBlock>
                <Image src={FBLogo} alt={'Logo'} />
                <Image src={TLogo} alt={'Logo'} />
                <Image src={LILogo} alt={'Logo'} />
                <Image src={IGLogo} alt={'Logo'} />
              </BlogLogosBlock>
              <BlogText>Share this article</BlogText>
            </BlogShareBlock>
            <BlogUserTextWrap>
              <BlogWrittenByText>Written by</BlogWrittenByText>
              <AuthorName>Renee Wells</AuthorName>
              <BlogUserPost>Product Designer, Quotient</BlogUserPost>
              <BlogText>{info}</BlogText>
            </BlogUserTextWrap>
          </BlogAboutBlock>
        </BlogUserWrap>
        <BlogDesciptionText>{info}</BlogDesciptionText>
      </div>
    </BlogWrap>
  );
};

export default DetailBlog;
