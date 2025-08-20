import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

// function sayHello(){        // you can write here functions or in the reducers
//     console.log("Hello World");
// }

export const todoSlice = createSlice({
    name: 'todo',  // name keyword is important you can not change it
    initialState,   // har slice ka initialState hota hai
    reducers: {         // in Context API we only declare the function but here we also write definition
        addTodo: (state, action) => {         //what will state do it actually gives what is in the current initial state or jo bhi state ho unka access degi

            const todo = {
                id: nanoid(),  // nanoid is used to generate unique id
                text: action.payload
            }
            state.todos.push(todo)      // state me jo todos hai jo humne bnaya hai usme hum apne ye wala todo push kar rhe hai

        },   

        // action isme values pass karte hai hum like hume todo remove karna hai toh uske liye id lagegi toh wo id idhar pass karte hai
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)  // isme state me jo todos hai wo aur action me jo todo id pass kari wo apas me comapre honge jo match ho jayega usko nhi lenge baki jo nhi honge unko leke state me bhej denge
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
//isse hum inn funtionality ko hi export kar rhe hai

export default todoSlice.reducer 
//store ko sare reducers ka list chiaiye hota hai jisse wo pta kar paye kya kam karna hai export karne ke liye