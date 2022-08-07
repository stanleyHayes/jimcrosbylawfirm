import Layout from "../../components/layout/layout";
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import banner from "../../assets/images/banner.jpg";
import Overlay from "../../components/shared/overlay";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import React from "react";
import Carousel from "react-multi-carousel";
import {UTILS} from "../../utils/utils";
import {PIETER_JACOBS_LAW_DATA} from "../../utils/data";
import Leadership from "../../components/shared/leadership";

const HomePage = () => {

    return (
        <Layout>
            <Box>
                <Overlay
                    children={
                        <Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                            <Container>
                                <Grid container={true} spacing={4} alignItems="center" justifyContent="center">
                                    <Grid item={true} xs={12} md={6}>
                                        <Stack sx={{mb: 3}} direction="row" justifyContent="center">
                                            <img
                                                src={logo}
                                                style={{
                                                    width: 150,
                                                    height: 150,
                                                    objectFit: 'contain',
                                                    objectPosition: 'center'
                                                }}
                                                alt="Pieter Jacobs Logo"
                                            />
                                        </Stack>
                                        <Typography align="center" variant="h3" sx={{color: 'white', mb: 3}}>
                                            Pieter Jacobs Law
                                        </Typography>
                                        <Typography align="center" variant="body1" sx={{color: 'white', mb: 3}}>
                                            We advocate for employee rights and help companies comply with workplace
                                            laws.
                                        </Typography>
                                        <Grid container={true} spacing={2} alignItems="center" justifyContent="center">
                                            <Grid item={true} xs={12} md={6}>
                                                <Link to="/about" style={{textDecoration: 'none'}}>
                                                    <Button
                                                        sx={{
                                                            textTransform: 'capitalize',
                                                            borderTopRightRadius: 16,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        variant="contained"
                                                        fullWidth={true}
                                                        color="secondary"
                                                        disableElevation={true}
                                                        size="large">
                                                        Learn More
                                                    </Button>
                                                </Link>
                                            </Grid>
                                            <Grid item={true} xs={12} md={6}>
                                                <Link to="/contact" style={{textDecoration: 'none'}}>
                                                    <Button
                                                        color="secondary"
                                                        sx={{
                                                            textTransform: 'capitalize',
                                                            backgroundColor: 'light.secondary',
                                                            borderTopRightRadius: 16,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 16,
                                                            borderTopLeftRadius: 0,
                                                        }}
                                                        variant="outlined"
                                                        fullWidth={true}
                                                        disableElevation={true}
                                                        size="large">
                                                        Contact Now
                                                    </Button>
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>}
                    image={banner}
                    backgroundColor="#000000"/>
            </Box>
            <Box sx={{py: 5}}>
                <Container>
                    <Typography variant="h4" sx={{color: 'text.primary', mb: 2}} align="center">
                        Leadership
                    </Typography>
                    <Carousel
                        infinite={true}
                        keyBoardControl={true}
                        pauseOnHover={true}
                        showDots={false}
                        arrows={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        centerMode={true}
                        responsive={UTILS.responsive}>
                        {PIETER_JACOBS_LAW_DATA.LEADERSHIP.map((leadership, index) => {
                            return (
                                <Box key={index} sx={{mx: 1}}>
                                    <Leadership leadership={leadership}/>
                                </Box>
                            )
                        })}
                    </Carousel>
                </Container>
            </Box>
        </Layout>
    )
}

export default HomePage;
