import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HomePagePic from '../../assets/homePagePic.png';
import {useNavigate} from "react-router-dom";
import {useTimer} from "../../TimerContext";
import { routeMap } from "../../App";

function Home() {
    const navigate = useNavigate();
    const { startTimer } = useTimer();

    const handlePlayButton = () => {
        navigate(routeMap.quiz1);
        startTimer(2400);

    };

    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url(${HomePagePic})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    zIndex: 1
                }}
            />

            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        color: '#0bfbfa',
                        fontWeight: 'bold',
                        marginBottom: '10px',
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '10vw',
                        textShadow: `
                            0 0 5px #0bfbfa,
                            0 0 10px rgba(11, 251, 250, 0.6),
                            0 0 15px rgba(11, 251, 250, 0.4)
                        `
                    }}
                >
                    ESCAPE
                </Typography>

                <Typography
                    variant="h1"
                    sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        marginBottom: '30px',
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '10vw',
                        textShadow: `
                            0 0 5px #fff,
                            0 0 10px rgba(255, 255, 255, 0.6),
                            0 0 15px rgba(255, 255, 255, 0.4)
                        `
                    }}
                >
                    GAME
                </Typography>

                <IconButton
                    sx={{
                        backgroundColor: '#00E5FF',
                        color: 'white',
                        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                        '&:hover, &:focus': {
                            backgroundColor: '#0bfbfa',
                            boxShadow: `
                                0 0 20px #fff,
                                0 0 30px #fff,
                                0 0 40px rgba(255, 255, 255, 0.7),
                                0 0 70px rgba(255, 255, 255, 0.5),
                                0 0 100px rgba(255, 255, 255, 0.3)
                            `
                        },
                        '&:active': {
                            backgroundColor: '#0bfbfa'
                        },
                        borderRadius: 2,
                        width: '10vw',
                    }}
                    onClick={handlePlayButton}
                >
                    <PlayArrowIcon />
                </IconButton>



            </Box>
        </Box>
    );
}

export default Home;
