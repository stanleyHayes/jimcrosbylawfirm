import {Box, Container, Stack, Toolbar} from "@mui/material";
import {Call, Facebook, Instagram, MailOutlined, ScheduleOutlined, Twitter} from "@mui/icons-material";
import ContactLink from "../../../shared/contact-link";

const DesktopTobNavBar = () => {

    return (
        <Toolbar variant="dense" sx={{backgroundColor: 'background.top'}}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                    <Stack
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                        direction="row">
                        <ContactLink
                            icon={
                                <Call
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: 'light.secondary',
                                        color:  'secondary.main',
                                        borderTopRightRadius: 8,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 8,
                                        borderTopLeftRadius: 0,
                                        padding: 0.6,
                                        fontSize: 18,
                                    }}
                                />
                            }
                            link="tel:+447424969958"
                            value="+447424969958"
                        />

                        <ContactLink
                            icon={
                                <ScheduleOutlined
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: 'light.secondary',
                                        color:  'secondary.main',
                                        borderTopRightRadius: 8,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 8,
                                        borderTopLeftRadius: 0,
                                        padding: 0.6,
                                        fontSize: 18,
                                    }}
                                />
                            }
                            link=""
                            value="Mon-Friday 9AM - 5PM"
                        />

                        <ContactLink
                            icon={
                                <MailOutlined
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: 'light.secondary',
                                        color:  'secondary.main',
                                        borderTopRightRadius: 8,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 8,
                                        borderTopLeftRadius: 0,
                                        padding: 0.6,
                                        fontSize: 18,
                                    }}
                                />
                            }
                            link="mailto:info@jimcrosbylawfirm.com"
                            value="info@jimcrosbylawfirm.com"
                        />
                    </Stack>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center">
                        <ContactLink
                            icon={
                                <Facebook
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: 'light.secondary',
                                        color:  'secondary.main',
                                        borderTopRightRadius: 8,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 8,
                                        borderTopLeftRadius: 0,
                                        padding: 0.6,
                                        fontSize: 18,
                                    }}
                                />
                            }
                            link="#"
                        />

                        <ContactLink
                            icon={
                                <Instagram
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: 'light.secondary',
                                        color:  'secondary.main',
                                        borderTopRightRadius: 8,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 8,
                                        borderTopLeftRadius: 0,
                                        padding: 0.6,
                                        fontSize: 18,
                                    }}
                                />
                            }
                            link="#"
                        />

                        <ContactLink
                            icon={
                                <Twitter
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: 'light.secondary',
                                        color:  'secondary.main',
                                        borderTopRightRadius: 8,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 8,
                                        borderTopLeftRadius: 0,
                                        padding: 0.6,
                                        fontSize: 18,
                                    }}
                                />
                            }
                            link="#"
                        />
                    </Stack>
                </Box>
            </Container>
        </Toolbar>
    )
}

export default DesktopTobNavBar;
