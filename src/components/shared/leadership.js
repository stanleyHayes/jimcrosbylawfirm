import {Card, CardMedia} from "@mui/material";

const Leadership = ({leadership}) => {
    return (
        <Card sx={{borderWidth: 1, borderStyle: 'solid', padding: 1}} variant="outlined">
            <CardMedia
                component="img"
                alt=""
                src={leadership.image}
                sx={{objectFit: 'contain', objectPosition: 'center', height: 100}}
            />
        </Card>
    )
}

export default Leadership;
