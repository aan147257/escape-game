import { Button } from "@mui/material";

interface AtomicButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    content: string ;
}

const AtomicButton = ({ onClick, disabled, content }: AtomicButtonProps) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            sx={{
                backgroundColor: "#00E5FF",
                color: "black !important",
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "18px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                padding: "12px 24px",
                borderRadius: "50px",
                boxShadow: "0px 4px 8px rgba(0, 229, 255, 0.6)",
                border: "2px solid #00E5FF",
                "&:hover": {
                    backgroundColor: "#00B8D4",
                    boxShadow: "0 0 12px rgba(0, 229, 255, 0.8) ",
                },
                transition: "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                "&:active": {
                    transform: "scale(0.95)",
                }
            }}
        >
            {content}
        </Button>

    );
};

export default AtomicButton;
