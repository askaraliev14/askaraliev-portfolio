import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Avatar, Card, CardActions, CardContent, CardMedia, Chip} from "@mui/material";
import Divider from "@mui/material/Divider";
import {FaPhoneSquareAlt, FaGithub} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import {GoCalendar, GoLocation} from "react-icons/go";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Accordion from "./Accordion";

const ContactInfo = styled("div")(({theme}) => ({
    marginTop: 10,
    marginBottom: 10,
    color: "#ffb74d",
    display: "flex",
    "span": {
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        fontSize: 15,
        marginRight: "15px"
    }
}));

const contactList = [
    {
        name: "",
        icon: <FaPhoneSquareAlt/>,
        info: "+998(99)798-66-92"
    },
    {
        name: "",
        icon: <FiMail/>,
        info: "askaraliev1499@gmail.com"
    },
    {
        name: "",
        icon: <GoLocation/>,
        info: "Tashkent, Uzbekistan"
    },
    {
        name: "",
        icon: <GoCalendar/>,
        info: "14-12-1999"
    },
    {
        name: "",
        icon: <FaGithub/>,
        info: "https://github.com/askaraliev14"
    },
];

const AboutPage = () => {
    return (
        <Box sx={{
            marginLeft: "240px",
            height: "100%",
            background: "transparent",
            display: "flex",
            justifyContent: "space-between"
        }}>
            <Box sx={{
                height: "100%",
                width: "30%",
            }}>
                <Card sx={{height: "100%", }}>
                    <Avatar alt="About" src="/assets/images/about/about.jpg"
                            sx={{margin: "auto", height: '200px', width: '200px', marginTop: 2}}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" textAlign="center">
                            Askaraliev Fazliddin
                        </Typography>
                        <Divider/>
                        {contactList.map((contact) => (
                            <ContactInfo>
                                <span>
                                    {contact.icon}
                                </span>
                                <span>
                                   {contact.info}
                                </span>
                            </ContactInfo>
                        ))}
                        <Divider/>
                        <Typography variant="body2" color="text.secondary">

                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box sx={{
                height: "100%",
                width: "70%",
            }}>
                <Accordion/>
            </Box>
        </Box>
    )
};

export default AboutPage;