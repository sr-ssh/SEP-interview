import * as React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Header from "../components/Header";
import Poster from "../components/Poster";
import RecentMovies from "./RecentMovies";

export default function Vitrin() {
    return (
        <Grid2 container flexDirection="column" gap={7} sx={{ px: 4 }}>
            <Header />
            <Poster />
            <RecentMovies />
        </Grid2>
    );
}
