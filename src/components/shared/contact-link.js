import {Link, Stack, Typography} from "@mui/material";

const ContactLink = ({icon, value, link, label}) => {
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            {icon}
            <Stack direction="column" justifyContent="center">
                {label ? (
                    <Typography
                        variant="body2"
                        sx={{color: 'secondary.main', fontSize: 14}}>
                        {label}
                    </Typography>
                ): null}
                <Link underline="none" href={link}>
                    <Typography
                        variant="body2"
                        sx={{color: 'secondary.main', fontSize: 14, fontWeight: 500}}>
                        {value}
                    </Typography>
                </Link>
            </Stack>
        </Stack>
    )
}

export default ContactLink;
