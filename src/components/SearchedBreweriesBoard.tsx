import React, { useEffect, useState } from "react";
import BreweryInfoShort from "./BreweryInfoShort";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { BreweryFetch } from "../types/breweryFetch";
import { useParams } from "react-router";
import Stack from "@mui/material/Stack";

const SearchedBreweriesBoard = () => {
    const {item} = useParams();
    const [breweries, setBreweries] = useState<BreweryFetch[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetch(`https://api.openbrewerydb.org/v1/breweries/search?query=${item}&per_page=10`);
            const breweriesData: BreweryFetch[] = await data.json();
            setBreweries(breweriesData);
        }
        
        getData();
    }, [item])

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
            Search results for "{item?.toUpperCase()}":
            </Typography>
            <Stack spacing={3}>
                {breweries.map(br => (
                    <BreweryInfoShort {...br}></BreweryInfoShort>
                ))}
            </Stack>
        </Container>
    )
}

export default SearchedBreweriesBoard;