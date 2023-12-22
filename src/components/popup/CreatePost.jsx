import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { UserContext } from "../../App";
import SelectField from "../Fields/SelectField";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  IconButton,
  Paper,
  TextField,
  TextareaAutosize,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ImageCommon from "../ImageComponents/ImageCommon";
import { clock } from "../../helpers/images";
import {
  getEmployee,
  getEmployeeByTeam,
} from "../../redux/services/employeeService";
import { getTeams } from "../../redux/services/teamService";
import { useDispatch, useSelector } from "react-redux";
import { getAwards } from "../../redux/services/rewardService";
import { addPost, addSchedulePost } from "../../redux/services/postService";
import ImageIcon from "@mui/icons-material/Image";
import EmojiPicker from "emoji-picker-react";
import StringField from "../Fields/TextField";
import EmojiPick from "../Fields/EmojiPicker";

export default function CreatePost() {
  const { open, setOpen } = React.useContext(UserContext);
  const dispatch = useDispatch();
  const handleClose = () => setOpen(false);
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      date: dayjs().toString(),
      message: "",
    },
  });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { employee, team, awards } = useSelector((state) => ({
    employee: state.employeeSlice.getEmployee?.data,
    team: state.teamSlice.getTeams?.data,
    awards: state.rewardSlice.getAwards?.data,
  }));
  //Create post
  const handleCreate = async (data) => {
    try {
      console.log(data);
      data.pin=false
      data.created_at = dayjs().toString();
      data.appreciated = open == "ap" ? true : false;
      if (data.time) {
        let res = await dispatch(addSchedulePost(data)).unwrap();
        console.log(res);
      } else {
        delete data?.date;
        let res = await dispatch(addPost(data)).unwrap();
        console.log(res);
      }
      setOpen(null);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = async (e, name) => {
    setValue(name, e.target.value, { shouldValidate: "true" });
    if (name == "teamId") {
      setValue("employeeId", null);
    }
    if (watch("teamId")) {
      await dispatch(getEmployeeByTeam(watch("teamId"))).unwrap();
    }
  };
  // covert image in to data uri
  const convertImage = (file) => {
    try {
      const reader = new FileReader();
      reader.onload = function (event) {
        const dataURL = event.target.result;
        console.log("Data URI:", dataURL);
        setValue("image", dataURL);
      };
      reader.readAsDataURL(file);
    } catch (error) {}
  };
  React.useEffect(() => {
    dispatch(getEmployee());
    dispatch(getTeams());
    dispatch(getAwards());
  }, []);
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {open == "cp" ? "Create Post" : "Appreciation Post"}
        </DialogTitle>
        <DialogContent>
          <form action="" onSubmit={handleSubmit(handleCreate)}>
            <Box className="flex-column" gap={4}>
              <SelectField
                control={control}
                name={"teamId"}
                options={team}
                size={"medium"}
                handleChange={(e) => handleChange(e, "teamId")}
                label={"Team"}
                watch={watch}
              />
              <SelectField
                control={control}
                name={"employeeId"}
                options={employee}
                handleChange={(e) => handleChange(e, "employeeId")}
                size={"medium"}
                label={"Employee"}
                watch={watch}
              />
              <SelectField
                control={control}
                name={"awardId"}
                options={awards}
                handleChange={(e) => handleChange(e, "awardId")}
                size={"medium"}
                label={"Select Award"}
                watch={watch}
              />
              <Box
                className="flex-row"
                gap={4}
                justifyContent={"space-between"}
              >
                {open == "ap" && (
                  <Paper
                    className="flex-column"
                    sx={{
                      background:
                        "linear-gradient(180deg, #0038FF 0%, #728FF4 100%)",
                      textAlign: "center",
                      gap: 2,
                      px: 2,
                      py: 3,
                    }}
                  >
                    <Typography
                      textAlign={"center"}
                      variant="high"
                      color={"white"}
                      fontWeight={500}
                    >
                      Total Available Points
                    </Typography>
                    <Typography
                      textAlign={"center"}
                      variant="high"
                      color={"white"}
                      fontWeight={500}
                    >
                      5000
                    </Typography>
                  </Paper>
                )}
                <Box
                  className={open == "ap" ? "flex-column" : "flex-row"}
                  justifyContent={"space-between"}
                  gap={4}
                >
                  <Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        slotProps={{ textField: { size: "small" } }}
                        onChange={(e, v) => {
                          console.log(dayjs(e).format("DD/MM/YYYY"));
                          setValue("date", dayjs(e).format("DD/MM/YYYY"), {
                            shouldValidate: "true",
                          });
                        }}
                        defaultValue={dayjs()}
                      />
                    </LocalizationProvider>
                  </Box>
                  <Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        label="Select Time"
                        onChange={(e, v) => {
                          console.log(dayjs(e).format("hh/mm/A"));
                          setValue("time", dayjs(e).format("hh:mm:A"), {
                            shouldValidate: "true",
                          });
                        }}
                        defaultValue={dayjs()}
                        slotProps={{
                          textField: { size: "small", sx: { border: "none" } },
                        }}
                      />
                    </LocalizationProvider>
                  </Box>
                </Box>
              </Box>
              <Box border={1} borderColor={"#F1F1F1"} height={"fit-content"}>
                <StringField name={"message"} control={control} />
                <Box className="flex-row">
                  <label
                    style={{ width: "fit-content", height: "fit-content" }}
                  >
                    <input
                      style={{ display: "none" }}
                      id="upload-photo"
                      name="upload-photo"
                      type="file"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          convertImage(e.target.files?.[0]);
                        }
                      }}
                    />
                    <IconButton
                      size="small"
                      component="span"
                      aria-label="add"
                      sx={{ m: 1 }}
                      type="file"
                    >
                      <ImageIcon />
                    </IconButton>
                  </label>
                  <EmojiPick
                    name={"message"}
                    value={watch("message")}
                    setValue={setValue}
                  />
                </Box>
              </Box>

              {watch("image") && (
                <ImageCommon src={watch("image")} aspectRatio={"1"} />
              )}
              <Box className="flex-row" gap={4}>
                <Button
                  //   sx={{ p: 0 }}
                  type="submit"
                  variant=""
                  onClick={() => console.log(errors)}
                >
                  {watch("time") ? "Schedule" : "Publish"}
                </Button>
                <Button
                  //   sx={{ p: 0 }}
                  type="button"
                  variant="no-bg"
                  onClick={() => setOpen(null)}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
