
class socketUsers
{
    constructor()
    {
        this.users = []
    }


    addUser = (userId, socketId) => 
    {
         !this.users.some((user) => user.userId == userId) && this.users.push({ userId, socketId });console.log('addddddddinggggg',this.users)
    };

    removeUser = (socketId) => 
    {
        return this.users = this.users.filter((user) => user.socketId !== socketId);
    };

    getUser = (userId) => 
    {
        return this.users.find((user) => user.userId === userId);
    };
    
    getAllUsers = () => 
    {
        return this.users
    };
}


module.exports = {socketUsers}