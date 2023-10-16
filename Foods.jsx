
import Details from "./FoodDetail"
import food from "../data/foods"
import { useState } from "react"

const getCategories = ['all' , ...new Set(food.map(feed => feed.category))]
const Foods = () => {

    const [foods ,setFoods] = useState(food)

    const switchCategory = ( e ) =>{
        let button = e.target.className
            setFoods(() =>{
                return button ==='all' ? food : food.filter(food => food.category === button)
                
            })
        
    }
    return <main className="main">
        <div>
            <h4>
                Our Meals
            </h4>
        </div>
        <div style={styles.divButtons} onClick={switchCategory}>
            {
                getCategory.map((category , index ) => <button className={category} key= {index}>{category}</button>)
        </div>
        <section className="foodDetails">
            {foods.map((food , index) =><Details {...food} key={index}/>)}
        </section>
    </main>
}

export default Foods

const styles = {
    divButtons : {
        width : '60%',
        margin: '0 auto', 
        textAlign : 'center', 
        marginTop : '1rem',
        padding : '8px'
    }
}
