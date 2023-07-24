import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
import Header from "../../components/admin/header/Header"
import { DataGrid } from "@mui/x-data-grid"
import { tokens } from "../../themes/tonkens"
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';



export const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [ 
    {field: "id", headerName: "ID", headerAlign: "center", align: "center", headerPosition: "fixed",}, 
    {field: "name", headerName: "NAME", flex: 1, cellClassName: "name-column--cell",},
    {field: "email", headerName: "EMAIL", flex: 1,},
    {field: "age", headerName: "AGE", headerAlign: "center", align: "center",},
    {field: "phone", headerName: "PHONE", flex: 0.5,},
    {field: "access", headerName: "ACCESS TYPE", flex: 0.5,
      renderCell: ({ row: {access}}) => {
        return(
          <Box 
            display="flex" 
            alignItems="center" 
            justifyContent="space-between"
            width="100%"
          >
            <Typography color={colors.primary[100]} title={access}>{access}</Typography>
            <IconButton>
              <EditOutlinedIcon/>
            </IconButton>
          </Box>
        )
      }
    },
    {field: "accessLevel", headerName: "ACCESS LEVEL", 
     headerAlign: "center", align: "center",
      renderCell: ({row: {access}}) => {
        return(
          <Button 
            onClick={() => {
              
            }}
            style={{
              backgroundColor: 
                access === "admin"
                  ? colors.blueAccent[400]
                  : 
                access === "manager"
                  ? colors.blueAccent[600]
                  :
                access === "user"
                  ? colors.blueAccent[800]
                  :
                    colors.redAccent[500]
                  ,
              borderRadius: "5px"
            }}
          >
            {access === "manager" && <SecurityOutlinedIcon/>}
            {access === "admin" && <AdminPanelSettingsIcon/>}
            {access === "user" && <LockOpenOutlinedIcon/>}
          </Button>
        )
      }
    }
  ]

  return (
    <Box>
      <Header title={"Team"} subtitle={"Mange your team"}/>
      <Box>
        <DataGrid 
          checkboxSelection rows={mockDataTeam} 
          columns={columns} 
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  )
}
