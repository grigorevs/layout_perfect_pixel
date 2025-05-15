'use client';

import Button from '@/components/Button';
import {
  FormInput,
  FormInputBlock,
  FormInputs,
  FormLabel,
  FormNameInputBlock,
  FormText,
  FormTextArea,
  FormTitle,
  FormBlock,
  FormWrap,
  FormImage,
} from './index.styles';
import Image from 'next/image';
import Picture from '@/public/images/contact/Image.png';

const Form = () => {
  return (
    <FormWrap>
      <FormBlock>
      <FormTitle>Let’s level up your brand</FormTitle>
      <FormText>
        You can reach us anytime <span>hellosansbrothers@gmail.com</span>
      </FormText>
      <FormInputs>
        <FormNameInputBlock>
          <FormInputBlock>
            <FormLabel>First name</FormLabel>
            <FormInput placeholder="First name" type="text" />
          </FormInputBlock>
          <FormInputBlock>
            <FormLabel>Last name</FormLabel>
            <FormInput placeholder="Last name" type="text" />
          </FormInputBlock>
        </FormNameInputBlock>
        <FormInputBlock>
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="you@company.com" type="email" />
        </FormInputBlock>
        <FormInputBlock>
          <FormLabel>Phone number</FormLabel>
          <FormInput placeholder="+1 (555) 000-0000" type="phone" />
        </FormInputBlock>
        <FormInputBlock>
          <FormLabel>Message</FormLabel>
          <FormTextArea placeholder="Leave us a message..." />
        </FormInputBlock>
      </FormInputs>
      <Button theme="light">Get Started</Button>
    </FormBlock>
    <FormImage src={Picture} alt='Picture'/>
    </FormWrap>
  );
};

export default Form;
