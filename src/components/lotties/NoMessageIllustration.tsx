import Lottie from "lottie-react";
import NoMessage from "./json/no-message.json";

const NoMessageIllustration = () => {
  return (
    <div>
      <Lottie
        animationData={NoMessage}
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
};

export default NoMessageIllustration;
