import { useForm } from "react-hook-form";
import { FORM_VALIDATION } from "../../constants/form_validation";
import { StyledFieldDiv, StyledFormContainer, StyledMainDivForm } from "./styles-form";

const Form = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <StyledMainDivForm>
      <h1>Contact Us</h1>
      <StyledFormContainer onSubmit={handleSubmit(onSubmit)}>
        {/*Input de nombre*/}
        <StyledFieldDiv>
        <label htmlFor="name">First Name*</label>
        <input
          type="text"
          id="name"
          {...register("name", FORM_VALIDATION.NAME)} 
        />
        {errors.name && <p>{errors.name.message}</p>}
        </StyledFieldDiv>
   {/*Input de apellido*/}
   <StyledFieldDiv>
        <label htmlFor="lastname">Last Name*</label>
        <input
          type="text"
          id="lastname"
          {...register("name", FORM_VALIDATION.LASTNAME)} 
        />
        {errors.lastname && <p>{errors.lastname.message}</p>}
        </StyledFieldDiv>

 {/*Input de email*/}
 <StyledFieldDiv>
        <label htmlFor="email">Email Address*</label>
        <input
          type="text"
          id="email"
          {...register("email", FORM_VALIDATION.EMAIL)} 
        />
        {errors.email && <p>{errors.email.message}</p>}
        </StyledFieldDiv>

 {/*Input de Query Type*/}
 <StyledFieldDiv>
        <label>Query Type*</label>
        <div>
          <label>
            <input
              type="radio"
              value="general"
              {...register("queryType", FORM_VALIDATION.QUERYTYPE)}
            />
            General Enquiry
          </label>
          </div>
          <div>
          <label>
            <input
              type="radio"
              value="support"
              {...register("queryType", FORM_VALIDATION.QUERYTYPE)} 
            />
            Support Request
          </label>
          </div>
        {errors.queryType && <p>{errors.queryType.message}</p>}
        </StyledFieldDiv>

 {/*Input de mensaje*/}
 <StyledFieldDiv>
        <label htmlFor="message">Message*</label>
        <input
        type="text"
          id="message"
          {...register("message", FORM_VALIDATION.MESSAGE)}
        />
        {errors.message && <p>{errors.message.message}</p>}
        </StyledFieldDiv>
      
 {/* Checkbox: Consent */}
 <div>
        <label>
          <input
            type="checkbox"
            {...register("consentCheckBox", FORM_VALIDATION.CONSENTCHECKBOX)} 
          />
         I consent to being contacted by the team*
        </label>
        {errors.consentCheckBox && <p>{errors.consentCheckBox.message}</p>}
      </div>

      <button type="submit">Submit</button>
   </StyledFormContainer>
</StyledMainDivForm>
  );
};

export default Form