import React, { useState } from 'react';
import { Box, Typography, Button, Grid2 as Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ColorGrid = () => {
    const [colors, setColors] = useState(
        Array.from({ length: 8 }, (_, id) => ({ id, color: 'white' }))
    );
    const correctOrder = ['#fd3e3e', '#fd8658', '#fdfd2f', '#4efd4e', '#5dadfd', '#ad65fd', '#fd7fc0', '#b3b3b3'];
    const navigate = useNavigate();

    const handleBoxClick = (id: number) => {
        const colorOptions = ['#fd3e3e', '#fd8658', '#fdfd2f', '#4efd4e', '#5dadfd', '#ad65fd', '#fd7fc0', '#b3b3b3'];
        setColors((prevColors) =>
            prevColors.map((item) =>
                item.id === id
                    ? { ...item, color: colorOptions[(colorOptions.indexOf(item.color) + 1) % colorOptions.length] }
                    : item
            )
        );
    };

    const checkOrder = () => {
        if (JSON.stringify(colors.map((item) => item.color)) === JSON.stringify(correctOrder)) {
            alert('✔️ Richtig! Du hast die Farben in der richtigen Reihenfolge gesetzt.');
            navigate('/2');
        } else {
            alert('❌ Falsch! Versuche es noch einmal.');
        }
    };

    return (
        <Box sx={{ padding: '20px', textAlign: 'center', maxWidth: '60vw', margin: 'auto' }}>
            <Typography variant="h6" sx={{ color: 'white', marginBottom: '5vh' }}>
                Setze die Farben in die richtige Reihenfolge:
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {colors.map(({ id, color }) => (
                    <Grid size={{xs:3}} key={id}>
                        <Box
                            onClick={() => handleBoxClick(id)}
                            sx={{
                                width: '12vw',
                                height: '25vh',
                                backgroundColor: color,
                                border: '2px solid #333',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
            <Button
                onClick={checkOrder}
                sx={{
                    marginTop: '6vh',
                    backgroundColor: '#0bfbfa',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#019e9c',
                    },
                }}
            >
                Überprüfen
            </Button>
        </Box>
    );
};

export default ColorGrid;
