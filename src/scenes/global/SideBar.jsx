import { useState } from "react"
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import { tokens } from "../../themes/tonkens";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ProfilePicture from "../../../public/Admin-Pics.jpg"

// eslint-disable-next-line react/prop-types
const Item = ({ title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return (
    <MenuItem
      active={selected === title}
      style={{color: colors.grey[200],}}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to}/>}
    >
      <Typography variant="h7">{title}</Typography>
    </MenuItem>
  )
}

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box>
      <Sidebar 
        collapsed={isCollapsed}
        rootStyles={{
          borderRight: "0",
          position: "relative",
          height: "100%",
        }}
        backgroundColor={`${colors.primary[800]}`}
      >
        <Menu 
          iconShape="square" 
          menuItemStyles={{
            button: ({ level, active, disabled,}) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled ? '#f5d9ff' : '#d359ff',
                  backgroundColor: active ? `${colors.primary[400]}` : undefined,
                  borderRadius: isCollapsed ? "0%" : "50px 0 0 50px",
                  "&:hover": {
                    backgroundColor: active ? `${colors.primary[400]}` : "transparent",
                  }
                };
            },
          }}
          >
          {/* Logo and Menu icon items*/}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
            style={{
              margin: "0 0 20px 0",
              color: colors.grey[100],
              borderRadius: "0",
              width: "100%",
              height: "60px",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                
                >
                  <Typography variant="h5" color={colors.grey[100]}>
                    JMM-ADMIN
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon/>
                  </IconButton>
              </Box>
            )}
          </MenuItem>
            
            {!isCollapsed && (
              <Box mb='25px'>
                <Box display="flex" justifyContent="center" alignItems="center">
                  {/* Admin Profile picture */}
                  <img
                    src={ProfilePicture}
                    alt="admin-avatar"
                    width="100px"
                    height="100px"
                    style={{cursor: "pointer", borderRadius: "50%"}}
                  />
                </Box>

                {/* Admin name and designation */}
                <Box textAlign="center">
                  <Typography
                    variant="h5"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 5px 0" }}
                  >
                    Olumide Michael
                  </Typography>
                  <Typography 
                    variant="h6" 
                    color={colors.blueAccent[500]} 
                    fontWeight={600}
                  >
                    Chief Admin
                  </Typography>
                </Box>
              </Box>
            )}

            <Box paddingLeft={isCollapsed ? undefined : "5%"}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />

              {/* Data */}
              <Typography 
                variant="h6" 
                color={colors.grey[300]} 
                sx={{m: "15px 0 5px 20px"}}
              >
                Data
              </Typography>
              <Item 
                title="Manage Team"
                to="/team"
                icon={<PeopleOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item 
                title="Contact Information"
                to="/contact"
                icon={<ContactsOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item 
                title="Invoices"
                to="/invoices"
                icon={<ReceiptOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />

              {/* Pages */}
              <Typography 
                variant="h6" 
                color={colors.grey[300]} 
                sx={{m: "15px 0 5px 20px"}}
              >
                Pages  
              </Typography>
              <Item 
                title="Profile Form"
                to="/form"
                icon={<PersonOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item 
                title="Calendar"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item 
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />

              {/* Charts */}
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px"}}
              >
                Charts
              </Typography>
              <Item 
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item 
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item 
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item 
                title="Tree Map"
                to="/treemap"
                icon={<AccountTreeOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Item 
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default SideBar