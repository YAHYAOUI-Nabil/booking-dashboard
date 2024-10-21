import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useLoginMutation } from "../../app/api/public/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../app/store/authSlice";
import { useEffect } from "react";
import { useAuth } from "../../app/hooks/useAuth";
import { LoginInput } from "../../app/models/User";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const auth = useAuth();
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    formState: { errors },
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

  const submit = async (values: LoginInput) => {
    try {
      const user = await login(values).unwrap();
      dispatch(setCurrentUser(user));
      navigate("/");
    } catch (error) {
      toast.error("Login failed", {
        position: "top-center",
        duration: 2000,
        style: { border: "4px solid #F92F60", borderRadius: "0px" },
      });
      setError("username", {
        type: "manual",
        message: "Invalid username or password",
      });
      setError("password", {
        type: "manual",
        message: "Invalid username or password",
      });
    }
  };

  useEffect(() => {
    if (auth.user) window.location.href = "/";
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(./assets/auth-image.jpg)` }}
      className="w-screen h-screen bg-cover bg-no-repeat flex justify-center items-center"
    >
      <Toaster />
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col gap-6 p-6 xl:w-1/4 lg:w-1/3 md:w-1/2 w-5/6 rounded-md mx-auto bg-white"
      >
        <div className="relative z-0 w-full group">
          <input
            type="text"
            id="username"
            className={`${
              errors.username ? "border-red-600" : "border-[#2581AF]"
            } block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#16A7A0] transition-colors duration-200 delay-0 ease-in-expo peer`}
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
            className={`${
              errors.password ? "border-red-600" : "border-[#2581AF]"
            } block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#16A7A0] transition-colors duration-200 delay-0 ease-in-expo peer`}
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
            disabled={isLoading}
            className={`w-full rounded-md bg-gradient-to-tr from-[#2581AF] to-[#16A7A0] p-2 text-white ${
              isLoading && "cursor-not-allowed"
            }`}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
