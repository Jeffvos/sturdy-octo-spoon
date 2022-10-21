import { Box, Button, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import TrafficOutlinedIcon from "@mui/icons-material/TrafficOutlined";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/Progress";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              paddding: "10px 20px",
            }}
          >
            <FileDownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifycontent="center"
        >
          <StatBox
            title="343,543"
            subtitle="Sales"
            progress="0.6"
            increase="+21%"
            icon={
              <PointOfSaleOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifycontent="center"
        >
          <StatBox
            title="23,543"
            subtitle="Emails Sent"
            progress="0.80"
            increase="+15%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifycontent="center"
        >
          <StatBox
            title="11,355,543"
            subtitle="Traffic inbound"
            progress="0.43"
            increase="+43%"
            icon={
              <TrafficOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifycontent="center"
        >
          <StatBox
            title="23,543"
            subtitle="New Client"
            progress="0.80"
            increase="+11%"
            icon={
              <PersonAddOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
