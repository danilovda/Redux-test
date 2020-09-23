import { CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT } from "./types";

export function increment(){
    return{
        type: INCREMENT
    }
}

export function decrement(){
    return{
        type: DECREMENT
    }
}

export function changeTheme(newTheme){
    return{
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export function disableButtons(){
    return{
        type: DISABLE_BUTTONS
    }
}

export function enableButton(){
    return{
        type: ENABLE_BUTTONS
    }
}

export function asyncIncrement(){
    return function(dispatch){
        dispatch(disableButtons())
        setTimeout(()=>{
            dispatch(increment())
            dispatch(enableButton())            
        },2000)
        
    }
}