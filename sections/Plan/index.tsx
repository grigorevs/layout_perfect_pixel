'use client';

import React, { useState } from 'react';
import {
  PlansContainer,
  PlanCard,
  PlansButton,
  PlanCardTitle,
  PlanCardText,
  PriceBlock,
  PriceText,
  PriceTextPeriod,
  ListTitle,
  ListBlock,
  DetailsContainer,
  DetailsMark,
  DetailsTitle,
  DetailsText,
  DetailsToggle,
  BackgroundGreenBlur,
  BackgroundYellowBlur,
} from './index.styles';
import Image from 'next/image';
import StarterIcon from '../../public/images/pricing/HeartIcon.svg';
import PopularIcon from '../../public/images/pricing/TopIcon.svg';
import EnterpriseIcon from '../../public/images/pricing/PremiumIcon.svg';
import ToggleIcon from '../../public/images/pricing/Toggle.svg';
import YellowBlur from '@/public/images/home/Ellipse125.svg';
import GreenBlur from '@/public/images/home/Ellipse124.svg';
import ListItem from '@/components/ListItem';

type PlanType = 'starter' | 'popular' | 'enterprice';

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('popular');

  return (
    <>
      <DetailsContainer>
        <BackgroundYellowBlur src={YellowBlur} alt="Blur" />
        <BackgroundGreenBlur src={GreenBlur} alt="Blur" />
        <DetailsMark>Pricing plans 🤑</DetailsMark>
        <DetailsTitle>Choose a plan for a more advanced business</DetailsTitle>
        <DetailsToggle>
          <Image src={ToggleIcon} alt="ToggleIcon" />
          <DetailsText>Annual pricing (save 20%)</DetailsText>
        </DetailsToggle>
      </DetailsContainer>
      <PlansContainer>
        <PlanCard
          onClick={() => setSelectedPlan('starter')}
          $isSelected={selectedPlan === 'starter'}
        >
          <Image src={StarterIcon} alt="StarterIcon" />
          <PlanCardTitle>Starter</PlanCardTitle>
          <PlanCardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </PlanCardText>
          <PriceBlock>
            <PriceText>$100</PriceText>
            <PriceTextPeriod>/mo</PriceTextPeriod>
          </PriceBlock>
          <ListTitle>What’s included:</ListTitle>
          <ListBlock>
            <ListItem text="Unlimited Upload" isDisabled={false} />
            <ListItem text="Advanced Statistic" isDisabled={false} />
            <ListItem text="Profile Badge" isDisabled={false} />
            <ListItem text="Access to the community" isDisabled={false} />
            <ListItem text="History of all Liked Photos" isDisabled={true} />
            <ListItem text="Directory Listing" isDisabled={true} />
            <ListItem text="Customize Your Profile" isDisabled={true} />
            <ListItem text="Display Your Workshops" isDisabled={true} />
          </ListBlock>
          <PlansButton>Chose Plan</PlansButton>
        </PlanCard>

        <PlanCard
          onClick={() => setSelectedPlan('popular')}
          $isSelected={selectedPlan === 'popular'}
        >
          <Image src={PopularIcon} alt="PopularIcon" />
          <PlanCardTitle>Popular</PlanCardTitle>
          <PlanCardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </PlanCardText>
          <PriceBlock>
            <PriceText>$1400</PriceText>
            <PriceTextPeriod>/mo</PriceTextPeriod>
          </PriceBlock>
          <ListTitle>What’s included:</ListTitle>
          <ListBlock>
            <ListItem text="Unlimited Upload" isDisabled={false} />
            <ListItem text="Advanced Statistic" isDisabled={false} />
            <ListItem text="Profile Badge" isDisabled={false} />
            <ListItem text="Access to the community" isDisabled={false} />
            <ListItem text="History of all Liked Photos" isDisabled={true} />
            <ListItem text="Directory Listing" isDisabled={false} />
            <ListItem text="Customize Your Profile" isDisabled={true} />
            <ListItem text="Display Your Workshops" isDisabled={true} />
          </ListBlock>
          <PlansButton>Chose Plan</PlansButton>
        </PlanCard>

        <PlanCard
          onClick={() => setSelectedPlan('enterprice')}
          $isSelected={selectedPlan === 'enterprice'}
        >
          <Image src={EnterpriseIcon} alt="EnterpriseIcon" />
          <PlanCardTitle>Enterprise</PlanCardTitle>
          <PlanCardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </PlanCardText>
          <PriceBlock>
            <PriceText>$2100</PriceText>
            <PriceTextPeriod>/mo</PriceTextPeriod>
          </PriceBlock>
          <ListTitle>What’s included:</ListTitle>
          <ListBlock>
            <ListItem text="Unlimited Upload" isDisabled={false} />
            <ListItem text="Advanced Statistic" isDisabled={false} />
            <ListItem text="Profile Badge" isDisabled={false} />
            <ListItem text="Access to the community" isDisabled={false} />
            <ListItem text="History of all Liked Photos" isDisabled={false} />
            <ListItem text="Directory Listing" isDisabled={false} />
            <ListItem text="Customize Your Profile" isDisabled={false} />
            <ListItem text="Display Your Workshops" isDisabled={false} />
          </ListBlock>
          <PlansButton>Chose Plan</PlansButton>
        </PlanCard>
      </PlansContainer>
    </>
  );
};

export default Plans;
