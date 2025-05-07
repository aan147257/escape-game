import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizContainer from "../molecules/QuizContainer";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { routeMap } from "../../App";
import AtomicInput from "../atoms/AtomicInput";

function Quiz3Page() {
    const [value, setValue] = useState<number>(10);
    const [inputValue, setInputValue] = useState<string>("");
    const navigate = useNavigate();

    const options = Array.from({ length: 41 }, (_, i) => i + 10);

    const handleInputChange = (val: string) => {
        setInputValue(val)
    };

    return (
        <QuizContainer onClick={() => navigate(routeMap.quiz4)}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <FormControl sx={{ width: 150 }}>
                    <Select
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        displayEmpty
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    backgroundColor: "black",
                                    border: "2px solid #00E5FF",
                                    boxShadow: "0 0 10px rgba(0, 229, 255, 0.5)",
                                    "& ul": {
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                        maxHeight: "25rem",
                                        overflowY: "auto",
                                        "&::-webkit-scrollbar": {
                                            width: "8px",
                                        },
                                        "&::-webkit-scrollbar-thumb": {
                                            backgroundColor: "#00E5FF",
                                            borderRadius: "4px",
                                        },
                                        "&::-webkit-scrollbar-track": {
                                            backgroundColor: "black",
                                        },
                                    },
                                },
                            },
                        }}
                        sx={{
                            backgroundColor: "black",
                            border: "2px solid #00E5FF",
                            borderRadius: "8px",
                            height: 60,
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                border: "2px solid #00E5FF",
                            },
                            "& .MuiSelect-select": {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#FFFFFF",
                                fontSize: "2rem",
                                fontFamily: "'Orbitron', sans-serif",
                                textShadow: "0 0 8px rgba(0, 229, 255, 0.8)",
                                padding: 0,
                                height: "100%",
                                width: "100%",
                                textAlign: "center",
                            },
                            svg: {
                                color: "#00E5FF",
                            },
                        }}
                    >
                    {options.map((num) => (
                            <MenuItem
                                key={num}
                                value={num}
                                sx={{
                                    padding: 0,
                                    height: 50,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "black",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        textAlign: "center",
                                        color: "#FFFFFF",
                                        fontSize: "2rem",
                                        fontFamily: "'Orbitron', sans-serif",
                                        textShadow: "0 0 8px rgba(0, 229, 255, 0.8)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                    }}
                                >
                                    {num}
                                </Box>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <AtomicInput
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </Box>
        </QuizContainer>
    );
}

export default Quiz3Page;
