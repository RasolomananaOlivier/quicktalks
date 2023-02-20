import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginValues } from "./types";
import LoginForm from "./components/LoginForm";
import { useAppDispatch } from "../../hooks/redux";
import { setUser } from "../../redux/reducers/userSlice";
import { saveToken } from "../../utils/saveToken";
import { routes } from "../../data/routes";
import User from "../../services/api/User";
import { Axios, AxiosError } from "axios";

export const ConnectedLoginForm: FC = () => {
  const [loginError, setLoginError] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values: ILoginValues) => {
    try {
      const { token, data } = await User.login(values);

      saveToken(token);
      dispatch(
        setUser({
          _id: data._id,
          email: data.email.address,
          lastname: data.lastname,
          firstname: data.firstname,
          password: data.password,
          friends: data.friends,
          avatarUrl: data.avatarUrl,
        })
      );

      navigate(routes.HOME);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404 || error.response?.status === 400) {
          setLoginError(true);
        }
      }
    }
  };
  return <LoginForm handleSubmit={handleSubmit} loginError={loginError} />;
};
