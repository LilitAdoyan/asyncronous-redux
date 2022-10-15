import { applyMiddleware, combineReducers, legacy_createStore,  } from "redux";
import {currengtUserReducer, initialCurrentUser} from '../features/currentUser/currenUserSlice'
import {initialTodos, todosReducer} from '../features/todos/todosSlice'
import thunk from "redux-thunk";

// function loger(store:any){
//     return function(next:any){
// return function(action:any){
//     console.log('yay');
//     action.payload+='z';
//     setTimeout(()=>{next(action);},2000)
    
// }
//     }
// }


// const logger2=(store:any)=>(next:any)=>(action:any)=>{
//     console.log('ok');
//     action.payload+='d';

//     return next(action)
// }

const store=legacy_createStore(combineReducers<{
    todos: any
    currengtUser: {};
}>({
    todos:todosReducer,
    currengtUser:currengtUserReducer,
}), {
    //@ts-ignore
    friends:[],
    posts:[],
    todos:initialTodos,    currengtUser: initialCurrentUser
    
}, 
applyMiddleware(thunk)
);

export default store;