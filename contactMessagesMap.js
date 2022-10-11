 const  messages =  [{  "id": 1, 
                        "text": "You are the worst!", 
                        "sender_id": 2, 
                        "receiver_id": 5, 
                        "read_status": true,  
                        "draft": false,
                        "send_date": 1651790933353,
                    },    
                    {   "id": 2, 
                        "text": "We are losing money! Quick!", 
                        "sender_id": 1, 
                        "receiver_id": 5, 
                        "read_status": true,  
                        "draft": false,
                        "send_date": 1631790933353,
                    },  
                    {   "id": 3, 
                        "text": "Quickly come to the meeting room 1B, we have a big server issue", 
                        "sender_id": 3, 
                        "receiver_id": 5, 
                        "read_status": true, 
                        "draft": false, 
                        "send_date": 1660090933353,
                    },  
                    {   "id": 4, 
                        "text": "Hurry up!", 
                        "sender_id": 4, 
                        "receiver_id": 5, 
                        "read_status": true,
                        "draft": false,  
                        "send_date": 1611790933353,
                    },  
                    {   "id": 5, 
                        "text": "We are losing money! Quick!", 
                        "sender_id": 1, 
                        "receiver_id": 5, 
                        "read_status": false,
                        "draft": false,  
                        "send_date": 1601790933353,
                    }, 
                    {   "id": 6, 
                        "text": "I'm having breakfast right now, can't you wait for 10 minutes?", 
                        "sender_id": 5, 
                        "receiver_id": 1, 
                        "read_status": true, 
                        "draft": false, 
                        "send_date": 1591790933353,
                    }
                    ]
                
const userID = 5;            

const contactMessagesMap = {}

messages.forEach(m => {
    
    if(m.receiver_id === userID && m.draft === false){
        const key = m.read_status === true ? 'readed': 'unreaded'
   
        if(contactMessagesMap[m.sender_id] === undefined){
            
            contactMessagesMap[m.sender_id] = {'readed': [], 'unreaded': []}
        }
        
        const userMessages = contactMessagesMap[m.sender_id]
        const sendDateCondition = m.send_date > userMessages[key]['send_date']; 
        
        if(key === 'readed' && sendDateCondition){
            
            userMessages[key] = [m] 
        }
        
        contactMessagesMap[m.sender_id][key].push(m)
    }})
    
    const contactID = 1;
    const unreadedMessagesCount = contactMessagesMap[contactID]['unreaded'].length;
    
    const unreadedMessages = contactMessagesMap[contactID]['unreaded']
    const readedMessages = contactMessagesMap[contactID]['readed']
    const lastMessage = unreadedMessagesCount === 0 
        ? unreadedMessages[unreadedMessages.length-1]
        : readedMessages[readedMessages.length-1]
          
    const unsorted =       
      [...contactMessagesMap[contactID]['readed'], ...contactMessagesMap[contactID]['unreaded']];
      
    const sorted = [...unsorted].sort((p,c) => p.send_date - c.send_date);
    
    const lastMessageDate = sorted[sorted.length-1]['send_date']
    const dateContactMap = {}
    const datesArray = []
    datesArray.push(lastMessageDate)
    dateContactMap[lastMessageDate] = contactID
    
    datesArray.sort((p,c) => p-c)
    const sortedContactMessagesMapArray = datesArray.map(date => {
            const contactID = dateContactMap[date]
            return {[contactID]: contactMessagesMap[contactID]}
        })
        
    console.log(sortedContactMessagesMapArray)
    //console.log(Object.keys(contactMessagesMap))
    
console.log(unsorted, sorted, lastMessageDate);          
console.log(contactMessagesMap ,unreadedMessagesCount, lastMessage);
