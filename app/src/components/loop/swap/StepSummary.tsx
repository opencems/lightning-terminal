import React from 'react';
import { usePrefixedTranslation } from 'hooks';
import { useStore } from 'store';
import { Pill } from 'components/common/base';
import { H3Text, HeaderFour, SmallText } from 'components/common/text';
import { styled } from 'components/theme';

const Styled = {
  Wrapper: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 240px;
  `,
  Heading: styled(H3Text)`
    margin-top: 10px;
  `,
  Description: styled(SmallText)`
    opacity: 0.5;
  `,
  Channels: styled.div`
    line-height: 40px;
  `,
};

interface Props {
  title: string;
  heading: string;
  description: string;
}

const StepSummary: React.FC<Props> = ({ title, heading, description }) => {
  const { l } = usePrefixedTranslation('cmps.loop.swap.StepSummary');
  const { buildSwapStore } = useStore();

  const { Wrapper, Heading, Description } = Styled;
  return (
    <Wrapper>
      <div>
        <HeaderFour>{title}</HeaderFour>
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
      </div>
      <div>
        <Pill>{buildSwapStore.selectedChanIds.length}</Pill>
        {l('channelsSelected')}
      </div>
    </Wrapper>
  );
};

export default StepSummary;
