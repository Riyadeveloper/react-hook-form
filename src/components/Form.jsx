import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border border-gray-300 py-3 px-4 rounded-lg block"
          type="text"
          {...register("name", { required: true })}
        />
        {errors.name && <p>This field is required</p>}
        <input
          className="border border-gray-300 py-3 px-4 rounded-lg block"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <input
          className="border border-gray-300 py-3 px-4 rounded-lg block"
          {...register("phone", { required: true })}
        />
        {errors.phone && <span>This field is required</span>}
        <input
          className="border border-gray-300 py-3 px-4 rounded-lg block"
          {...register("course", { required: true })}
        />
        {errors.message && <span>This field is required</span>}
        <input
          className="border border-gray-300 py-3 px-4 rounded-lg block"
          {...register("message")}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
