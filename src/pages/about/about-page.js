import Layout from "../../components/layout/layout";
import {Box, CardMedia, Container, Stack, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "./../../assets/images/tingey-injury-law-firm-DZpc4UY8ZtY-unsplash.jpg";
import React from "react";
import profile from "../../assets/images/profile.jpeg";

const AboutPage = () => {

    return (
        <Layout>
            <Box>
                <Banner
                    title="About Us"
                    links={[{label: 'Home', link: '/'}, {label: 'About', link: '/about'}]}
                    backgroundImage={banner}
                />
            </Box>
            <Box sx={{py: 5, backgroundColor: 'background.paper'}}>
                <Container>
                    <Typography variant="h4" sx={{color: 'text.primary', mb: 4}} align="center">
                        Lawyer Jim Crosby
                    </Typography>
                    <Typography variant="body1" sx={{color: 'text.primary', mb: 2}} align="center">
                        Jim Crosby is a seasoned employment litigator and trusted advisor to both individuals and
                        companies.
                    </Typography>
                    <Typography variant="body1" sx={{color: 'text.primary', mb: 2}} align="center">
                        Jim Crosby has been practicing employment law exclusively for her entire legal career. She has
                        handled hundreds of employment disputes involving sexual harassment, discrimination, equal pay,
                        trade secrets, whistleblowers, retaliation and restrictive covenants, among others. She is
                        deeply committed to every case that she selects and optimizes the litigation strategy for her
                        client’s goals, whether that is an early resolution or taking a case to trial.
                    </Typography>
                    <Typography variant="body1" sx={{color: 'text.primary', mb: 2}} align="center">
                        Jim Crosby translates complex legal issues into business-minded solutions. She advises
                        individual
                        and corporate clients on all types of employment issues, including employment policies and
                        handbooks, internal investigations, terminations, disability accommodations, and employment
                        agreements.
                    </Typography>
                    <Typography variant="body1" sx={{color: 'text.primary', mb: 2}} align="center">
                        Jim Crosby conducts workplace training programs on harassment prevention, leadership and
                        management skills, diversity, inclusion and respect in the workplace. She is a frequent
                        presenter at legal and industry conferences on employment law and compliance.
                    </Typography>
                    <Typography variant="body1" sx={{color: 'text.primary', mb: 2}} align="center">
                        Prior to founding Jim Crosby Law Firm, Jim Crosby was a partner at Baker McKenzie, a global law
                        firm, and
                        Littler Mendelson, the world’s largest employment and labor practice. She graduated from
                        Columbia Law School and Duke University.
                    </Typography>
                </Container>
            </Box>

            <Box sx={{minHeight: '50vh', backgroundColor: 'background.paper'}}>
                <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                    <Box sx={{flex: 1, py: 4}}>
                        <Container maxWidth="sm">
                            <Box sx={{py: 2}}>
                                <Stack direction="column" spacing={2}>
                                    <Box>
                                        <Typography
                                            variant="h4"
                                            sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                                            EDUCATION
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            Columbia Law School, J.D., 2008
                                        </Typography>

                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            Duke University, B.A.. 2005
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography
                                            variant="h4"
                                            sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                                            BAR ADMISSION
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            London
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography
                                            variant="h4"
                                            sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                                            COURT ADMISSIONS
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            U.K. Court of Appeals, 2nd Circuit
                                        </Typography>

                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            U.K. District Court, Southern District of Cambridgeshire
                                        </Typography>

                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            U.K. District Court, Eastern District of Cambridgeshire
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Container>
                    </Box>
                    <Box sx={{flex: 1, minHeight: '100%'}}>
                        <CardMedia
                            component="img"
                            src={profile}
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

export default AboutPage;
