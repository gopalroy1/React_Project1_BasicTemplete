
const Details = ({title,description})=>{
    return (
        <div className="details">
            <h2>{title}</h2>
            <p>
                {description}
            </p>
            <hr></hr> 
        </div>
    )
}
export default Details;