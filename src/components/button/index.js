import { useState } from "react";
import "./btn.css";
export default function Button({ children, size = "", type = "" }) {
    const scroll0 = () => {
        if (type === 'scroll-top') {
            window.scrollTo(0, 0)
        }
    }
    const [tfBtn, setTfBtn] = useState("translateX(300%)")
    window.addEventListener("scroll", () => {
        const newScrollY = window.scrollY;
        if (type === 'scroll-top') {
            if (newScrollY > 100) {
                setTfBtn('translateX(0%)')
            } else if (newScrollY < 100) {
                setTfBtn('translateX(300%)')
            }
        }
    });

    const btnStyle = {}
    if (type === 'scroll-top') {
        btnStyle.transform = tfBtn
    }
    return (
        <button className={`btn ${size} ${type}`} style={btnStyle} onClick={() => { scroll0() }}>
            {children}
        </button>
    )
}