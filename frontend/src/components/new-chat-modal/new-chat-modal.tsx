import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import { FC, SetStateAction } from "react";
import './new-chat-modal.css'
import CloseIcon from '@mui/icons-material/Close';

interface INewChatModalProps {
    open: boolean,
    setOpen: React.Dispatch<SetStateAction<boolean>>
}



const NewChatModal: FC<INewChatModalProps> = (props: INewChatModalProps) => {
    return (
        <div>
            <div className={"dark-bg"} onClick={() => props.setOpen(false)} />
            <div className={"centered"}>
                <div className={"modal"}>
                    <div className="close-icon-border" onClick={() => props.setOpen(false)}>
                        <CloseIcon className="close-icon" />
                    </div>
                    <div className="text-field-border">
                        <TextField label={"What question can I answer?"} variant="standard" multiline fullWidth maxRows={50} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewChatModal;