import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

export const navLinks = [
    { name: "Главная",
        path: "/",
        icon: <HomeOutlinedIcon/>
    },
    {
        name: "О себе",
        path: "/about",
        icon: <PersonOutlineOutlinedIcon/>
    },
    {
        name: "Портфолио",
        path: "/portfolio",
        icon: <WorkOutlineOutlinedIcon/> ,
    },
    {
        name: "Контакты",
        path: "/contact",
        icon: <CallOutlinedIcon/>,
    },
    {
        name: "Сервисы",
        path: "/service",
        icon: <MiscellaneousServicesOutlinedIcon/>,
    },
    {
        name: "Блог",
        path: "/blog",
        icon: <ArticleOutlinedIcon/>,
    },
];

// Ширина бокового навбара
export const drawerWidth = 240;