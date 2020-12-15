let crypto = require('crypto')
let localData = {}
const resolver = {
    Query:{
        getMessage: () => {
            return "Hello World from Panacloud"
        },
        getName: () => {
            return "A Good Name"
        },
        getAllMessages: () => {
            return [{message: "Test", id : "2456"},{message: "Test", id : "1234"}]
        }  
    },
    Mutation:{
        createMessage : (_,{input}) =>{
            let id = crypto.randomBytes(10).toString('hex');
            console.log(id);
            localData[id] = {id,...input.message};
            return {id,...input};
        }
    }
}

module.exports = resolver