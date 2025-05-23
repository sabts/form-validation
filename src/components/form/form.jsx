import { useForm } from "react-hook-form";
import { FORM_VALIDATION } from "../../constants/form_validation";
import {
  StyledButton,
  StyledCheckbox,
  StyledCheckBoxDiv,
  StyledFieldDiv,
  StyledFormContainer,
  StyledInputRadioDiv,
  StyledInputTextField,
  StyledLabel,
  StyledMainDivForm,
  StyledRadio,
  StyledTextAreaBox,
} from "./styles-form";

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
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
            {...register("name", FORM_VALIDATION.NAME)}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </StyledFieldDiv>
        {/*Input de apellido*/}
        <StyledFieldDiv>
          <StyledLabel htmlFor="lastname">Last Name *</StyledLabel>
          <StyledInputTextField
            type="text"
            id="lastname"
            $hasError={errors.lastname}
            {...register("lastname", FORM_VALIDATION.LASTNAME)}
          />
          {errors.lastname && <p>{errors.lastname.message}</p>}
        </StyledFieldDiv>

        {/*Input de email*/}
        <StyledFieldDiv>
          <StyledLabel htmlFor="email">Email Address *</StyledLabel>
          <StyledInputTextField
            type="text"
            id="email"
            $hasError={errors.email}
            {...register("email", FORM_VALIDATION.EMAIL)}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </StyledFieldDiv>

        {/*Input de Query Type*/}
        <StyledFieldDiv>
          <StyledLabel>Query Type *</StyledLabel>
          <StyledInputRadioDiv>
            <label>
              <StyledRadio
                type="radio"
                value="general"
                {...register("queryType", FORM_VALIDATION.QUERYTYPE)}
              />
              General Enquiry
            </label>
          </StyledInputRadioDiv>
          <StyledInputRadioDiv>
            <label>
              <StyledRadio
                type="radio"
                value="support"
                {...register("queryType", FORM_VALIDATION.QUERYTYPE)}
              />
              Support Request
            </label>
          </StyledInputRadioDiv>
          {errors.queryType && <p>{errors.queryType.message}</p>}
        </StyledFieldDiv>

        {/*Input de mensaje*/}
        <StyledFieldDiv>
          <StyledLabel htmlFor="message">Message *</StyledLabel>
          <StyledTextAreaBox
            type="text"
            id="message"
            $hasError={errors.message}
            {...register("message", FORM_VALIDATION.MESSAGE)}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </StyledFieldDiv>

        {/* Checkbox: Consent */}
        <StyledCheckBoxDiv>
          <StyledCheckbox
            type="checkbox"
            $hasError={errors.consentCheckBox}
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

export default Form;
