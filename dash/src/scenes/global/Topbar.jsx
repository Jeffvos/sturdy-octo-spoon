import {Box, IconButton, useTheme} from "@mui/material"
import {useContext, userContext} from "react"
import { ColorModeContext, tokens } from "../../theme"
import InputBase from "@mui/material/InputBase"
import LightModeOutLinedICon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutLinedICon from "@mui/icons-material/DarkModeOutlined"
import NotificationsOutLinedICon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutLinedICon from "@mui/icons-material/SettingsOutlined"
import PersonOutLinedICon from "@mui/icons-material/PersonOutlined"
import SearchIcon from "@mui/icons-material/Search"

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext)
    return (
        <Box display="flex" justifyContent="space-between" padding={2}>
            <Box 
                display="flex" 
                backgroundColor={colors.primary[400]} 
                borderRadius="3px"
                >
                    <InputBase sx={{ml: 2, flex: 1}} placeholder="search" />
                    <IconButton type="button" sx={{p: 1 }}>
                        <SearchIcon />
                    </IconButton>
            </Box>
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ?(
                        <DarkModeOutLinedICon />
                    ): (
                        <LightModeOutLinedICon />
                    )}
                    
                </IconButton>

                <IconButton>
                    <NotificationsOutLinedICon />
                </IconButton>

                <IconButton>
                    <SettingsOutLinedICon />
                </IconButton>

                <IconButton>
                    <PersonOutLinedICon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar;