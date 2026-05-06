"use client";
import { useState, useEffect } from "react";
import styles from "./EditToggle.module.css";

export default function EditToggle() {
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const editables = document.querySelectorAll(
            "h1, h2, h3, h4, p, span, td, th, li"
        );
        editables.forEach((el) => {
            if (editing) {
                el.setAttribute("contenteditable", "true");
                el.classList.add(styles.editable);
            } else {
                el.removeAttribute("contenteditable");
                el.classList.remove(styles.editable);
            }
        });
    }, [editing]);

    const handleSave = () => {
        const main = document.querySelector("main");
        if (main) {
            const key = `techi_edit_${window.location.pathname}`;
            localStorage.setItem(key, main.innerHTML);
        }
        setEditing(false);
    };

    // Restore saved content on mount
    useEffect(() => {
        const key = `techi_edit_${window.location.pathname}`;
        const saved = localStorage.getItem(key);
        const main = document.querySelector("main");
        if (saved && main) {
            main.innerHTML = saved;
        }
    }, []);

    return (
        <div className={styles.editBar}>
            {editing ? (
                <>
                    <span className={styles.editLabel}>✏️ Edit Mode</span>
                    <button onClick={handleSave} className={styles.saveBtn}>저장</button>
                    <button onClick={() => setEditing(false)} className={styles.cancelBtn}>취소</button>
                </>
            ) : (
                <button onClick={() => setEditing(true)} className={styles.editBtn}>
                    ✏️
                </button>
            )}
        </div>
    );
}
