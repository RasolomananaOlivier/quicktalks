import {
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useContext, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useRegistration } from "../../hooks/useRegistration";
import { Register } from "../../../../services/api/register";
import { UserRegistrationContext } from "../../context/userRegistrationContext";
import FirebaseStorage from "../../../../services/api/firebaseStorage";

export default function UploadImageForm() {
  // STATE FOR SELECTED FILES
  const [selectedFiles, setselectedFiles] = useState<
    string | ArrayBuffer | undefined
  >(undefined);
  const [file, setfile] = useState<File>();

  const inputRef = useRef(null);

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    const files = e.target.files;
    if (files && files[0]) {
      reader.readAsDataURL(files[0]);
      setfile(files[0]);
    }
    reader.onload = (readerEvent) => {
      if (readerEvent.target && readerEvent.target.result !== null) {
        setselectedFiles(readerEvent.target.result);
      }
    };
  };

  const { user } = useContext(UserRegistrationContext);
  const formik = useFormik({
    initialValues: {
      bio: "",
    },
    onSubmit: async (values) => {
      if (user && file) {
        const url = await FirebaseStorage.uploadImage(file);

        const userWithUrl = { ...user, avatarUrl: url };
        const res = await Register(userWithUrl);

        console.log(res);
      }
    },
  });

  return (
    <motion.div
      // variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Stack>
        <Box sx={{ my: 4 }}>
          <Typography variant="body2">Step 3/3</Typography>
          <Typography variant="h4">Avatar and Biography</Typography>
        </Box>
        <Grid
          container
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ pr: { xs: 0, lg: 2 }, mb: { xs: 3, lg: 5 } }}
          >
            <TextField
              label="Bio"
              placeholder="Tell about yourself"
              multiline
              rows={5}
              fullWidth
              value={formik.values.bio}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid
            item
            lg={12}
            sx={{ pr: 2, mb: 5, display: "flex", justifyContent: "flex-start" }}
          >
            <Avatar
              // @ts-ignore
              src={selectedFiles}
              alt="user pdp"
              style={{ height: 80, width: 80 }}
            />
            <Box sx={{ mx: 2, pt: 1 }}>
              <Button
                variant="contained"
                component="label"
                // @ts-ignore
                onClick={() => inputRef.current.click()}
              >
                Choose an avatar
              </Button>
              <input
                accept="image/*"
                hidden
                id="raised-button-file"
                type="file"
                onChange={addImage}
                ref={inputRef}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              pr: 2,
              mb: 5,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button variant="contained" href="/login" hidden>
              Back to sign in
            </Button>
            <Button variant="contained" type="submit">
              Completed
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </motion.div>
  );
}
