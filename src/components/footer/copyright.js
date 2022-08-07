import {Box, Container, Typography} from "@mui/material";
import React from "react";

const Copyright = () => {

    return (
        <Box sx={{padding: 4, backgroundColor: 'background.default'}}>
            <Container>
                <Typography variant="body2" align="center" sx={{color: 'text.secondary'}}>
                    &copy;Copyright © 2015 Pieter Jacobs Law. All rights reserved.
                </Typography>
            </Container>
        </Box>
    )
}

export default Copyright;
