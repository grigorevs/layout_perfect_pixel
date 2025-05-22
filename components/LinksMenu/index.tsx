import RoutingList from '../RoutingList';
import { useRouter } from 'next/navigation';
import { ContactButton } from './index.styles';

const LinksMenu = () => {
  const router = useRouter();
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <RoutingList />
      <ContactButton onClick={() => navigateTo('/contact')}>Contact Us →</ContactButton>
    </>
  );
};

export default LinksMenu;
