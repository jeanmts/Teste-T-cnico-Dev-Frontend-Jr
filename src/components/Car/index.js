

export default function Car({photo, model, year}) {
    return (
        <>
            <div className="flex justify-center items-center">
                <img src={photo} alt={model} />
                <strong>{model}</strong>
                <strong>{year}</strong>
            </div>
        </>
    )
}