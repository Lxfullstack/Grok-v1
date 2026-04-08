export default function AutoModal({show}) {
    return (
        <div className={`modal ${show ? 'shown': ""}`}></div>
    )
}