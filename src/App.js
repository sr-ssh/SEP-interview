import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./reducer/store";
import theme from "./utils/theme";
import Header from "./components/Header";
// import Products from "./containers/products/Products";
import { useMediaQuery } from "@mui/material";
import Vitrin from "./containers/Vitrin";

function App() {
    const isMobile = useMediaQuery("(max-width:480px)");

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div
                        style={{
                            width: isMobile ? "100%" : "480px",
                        }}
                    >
                        <Vitrin />
                        {/* <Products /> */}
                    </div>
                </ThemeProvider>
            </Provider>
        </div>
    );
}

export default App;
