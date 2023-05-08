import React, { useEffect, useState } from "react";
import { BreweryFetch } from "../types/breweryFetch";
import { useParams } from "react-router";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const BreweryInfoFull = () => {
    const {id} = useParams();
    const [brewery, setBrewery] = useState<BreweryFetch | undefined>();

    useEffect(() => {
        const getData = async () => {
            const data = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`);
            const breweryData: BreweryFetch = await data.json();
            setBrewery(breweryData);
        }
        
        getData();
    }, [id])

    return (
        <Container sx={{padding: "2em", bgcolor: "#282c34", marginTop: "2em", textAlign: "left"}}>
            <Typography
            variant="h3"
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
            {brewery?.name}
            </Typography>
            <Typography variant="h5" component="div" color="white">
                A {brewery?.brewery_type} brewery based in {brewery?.city}, {brewery?.state_province} ({brewery?.country}).
            </Typography>
            <Typography variant="h6" component="div" color="white">
                You can {brewery?.phone? `call ${brewery.phone},` : ""} send mail at {brewery?.postal_code} or
            </Typography>
            <Button component="a" href={`${brewery?.website_url}`} target="_blank">visit brewery website</Button>
        </Container>
    )
}

export default BreweryInfoFull;