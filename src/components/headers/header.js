import {AppBar, Box} from "@mui/material";
import DesktopHeader from "./nav-bar/desktop-header";
import MobileHeader from "./nav-bar/mobile-header";
import DesktopTobNavBar from "./top-navbar/desktop/desktop-tob-nav-bar";
import MobileTobNavBar from "./top-navbar/mobile/mobile-top-nav-bar";

const Header = () => {
    return (
        <AppBar
            square={true}
            position="sticky"
            variant="elevation"
            elevation={0}
            sx={{
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderBottomColor: 'divider'
            }}>
            <Box sx={{display: {xs: 'none', lg: 'block'}}}>
                <DesktopTobNavBar />
                <DesktopHeader/>
            </Box>
            <Box sx={{display: {xs: 'block', lg: 'none'}}}>
                <MobileTobNavBar />
                <MobileHeader/>
            </Box>
        </AppBar>
    )
}

export default Header;
