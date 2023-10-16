

const Details = ({ name, image, description, price,  }) => {

    return <article>
        <div>
            <img src={image} alt="" />
        </div>
        <div>
            <h3 style={{ display : 'flex' , justifyContent : 'space-between'}}>
                <span> {name}</span>
                <span>{price}</span>
            </h3 >
            <p>{description}</p>
        </div>
    </article>
}

export default Details