import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginValues } from "./types";
import LoginForm from "./components/LoginForm";
import { Login } from "../../services/login";

export const ConnectedLoginForm: FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: ILoginValues) => {
    const res = await Login(values);
    console.log(res);
  };
  return <LoginForm handleSubmit={handleSubmit} />;
};
