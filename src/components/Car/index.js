

export default function Car({photo, model, year}) {
    return (
        <>
            <div className="flex justify-center items-center w-10	">
                <img className="w-10" src={photo} alt={model} />
                <strong>{model}</strong>
                <strong>{year}</strong>
            </div>
        </>
    )
}