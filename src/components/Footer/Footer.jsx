import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Askaraliev
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    return (
        <footer>
            <Box
                component="footer"
                sx={{
                    textAlign: "center",
                    position: "fixed",
                    left: "0",
                    bottom: "0",
                    zIndex: 1205,
                    height: "60px",
                    width: "100%",
                    background: "#ffb74d"
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body1">
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
        </footer>

    );
}
