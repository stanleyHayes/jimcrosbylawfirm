import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
    Box,
    Card,
    CardContent,
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
import Banner from "../../components/shared/banner";
import banner from "./../../assets/images/david-veksler-HpmDAS1Dozs-unsplash.jpg";
import {MailOutline, PersonOutline} from "@mui/icons-material";
import {LoadingButton} from "@mui/lab";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {MESSAGE_ACTION_CREATORS, selectMessage} from "../../redux/features/message/message-slice";
import {useSnackbar} from "notistack";
import {useFormik} from "formik";
import * as yup from "yup";

const ContactPage = () => {

    const {messageLoading, messageError, messageMessage} = useSelector(selectMessage);
    const {enqueueSnackbar} = useSnackbar();
    const dispatch = useDispatch();

    const showMessage = (message, options) => {
        enqueueSnackbar(message, options);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
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
            message: yup.string().required('Message required'),
        })
    });

    return (
        <Layout>
            <Box>
                <Banner
                    title="Contact Us"
                    links={[{label: 'Home', link: '/'}, {label: 'Contact', link: '/contact'}]}
                    backgroundImage={banner}
                />
            </Box>

            <Box sx={{py: 5, backgroundColor: 'background.default'}}>
                <Container>
                    <Typography variant="h4" sx={{color: 'text.primary', mb: 4}} align="center">
                        Get In Touch
                    </Typography>
                    <Typography variant="h6" sx={{color: 'text.primary', mb: 4}} align="center">
                        Email Us! All Emails Receive A Response Within 24 Hours or Less
                    </Typography>
                    <Typography variant="body1" sx={{color: 'text.secondary', mb: 2}} align="center">
                        Use the form below to contact us regarding your legal inquiry. Please be as detailed as
                        possible. To help us best service your inquiry, we recommend that you first describe the issue
                        you’re having before telling us what you want to achieve. You may also email or call us to make
                        an appointment.
                    </Typography>
                    <Grid container={true} justifyContent="center">
                        <Grid item={true} xs={12} md={6}>
                            <Card variant="elevation" elevation={0}>
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
                                                <Alert severity="success">
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
                <Container maxWidth="md">
                    <Stack direction="column" spacing={4}>
                        <Typography variant="h5" sx={{color: 'text.primary'}} align="center">
                            We care about our clients so we are always available! All calls or emails are responded to
                            promptly, and no later than 24 hours.
                        </Typography>
                        <Typography variant="h5" sx={{color: 'text.primary'}} align="center">
                            Note: The use of the Internet or this form for communication with the firm or any individual
                            member of the firm does not establish an attorney-client relationship.
                        </Typography>
                        <Typography variant="h5" sx={{color: 'text.primary'}} align="center">
                            Jim Crosby Law Firm, PLLC
                        </Typography>
                        <Typography variant="h5" sx={{color: 'text.primary'}} align="center">
                            1st Floor Technology House, 48-54 Goldsworth Road,  Working, Surrey GU21 6LE
                        </Typography>
                        <Typography variant="h5" sx={{color: 'text.primary'}} align="center">
                            Monday - Friday: 8:30 am - 5:00 pm
                        </Typography>
                    </Stack>
                </Container>
            </Box>
        </Layout>
    )
}

export default ContactPage;
