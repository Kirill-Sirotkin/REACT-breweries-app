import React, { useEffect, useState } from "react";
import BreweryInfoShort from "./BreweryInfoShort";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { BreweryFetch } from "../types/breweryFetch";

const FeaturedBreweriesBoard = () => {
    const [breweries, setBreweries] = useState<BreweryFetch[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetch("https://api.openbrewerydb.org/v1/breweries/random?size=6");
            const breweriesData: BreweryFetch[] = await data.json();
            setBreweries(breweriesData);
        }
        
        getData();
    }, [])

    return (
        <Container sx={{padding: "2em", bgcolor: "#282c34", marginTop: "2em"}}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
            color: 'white',
            textDecoration: 'none',
            marginBottom: "1em"
          }}
        >
          Featured breweries:
        </Typography>
            <Grid container justifyContent="center" spacing={3}>
                {breweries.map(br => (
                    <Grid key={br.id} item xs={4}>
                        <BreweryInfoShort {...br}></BreweryInfoShort>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default FeaturedBreweriesBoard;