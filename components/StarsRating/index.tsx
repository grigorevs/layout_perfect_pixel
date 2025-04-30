import Image from 'next/image';
import Star from '@/public/images/home/Star.svg';
import { StarsWrap } from './index.styles';

const StarRating = ({ rate }: { rate: string }) => {
  const numFullStars = Math.floor(Number(rate));

  const stars = [];
  for (let i = 0; i < numFullStars; i++) {
    stars.push(<Image src={Star} alt="Star" key={i} />);
  }

  return <StarsWrap>{stars}</StarsWrap>;
};

export default StarRating;
