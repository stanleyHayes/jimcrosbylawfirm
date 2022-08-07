import Layout from "../../components/layout/layout";
import {Box, Container, Typography} from "@mui/material";
import Banner from "../../components/shared/banner";
import banner from "./../../assets/images/nasser-eledroos-20fmGtxKs_I-unsplash.jpg";
import {PIETER_JACOBS_LAW_DATA} from "../../utils/data";
import Testimonial from "../../components/shared/testimonial";
import React from "react";
import Carousel from "react-multi-carousel";
import {UTILS} from "../../utils/utils";

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
            <Box sx={{py: 5, backgroundColor: 'background.default'}}>
                <Container>
                    <Typography variant="h4" sx={{color: 'text.primary', mb: 2}} align="center">
                        Testimonials
                    </Typography>
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
                </Container>
            </Box>
        </Layout>
    )
}

export default TestimoniesPage;
