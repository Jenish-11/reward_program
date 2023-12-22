import { Container, Grid } from "@mui/material";
import React from "react";
import ProfileCard from "../../../components/rewardprogram/feedComponents/ProfileCard";
import PerformerCard from "../../../components/rewardprogram/feedComponents/PerformerCard";
import SharThoughts from "../../../components/rewardprogram/feedComponents/SharThoughts";
import MyFeed from "../../../components/rewardprogram/feedComponents/MyFeed";
import CarosilCard from "../../../components/rewardprogram/feedComponents/CrosilCard";

export default function Feed() {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexDirection: "", gap: 4, mt: 3 }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3} className="flex-column" gap={3}>
            <ProfileCard />
            <PerformerCard />
          </Grid>
          <Grid item xs={12} lg={6}>
            <MyFeed />{" "}
          </Grid>
          <Grid item xs={12} lg={3} className="flex-column" gap={3}>
            <CarosilCard />
            <PerformerCard team={true} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
