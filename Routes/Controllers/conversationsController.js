const userModel = require("../../Databases/MongoDb/Models/userModel")
/* const conversationModel = require("../../Databases/MongoDb/Models/ConversationModel")










exports.GetAllUserConversations = async (req, res)=>
{   console.log(req.params.userID)
    try 
    {
        const conversations = await conversationModel.find({members: { $in: [req.params.userID] } })
       
        return res.status(200).json(conversations)
    
    } 
    catch (err)
    {
        res.status(400).json(`There has been an error ${err}`)
    }
}






exports.createUpdateConversation = async (req, res)=>
{

    const _id = req.body.conID ? req.body.conID : undefined

    try 
    {       
            if(_id)
            {
                const updatedConversation = await conversationModel.findOneAndUpdate(
                    {_id},
                    {
                        $push: { messages: req.body.message }
                    },
                    {new:true,}
                )
                return res.status(200).json(updatedConversation)
            }

            //else
             const newConverstaion = await new conversationModel(
                {
                    members:[...req.body.users],
                    messages:[req.body.message]
                }).save()

            return res.status(200).json(newConverstaion) 
    } 
    catch (err) 
    {
        res.status(400).json(`There has been an error ${err}`)
    }
} */