import {Box, Divider, SwipeableDrawer} from "@mui/material";
import Header from "../headers/header";
import SidebarContent from "../sidebar/sidebar-content";
import {useDispatch, useSelector} from "react-redux";
import {closeDrawer, openDrawer, selectUI} from "../../redux/features/ui/ui-slice";
import Footer from "../footer/footer";
import {motion} from "framer-motion";


const Layout = ({children}) => {

    const {drawerOpen} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box
            component={motion.div}
            initial={{
                opacity: 0, y: 10
            }}
            animate={{
                opacity: 1, y: 0, transition: {duration: 0.5}
            }}
            exit={{opacity: 0, transition: {duration: 1}}}
            variants={{visible: {transition: {staggerChildren: 0.3}}}}
            sx={{
                backgroundColor: 'background.default',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}>
            <Box>
                <Header/>
            </Box>
            <Box sx={{maxWidth: '100vw', flex: 1, pb: {xs: 6, md: 0}}}>
                {children}
            </Box>
            <Box>
                <Divider light={true} variant="fullWidth"/>
                <Footer/>
            </Box>

            <SwipeableDrawer
                anchor="left"
                onOpen={() => dispatch(openDrawer())}
                open={drawerOpen}
                onClose={() => dispatch(closeDrawer())}>
                <SidebarContent/>
            </SwipeableDrawer>
        </Box>
    )
}

export default Layout;
