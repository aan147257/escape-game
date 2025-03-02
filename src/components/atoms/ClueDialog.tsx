import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";

interface ClueDialogProps {
    open: boolean;
    handleClose: () => void;
    dialogPopupContent: string;
}

const ClueDialog: React.FC<ClueDialogProps> = ({ open, handleClose, dialogPopupContent }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            sx={{
                "& .MuiDialog-paper": {
                    backgroundColor: "#333",
                    color: "white",
                    width: "90%",
                    maxWidth: "400px",
                    padding: "20px",
                    textAlign: "center",
                    borderRadius: "10px",
                },
                "& .MuiBackdrop-root": {
                    backgroundColor: "rgba(255,255,255,0.59)",
                },
            }}
        >
            <DialogTitle sx={{ color: "white" }}>Hinweis</DialogTitle>
            <DialogContent>
                <Typography>{dialogPopupContent}</Typography>
            </DialogContent>
        </Dialog>
    );
};

export default ClueDialog;
