import {Container, Stack, Toolbar, useTheme} from "@mui/material";
import {Call, Facebook, Instagram, Mail, Twitter} from "@mui/icons-material";
import ContactLink from "../../../shared/contact-link";

const MobileTobNavBar = () => {

    const theme = useTheme();

    return (
        <Toolbar variant="dense" sx={{backgroundColor: 'background.top'}}>
            <Container maxWidth="xl">
                <Stack alignItems="center" justifyContent="space-between" direction="row">
                    <ContactLink
                        icon={
                            <Call
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: 'light.secondary',
                                    color: theme.palette.mode === 'dark' ? 'white': 'secondary.main',
                                    borderTopRightRadius: 8,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 0,
                                    padding: 0.6,
                                    fontSize: "large",
                                }}
                            />
                        }
                        link="tel:+447424969958"
                    />
                    <ContactLink
                        icon={
                            <Mail
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: 'light.secondary',
                                    color: theme.palette.mode === 'dark' ? 'white': 'secondary.main',
                                    borderTopRightRadius: 8,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 0,
                                    padding: 0.6,
                                    fontSize: "large",
                                }}
                            />
                        }
                        link="mailto:info@jimcrosbylawfirm.com"
                    />

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
            </Container>
        </Toolbar>
    )
}

export default MobileTobNavBar;
