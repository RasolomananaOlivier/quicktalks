import { CameraAlt, Send } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { ChatRoomContext } from ".";
import { SocketContext } from "../../../../context/socketContext";
import { useAppSelector } from "../../../../hooks/redux";
import { currentMessageSelector } from "../../../../redux/selectors/currentMessageSelector";
import { userSelector } from "../../../../redux/selectors/userSelector";
import FirebaseStorage from "../../../../services/api/firebaseStorage";
import MessageEvents from "../../../../services/events/message";
import { IMessagePayload } from "../../../../types";

interface ChatRoomFooterProps {}

interface PreviewImageProps {
  file: File | undefined;
  show: boolean;
  closePreviewImage: () => void;
  handleImageSender: () => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 5,
};

const PreviewImage: React.FC<PreviewImageProps> = ({
  file,
  show = false,
  closePreviewImage,
  handleImageSender,
}) => {
  return (
    <Modal open={show} onClose={closePreviewImage} aria-describedby="modal-box">
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <img
            src={file ? URL.createObjectURL(file) : ""}
            alt="thumb"
            width={"100%"}
            height={250}
          />
        </Box>
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
    </Modal>
  );
};

const Footer: React.FC<ChatRoomFooterProps> = () => {
  const [value, setValue] = useState("");
  const [file, setfile] = useState<File>();
  const [show, setShow] = useState(false);

  const { footerHeight } = useContext(ChatRoomContext);
  if (!footerHeight) {
    throw new Error("ChatRoomContext required");
  }

  const currentMessage = useAppSelector(currentMessageSelector);
  const user = useAppSelector(userSelector);
  const socket = useContext(SocketContext);
  const handleSendMessage = async () => {
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
    } else {
      if (file) {
        console.log(file);

        const imageUrl = await FirebaseStorage.uploadImage(file, "images");

        const messagePayload: IMessagePayload = {
          messageId: currentMessage._id,
          messageItem: {
            auth: user._id!,
            authorizedUser: currentMessage.authorizedUser,
            timeStamp: "2023-01-01",
            type: "image",
            imageUrl,
          },
        };
        console.log(messagePayload);

        MessageEvents.emit(socket, messagePayload);
      }
    }

    resetState();
  };

  const resetState = () => {
    setValue("");
    setfile(undefined);
    setShow(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const closePreviewImage = () => setShow(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setfile(files[0]);
      setShow(true);
    }
  };
  return (
    <>
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
              handleSendMessage();
              setValue("");
            }
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{
              pl: 1.5,
            }}
            onClick={() => {
              if (inputRef.current !== null) inputRef.current.click();
            }}
          >
            <CameraAlt />
            <input
              ref={inputRef}
              id="fileupload"
              accept="image/*"
              type="file"
              onChange={handleImageChange}
              hidden
            />
          </IconButton>
          <PreviewImage
            show={show}
            file={file}
            closePreviewImage={closePreviewImage}
            handleImageSender={handleSendMessage}
          />
        </Box>{" "}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{
              pl: 1.5,
              pr: 2,
            }}
            onClick={handleSendMessage}
          >
            <Send />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
