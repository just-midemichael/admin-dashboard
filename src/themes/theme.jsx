import { useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./themeSettings";

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prev) => (prev === "light" ? "dark" : "light"))
        }
    }), []);

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};