import { Types } from "../types/types"

const addNewMessage = newMessage => ({ type: Types.MESSAGE_ADD_NEW, payload: {newMessage} })

export {addNewMessage}

