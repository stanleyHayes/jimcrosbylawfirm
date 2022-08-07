import {Button, Card, CardContent, Stack, Typography} from "@mui/material";
import {ArrowRightAlt} from "@mui/icons-material";

const Service = ({service}) => {
    return (
        <Card
            sx={{
                height: '100%',
                boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
                width: '100%'
            }} elevation={0}>
            <CardContent>
                <Stack direction="column" spacing={2}>
                    <Stack direction="row" justifyContent="center">
                        <img
                            title={`${service.title} service logo`}
                            alt={`${service.title} service logo`}
                            src={service.image}
                            style={{height: 50, width: 50}}
                        />
                    </Stack>
                    <Typography align="center" variant="body1" sx={{color: 'text.primary', fontWeight: 'bold'}}>
                        {service.title}
                    </Typography>
                    <Typography align="center" variant="body2" sx={{color: 'text.secondary'}}>
                        {service.description}
                    </Typography>
                    <Button
                        color="secondary"
                        variant="text"
                        size="small"
                        sx={{textTransform: 'capitalize'}}
                        endIcon={<ArrowRightAlt/>}>
                        Read More
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Service;
