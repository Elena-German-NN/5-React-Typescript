type Props = {
    widthCard?: string,   
    children?: any
}

export default function Card({children, widthCard}:Props) {
  
    return (
        <div className="card" style={{width: widthCard}}>            
            {children}
        </div>
    )
}
