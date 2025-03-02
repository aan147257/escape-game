import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HomePagePic from '../assets/HomePagePic.png';
import {useTimer} from "../TimerContext";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const { startTimer } = useTimer();

    const handlePlayButton = () => {
        //navigate("/quiz1");
        startTimer(300);

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
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
                        fontFamily: 'Orbitron, sans-serif'
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
                        fontFamily: 'Orbitron, sans-serif'
                    }}
                >
                    GAME
                </Typography>
                <IconButton
                    sx={{
                        backgroundColor: '#019e9c',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#0bfbfa',
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
