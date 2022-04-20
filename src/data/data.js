import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

export const navLinks = [
    { name: "Главная",
        url: "/",
        icon: <HomeOutlinedIcon/>
    },
    {
        name: "О себе",
        url: "/about",
        icon: <PersonOutlineOutlinedIcon/>
    },
    {
        name: "Портфолио",
        url: "/portfolio",
        icon: <WorkOutlineOutlinedIcon/> ,
    },
    {
        name: "Контакты",
        url: "/contact",
        icon: <CallOutlinedIcon/>,
    },
    {
        name: "Сервисы",
        url: "/service",
        icon: <MiscellaneousServicesOutlinedIcon/>,
    },
    {
        name: "Блог",
        url: "/blog",
        icon: <ArticleOutlinedIcon/>,
    },
];

// Ширина бокового навбара
export const drawerWidth = 240;