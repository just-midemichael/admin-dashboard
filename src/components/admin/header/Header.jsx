import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../../../themes/tonkens"

// eslint-disable-next-line react/prop-types
const Header = ({title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <Box m="0 0 30px 0">
        <Typography 
            variant="h3" 
            color={colors.grey[100]} 
            fontWeight={700} 
            sx={{ m: "0 0 5px 0"}}
        >
            {title}
        </Typography>
        <Typography 
            variant="h5" 
            color={colors.blueAccent[500]}
        >
            {subtitle}
        </Typography>
    </Box>
  )
}

export default Header