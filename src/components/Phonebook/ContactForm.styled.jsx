import styled from '@emotion/styled';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 300px;
  margin: 0px auto;
  margin-bottom: 20px;
  padding-top: 80px;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
`;

const StyledInput = styled.input`
  margin-left: 10px;
  padding: 5px;
  outline: none;
  border: none;
  color: black;
  border-bottom: 1px solid #d3d3d3;
`;

const StyledButton = styled.button`
  background: #eee;
  outline: none;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 10px 20px;
  color: black;
  font-weight: 500;
  cursor: pointer;
  transition: all linear 250ms;

  &:hover {
    background-size: cover;
    transform: scale(1.1);
  }
`;

const StyledFormContacts = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 300px;
  margin: 0px auto;
  margin-bottom: 20px;
`;

export {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledFormContacts,
};
