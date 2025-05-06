'use client';

import {
  ServicesContentBlock,
  ServicesContentBlockItem,
  ServicesContentText,
  ServicesContentTextBlock,
  ServicesContentTitle,
  ServicesImage,
  ServicesText,
  ServicesTextBlock,
  ServicesTitle,
  ServicesWrap,
} from './index.styles';
import Image1 from '@/public/images/home/Frame1.png';
import Image2 from '@/public/images/home/Frame2.png';
import Image3 from '@/public/images/home/Frame3.png';
import Image4 from '@/public/images/home/Frame4.png';

const Services = () => {
  return (
    <ServicesWrap>
      <ServicesTextBlock>
        <ServicesTitle>Advertise, analyze, and optimize! We do it all for you</ServicesTitle>
        <ServicesText>
          Build more meaningful and lasting relationships - better understand their needs, identify
          new opportunities to help address any problems faster
        </ServicesText>
      </ServicesTextBlock>
      <>
        <ServicesContentBlock>
          <ServicesContentBlockItem>
            <ServicesImage src={Image1} alt="Image1" />
            <ServicesContentTextBlock>
              <ServicesContentTitle>Lead happiness for customers</ServicesContentTitle>
              <ServicesContentText>
                Build more meaningful and lasting relationships - better understand their needs,
                identify new opportunities to help address any problems faster
              </ServicesContentText>
            </ServicesContentTextBlock>
          </ServicesContentBlockItem>
          <ServicesContentBlockItem>
            <ServicesImage src={Image2} alt="Image2" />
            <ServicesContentTextBlock>
              <ServicesContentTitle>Mutually support each other</ServicesContentTitle>
              <ServicesContentText>
                Build more meaningful and lasting relationships - better understand their needs,
                identify new opportunities to help address any problems faster
              </ServicesContentText>
            </ServicesContentTextBlock>
          </ServicesContentBlockItem>
          <ServicesContentBlockItem>
            <ServicesImage src={Image3} alt="Image3" />
            <ServicesContentTextBlock>
              <ServicesContentTitle>Have fun growing together</ServicesContentTitle>
              <ServicesContentText>
                Build more meaningful and lasting relationships - better understand their needs,
                identify new opportunities to help address any problems faster
              </ServicesContentText>
            </ServicesContentTextBlock>
          </ServicesContentBlockItem>
          <ServicesContentBlockItem>
            <ServicesImage src={Image4} alt="Image4" />
            <ServicesContentTextBlock>
              <ServicesContentTitle>Make Your Business Grow</ServicesContentTitle>
              <ServicesContentText>
                Build more meaningful and lasting relationships - better understand their needs,
                identify new opportunities to help address any problems faster
              </ServicesContentText>
            </ServicesContentTextBlock>
          </ServicesContentBlockItem>
        </ServicesContentBlock>
      </>
    </ServicesWrap>
  );
};

export default Services;
