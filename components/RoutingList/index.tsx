import { useRouter } from 'next/navigation';
import { StyledList, StyledListItem } from './index.styles';

const RoutingList = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <StyledList>
      <StyledListItem onClick={() => navigateTo('/')}>Home</StyledListItem>
      <StyledListItem onClick={() => navigateTo('/about')}>About</StyledListItem>
      <StyledListItem>Blog</StyledListItem>
      <StyledListItem onClick={() => navigateTo('/pricing')}>Pricing</StyledListItem>
    </StyledList>
  );
};

export default RoutingList;
