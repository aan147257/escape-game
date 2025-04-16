import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material";
import AtomicButton from "../atoms/AtomicButton";

interface ResultDialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: () => void;
    dialogContent: string;
}

const ResultDialog = ({ open, onClose, onSubmit, dialogContent }: ResultDialogProps) => {
    const handleClose = (_event: object, reason: string) => {
        if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
            onClose();
        }
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            disableEscapeKeyDown
            sx={{
                '& .MuiPaper-root': {
                    backgroundColor: "#121212",
                    borderRadius: "16px",
                    border: "2px solid #00E5FF",
                    color: "#FFFFFF",
                    px: 4,
                    py: 3,
                    maxWidth: "500px",
                    textAlign: "center",
                }
            }}
        >
        <DialogContent>
                <DialogContentText
                    sx={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 300 }}
                >
                    {dialogContent}
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ justifyContent: "center", mt: 2 }}>
                <AtomicButton content="Continuer" onClick={onSubmit} />
            </DialogActions>
        </Dialog>
    );
};

export default ResultDialog;
