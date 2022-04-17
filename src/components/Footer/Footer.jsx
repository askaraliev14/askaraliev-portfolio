import {Box, Container} from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <Box sx={{
                borderTop: "1px solid #E7E7E7",
                textAlign: "center",
                padding: "20px",
                position: "fixed",
                left: "0",
                bottom: "0",
                zIndex: 1205,
                height: "60px",
                width: "100%",
                background: "#ffb74d"}}>
                <Container sx={{
                    p: '1rem',
                    color: 'white'
                }}>
                    <Box overflow="hidden">
                        <h2>Footer</h2>
                    </Box>
                </Container>
            </Box>
        </footer>
    )
};

export default Footer;