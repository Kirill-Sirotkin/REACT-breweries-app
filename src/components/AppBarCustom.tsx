import React, { FormEvent, useState } from "react";
import AppBar from "@mui/material/AppBar";
import SportsBarIcon from '@mui/icons-material/SportsBar';
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowForward from "@mui/icons-material/ArrowForward";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const AppBarCustom = () => {
    const [searchItem, setSearchItem] = useState<string>("");
    const navigate = useNavigate();

    const searchBrewery = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!searchItem) return;
      navigate(`/search/${searchItem}`);
    }

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#282c34" }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Toolbar disableGutters sx={{ gap: "1em" }}>
              <SportsBarIcon></SportsBarIcon>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to={"/"}
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                BREWERIES
              </Typography>
            </Toolbar>
            <Search>
              <form onSubmit={(e)=> searchBrewery(e)}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e)=> setSearchItem(e.target.value)}
                />
                <Button type="submit" sx={{color: "white", height: "100%", padding: "0 0 2px 0", margin: 0}}>
                  <ArrowForward />
                </Button>
              </form>
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default AppBarCustom;