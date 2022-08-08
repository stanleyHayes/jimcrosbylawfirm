import {Box, Card, CardContent, Rating, Stack, Typography} from "@mui/material";

const Testimonial = ({testimonial}) => {
    return (
        <Card sx={{backgroundColor: 'background.default'}} elevation={0}>
            <CardContent sx={{flex: 1}}>
                <Stack spacing={1}>
                    <Typography
                        variant="body2"
                        sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                        {testimonial.date}
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{textTransform: 'capitalize', color: 'text.primary', fontWeight: 500}}>
                        {testimonial.title}
                    </Typography>

                    <Box>
                        <Rating value={testimonial.rating} color="secondary" size="larg"/>
                    </Box>

                    <Typography
                        variant="body2"
                        sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                        {testimonial.description}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Testimonial;
