import './App.css';
import {useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {add_to_cart_action} from "./redux_file"
import db from "./firebase";



const Home = ()=>{


const [products,setProducts] = useState([]);
const items = useSelector(state => state.products);
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

const deleteItem = (item) => {

  db.collection('products').onSnapshot(snapshot=>{
    snapshot.docs.map(doc => {
      if(doc.data().id == item.id){
        const temp = doc.ref;
        temp.delete();
      }
    })
  })

};


// const deleteItem = (item)=>{
//   db.collection("products").doc(item.id).delete();
//   console.log("done");
// }
  
  return (
    <div className="Home">
      {products.map((item,index) =>{
        return <div key={index} className="products">
          <div className="pos">{item.name}</div>
          <div className="delete_item_btn" onClick = {()=>{ deleteItem(item) }}>×</div>
          <div className="add_to_cart_btn" onClick={()=>{  addItem(item) }}>Add To Cart</div>
        </div>
      })}

    </div>
  );
}

export default Home;
