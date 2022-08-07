import {Container, Divider, Stack, Toolbar, Typography} from "@mui/material";
import logo from "../../../assets/images/logo.png";
import {useSelector} from "react-redux";
import {selectUI} from "../../../redux/features/ui/ui-slice";
import React from "react";
import {Link} from "react-router-dom";
import NavLink from "../../shared/nav-link";

const DesktopHeader = () => {

    const {activePath} = useSelector(selectUI);

    return (
        <Toolbar variant="regular">
            <Container maxWidth="xl">
                <Stack
                    divider={<Divider variant="fullWidth" light={true}/>}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Stack spacing={2} direction="row" alignItems="center">
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <img
                                src={logo}
                                style={{width: 50, height: 50, objectFit: 'contain', objectPosition: 'center'}}
                                alt="Pieter Jacobs Logo"
                            />
                        </Link>
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <Typography
                                sx={{color: 'secondary.main'}}
                                variant="h5">Pieter Jacobs</Typography>
                        </Link>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={3}>
                        <NavLink label="Home" path="/" active={activePath === '/'}/>
                        <NavLink label="About Us" path="/about" active={activePath === '/about'}/>
                        <NavLink label="Practice Areas" path="/practice-areas"
                                 active={activePath === '/practice-areas'}/>
                        <NavLink label="Testimonials" path="/testimonials" active={activePath === '/testimonials'}/>
                        <NavLink label="Contact" path="/contact" active={activePath === '/contact'}/>
                    </Stack>
                </Stack>
            </Container>
        </Toolbar>)
}


export default DesktopHeader;
