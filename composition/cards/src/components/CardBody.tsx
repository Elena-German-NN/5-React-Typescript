import CardLink from "./CardLink"

type Props = {
    title: string,   
    children?: any
}

export default function CardBody({children, title}:Props) {
    return (
        <>
            <div className="card-body"> 
            <h5 className="card-title">{title}</h5>             
                <p className="card-text">{children}</p>
                <CardLink linkPath='...' linkText='Go somewhere'/>
            </div>
        </>
    )
}
