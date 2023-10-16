import artic from './../images/artic.jpg'
import tokyo from './../images/tokyo.jpg'
import  japan from './../images/japan.jpg'
import paris from './../images/paris.jpg'
import plains from './../images/plains.jpg'
import seychelles from './../images/seychelles.jpg'

const foods = [ 
    {
        id : 0,
        name : 'shawarma', 
        image : artic,
        description : `if you need some home delight , you can simply hit us up and 
                        we'd get it to you in no time. simply pick up your phone and dial that number`,
        price : 7,
        category : 'dinner'
    }, 
    {
        id : 1,
        name : 'beef sausage', 
        image : tokyo,
        description : `if you need some home delight , you can simply hit us up and 
                    we'd get it to you in no time. simply pick up your phone and dial that number`,
        price : 56,
        category : 'lunch'
    }, 
    {
        id : 2,
        name : 'cinnamon rolls', 
        image : japan,
        description : `if you need some home delight , you can simply hit us up and 
        we'd get it to you in no time.`,
        price : 15,
        category : 'lunch'
    }, 
    {
        id : 3,
        name : 'italian sushi', 
        image : paris,
        description : `if you need some home delight ,
                      we'd get it to you in no time. simply pick up your phone and dial that number`,
        price : 87,
        category : 'dinner'
    }, 
    {
        id : 4,
        name : 'greek cheese', 
        image : plains,
        description : `if you need some home delight , you can simply hit us up and 
                    we'd get it to you in no time. simply pick up your phone and dial that number`,
        price : 16,
        category : 'breakfast'
    }, 
    {
        id : 5,
        name : 'calamari', 
        image : seychelles,
        description : ` you can simply hit us up and we'd get it to you in no time. 
                        simply pick up your phone and dial that number`,
        price : 16,
        category : 'breakfast'
    }, 
]

export default foods