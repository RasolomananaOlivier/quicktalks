import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginValues } from "./types";
import LoginForm from "./components/LoginForm";
import { Login } from "../../services/login";
import { useAppDispatch } from "../../hooks/redux";
import { setUser } from "../../redux/reducers/userSlice";

export const ConnectedLoginForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: ILoginValues) => {
    const { data, token } = await Login(values);

    dispatch(
      setUser({
        email: data.email.address,
        lastname: data.lastname,
        firstname: data.firstname,
        password: data.password,
      })
    );
  };
  return <LoginForm handleSubmit={handleSubmit} />;
};
