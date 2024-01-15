import { connect } from "react-redux"
import { useEffect,useState } from "react"
import { decrementFruit, incrementFruit } from "../redux/action";

const Cart = ({fruit,user,incrementItem,decrementItem}) => { 
    const [item]= useState({id:1, product:"",quantity:0})
    useEffect(()=>{
        console.log(fruit);
        console.log(user);
    })
    return ( 
    <div className="flex justify-center">  
        <div className=" m-5 p-2.5 w-96 border-green-400 rounded bg-gray-600">
            <h1>My Cart</h1>
                <div className="flex-auto flex-col">
                    {fruit.map((item)=>(
                        <div key={item.id} className="w-52 mt-1 p-1 border-orange-400 bg-red-400 rounded">
                            <span className="inline-block w-16 border-indigo-900">id: {item.id} Product:{item.fruit} Quantity : {item.quantity}</span>
                            <button className="bg-green-500 w-4 " onClick={()=>incrementItem(item.id)}>+</button>
                            <button className="bg-red-600 w-4" onClick={()=>decrementItem(item.id)}>-</button>
                        </div>
                    ))}
                </div>


        </div>

    </div>
    )
}
const mapStateToProps = (state)=> {
    return {
        fruit : state.card,
        user : state.user
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        incrementItem : function(id){
            dispatch(incrementFruit(id))

        },
        
        decrementItem : function(id){
            dispatch(decrementFruit(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
