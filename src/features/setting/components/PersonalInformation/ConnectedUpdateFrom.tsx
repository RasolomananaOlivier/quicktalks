import { IPersonalInformationValues } from "../../../../types";
import PersonalForm from "./PersonalForm";
import User from "../../../../services/api/User";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { userSelector } from "../../../../redux/selectors/userSelector";
import { setUser } from "../../../../redux/reducers/userSlice";

const ConnectedPersonalForm = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: IPersonalInformationValues) => {
    const { data } = await User.updatePersonalInformation(user._id!, values);
    dispatch(setUser(data));
  };
  return <PersonalForm handleSubmit={handleSubmit} />;
};

export default ConnectedPersonalForm;
