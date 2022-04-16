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
        path: "/",
        icon: <PersonOutlineOutlinedIcon/>
    },
    {
        name: "Портфолио",
        path: "/",
        icon: <WorkOutlineOutlinedIcon/> ,
    },
    {
        name: "Контакты",
        path: "/",
        icon: <CallOutlinedIcon/>,
    },
    {
        name: "Сервисы",
        path: "/",
        icon: <MiscellaneousServicesOutlinedIcon/>,
    },
    {
        name: "Блог",
        path: "/",
        icon: <ArticleOutlinedIcon/>,
    },
];