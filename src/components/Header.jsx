import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                color="transparent"
                sx={{ boxShadow: "none", pt: 4, px: 0 }}
            >
                <Toolbar
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Typography variant="h4" fontWeight={700}>
                        Welcome
                    </Typography>
                    <IconButton sx={{ p: 0 }}>
                        <Avatar alt="user" src="/images/user.png" />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
