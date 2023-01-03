import styled from '@emotion/styled';
import randomColor from 'randomcolor';

const StyledContactsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  max-height: 340px;
  overflow-y: scroll;
  max-width: 340px;
  padding-left: 10px;
`;

const StyledContactsElement = styled.li`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 10px;

  padding: 10px 0px;
  width: 280px;
  text-align: center;
  position: relative;

  transition: transform linear 250ms;

  animation-name: cardDrop;
  animation-iteration-count: 1;
  animation-timing-function: all;
  animation-duration: 1s;
  @keyframes cardDrop {
    0% {
      transform: translateY(-100px);
    }
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const StyledDeleteButton = styled.button`
  outline: none;
  background-color: transparent;
  padding: 5px;
  border: none;
  color: inherit;
  cursor: pointer;
  transition: all linear 250ms;
  margin-left: auto;

  &:hover {
    color: #fd301f;
  }
`;

export const StyledRoundLabel = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${randomColor};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 22px;
  font-weight: 500;
`;

export const StyledContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 170px;
`;

export { StyledContactsList, StyledContactsElement, StyledDeleteButton };
