import { Modal, Box, Typography, Button } from "@mui/material";
import { FC, SetStateAction } from "react";
import './new-chat-modal.css'

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
                    <Button>Click me</Button>
                </div>
            </div>
        </div>
    );
}

export default NewChatModal;