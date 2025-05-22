'use client';

import Button from '@/components/Button';
import Pic1 from '@/public/images/about/AudiencePic1.png';
import Pic2 from '@/public/images/about/AudiencePic2.png';
import Pic3 from '@/public/images/about/AudiencePic3.png';
import Logo from '@/public/images/about/LinkedPath.svg';
import TopBlur from '@/public/images/home/Ellipse125.svg';
import {
  AudienceBlock,
  AudienceDetailsBlock,
  AudienceDetailsPic,
  AudienceLogo,
  AudiencePic,
  AudiencePicBlock,
  AudiencePicText,
  AudiencePicTitle,
  AudienceText,
  AudienceTextBlock,
  AudienceTitle,
  AudienceWrap,
  BackgroundTopBlur,
  LineBlock,
} from './index.styles';

const Audience = () => {
  return (
    <AudienceWrap>
      <AudienceBlock>
        <AudienceTitle>Everything you need to get the attention of your audience</AudienceTitle>
        <AudienceTextBlock>
          <LineBlock />
          <AudienceText>
            Our digital agency helps clients develop, implement and maintain successful digital
            marketing strategies across all channels. Also work with you to build your website and
            create online businesses that grow.
          </AudienceText>
        </AudienceTextBlock>
        <AudienceLogo src={Logo} alt="Logo" />
      </AudienceBlock>
      <AudiencePicBlock>
        <AudiencePic src={Pic1} alt="Pic1" width={502} height={629} />
        <AudienceDetailsBlock>
          <AudienceDetailsPic src={Pic2} alt="Pic2" />
          <AudiencePicTitle>What we believe in</AudiencePicTitle>
          <AudiencePicText>
            Over the years at Sans, we’ve put a lot of thought into what it is that makes us who we
            are. The qualities that unite us, that make us such an effective team, and...
          </AudiencePicText>
          <Button theme="light">See Details →</Button>
        </AudienceDetailsBlock>
        <AudiencePic src={Pic3} alt="Pic3" width={252} height={460} />
      </AudiencePicBlock>
      <BackgroundTopBlur src={TopBlur} alt="Blur" />
    </AudienceWrap>
  );
};

export default Audience;
