import { Controls, Player } from "@lottiefiles/react-lottie-player";
import chatOutlined from "./json/chat-outline.json";

export const ChatAnimatedIcon = () => {
  return (
    <Player
      autoplay
      loop={false}
      src={chatOutlined}
      hover
      style={{ height: "28px", width: "28px" }}
    >
      <Controls visible={false} buttons={["play"]} />
    </Player>
  );
};
