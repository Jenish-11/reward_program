import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { UserContext } from "../../App";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import ImageCommon from "../ImageComponents/ImageCommon";
import { useDispatch, useSelector } from "react-redux";
import { getSchedulePost } from "../../redux/services/postService";
import PostImage from "../rewardprogram/feedComponents/PostImage";
import ClearIcon from "@mui/icons-material/Clear";
export default function SchedulePopup() {
  const dispatch = useDispatch();
  const { getspost } = useSelector((state) => ({
    getspost: state.postSlice.getSchedulePost?.data,
  }));
  const { schdulePop, setSchedulePop } = React.useContext(UserContext);
  const [value, setValue] = React.useState("all");

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (e, v) => {
    try {
      setValue(v);
    } catch (error) {}
  };

  let schedPost = () =>
    getspost?.map((item, i) => {
      if (value == "appreciation") {
        if (item?.appreciated) return <PostImage data={item} index={i} schd={true} />;
      }
      if (value == "post") {
        if (!item?.appreciated) return <PostImage data={item} index={i} schd={true}/>;
      }
      if (value == "all") return <PostImage data={item} index={i} schd={true}/>;
    });

  React.useEffect(() => {
    dispatch(getSchedulePost());
  }, [value]);
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={schdulePop}
        onClose={() => setSchedulePop(null)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" position={"relative"} className="flex-column" gap={2}>
          Scheduled Post
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="#ffff"
            // indicatorColor="secondary"
            aria-label="basic tabs example"
          >
            <Tab
              sx={{ textTransform: "unset !important", fontSize: "20px" }}
              value={"all"}
              label="All"
            />
            <Tab
              sx={{
                textTransform: "unset !important",
                fontSize: "20px",
                mx: 3,
              }}
              label="Post"
              value={"post"}
            />
            <Tab
              sx={{ textTransform: "unset !important", fontSize: "20px" }}
              value="appreciation"
              label={"Appreciation"}
            />
          </Tabs>
          <Button
            className="cancel"
            endIcon={<ClearIcon fontSize="10px" />}
            onClick={() => setSchedulePop(null)}
          >
            cancel
          </Button>
        </DialogTitle>
        <DialogContent>
          <Box
            className="flex-column"
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            gap={2}
          >
           {schedPost()}
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
