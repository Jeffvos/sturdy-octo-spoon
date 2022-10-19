import { useState } from "react";
import { ProSidebar, Menu, MenuItem} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from "@mui/material"
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutLinedICon from "@mui/icons-material/HomeOutlined"
import PeopleOutLinedICon from "@mui/icons-material/PeopleOutlined"
import ContactsModeOutLinedICon from "@mui/icons-material/ContactsOutlined"
import ReceiptOutLinedICon from "@mui/icons-material/ReceiptOutlined"
import CalendarTodayOutLinedICon from "@mui/icons-material/CalendarTodayOutlined"
import HelpOutLinedICon from "@mui/icons-material/HelpOutlined"
import BarChartutLinedICon from "@mui/icons-material/BarChartOutlined"
import PieChartOutLinedICon from "@mui/icons-material/PieChartOutlineOutlined"
import MenuOutLinedICon from "@mui/icons-material/MenuOutlined"
import MapOutLinedICon from "@mui/icons-material/MapOutlined"

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected]= useState("Dashboard");
    return (
        <Box
        sx={{
            "& .pro-sidebar-inner":{
                background: `${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper":{
                backgroundColor: "transparent !important"
            },
            
        }}>

        </Box>
    )
}

export default Sidebar;