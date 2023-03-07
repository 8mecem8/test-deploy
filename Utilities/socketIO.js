const { Server } = require("socket.io");
const { socketUsers } = require("./socketUsers");



 exports.initSocketIo = (server) => 
{
    const io = new Server(server,
        {
            cors: {origin: ["*"]},
            handlePreflightRequest: (req, res) => 
                {
                    const headers = {
                    "Access-Control-Allow-Headers": "Content-Type, Authorization",
                    "Access-Control-Allow-Origin": req.header('Origin'), //or the specific origin you want to give access to,
                    "Access-Control-Allow-Credentials": true
                }}
        });
    

        let {addUser,removeUser,getUser,getAllUsers} = new socketUsers()

        

    io.on('connection', (socket) => 
    {
        //console.log('New Connections Established from Frontend using socket.io',socket.id)
        io.emit('welcome',"welcome to server, Connection has been established")


        socket.on('addUser',(userDbID)=>
        {
            addUser(userDbID,socket.id) // add user to user list to easly send data directly user regarless of chancing socket id
            io.emit("getUsers", getAllUsers()); // sent user list to frontend as we need online users list
            //console.log('============>',getAllUsers())
        })


        socket.on('sendMessage',({sender,receiverId,usermessage})=>
        {
           let user = getUser(receiverId)

           if(user)
           {
           io.to(user.socketId).emit('getMessage',{sender,usermessage})
           }
        })


        socket.on("disconnect", () => 
        {
            //console.log("a user disconnected!");
            removeUser(socket.id);
        
            io.emit("getUsers", getAllUsers());
        });
    })
} 