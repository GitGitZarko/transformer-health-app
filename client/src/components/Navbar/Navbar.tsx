import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Box, Container, Drawer, IconButton, useMediaQuery, useTheme} from "@mui/material";
import Logo from "../../assets/camlin-group-logo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";

function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = (open: boolean) => {
        setDrawerOpen(open);
    }

    return (
        <>
            <AppBar position="sticky" color="transparent">
                <Container maxWidth={false} disableGutters>
                    <Toolbar>
                        <Box
                            component="img"
                            sx={{
                                height: 64,
                            }}
                            alt="Your logo."
                            src={Logo}
                        />
                        <Box sx={{display: "flex", justifyContent: isMobile ? "right" : "center", flexGrow: 1}}>
                            {isMobile ? (
                                    <IconButton color='inherit' onClick={() => toggleDrawer(true)}>
                                        <MenuIcon/>
                                    </IconButton>
                                )
                                :
                                (<Typography variant="h5">
                                    Transformers health monitoring app
                                </Typography>)}
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}>
                <Box sx={{width: 200}} role="presentation" onClick={() => toggleDrawer(false)}>
                    <Box
                        component="img"
                        sx={{
                            height: 64,
                        }}
                        alt="Your logo."
                        src={Logo}
                    />
                </Box>
            </Drawer>
        </>
    );
}

export default Navbar;