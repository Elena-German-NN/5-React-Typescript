
type Props = {
    imagePath?: string,
    imageAlt?: string,
    text?: string
}

export default function CardImage({text, imagePath, imageAlt }: Props) {

    return (<>
    <div className='card-img'>
        <img src={imagePath} className="card-img-top" alt={imageAlt} />
        <div className="image-cap card-text">{text}</div>
        </div>
    </>
    )
}



