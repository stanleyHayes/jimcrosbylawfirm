import Layout from "../../components/layout/layout";
import {Box, Container, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "./../../assets/images/nasser-eledroos-20fmGtxKs_I-unsplash.jpg";

const TestimoniesPage = () => {
    return (
        <Layout>
            <Box>
                <Banner
                    title="Testimonials"
                    links={[{label: 'Testimonials', link: '/'}, {label: 'Testimonials', link: '/testimonials'}]}
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

export default TestimoniesPage;
