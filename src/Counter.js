import { useDispatch, useSelector} from "react-redux";
import {incrementAction,decrementAction} from "./counterSlice";

export default function Counter () {
    const dispatch =useDispatch()

    const value =useSelector(state => state.counter.value)

    return (
        <>
            <div> Counter : {value} </div>
            <button onClick={()=> dispatch(incrementAction())} >increment</button>
            <button onClick={()=> dispatch(decrementAction())}>decrement</button>
        </>
    )
}