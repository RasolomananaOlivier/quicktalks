import { CameraAlt, Send } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { ChatRoomContext } from ".";
import { SocketContext } from "../../../../context/socketContext";
import { useAppSelector } from "../../../../hooks/redux";
import { currentMessageSelector } from "../../../../redux/selectors/currentMessageSelector";
import { userSelector } from "../../../../redux/selectors/userSelector";
import MessageEvents from "../../../../services/events/message";
import { IMessagePayload } from "../../../../types";

interface ChatRoomFooterProps {}

const Footer: React.FC<ChatRoomFooterProps> = () => {
  const [value, setValue] = useState("");

  const { footerHeight } = useContext(ChatRoomContext);
  if (!footerHeight) {
    throw new Error("ChatRoomContext required");
  }

  const currentMessage = useAppSelector(currentMessageSelector);
  const user = useAppSelector(userSelector);
  const socket = useContext(SocketContext);
  const handleTextSender = () => {
    if (value !== "") {
      const messagePayload: IMessagePayload = {
        messageId: currentMessage._id,
        messageItem: {
          auth: user._id!,
          authorizedUser: currentMessage.authorizedUser,
          timeStamp: "2023-01-01",
          type: "text",
          content: value,
        },
      };

      MessageEvents.emit(socket, messagePayload);
      setValue("");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: "10px 10px 0 0",
        py: 1,
        px: 2,
        width: "95%",
        height: `${footerHeight}px`,
      }}
    >
      <TextField
        id=""
        fullWidth
        placeholder="Type your message"
        multiline
        rows={2}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleTextSender();
            setValue("");
          }
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          sx={{
            pl: 1.5,
          }}
          component="label"
        >
          <CameraAlt />
          <input
            id="fileupload"
            accept="image/*"
            type="file"
            // onChange={imageChange}
            hidden
          />
        </IconButton>
      </Box>{" "}
      {/*   <Modal
        open={showModal}
        onClose={handleCloseModal}
        aria-describedby="modal-box"
      >
        <Box sx={style} id="modal-box">
          {selectedImage && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
              }}
            >
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="thumb"
                width={"100%"}
                height={250}
              />
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button variant="contained" onClick={handleImageSender}>
              Send
            </Button>
          </Box>
        </Box>
      </Modal> */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          sx={{
            pl: 1.5,
            pr: 2,
          }}
          onClick={handleTextSender}
        >
          <Send />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
