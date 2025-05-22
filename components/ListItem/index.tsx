import Image from 'next/image';
import Check from '@/public/images/pricing/Check.svg';
import CheckDisabled from '@/public/images/pricing/CheckDisabled.svg';
import { ListItemWrap, ListItemText } from './index.styles';

type ListItemProps = {
  text: string;
  isDisabled: boolean;
};

const ListItem = ({ text, isDisabled }: ListItemProps) => {
  return (
    <ListItemWrap>
      <Image src={isDisabled ? CheckDisabled : Check} alt="Check " />
      <ListItemText disabledStyle={isDisabled}>{text}</ListItemText>
    </ListItemWrap>
  );
};

export default ListItem;
