import { loadCurentUser } from "./currentUserAPI";

export function currengtUserReducer(state={}, action:any){if(action.type==='edit-current-user-name'){

    return{...state, name:action.payload} 
}
return {...state}}

export const initialCurrentUser={name:"Joe Smoe"};

export function selectName(state:any){
    return state.currengtUser.name
    
    }

export function editName(newName:any){
return {
type:'edit-current-user-name', payload: newName
  }
}
//action creator
export function loadUser(){
    return (dispatch:any)=>{
        return loadCurentUser().then((loadedUser:any)=>{dispatch(editName(loadedUser.name))})
    }
}