import { Container } from "@mui/material";
import React, { useState } from "react";
import SummaryFilter from "../../../components/rewardprogram/SummaryFilter";
import PointPaper from "../../../components/rewardprogram/PointPaper";
import TimeLine from "../../../components/rewardprogram/TimeLine";

export default function Summary() {
  const [total, setTotal] = useState(0);
  const [balance, setBalnce] = useState(0);
  const [utilized, setUtilized] = useState(0);
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexDirection: "column", gap: 4, mt: 3 }}
      >
        <SummaryFilter
          setTotal={setTotal}
          setBalnce={setBalnce}
          setUtilized={setUtilized}
        />
        <PointPaper total={total} balance={balance} utilized={utilized}/>
        <TimeLine />
      </Container>
    </>
  );
}
