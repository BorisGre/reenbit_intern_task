const messages = [{id: 1, text: "abcdsome text"}, {id: 2, text: "second message"}, {id: 3, text: "awsome"}, {id: 4, text: "Can you read this message Alex ?"}]
const request = "Alex"

const users = {1: {name: 'Alex'}, 2: {name: 'Josefina'}}
const matchedUsers = []
messages.filter(m => { 
    const textPrepare = m.text.toLowerCase()
    const requestPrepare = request.toLowerCase()
        return textPrepare.match(requestPrepare)
})
    
Object.keys(users).forEach(uid => {          
    //console.log(users[uid].name.match(request) !== null)
    const namePrepare = users[uid].name.toLowerCase()
    const requestPrepare = request.toLowerCase()
    if(namePrepare.match(requestPrepare) !== null){ 
      matchedUsers.push(users[uid]) 
}})
const matchedMessages = messages.filter(m => m.text.match(request))

console.log(matchedMessages, matchedUsers);
