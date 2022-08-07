import {Box, CardContent, CardMedia, Divider, Stack, Typography, Card} from "@mui/material";

const Defense = ({defense}) => {
    return (
        <Card sx={{height: '100%'}} elevation={0} variant="outlined">
            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}}}>
                <Box sx={{flexBasis: {xs: '100%', md: '30%'}}}>
                    <CardMedia
                        src={defense.image}
                        component="img"
                        sx={{
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',

                        }}
                    />
                </Box>
                <Box sx={{flexBasis: {xs: '100%', md: '70%'}}}>
                    <Stack sx={{height: '100%'}} direction="column" divider={<Divider variant="fullWidth"/>}>
                        <CardContent sx={{flex: 1}}>
                            <Stack spacing={1}>
                                <Typography
                                    variant="h6"
                                    sx={{textTransform: 'capitalize', color: 'text.primary', fontWeight: 500}}>
                                    {defense.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                                    {defense.description}
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Stack>
                </Box>
            </Box>
        </Card>
    )
}

export default Defense;
