import { useForm } from "react-hook-form";
import { FORM_VALIDATION } from "../../constants/form_validation";
import { StyledButton, StyledCheckbox, StyledCheckBoxDiv, StyledFieldDiv, StyledFormContainer, StyledInputRadioDiv, StyledInputTextField, StyledLabel, StyledMainDivForm, StyledRadio, StyledRadioLabel, StyledTextAreaBox } from "./styles-form";

const Form = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <StyledMainDivForm>
      <h1>Contact Us</h1>
      <StyledFormContainer onSubmit={handleSubmit(onSubmit)}>

        {/*Input de nombre*/}
        <StyledFieldDiv>
          <StyledLabel htmlFor="name">First Name *</StyledLabel>
          <StyledInputTextField
          type="text"
          id="name"
          $hasError={errors.name}
          {...register("name", FORM_VALIDATION.NAME)}  />
        {errors.name && <p>{errors.name.message}</p>}
        </StyledFieldDiv>
   {/*Input de apellido*/}
   <StyledFieldDiv>
          <StyledLabel htmlFor="lastname">Last Name *</StyledLabel>
          <StyledInputTextField
          type="text"
          id="lastname"
          $hasError={errors.name}
          {...register("name", FORM_VALIDATION.LASTNAME)} 
        />
        {errors.lastname && <p>{errors.lastname.message}</p>}
        </StyledFieldDiv>

 {/*Input de email*/}
 <StyledFieldDiv>
        <StyledLabel htmlFor="email">Email Address *</StyledLabel>
        <StyledInputTextField
          type="text"
          id="email"
          $hasError={errors.name}
          {...register("email", FORM_VALIDATION.EMAIL)} 
        />
        {errors.email && <p>{errors.email.message}</p>}
        </StyledFieldDiv>

 {/*Input de Query Type*/}
 <StyledFieldDiv>
        <StyledLabel>Query Type *</StyledLabel>
        <StyledInputRadioDiv>
          <StyledRadioLabel>
            <StyledRadio
              type="radio"
              value="general"
              {...register("queryType", FORM_VALIDATION.QUERYTYPE)}
            />
            General Enquiry
            </StyledRadioLabel>
          </StyledInputRadioDiv>
          <StyledInputRadioDiv>
          <StyledRadioLabel>
            <input
              type="radio"
              value="support"
              {...register("queryType", FORM_VALIDATION.QUERYTYPE)} 
            />
            Support Request
            </StyledRadioLabel>
          </StyledInputRadioDiv>
        {errors.queryType && <p>{errors.queryType.message}</p>}
        </StyledFieldDiv>

 {/*Input de mensaje*/}
 <StyledFieldDiv>
        <StyledLabel  htmlFor="message">Message *</StyledLabel>
        <StyledTextAreaBox
        type="text"
          id="message"
          $hasError={errors.name}
          {...register("message", FORM_VALIDATION.MESSAGE)}
        />
        {errors.message && <p>{errors.message.message}</p>}
        </StyledFieldDiv>
      
 {/* Checkbox: Consent */}
  <StyledCheckBoxDiv>
    <StyledCheckbox
            type="checkbox"
            $hasError={errors.name}
            {...register("consentCheckBox", FORM_VALIDATION.CONSENTCHECKBOX)} 
          />
             <StyledLabel> I consent to being contacted by the team *</StyledLabel>
        </StyledCheckBoxDiv>
        {errors.consentCheckBox && <p>{errors.consentCheckBox.message}</p>}

      <StyledButton type="submit">Submit</StyledButton>

   </StyledFormContainer>
</StyledMainDivForm>
  );
};

export default Form