export default function FloatingOrb({
    size = 320,
    duration = 8000,
    distance = 20,
    className = "",
}) {
    return (
        <div
            aria-hidden="true"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                "--ambient-duration": `${duration}ms`,
                "--ambient-distance": `${distance}px`,
            }}
            className={`
                ambient-glow
                ${className}
            `}
        />
    );
}