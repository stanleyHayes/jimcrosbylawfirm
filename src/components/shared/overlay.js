import {Box} from "@mui/material";

const Overlay = ({children, image}) => {
    return (
        <Box sx={{height: '100vh', width: '100%', backgroundColor: 'rgba(4,32,38,0.85)', position: 'relative'}}>
            <img
                alt=""
                src={image}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}/>

            <Box
                sx={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: 'absolute',
                    backgroundColor: 'rgba(4,32,38,0.75)',
                }}>
                {children}
            </Box>
        </Box>
    )
}

export default Overlay;
