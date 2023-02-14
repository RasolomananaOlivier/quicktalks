import { Socket } from "socket.io-client";
import { IRequest, IUser, IUserServer } from "../../types";
import { setSuggestionsState } from "../../redux/reducers/suggestionSlice";
import { Dispatch } from "../../hooks/redux";
import { setRequestState } from "../../redux/reducers/requestSlice";
import { setUser } from "../../redux/reducers/userSlice";

interface NewRequestArgs {
  destinationId: string;
  originId: string;
}
const emitNewRequest = (socket: Socket, request: NewRequestArgs) => {
  socket.emit("request:new", request);
};

const handleListen = (arg: IRequest[], dispatch: Dispatch) => {
  dispatch(setRequestState(arg));
};

const handleSent = (arg: IUserServer[], dispatch: Dispatch) => {
  dispatch(setSuggestionsState(arg));
};

const handleUserUpdate = (arg: IUserServer, dispatch: Dispatch) => {
  const user: IUser = { ...arg, email: arg.email.address };
  dispatch(setUser(user));
};

const emitAccept = (socket: Socket, requestId: string) => {
  socket.emit("request:accept", requestId);
};

const RequestEvents = {
  emitNewRequest,
  handleSent,
  handleListen,
  handleUserUpdate,
  emitAccept,
};

export default RequestEvents;
