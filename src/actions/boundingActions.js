
const boundingActions = (bindActionCreators, dispatch, actions) => {

  return bindActionCreators({
      'addNewMessage': actions.addNewMessage,
    },
     dispatch
  )  
}
export default boundingActions  