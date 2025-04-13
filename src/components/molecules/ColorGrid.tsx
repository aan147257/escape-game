import React, { useState, useEffect } from 'react';
import { Box, Grid2 as Grid } from '@mui/material';

interface ColorGridProps {
    setColorsRef: (colorsGetter: () => string[]) => void;
}

const ColorGrid = ({ setColorsRef }: ColorGridProps) => {
    const [colors, setColors] = useState(
        Array.from({ length: 8 }, (_, id) => ({ id, color: 'white' }))
    );
    const colorOptions = ['#fd3e3e', '#fd8658', '#fdfd2f', '#4efd4e', '#5dadfd', '#ad65fd', '#fd7fc0', '#b3b3b3'];

    const handleBoxClick = (id: number) => {
        setColors((prevColors) =>
            prevColors.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        color: colorOptions[(colorOptions.indexOf(item.color) + 1) % colorOptions.length],
                    }
                    : item
            )
        );
    };

    useEffect(() => {
        setColorsRef(() => colors.map((c) => c.color));
    }, [colors, setColorsRef]);

    return (
        <Box sx={{ padding: '20px', textAlign: 'center', maxWidth: '60vw', margin: 'auto' }}>
            <Grid container spacing={3} justifyContent="center">
                {colors.map(({ id, color }) => (
                    <Grid size={{ xs: 3 }} key={id}>
                        <Box
                            onClick={() => handleBoxClick(id)}
                            sx={{
                                width: '12vw',
                                height: '25vh',
                                backgroundColor: color,
                                borderRadius: "15px",
                                boxShadow: "0px 4px 8px rgba(0, 229, 255, 0.6)",
                                border: "2px solid #00E5FF",
                                "&:hover": {
                                    boxShadow: "0 0 12px rgba(0, 229, 255, 0.8) ",
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
