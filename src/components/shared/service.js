import {Card, CardContent, Stack, Typography} from "@mui/material";

const Service = ({service}) => {
    return (
        <Card
            sx={{
                height: '100%',
                boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff'
            }} elevation={0}>
            <CardContent>
                <Stack direction="column" spacing={1}>
                    <Stack direction="row" justifyContent="center">
                        <img
                            title={`${service.title} service logo`}
                            alt={`${service.title} service logo`}
                            src={service.image}
                        />
                    </Stack>
                    <Typography variant="body1" sx={{color: 'text.primary', fontWeight: 'bold'}}>
                        {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {service.description}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Service;
