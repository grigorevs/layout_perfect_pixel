'use client';

import {
  ContactsBlockWrap,
  ContactsItem,
  ContactsMail,
  ContactsText,
  ContactsTitle,
  MapBlock,
  MapBlockWrap,
  MapsTitle,
  MapWrapper,
} from './index.styles';

const Map = () => {
  return (
    <MapBlockWrap>
      <MapsTitle>Contact our team to find out more</MapsTitle>
      <MapBlock>
        <MapWrapper />
        <ContactsBlockWrap>
          <ContactsItem>
            <ContactsTitle>Support</ContactsTitle>
            <ContactsText>Our friendly team is here to help.</ContactsText>
            <ContactsMail>support@sans.com</ContactsMail>
          </ContactsItem>
          <ContactsItem>
            <ContactsTitle>Sales</ContactsTitle>
            <ContactsText>Questions or queries? Get in touch!</ContactsText>
            <ContactsMail>sales@sans.com</ContactsMail>
          </ContactsItem>
          <ContactsItem>
            <ContactsTitle>Phone</ContactsTitle>
            <ContactsText>Mon-Fri from 8am to 5pm.</ContactsText>
            <ContactsMail>+1 (435) 345-7655</ContactsMail>
          </ContactsItem>
        </ContactsBlockWrap>
      </MapBlock>
    </MapBlockWrap>
  );
};

export default Map;
