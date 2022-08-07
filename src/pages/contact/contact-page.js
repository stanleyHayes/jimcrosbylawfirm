import Layout from "../../components/layout/layout";
import {Box, Container, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "./../../assets/images/david-veksler-HpmDAS1Dozs-unsplash.jpg";
const ContactPage = () => {

    return (
        <Layout>
            <Box>
                <Banner
                    title="Contact Us"
                    links={[{label: 'Home', link: '/'}, {label: 'Contact', link: '/contact'}]}
                    backgroundImage={banner}
                />
            </Box>
            <Container>
                <Typography variant="h3" align="center">
                    Page Under Construction
                </Typography>
            </Container>
        </Layout>
    )
}

export default ContactPage;
