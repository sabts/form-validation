import { useForm } from "react-hook-form";
import { FORM_VALIDATION } from "../../constants/form_validation";

const Form = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*Input de nombre*/}
      <div>
        <label htmlFor="name">First Name*</label>
        <input
          type="text"
          id="name"
          {...register("name", FORM_VALIDATION.NAME)} 
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
   {/*Input de apellido*/}
   <div>
        <label htmlFor="lastname">Last Name*</label>
        <input
          type="text"
          id="lastname"
          {...register("name", FORM_VALIDATION.LASTNAME)} 
        />
        {errors.lastname && <p>{errors.lastname.message}</p>}
      </div>

 {/*Input de email*/}
 <div>
        <label htmlFor="email">Email Address*</label>
        <input
          type="text"
          id="email"
          {...register("email", FORM_VALIDATION.EMAIL)} 
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

 {/*Input de Query Type*/}
 <div>
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
      </div>
 {/*Input de mensaje*/}
 <div>
        <label htmlFor="message">Message*</label>
        <input
        type="text"
          id="message"
          {...register("message", FORM_VALIDATION.MESSAGE)}
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>
      
 {/* Checkbox: Consent */}
 <div>
        <label>
          <input
            type="checkbox"
            {...register("consentCheckBox", FORM_VALIDATION.CONSENTCHECKBOX)} 
          />
         I consent to being contacted by the team *
        </label>
        {errors.consentCheckBox && <p>{errors.consentCheckBox.message}</p>}
      </div>

      <button type="submit">Submit</button>
</form>
    </>
  );
};

export default Form