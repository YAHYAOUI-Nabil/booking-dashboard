import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import bgImage from "../../assets/booking-bg.jpg";
import { useLoginMutation } from "../../app/api/public/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../app/store/authSlice";

const Login = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setError,
  } = useForm({
    defaultValues: { username: "", password: "" },
    resolver: yupResolver(
      yup
        .object()
        .shape({
          username: yup.string().required(),
          password: yup.string().required(),
        })
        .required()
    ),
  });

  const submit = async (values: any) => {
    try {
      const user = await login(values).unwrap();
      dispatch(setCurrentUser(user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="w-screen h-screen bg-cover bg-no-repeat flex justify-center items-center"
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col gap-6 p-6 xl:w-1/4 lg:w-1/3 md:w-1/2 w-5/6 rounded-md mx-auto bg-[#EEEEEE]"
      >
        <div className="relative z-0 w-full group">
          <input
            type="text"
            id="username"
            className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 transition-colors duration-200 delay-0 ease-in-expo peer"
            placeholder=" "
            {...register("username")}
          />
          <label
            htmlFor="username"
            className="absolute peer-focus:font-[500] peer-focus:text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>

        <div className="relative z-0 w-full group">
          <input
            type="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 transition-colors duration-200 delay-0 ease-in-expo peer"
            placeholder=" "
            {...register("password")}
          />
          <label
            htmlFor="password"
            className="absolute peer-focus:font-[500] peer-focus:text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-tr from-purple-600 to-purple-200 p-2 text-white"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
