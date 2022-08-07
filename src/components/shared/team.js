import {Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";

const Team = ({team}) => {
    return (
        <Card sx={{height: '100%'}} elevation={0}>
            <CardMedia
                src={team.image} component="img"
                sx={{height: 200, objectFit: 'cover', objectPosition: 'center'}}
            />
            <CardContent>
                <Stack direction="column" spacing={1}>
                    <Typography variant="body1" sx={{color: 'text.primary', fontWeight: 'bold'}}>
                        {team.title}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {team.description}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Team;
