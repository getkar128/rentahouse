import { createStore, action } from "easy-peasy";


export default createStore({
    posts: [],
    setPosts: action((state, payload)=>{
        state.posts= payload
    }),
    date: new Date(),
    setDate: action((state, payload) => {
        state.date = payload
    }),
    showCalendar: false,
    setShowCalendar: action((state, payload)=>{
        state.showCalendar = payload
    }),
    type: '',
    setType: action((state, payload) => {
        state.type = payload
    }),
    location: '',
    setLocation: action((state, payload) => {
        state.location = payload
    }),
    price: '',
    setPrice: action((state, payload) => {
        state.price = payload
    }),
})