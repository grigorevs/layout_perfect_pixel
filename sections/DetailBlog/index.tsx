'use client';

import Image from 'next/image';
import UserAvatar from '@/public/images/detail-blog/UserPic.svg';
import PostImage from '@/public/images/detail-blog/Pic.png';
import UserPic from '@/public/images/detail-blog/Img.svg';
import {
  BlogAuthorBlock,
  BlogAuthorTextWrap,
  BlogAuthorWrap,
  BlogPost,
  BlogPostDate,
  BlogText,
  BlogTextTitle,
  BlogTitle,
  BlogUserName,
  BlogUserPost,
  BlogWrap,
} from './index.styles';

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
        <BlogText>
          Depending on the input, this can result in using a lot of processing power and time. The
          whole process would take approximately 5 seconds to return a result to the client. Keep in
          mind we’re talking about 1 item, a contact from a contact book. After a while, a new
          requirement is added. Solution must support companies that manage their contacts organized
          in files. We agreed to develop a web application that would support upload of dataset
          files, like .csv. The new web application should support third party integrations. Some of
          them are the ESP/CRM services, like Mailchimp. User does not need to see the result
          immediately. System can later notify the user about the result, when the process finishes.
          This information is the key that we need to leverage on when developing our solution. So
          here’s how we did it.
        </BlogText>
        <BlogTextTitle>Initial approach</BlogTextTitle>
        <BlogText>
          Our initial approach went like this: The web application would read a .csv file
          line-by-line and submit an array of entries to the backend REST API. Processing is in real
          time, immediately after the user makes a request for the process to start, he expects a
          result. Another approach is to apply vertical scaling to AWS architecture. Meaning we used
          larger, more expensive instances that have more RAM and processing power. This system
          worked well for smaller datasets, maybe up to 5k entries, but for larger datasets multiple
          problems arose. This solution is prone to failure due to long request time. Also, because
          of some 3rd party services that aren’t optimized for large scale loads or they don’t have
          batch endpoints. 3rd party services also tend to protect their architecture from making a
          huge bill on their end. The whole process was done in real-time. The request can take a
          lot of time hanging in there while the backend would do all the work and return the result
          to the client. The request was limited to 300 seconds (at time of writing the article)
          before AWS would cancel it… Also I need to mention that the user has to wait a few minutes
          to see the results. They can’t use the app during the process, which makes for a bad user
          experience.
        </BlogText>
        <div>
          <Image src={UserPic} alt="UserPic" />
          <div>
            <div>
              <Image alt="Logo"></Image>
            </div>
            <p>Share this article</p>
          </div>
        </div>
      </div>
    </BlogWrap>
  );
};

export default DetailBlog;
