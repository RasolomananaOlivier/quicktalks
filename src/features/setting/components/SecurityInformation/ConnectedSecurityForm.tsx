import React from "react";
import { INewPasswordValues } from "../../types";
import SecurityForm from "./SecurityForm";
import User from "../../../../services/api/User";
import { useUserSelector } from "../../../../redux/selectors/userSelector";
import { AxiosError } from "axios";

const ConnectedSecurityForm = () => {
  const user = useUserSelector();
  const handleSubmit = async (values: INewPasswordValues) => {
    if (user._id) {
      try {
        await User.updatePassword(user._id, values);

        alert("Password updated");
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response?.status === 422) {
            const err = error.response?.data.error;
            if (err.name === "WrongOldPassword") {
              return {
                oldpassword: err.error,
              };
            }
          }
        }
      }
    }
  };
  return <SecurityForm handleSubmit={handleSubmit} />;
};

export default ConnectedSecurityForm;
