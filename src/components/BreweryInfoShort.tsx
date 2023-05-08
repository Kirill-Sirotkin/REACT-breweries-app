import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { BreweryFetch } from "../types/breweryFetch";

const BreweryInfoShort = (props: BreweryFetch) => {
    return (
        <Card sx={{ bgcolor: "#3d434f", color: "white", height: "200px" }}>
            <CardContent sx={{ textAlign: "left" }}>
                <Typography sx={{ fontSize: 14 }} color="beige" gutterBottom>
                    {props.brewery_type.toUpperCase()} brewery
                </Typography>
                <Typography variant="h5" component="div" color="white">
                    {props.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="beige">
                    City: {props.city}
                </Typography>
            </CardContent>
            <CardActions>
            <Button component={Link} to={`/${props.id}`} size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default BreweryInfoShort;