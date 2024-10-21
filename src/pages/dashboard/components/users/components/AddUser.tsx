import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateNewUserMutation } from "../../../../../app/api/private/user";
import { RegisterInput } from "../../../../../app/models/User";

interface AddUserProps {
  handleClosePopup: () => void;
}

const AddUser: React.FC<AddUserProps> = ({ handleClosePopup }) => {
  const [createNewUser, { isLoading }] = useCreateNewUserMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "", password: "", fullname: "" },
    resolver: yupResolver(
      yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
        fullname: yup.string().required(),
      })
    ),
  });

  const submit = async (values: RegisterInput) => {
    try {
      await createNewUser(values).unwrap();
      reset({
        username: "",
        password: "",
        fullname: "",
      });
      toast.success("User added successfully", {
        position: "top-center",
        duration: 2000,
        style: {
          border: "4px solid #00D26A",
          borderRadius: "0px",
          zIndex: 9999,
        },
      });
      handleClosePopup();
    } catch (error) {
      toast.error("try again later", {
        position: "top-center",
        duration: 2000,
        style: { border: "4px solid #F92F60", borderRadius: "0px" },
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex justify-center md:rounded-none md:border-none md:shadow-none rounded-md border border-gray-100 shadow-md"
      >
        <div className="flex flex-col gap-4 w-96 min-w-96 px-4 md:py-4 py-2 md:col-span-2 col-span-1 md:rounded-md md:border md:border-gray-100 md:shadow-md">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="fullname">
              Fullname<span className="text-second">*</span>
            </label>
            <input
              className={`focus:outline-none h-10 p-3 text-main bg-gray-100 rounded-md border ${
                errors.fullname ? "border-red-500" : "border-gray-200"
              }`}
              id="fullname"
              type="text"
              {...register("fullname", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="username">
              Username<span className="text-second">*</span>
            </label>
            <input
              className={`focus:outline-none h-10 p-3 text-main bg-gray-100 rounded-md border ${
                errors.username ? "border-red-500" : "border-gray-200"
              }`}
              id="username"
              type="text"
              {...register("username", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="password">
              Password<span className="text-second">*</span>
            </label>
            <input
              className={`focus:outline-none h-10 p-3 text-main bg-gray-100 rounded-md border ${
                errors.password ? "border-red-500" : "border-gray-200"
              }`}
              id="password"
              type="password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex justify-center mt-4">
            <input
              className={`rounded-md w-fit px-6 py-2 font-bold text-white bg-gradient-to-r from-bgFrom to-bgTo ${
                isLoading ? "cursor-not-allowed" : "cursor-pointer"
              } `}
              type="submit"
              value={isLoading ? "loading..." : "Submit"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
