import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Container,
    FormControl,
    FormHelperText,
    Grid,
    InputAdornment,
    InputLabel,
    LinearProgress,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
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
import * as yup from "yup";
import "yup-phone";
import {MESSAGE_ACTION_CREATORS, selectMessage} from "../../redux/features/message/message-slice";
import {useDispatch, useSelector} from "react-redux";
import {useSnackbar} from "notistack";
import {useFormik} from "formik";
import {MailOutline, PersonOutline} from "@mui/icons-material";
import {LoadingButton} from "@mui/lab";
import Defense from "../../components/shared/defense";
import Testimonial from "../../components/shared/testimonial";
import {motion} from "framer-motion";


const container = {
    initial: {
        y: '-10vh',
        opacity: 0
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
            type: "spring",
            bounce: 1,
            stiffness: 150
        }
    }
};
const item = {
    initial: {
        opacity: 0
    },
    whileInView: {
        opacity: 1
    }
};

const HomePage = () => {

    const {messageLoading, messageError, messageMessage} = useSelector(selectMessage);
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();

    const showMessage = (message, options) => {
        enqueueSnackbar(message, options);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            subject: '',
            email: '',
            phone: '',
            message: '',
        },
        onSubmit: (values, {resetForm, setSubmitting}) => {
            dispatch(MESSAGE_ACTION_CREATORS.sendMessage({values, resetForm, showMessage, setSubmitting}));
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({
            email: yup.string().email('Invalid email').required('email required'),
            name: yup.string().required('name required'),
            phone: yup.string().phone('Invalid phone').required('phone required'),
            subject: yup.string().required('subject required'),
            message: yup.string().required('Message required'),
        })
    });


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
                                            Jim Crosby Law
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
                <Container maxWidth="xl">
                    <Typography
                        initial={{
                            opacity: 0,
                            y: '10vh'
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        component={motion.h4}
                        variant="h4"
                        sx={{color: 'text.primary', mb: 2}}
                        align="center">
                        Leadership
                    </Typography>
                    <Box
                        initial={{
                            opacity: 0,
                            y: '10vh'
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{once: true}}
                        component={motion.div}>
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
                    </Box>
                </Container>
            </Box>

            <Box sx={{py: 5, backgroundColor: 'background.default'}}>
                <Container maxWidth="xl">
                    <Typography
                        initial={{
                            opacity: 0,
                            y: '10vh'
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        component={motion.h4}
                        variant="h4"
                        sx={{color: 'text.primary', mb: 2}}
                        align="center">
                        Practice Areas
                    </Typography>
                    <Grid
                          container={true} spacing={2}>
                        {PIETER_JACOBS_LAW_DATA.PRACTICE_AREAS.map((service, index) => {
                            return (
                                <Grid  xs={12} md={4} item={true} key={index}>
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
                            <Typography
                                initial={{
                                    opacity: 0,
                                    y: '10vh'
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                viewport={{once: true}}
                                component={motion.h4}
                                variant="h4"
                                sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                                ABOUT US
                            </Typography>
                            <Box sx={{py: 2}}>
                                <Stack direction="column" spacing={2}>
                                    <Box>
                                        <Typography
                                            initial={{
                                                opacity: 0,
                                                y: '10vh'
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 1
                                                }
                                            }}
                                            viewport={{once: true}}
                                            component={motion.h5}
                                            variant="h5" sx={{color: 'text.primary', fontWeight: 500, mb: 2}}>
                                            Tenacious Representation
                                        </Typography>
                                        <Typography
                                            initial={{
                                                opacity: 0,
                                                y: '10vh'
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 1
                                                }
                                            }}
                                            viewport={{once: true}}
                                            component={motion.p}
                                            variant="body2" sx={{color: 'text.secondary'}}>
                                            Jim Crosby Law Firm in Downtown Houston is a female-owned firm providing
                                            aggressive representation in all criminal defense matters. Our goal in every
                                            case is to exceed expectations while meeting the goals set by the client,
                                            for
                                            the client.
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography
                                            initial={{
                                                opacity: 0,
                                                y: '10vh'
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 1
                                                }
                                            }}
                                            viewport={{once: true}}
                                            component={motion.h5}
                                            variant="h5" sx={{color: 'text.primary', fontWeight: 500, mb: 2}}>
                                            Our Guarantee
                                        </Typography>
                                        <Typography
                                            initial={{
                                                opacity: 0,
                                                y: '10vh'
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 1
                                                }
                                            }}
                                            viewport={{once: true}}
                                            component={motion.p}
                                            variant="body2" sx={{color: 'text.secondary'}}>
                                            PWe promise our clients that we will never stop fighting. Jim Crosby Law
                                            Firm in
                                            Downtown Houston is committed to doing whatever it takes to get the best
                                            result
                                            for you and your family. Note: It is unethical for any lawyer to guarantee a
                                            certain result in any criminal matter.
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography

                                            initial={{
                                                opacity: 0,
                                                y: '10vh'
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 1
                                                }
                                            }}
                                            viewport={{once: true}}
                                            component={motion.h5}
                                            variant="h5" sx={{color: 'text.primary', fontWeight: 500, mb: 2}}>
                                            Our Number One Priority
                                        </Typography>
                                        <Typography
                                            initial={{
                                                opacity: 0,
                                                y: '10vh'
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 1
                                                }
                                            }}
                                            viewport={{once: true}}
                                            component={motion.p}
                                            variant="body2" sx={{color: 'text.secondary'}}>
                                            At the Jim Crosby Law Firm in Downtown Houston we always work hard to keep
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

            <Box sx={{py: 5, backgroundColor: 'background.default'}}>
                <Container maxWidth="lg">
                    <Typography
                        initial={{
                            opacity: 0,
                            y: '10vh'
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{once: true}}
                        component={motion.h4}
                        variant="h4" sx={{color: 'text.primary', mb: 4}} align="center">
                        Get In Touch
                    </Typography>
                    <Typography
                        initial={{
                            opacity: 0,
                            y: '10vh'
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{once: true}}
                        component={motion.h6}
                        variant="h6" sx={{color: 'text.primary', mb: 4}} align="center">
                        Email Us! All Emails Receive A Response Within 24 Hours or Less
                    </Typography>
                    <Typography
                        initial={{
                            opacity: 0,
                            y: '10vh'
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{once: true}}
                        component={motion.p}
                        variant="body2" sx={{color: 'text.secondary', mb: 2}} align="center">
                        Use the form below to contact us regarding your legal inquiry. Please be as detailed as
                        possible. To help us best service your inquiry, we recommend that you first describe the issue
                        you’re having before telling us what you want to achieve. You may also email or call us to make
                        an appointment.
                    </Typography>
                    <Grid container={true} justifyContent="center">
                        <Grid item={true} xs={12} md={6}>
                            <Card
                                initial={{
                                    opacity: 0,
                                    y: '10vh'
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                viewport={{once: true}}
                                component={motion.div}
                                variant="elevation" elevation={0}>
                                {messageLoading && <LinearProgress variant="query" color="secondary"/>}
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <form autoComplete="off" onSubmit={formik.handleSubmit}>

                                            {messageError && (
                                                <Alert severity="error">
                                                    <AlertTitle>{messageError}</AlertTitle>
                                                </Alert>
                                            )}

                                            {messageMessage && (
                                                <Alert severity="error">
                                                    <AlertTitle>{messageMessage}</AlertTitle>
                                                </Alert>
                                            )}

                                            <Box mb={4}>
                                                <Typography
                                                    mb={1} variant="body2"
                                                    sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                                    Name
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel htmlFor="name">Name</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        value={formik.values.name}
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        endAdornment={
                                                            <InputAdornment
                                                                position="end">
                                                                <PersonOutline
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        color: 'secondary.main',
                                                                        padding: 1,
                                                                        fontSize: 24,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        }
                                                        error={formik.touched.name && formik.errors.name}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter name"
                                                        required={true}
                                                        label="Name"
                                                        size="medium"
                                                        margin="dense"
                                                    />
                                                    {formik.touched.name && formik.errors.name && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.name}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>

                                            <Box mb={4}>
                                                <Typography
                                                    mb={1} variant="body2"
                                                    sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                                    Email
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel htmlFor="email">Email</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        value={formik.values.email}
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        endAdornment={
                                                            <InputAdornment
                                                                position="end">
                                                                <MailOutline
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        color: 'secondary.main',
                                                                        padding: 1,
                                                                        fontSize: 24,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        }
                                                        error={formik.touched.email && formik.errors.email}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter username or email or phone"
                                                        required={true}
                                                        label="Email"
                                                        size="medium"
                                                        margin="dense"
                                                    />
                                                    {formik.touched.email && formik.errors.email && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.email}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>

                                            <Box mb={4}>
                                                <Typography
                                                    mb={1} variant="body2"
                                                    sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                                    Message
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel htmlFor="message">Message</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        id="message"
                                                        value={formik.values.message}
                                                        name="message"
                                                        type="text"
                                                        error={formik.touched.message && formik.errors.message}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter message"
                                                        required={true}
                                                        label="Message"
                                                        size="medium"
                                                        margin="dense"
                                                        multiline={true}
                                                        minRows={5}
                                                    />
                                                    {formik.touched.message && formik.errors.message && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.message}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>

                                            <Stack direction="row" justifyContent="center">
                                                <LoadingButton
                                                    type="submit"
                                                    size="large"
                                                    color="secondary"
                                                    sx={{
                                                        textTransform: 'capitalize',
                                                        py: 1.2
                                                    }}
                                                    loadingPosition="start"
                                                    startIcon={messageLoading ?
                                                        <CircularProgress color="secondary"/> : null}
                                                    loadingIndicator={messageLoading ?
                                                        <CircularProgress color="secondary"/> : null}
                                                    loading={messageLoading}
                                                    variant="contained"
                                                    disableElevation={true}>
                                                    {messageLoading ? 'Sending...' : 'Send message'}
                                                </LoadingButton>
                                            </Stack>
                                        </form>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{py: 5, backgroundColor: 'background.paper'}}>
                <Container maxWidth="xl">
                    <Typography
                        initial={{
                            opacity: 0,
                            y: '10vh'
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{once: true}}
                        component={motion.h4}
                        variant="h4" sx={{color: 'text.primary', mb: 2}} align="center">
                        State & Federal Criminal Defense
                    </Typography>
                    <Grid
                        container={true}
                        spacing={4}>
                        {PIETER_JACOBS_LAW_DATA.DEFENSE.map((defense, index) => {
                            return (
                                <Grid xs={12} item={true} key={index}>
                                    <Defense defense={defense}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>

            <Box sx={{py: 5, backgroundColor: 'background.default'}}>
                <Container maxWidth="xl">
                    <Typography

                        initial={{
                            opacity: 0,
                            y: '10vh'
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{once: true}}
                        component={motion.h4}
                        variant="h4" sx={{color: 'text.primary', mb: 2}} align="center">
                        Testimonials
                    </Typography>
                    <Box
                        initial={{
                            opacity: 0,
                            y: '10vh'
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{once: true}}
                        component={motion.h4}>

                        <Carousel
                            infinite={true}
                            keyBoardControl={true}
                            pauseOnHover={true}
                            showDots={false}
                            arrows={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            responsive={UTILS.testimonialResponsive}>
                            {PIETER_JACOBS_LAW_DATA.REVIEWS.map((review, index) => {
                                return (
                                    <Box key={index}>
                                        <Testimonial testimonial={review}/>
                                    </Box>
                                )
                            })}
                        </Carousel>
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default HomePage;
