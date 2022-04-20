import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Avatar, Card, CardActions, CardContent, CardMedia, Chip} from "@mui/material";
import Divider from "@mui/material/Divider";
import {FaPhoneSquareAlt, FaGithub} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import {GoCalendar, GoLocation} from "react-icons/go";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const ContactInfo = styled("div")(({theme}) => ({
    marginTop: 10,
    marginBottom: 10,
}));

const AboutPage = () => {
    return (
        <Box sx={{
            marginLeft: "240px",
            height: "100%",
            background: "white",
            display: "flex",
            justifyContent: "space-between"
        }}>
            <Box sx={{
                height: "100%",
                width: "30%",
                border: 2,
                borderColor: "red"
            }}>
                <Card sx={{height: "100%",}}>
                    <Avatar alt="Remy Sharp" src="/assets/images/about/about.jpg"
                            sx={{margin: "auto", height: '200px', width: '200px', marginTop: 2}}/>
                    {/*<CardMedia*/}
                    {/*    component="img"*/}
                    {/*    alt="green iguana"*/}
                    {/*    height="140"*/}
                    {/*    image="/assets/images/about/about.jpg"*/}
                    {/*    // background: "fit"*/}
                    {/*    sx={{*/}
                    {/*        borderRadius: "100%",*/}
                    {/*        height: "33%",*/}
                    {/*    }}*/}
                    {/*/>*/}

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" textAlign="center">
                            Askaraliev Fazliddin
                        </Typography>
                        <Divider/>
                        <ContactInfo><FaPhoneSquareAlt/><span>+9989234567</span></ContactInfo>
                        <Divider/>
                        <Typography variant="body2" color="text.secondary">
                            text text text
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box sx={{
                height: "100%",
                width: "70%",
                border: 2,
                borderColor: "red"
            }}>
                Content
            </Box>
        </Box>
    )
};

export default AboutPage;