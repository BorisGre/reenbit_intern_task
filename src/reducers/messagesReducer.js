import mockedMessages from '../redux-states/messages'
import { Types } from '../types/types'

const messagesReducer = (localStorage) => {
      
    return (state = (localStorage.messages ? localStorage.messages : mockedMessages) , action) => {
    switch (action.type) {
        case Types.MESSAGE_ADD_NEW:
            return {
                ...state,
                messages: [...state.messages, action.payload.newMessage] 
            }   
 
        default:
            return state
        }
    }
}

export default messagesReducer;