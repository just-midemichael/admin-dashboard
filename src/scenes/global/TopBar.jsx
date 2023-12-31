import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../themes/colorModeContext";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { tokens } from "../../themes/tonkens";

const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
  return (
    <Box 
        display='flex' 
        justifyContent='space-between' p={2} pt={1} pb={1}
        position="sticky" top="0"
        backgroundColor={colors.primary[400]}
        zIndex={10}
    >

    {/* create search bar */}
        <Box    
            display="flex" 
            backgroundColor={colors.primary[800]} 
            borderRadius="4px"  
            sx={{ p: 0.25 }}
        >
            <InputBase sx={{ ml: 2, flex: 1}} placeholder="search"/>
            <IconButton type="button" sx={{ p:1 }}>
                <SearchOutlinedIcon />
            </IconButton>
        </Box>

        {/* Icons */}
        <Box display="flex" gap={1}>
            <IconButton onClick={colorMode.toggleColorMode} title="Mode">
                {theme.palette.mode === "dark" 
                ? (<DarkModeOutlinedIcon/>) : (<LightModeOutlinedIcon/>)
                }
            </IconButton>
            <IconButton title="Notification">
                <NotificationsOutlinedIcon/>
            </IconButton>
            <IconButton title="Settings">
                <SettingsOutlinedIcon/>
            </IconButton>
            <IconButton title="User">
                <PersonOutlinedIcon/>
            </IconButton>
        </Box>
    </Box>
  )
}

export default TopBar