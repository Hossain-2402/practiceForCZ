import {useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {add_to_cart_action} from "./redux_file"
import db from "./firebase";
import firebase from "firebase/compat/app";
import "./Add_product_screen.css";


const Add_product_screen = ()=>{


const [products,setProducts] = useState([]);
const items = useSelector(state => state.products);
const [opacity,setOpacity] = useState(false);
const [newProductName,setNewProductName] = useState("");
const [newProductId,setNewProductId] = useState("");
const dispatch = useDispatch();


useEffect(()=>{
  db.collection('products').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    setProducts(snapshot.docs.map(doc => doc.data()));
  })
},[]);


const addItem = (item)=>{
  
  let alreadyAdded = false;
  for(let i=0;i<items.length;i++){
    if(items[i].id === item.id){
      alreadyAdded = true;
      break;
    }
    else{
      continue;
    }
  }
  if(!alreadyAdded) {
    dispatch(add_to_cart_action(item))
  }

}

const add_item_to_db = ()=>{
  if(newProductName !== "" && newProductId !== ""){
    db.collection('products').add(
      {
        name : newProductName,
        id : Number(newProductId),
        timestamp : firebase.firestore.FieldValue.serverTimestamp()
    }) ;
    setNewProductId("");
    setNewProductName("")
  }
}
  
  return (
    <div className="Add_product_screen">
      {opacity ? <div className="detail_of_new_product">
        <div className="exit_detail_new_btn" onClick={()=>{ setOpacity(false)}}>Exit</div>
        <input type="text" className="name_of_new_product" onChange={(e)=>{e.preventDefault();setNewProductName(e.target.value)}} placeholder="Name of New Product"/>
        <input type="text" className="id_of_new_product" onChange={(e)=>{e.preventDefault();setNewProductId(e.target.value)}} placeholder="id of New Product"/>
        <div className="add_new_item_btn" onClick={()=>{add_item_to_db()}}>Add</div>
      </div> : <></>}
      <div className="add_product_btn" onClick={()=>{ setOpacity(true)}}>Add New Product</div>
      {products.map((item,index) =>{
        return <div key={index} className="products">
          <div className="pos">{item.id}</div>
          <div className="add_to_cart_btn" onClick={()=>{  addItem(item) }}>Add To Cart</div>
        </div>
      })}

    </div>
  );
}

export default Add_product_screen;
