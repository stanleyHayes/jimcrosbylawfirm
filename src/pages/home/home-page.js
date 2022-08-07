import Layout from "../../components/layout/layout";
import {Box, Button, CardMedia, Container, Grid, Stack, Typography} from "@mui/material";
import banner from "../../assets/images/banner.jpg";
import Overlay from "../../components/shared/overlay";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import about from "../../assets/images/about.jpg";
import React from "react";
import Carousel from "react-multi-carousel";
import {UTILS} from "../../utils/utils";
import {PIETER_JACOBS_LAW_DATA} from "../../utils/data";
import Leadership from "../../components/shared/leadership";
import Service from "../../components/shared/service";


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
            <Box sx={{py: 5, backgroundColor: 'background.paper'}}>
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
            <Box sx={{py: 5, backgroundColor: 'background.default'}}>
                <Container>
                    <Typography variant="h4" sx={{color: 'text.primary', mb: 2}} align="center">
                        Practice Areas
                    </Typography>
                    <Grid container={true}>
                        {PIETER_JACOBS_LAW_DATA.PRACTICE_AREAS.map((service, index) => {
                            return (
                                <Grid xs={12} md={3} item={true} key={index}>
                                    <Service service={service}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>

            <Box sx={{minHeight: '50vh', backgroundColor: 'background.paper'}}>
                <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                    <Box sx={{flex: 1, py: 4}}>
                        <Container maxWidth="sm">
                            <Typography variant="h4" sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                                ABOUT US
                            </Typography>
                            <Box sx={{py: 2}}>
                                <Stack direction="column" spacing={2}>
                                    <Box>
                                        <Typography variant="h5" sx={{color: 'text.secondary', fontWeight: 500, mb: 2}}>
                                            Tenacious Representation
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            Carmen Roe Law Firm in Downtown Houston is a female-owned firm providing
                                            aggressive representation in all criminal defense matters. Our goal in every
                                            case is to exceed expectations while meeting the goals set by the client,
                                            for
                                            the client.
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="h5" sx={{color: 'text.secondary', fontWeight: 500, mb: 2}}>
                                            Our Guarantee
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            PWe promise our clients that we will never stop fighting. Carmen Roe Law
                                            Firm in
                                            Downtown Houston is committed to doing whatever it takes to get the best
                                            result
                                            for you and your family. Note: It is unethical for any lawyer to guarantee a
                                            certain result in any criminal matter.
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="h5" sx={{color: 'text.secondary', fontWeight: 500, mb: 2}}>
                                            Our Number One Priority
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            At the Carmen Roe Law Firm in Downtown Houston we always work hard to keep
                                            the
                                            focus on you and your family. Our criminal defense firm works closely with
                                            clients to keep them well informed in every case. We give honest and direct
                                            advice to ensure you have all the information required to make the right
                                            decision for you and your family.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Container>
                    </Box>
                    <Box sx={{flex: 1, minHeight: '100%'}}>
                        <CardMedia
                            component="img"
                            src={about}
                            sx={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}

export default HomePage;
