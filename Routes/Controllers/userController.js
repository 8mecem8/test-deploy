const userModel = require('../../Databases/MongoDb/Models/userModel')




exports.user = (req,res,next)=>
{
    res.send("user list is working")

}




exports.getUserInfo = async (req, res) => 
{
  const userId = req.params.userID;
  //const username = req.params.username;

  try 
  {
    const user = await userModel.findById(userId)
      
    res.status(200).json(user);
  } 
  catch (err) 
  {
    res.status(500).json(`There has been an error ${err}`)
  }
}





exports.updateAvatar = async(req, res) => 
{
  try 
  {
    const {_id} = req.body.user
    const Avatar = req.body.selectedAvatar[1]
  
   
    
   const updatedUser = await userModel.findOneAndUpdate(
    { _id },
    {
      avatarImage: {
        hasAvatar:true,
        image:Avatar
      }

    },
    {new: true}
  );

    console.log(updatedUser,'updatedUser')
    res.json(updatedUser);


  } catch (err) 
  {
      res.status(500).json(`There has been an error ${err}`)
  }
    

}







