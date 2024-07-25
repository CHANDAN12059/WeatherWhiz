import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./infobox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


function InfoBox({ info }) {

    const HOT_URL = "https://v.w-x.co/1615541473848_TWC_SUMMER_2021_NEW_1.jpg?crop=16:9&width=320&format=pjpg&auto=webp&quality=60";
    const COLD_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIhOl9xKsi9IIlQ4iJAkNwMmRwMEfhjkVh9A&s";
    const RAIN_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIhCESoyPiadpWc1mUVqTXVNFVS-sJGXhe-g&s";


    return (

        <div className="info-box">



            <div className="card">
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <div className="city-icon">
                                {info.city}
                                   &nbsp;
                                {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <LightModeIcon/> : <AcUnitIcon/>}

                                </div>
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component={"div"}>
                                <p className="temperature">Temperature={info.temp}</p>
                                <p className="temperatureMin">Min Temp={info.tempMin}</p>
                                <p className="temperatureMax">Max Temp={info.tempMax}</p>
                                <p className="humidity">Humidity={info.humidity}</p>
                                <p className="feelsLike">The weather can be described as {info.weather} and  feels like {info.feelsLike}&deg; </p>

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </div>







        </div>




    )




}





export default InfoBox;