import { TextField } from "@mui/material";

interface AtomicInputProps {
    value: string;
    onChange: (value: string, index?: number) => void;
    index?: number;
    label?: string;
}

const AtomicInput = ({ value, onChange, index, label }: AtomicInputProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value, index);
    };

    return (
        <TextField
            value={value}
            onChange={handleChange}
            label={label}
            variant="outlined"
            sx={{
                flexGrow: 1,
                minWidth: 60,
                maxWidth: 200,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "2px solid #00E5FF",
                borderRadius: "8px",
                textAlign: "center",
                input: {
                    textAlign: "center",
                    color: "#FFFFFF",
                    fontSize: "2rem",
                    fontFamily: "'Orbitron', sans-serif",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "2px solid #00E5FF",
                },
                "& .MuiInputBase-input": {
                    textShadow: "0 0 8px rgba(0, 229, 255, 0.8)",
                },
            }}
        />

    );
};

export default AtomicInput;
