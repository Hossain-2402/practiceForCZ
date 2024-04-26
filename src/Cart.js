import "./Cart.css"
import {useState} from "react";
import {useSelector} from "react-redux";
import {add_to_cart_action} from "./redux_file"

const Cart = ()=>{

  const items = useSelector(state => state.products);

  const [quantity,setQuantity] = useState(1);

  const increase_quantity = (item)=>{
    for(let i=0;i<items.length;i++){
      if(items[i].timestamp === item.timestamp){
        setQuantity(quantity+1); // The bug of not updating the id was resolved after using useState (dont know the reason though) 
        items[i].id ++;
        break;
      }
    }
  }

  return (
    <div className="Cart">
      {items.map((item,index) =>{
          return <div key={index} className="items">
            <div className="id">{item.id}</div>
            <div className="increase_quantity_btn" onClick={()=>{ increase_quantity(item) }}>Increase Amount</div>
          </div>
        })}

    </div>
  );
}

export default Cart;
