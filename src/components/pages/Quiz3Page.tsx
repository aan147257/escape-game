import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizContainer from "../molecules/QuizContainer";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { routeMap } from "../../App";
import AtomicInput from "../atoms/AtomicInput";

function Quiz3Page() {
    const [value, setValue] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>("");
    const navigate = useNavigate();

    const options = Array.from({ length: 51 }, (_, i) => i);

    const handleInputChange = (val: string) => {
        setInputValue(val)
    };

    return (
        <QuizContainer onClick={() => navigate(routeMap.quiz4)}>
            <Box>
                <FormControl sx={{ flexGrow: 1 }}>
                    <Select
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        sx={{
                            alignItems: "center",
                            textAlign: "center",
                            flexGrow: 1,
                            minWidth: 60,
                            maxWidth: 200,
                            backgroundColor: "black",
                            border: "2px solid #00E5FF",
                            borderRadius: "8px",
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "none",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                border: "2px solid #00E5FF",
                            },
                            "& .MuiInputBase-input": {
                                textAlign: "center",
                                color: "#FFFFFF",
                                fontSize: "2rem",
                                fontFamily: "'Orbitron', sans-serif",
                                textShadow: "0 0 8px rgba(0, 229, 255, 0.8)",
                            },
                        }}
                    >
                        {options.map((num) => (
                            <MenuItem
                                key={num}
                                value={num}
                                sx={{
                                    padding: 0,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        textAlign: "center",
                                        color: "#FFFFFF",
                                        backgroundColor:"black",
                                        fontSize: "2rem",
                                        fontFamily: "'Orbitron', sans-serif",
                                        textShadow: "0 0 8px rgba(0, 229, 255, 0.8)",
                                        padding: "8px 16px", // optional: für etwas Platz
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
