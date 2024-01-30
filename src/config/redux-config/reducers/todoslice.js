import { createSlice , nanoid} from "@reduxjs/toolkit";



export const todoslice = createSlice({
    name: 'Todos',
    initialState:{
        todos: [{
            title: 'Hello World',
            id: 1
        }]
    },
    reducers:{
        addTodo:(state , action)=> {
            state.todos.push({
                title: action.payload.title,
                id: nanoid()
            })
        },
        removeTodo:(state , action)=> {
            state.todos.splice(action.payload.index, 1);
        },
        // addTodo:(state , action)=> {
        //     state.todos.push(action.payload.index, 1 , {
        //         title: action.payload.title,
        //         id: nanoid()
        //     }
        // }
    }
})



export const {addTodo, removeTodo} = todoslice.actions
export default todoslice.reducer