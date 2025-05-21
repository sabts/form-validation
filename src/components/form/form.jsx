import { useForm } from "react-hook-form";

const Form = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          {" "}
          First Name*
          <input
            type="text"
            id="name"
            name="name"
            {...register("name, FORM_VALIDATIONS.NAME")}
          />
        </label>
      </form>
    </>
  );
};
