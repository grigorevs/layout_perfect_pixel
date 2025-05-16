'use client';

import Image from 'next/image';
import Pic1 from '@/public/images/blog/Pic1.png';
import Pic2 from '@/public/images/blog/Pic2.png';
import Pic3 from '@/public/images/blog/Pic3.png';
import Pic4 from '@/public/images/blog/Pic4.png';
import {
  ContentBlock,
  ContentPicBlock,
  ContentText,
  ContentTitle,
  ContentWrap,
} from './index.styles';

const Content = () => {
  return (
    <ContentWrap>
      <ContentBlock>
        <ContentPicBlock>
          <Image src={Pic1} alt="Pic" />
          <ContentTitle>How we perform long-running tasks using AWS services</ContentTitle>
          <ContentText>
            Webflow is web design tool as well as a hosting platform and CMS all in one. While you
            are probably familiar with all of these, they are usually entirely separate tools.
          </ContentText>
        </ContentPicBlock>
        <ContentPicBlock>
          <Image src={Pic2} alt="Pic" />
          <ContentTitle>How to ask when doing User Research</ContentTitle>
          <ContentText>
            Bro, the story is that you want to make an application for buying and selling goods on
            the market. During user research, what do you think you will ask people?
          </ContentText>
        </ContentPicBlock>
        <ContentPicBlock>
          <Image src={Pic3} alt="Pic" />
          <ContentTitle>Layout Exploration — Simple exercise but big effect</ContentTitle>
          <ContentText>
            Make alternatives or other options for the design we are making. For example, we are
            creating a website design. Then there is the testimonial section.
          </ContentText>
        </ContentPicBlock>
        <ContentPicBlock>
          <Image src={Pic4} alt="Pic" />
          <ContentTitle>Webflow Break the Coding Barrier</ContentTitle>
          <ContentText>
            Webflow is web design tool as well as a hosting platform and CMS all in one. While you
            are probably familiar with all of these, they are usually entirely separate tools.
          </ContentText>
        </ContentPicBlock>
      </ContentBlock>
    </ContentWrap>
  );
};

export default Content;
