import { StaticImageData } from 'next/image';

export interface Data {
  image: string | StaticImageData;
  title: string;
  text: string;
}
