import React, { useState, useEffect } from 'react';
import { Box, Grid2 as Grid } from '@mui/material';

interface ColorGridProps {
    setColorsRef: (colorsGetter: () => string[]) => void;
}

const ColorGrid = ({ setColorsRef }: ColorGridProps) => {
    const [colors, setColors] = useState(
        Array.from({ length: 6 }, (_, id) => ({ id, color: 'transparent' }))
    );

    const colorOptions = ['#000000', '#5dadfd', '#fd3e3e', '#ffffff', '#fdfd2f', '#4efd4e'];

    const handleBoxClick = (id: number) => {
        setColors((prevColors) =>
            prevColors.map((item) => {
                if (item.id !== id) return item;

                const currentIndex = colorOptions.indexOf(item.color);
                const newColor =
                    currentIndex === -1
                        ? colorOptions[0] // Wenn "transparent" oder andere Farbe -> nimm erste Farbe
                        : colorOptions[(currentIndex + 1) % colorOptions.length];

                return { ...item, color: newColor };
            })
        );
    };

    useEffect(() => {
        setColorsRef(() => colors.map((c) => c.color));
    }, [colors, setColorsRef]);

    return (
        <Box sx={{ padding: '10px', textAlign: 'center', maxWidth: '30vw', margin: 'auto' }}>
            <Grid container spacing={2} justifyContent="center">
                {colors.map(({ id, color }) => (
                    <Grid size={{ xs: 6 }} key={id}>
                        <Box
                            onClick={() => handleBoxClick(id)}
                            sx={{
                                width: '12vw',
                                height: '25vh',
                                backgroundColor: color,
                                borderRadius: '15px',
                                boxShadow: '0px 4px 8px rgba(0, 229, 255, 0.6)',
                                border: '2px solid #00E5FF',
                                '&:hover': {
                                    boxShadow: '0 0 12px rgba(0, 229, 255, 0.8)',
                                },
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ColorGrid;
