export default function Button({ text, onClick }: any) {
    return (
        <button onClick={onClick}>{text}</button>
    )
}