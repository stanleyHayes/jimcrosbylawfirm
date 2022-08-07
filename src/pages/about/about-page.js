import Layout from "../../components/layout/layout";
import {Box, Container, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "./../../assets/images/tingey-injury-law-firm-DZpc4UY8ZtY-unsplash.jpg";
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
            <Container>
                <Typography variant="h3" align="center">
                    Page Under Construction
                </Typography>
            </Container>
        </Layout>
    )
}

export default AboutPage;
