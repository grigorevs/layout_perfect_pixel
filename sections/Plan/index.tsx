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
} from './index.styles';
import Image from 'next/image';
import StarterIcon from '../../public/images/pricing/HeartIcon.svg';
import PopularIcon from '../../public/images/pricing/TopIcon.svg';
import EnterpriseIcon from '../../public/images/pricing/PremiumIcon.svg';

import ListItem from '@/components/ListItem';

type PlanType = 'starter' | 'popular' | 'enterprice';

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('popular');

  return (
    <PlansContainer>
      <PlanCard onClick={() => setSelectedPlan('starter')} $isSelected={selectedPlan === 'starter'}>
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

      <PlanCard onClick={() => setSelectedPlan('popular')} $isSelected={selectedPlan === 'popular'}>
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
  );
};

export default Plans;
