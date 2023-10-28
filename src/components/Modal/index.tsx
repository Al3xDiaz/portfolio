// @src/components/Modal.jsx

import React, { FC } from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

interface iprops{
    children:React.ReactElement;
    onClose?: ()=>void;
    show?: boolean;
    title: string;
}

export const Modal: FC<iprops> = (props) => {
    if (!props.show)
        return null
    return (
        <>
        <div className={styles.darkBG} onClick={props.onClose} />
        <div className={styles.centered}>
            <div className={styles.modal}>
            <div className={styles.modalHeader}>
                {/* header */}
                <h5 className={styles.heading}>{props.title}</h5>
            </div>
            <button className={styles.closeBtn} onClick={props.onClose}>
                <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={styles.modalContent}>
                {/* Body */}
                {props.children}
            </div>
            
            </div>
        </div>
        </>
    );
};