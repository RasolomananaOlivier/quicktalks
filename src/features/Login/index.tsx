import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginValues } from "./types";
import LoginForm from "./components/LoginForm";
import { useAppDispatch } from "../../hooks/redux";
import { setUser } from "../../redux/reducers/userSlice";
import { saveToken } from "../../utils/saveToken";
import { routes } from "../../data/routes";
import User from "../../services/api/User";

export const ConnectedLoginForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: ILoginValues) => {
    const { data, token } = await User.login(values);

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
  };
  return <LoginForm handleSubmit={handleSubmit} />;
};
