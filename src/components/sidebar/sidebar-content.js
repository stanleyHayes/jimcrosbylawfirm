import {Box, Divider, Stack} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {closeDrawer, selectUI} from "../../redux/features/ui/ui-slice";
import SidebarLink from "../shared/sidebar-link";

import {
    Balance,
    BalanceOutlined,
    Close,
    ContactPage,
    ContactPageOutlined,
    Home,
    HomeOutlined,
    Info,
    InfoOutlined,
    Newspaper,
    NewspaperOutlined
} from "@mui/icons-material";
import React from "react";

const SidebarContent = () => {

    const {activePath} = useSelector(selectUI);

    const dispatch = useDispatch();

    return (
        <Box sx={{minHeight: '100vh', minWidth: "80vw", py: 3}}>
            <Stack divider={<Divider variant="fullWidth"/>} direction="column" spacing={2}>
                <Stack sx={{px: 4}} direction="row" alignItems="center" justifyContent="space-between">
                    <Close
                        onClick={() => dispatch(closeDrawer())}
                        sx={{
                            cursor: 'pointer',
                            color: 'secondary.main',
                            borderTopRightRadius: 32,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 32,
                            borderTopLeftRadius: 32,
                            padding: 1,
                            fontSize: 18,
                            backgroundColor: 'light.secondary'
                        }}/>

                </Stack>

                <Stack direction="column">
                    <SidebarLink
                        active={activePath === '/'}
                        label="Home"
                        path="/"
                        icon={activePath === '/' ? (
                            <Home
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <HomeOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18
                                }}/>
                        )}
                    />

                    <SidebarLink
                        active={activePath === '/about'}
                        label="About Us"
                        path="/about"
                        icon={activePath === '/about' ? (
                            <Info
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <InfoOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18
                                }}/>
                        )}
                    />

                    <SidebarLink
                        active={activePath === '/practice-areas'}
                        label="Practice Areas"
                        path="/practice-areas"
                        icon={activePath === '/practice-areas' ? (
                            <Balance
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <BalanceOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18
                                }}/>
                        )}
                    />
                    <SidebarLink
                        active={activePath === '/contact'}
                        label="Contact"
                        path="/contact"
                        icon={activePath === '/contact' ? (
                            <ContactPage
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <ContactPageOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18
                                }}/>
                        )}
                    />
                </Stack>
            </Stack>
        </Box>
    )
}

export default SidebarContent;
