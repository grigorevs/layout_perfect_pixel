import Star from '@/public/images/home/Star.svg';
import { StarsIcon, StarsWrap } from './index.styles';

const StarRating = ({ rate }: { rate: string }) => {
  const numFullStars = Math.floor(Number(rate));

  const stars = [];
  for (let i = 0; i < numFullStars; i++) {
    stars.push(<StarsIcon src={Star} alt="Star" key={i} />);
  }

  return <StarsWrap>{stars}</StarsWrap>;
};

export default StarRating;
