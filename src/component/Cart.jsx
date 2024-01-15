import { connect } from "react-redux"
import { useEffect } from "react"

const Cart = ({fruit,user}) => {
    useEffect(()=>{
        console.log(fruit);
        console.log(user);
    })
    return ( 
    <div>  
        <div className="m-5 p-2.5 w-96 border-green-400 rounded bg-gray-600">
            <h1>My Cart</h1>
                <div className="flex-auto flex-col">
                    {fruit.map((item)=>(
                        <div key={item.id} className="w-52 mt-1 p-1 border-orange-400 bg-red-400 rounded">
                            <span className="inline-block w-16 border-indigo-900">id: {item.id} {item.fruit} Q : {item.quantity}</span>
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
export default connect(mapStateToProps,null)(Cart)