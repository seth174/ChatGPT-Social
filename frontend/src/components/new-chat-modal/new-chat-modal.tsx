import { Box, Typography, Button, TextField } from "@mui/material";
import { FC, SetStateAction } from "react";
import './new-chat-modal.css'
import CloseIcon from '@mui/icons-material/Close';
import Modal from './../../global/modal/modal'

interface INewChatModalProps {
    open: boolean,
    setOpen: React.Dispatch<SetStateAction<boolean>>
}

const NewChatModal: FC<INewChatModalProps> = (props: INewChatModalProps) => {
    return (
        <Modal open={props.open} setOpen={props.setOpen}>
            <div className={"modal"}>
                <div className="close-icon-border" onClick={() => props.setOpen(false)}>
                    <CloseIcon className="close-icon" />
                </div>
                <div className="text-field-border">
                    <TextField
                        InputProps={{ style: { fontSize: 25 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        label={"What question can I answer?"}
                        variant="standard"
                        minRows={7}
                        multiline
                        fullWidth
                        maxRows={50}
                    />
                </div>
                <div className="button-border">
                    <Button className="submit-button" variant="contained" >Ask Question</Button>
                </div>
            </div>
        </Modal >
    );
}

export default NewChatModal;