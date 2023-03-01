import {CardMedia} from "@mui/material";

const Leadership = ({leadership}) => {
    return (

        <CardMedia
            component="img"
            alt=""
            src={leadership.image}
            sx={{objectFit: 'contain', objectPosition: 'center', height: 100}}
        />
    )
}

export default Leadership;
