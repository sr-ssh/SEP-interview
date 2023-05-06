import * as React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const paperStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#111113",
    backgroundImage: "none",
};

export default function Poster() {
    return (
        <Paper sx={paperStyle}>
            <Grid2
                container
                flexDirection="column"
                justifyContent="space-between"
                p="30px"
            >
                <Grid2>
                    <Typography variant="subtitle2" color="warning.light">
                        Trending
                    </Typography>
                    <Typography variant="h5" fontWeight={700}>
                        JOKER
                    </Typography>
                </Grid2>
                <Typography variant="subtitle2" color="text.secondary">
                    24 Stories
                </Typography>
            </Grid2>
            <img src="/images/joker.jpg" alt="joker" width={150}/>
        </Paper>
    );
}
