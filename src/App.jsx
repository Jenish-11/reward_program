import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./layout/Layout";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import Summary from "./pages/reward_program/summary/Summary";
import Feed from "./pages/reward_program/feed/Feed";
import Details from "./pages/reward_program/details/details";
import RewardProgram from "./pages/reward_program/RewardProgram";
import CreatePost from "./components/popup/CreatePost";
import DeletePopuUp from "./components/popup/DeletePopup";
import PinedPostPop from "./components/popup/PinedPost";
import SchedulePopup from "./components/popup/SchdulePopup";
export const UserContext = createContext();
function App() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [deletePop, setDeletePop] = useState(false);
  const [pinPop, setPinPop] = useState(false);
  const [schdulePop, setSchedulePop] = useState(false);

  return (
    <UserContext.Provider
      value={{
        open,
        setOpen,
        deletePop,
        setDeletePop,
        setPinPop,
        pinPop,
        toggle,
        setToggle,
        schdulePop,
        setSchedulePop,
      }}
    >
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<></>} />
            <Route path="/reward-program" element={<RewardProgram />}>
              <Route path="/reward-program/summary" element={<Summary />} />
              <Route path="/reward-program/feed" element={<Feed />} />
              <Route path="/reward-program/details" element={<Details />} />
            </Route>
            <Route path="*" element={<center> Page Not Found</center>} />
          </Route>
        </Routes>
      </Router>
      {open && <CreatePost />}
      {deletePop && <DeletePopuUp />}
      {pinPop && <PinedPostPop />}
      {schdulePop && <SchedulePopup />}
    </UserContext.Provider>
  );
}

export default App;
