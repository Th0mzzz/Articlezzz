import "./btn.css";
export default function Button({ children, size = "" }) {
    return (
        <button className={`btn ${size}`}>
            {children}
        </button>
    )
}