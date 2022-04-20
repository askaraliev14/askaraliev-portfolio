import {TextLoop} from "react-text-loop-next";
import Box from "@mui/material/Box";
import {Button, ButtonGroup, Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import {cardHeight, cardPortfolio, cardWidth} from "../../data/card-portfolio";
import ContentCanvas from "../MainPage/ContentCanvas";

const buttons = [
    <Button key="one">Поделится</Button>,
    <Button key="two">Подробнее</Button>,
];

const PortfolioPage = () => {
    return (
        <Box sx={{
            marginLeft: "245px",
            // height: "100%",
            display: "flex",
            flexWrap: "wrap",
            color: "white"
        }}>
            {cardPortfolio.map((card) => (
                <Card key={card.name} sx={{ maxWidth: cardWidth, mt: 3, mr: 5 }}>
                    <CardMedia
                        component="img"
                        alt={card.altImg}
                        height={cardHeight}
                        image={card.image}
                    />
                    <CardContent sx={{width: cardWidth}}>
                        <Typography gutterBottom variant="h5" component="div" sx={{m:0, p:0}}>
                            {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {card.content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <ButtonGroup size="small" color="warning" aria-label="medium secondary button group" sx={{
                            margin: "auto",
                            color: "#ffb74d"
                        }}>
                            {buttons}
                        </ButtonGroup>
                        {/*<Button size="small">Поделится</Button>*/}
                        {/*<Button size="small">Подробнее</Button>*/}
                    </CardActions>
                </Card>
            ))}

        </Box>
    )
};

export default PortfolioPage;