import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const StyledMainDivForm = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  border-radius: 1rem;
  background: #fff;
`;

const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  `
  const StyledFieldDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  font-size: 1rem;
  line-height: 150%;
`
const StyledLabel = styled.label`
  color: ${COLORS.primaryTextColor};
  font-size: 1rem;
  `
  
  const StyledInputTextField = styled.input`
  display: flex;
  width: 100%;
  align-self: stretch;
  padding: 12px 24px;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${({ $hasError }) => ($hasError ? COLORS.wrongState : COLORS.defaultState)};
  font-size: 1.125rem
  color: ${COLORS.primaryTextColor}

 &:focus {
  border-color: ${COLORS.selectedState};
  outline: none; 
}
`
const StyledInputRadioDiv = styled.div`
  display: flex;
  width: 100%;
  align-self: stretch;
  padding: 12px;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${({ $hasError }) => ($hasError ? COLORS.wrongState : COLORS.defaultState)};

  &:checked + label{
  background: ${COLORS.selectedRadio}
 }
`
const StyledRadio = styled.input`
 width: 24px;
 height: 24px; 
 border: 1px solid ${COLORS.defaultState};
`

const StyledTextAreaBox = styled.textarea`
display: flex;
  width: 100%;
  height: 240px;
  align-self: stretch;
  padding: 12px 24px;
  align-items: flex-start;
  gap: 16px;
  font-size: 1.125rem;
  color: ${COLORS.primaryTextColor};
  border: 1px solid ${({ $hasError }) => ($hasError ? COLORS.wrongState : COLORS.defaultState)};
  border-radius: 8px;
`
const StyledCheckBoxDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  `
  const StyledButton = styled.button`
  display: flex;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 8px;
  background: ${COLORS.selectedState};
  color: #fff;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 150%;
  border: none;

  &:hover{
  background: #0C7D69;
  }
`

export { StyledMainDivForm, StyledFormContainer, StyledFieldDiv,StyledLabel, StyledInputTextField, StyledInputRadioDiv, StyledRadio,StyledTextAreaBox,StyledCheckBoxDiv, StyledButton }