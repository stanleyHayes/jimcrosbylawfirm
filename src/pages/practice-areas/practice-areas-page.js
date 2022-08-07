import Layout from "../../components/layout/layout";
import {Box, Container, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "./../../assets/images/tingey-injury-law-firm-veNb0DDegzE-unsplash.jpg";
const PracticeAreasPage = () => {

    return (
        <Layout>
            <Box>
                <Banner
                    title="Our Expertise"
                    links={[{label: 'Home', link: '/'}, {label: 'Practice Areas', link: '/practice-areas'}]}
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

export default PracticeAreasPage;
