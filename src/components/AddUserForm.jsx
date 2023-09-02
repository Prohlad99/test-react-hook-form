import { useForm } from "react-hook-form";

const AddUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      {/* container */}
      <div className="max-w-[300px] border-[1px] border-blue-300 rounded-md flex justify-center p-6 mx-auto">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-left my-2">
            <label htmlFor="name">Username</label>
            <br />
            <input
              className="border-[1px] border-blue-400 py-1 px-3 rounded-md mt-1"
              type="text"
              name="name"
              id="name"
              placeholder="username"
              {...register("name", { required: true })}
            />
            <small className="text-red-600">
              {errors.name && <p>Name is required</p>}
            </small>
          </div>
          <div className="text-left my-2">
            <label htmlFor="email">Email</label>
            <br />
            <input
              {...register("email", { required: true })}
              className="border-[1px] border-blue-400 py-1 px-3 rounded-md mt-1"
              type="email"
              name="email"
              id="email"
              placeholder="email"
            />
            <small className="text-red-600">
              {errors.name && <p>Email is required</p>}
            </small>
          </div>
          <div className="text-left my-2">
            <label htmlFor="password">Password</label>
            <br />
            <input
              className="border-[1px] border-blue-400 py-1 px-3 rounded-md mt-1"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              {...register("password")}
            />
          </div>
          <div className="text-left my-2">
            <input
              className="border-[1px] border-blue-300 bg-blue-500 rounded-md py-1 px-3 text-center mt-5 w-full cursor-pointer"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
