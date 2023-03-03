import { FC, ReactNode, SetStateAction } from "react";
import './modal.css'

interface IModalProps {
    children: React.ReactNode,
    open: boolean,
    setOpen: React.Dispatch<SetStateAction<boolean>>
}

const Modal: FC<IModalProps> = (props: IModalProps) => {
    return (
        <div>
            <div className={"dark-bg"} onClick={() => props.setOpen(false)} />
            <div className={"centered"}>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;