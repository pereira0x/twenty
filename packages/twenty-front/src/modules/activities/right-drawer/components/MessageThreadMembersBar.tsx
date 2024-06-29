import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { EmailThreadMembersChip } from '@/activities/emails/components/EmailThreadMembersChip';
import { messageThreadState } from '@/ui/layout/right-drawer/states/messageThreadState';

const StyledButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-left: ${({ theme }) => theme.spacing(3)};
`;

export const MessageThreadMembersBar = () => {
  const messageThread = useRecoilValue(messageThreadState);
  return (
    <StyledButtonContainer>
      <EmailThreadMembersChip messageThread={messageThread} />
    </StyledButtonContainer>
  );
};