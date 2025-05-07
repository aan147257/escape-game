import { useTranslation } from "react-i18next";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

function LanguageDropdown() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const commonStyles = {
        fontSize: "0.875rem",
        fontFamily: "'Orbitron', sans-serif",
        textShadow: "0 0 8px rgba(0, 229, 255, 0.8)",
    };

    return (
        <Select
            value={i18n.language}
            onChange={(e: SelectChangeEvent) => changeLanguage(e.target.value)}
            displayEmpty
            MenuProps={{
                PaperProps: {
                    sx: {
                        backgroundColor: "black",
                        color: "#FFFFFF",
                        textAlign: "center",
                        border: "2px solid #00E5FF",
                        boxShadow: "0 0 10px rgba(0, 229, 255, 0.5)",
                        "& ul": {
                            maxHeight: "20rem",
                            overflowY: "auto",
                            "&::-webkit-scrollbar": {
                                width: "6px",
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
                height: 40,
                minWidth: 80,
                "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                },
                "& .MuiSelect-select": {
                    color: "#FFFFFF",
                    ...commonStyles,
                    padding: "8px",
                    textAlign: "center",
                },
                svg: {
                    color: "#00E5FF",
                },
            }}
        >
            {["fr", "de", "mx"].map((lang) => (
                <MenuItem key={lang} value={lang} sx={commonStyles}>
                    {lang}
                </MenuItem>
            ))}
        </Select>
    );
}

export default LanguageDropdown;
