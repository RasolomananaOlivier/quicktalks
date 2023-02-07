import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginValues } from "./types";
import LoginForm from "./components/LoginForm";

export const ConnectedLoginForm: FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: ILoginValues) => {
    console.log("====================================");
    console.log(values);
    console.log("====================================");
  };
  return <LoginForm handleSubmit={handleSubmit} />;
};
