export function createStore(rootReduser, initialState){
    let state = rootReduser(initialState, {type: '__INIT__'})
    
    const subscribers = []

    return{
        dispatch(action){
            state = rootReduser(state, action)            
            subscribers.forEach(sub => sub())
        },
        subscribe(clalback){
            subscribers.push(clalback)
        },
        getState(){
            return state
        }
    }
}