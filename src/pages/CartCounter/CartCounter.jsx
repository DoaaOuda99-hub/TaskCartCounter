import React, { useCallback, useState } from "react";
import "./CartCounter.css";
import CounterCell from "../../components/CounterCell/CounterCell";

const CartCounter = () => {
  // state
  const [count, setcount] = useState({total : 0,
     items : {
       1 : {
          isPressed : false , 
          count : 0
       } , 
       2 : {
        isPressed : false , 
        count : 0
       } ,
       3 : {
        isPressed : false , 
        count : 0
       }
     }
     });
  const counters = [1,2,3];
  // functions
  const increment = useCallback((id) =>
      /* Why CallBack ?  how we can enhance this code */
      setcount(prev => ({
        ...prev ,
        total : prev.items[id].isPressed ?prev.total : prev.total + 1 ,
        items: {
          ...prev.items , 
          [id] : {
           count : prev.items[id].count + 1 , 
           isPressed: true
          }
        }
      }))
    [count]
      );
  const decrement = useCallback((id) =>
      /* Why CallBack ?  how we can enhance this code */
      setcount(prev => ({
        ...prev ,
        total : !prev.items[id].isPressed || prev.items[id].count === 1 && prev.total >0? prev.total-1 : prev.total,
        items: {
          ...prev.items , 
          [id] : {
           count : prev.items[id].count -1 ,
           isPressed : prev.items[id].count === 0 ? false : true ,
          }
        }
       
      })), 
    [count]
      );
  return (
    <div>
      <h1>Cart Counter {count.total}</h1>
      {counters.map(counter => {
        return (
          <div key={counter}>
       <CounterCell
        count={count.items[counter].count}
        increment={increment}
        decrement={decrement}
        id = {counter}/>
          </div>
        )
      })}

    </div>
  );
};

export default CartCounter;
