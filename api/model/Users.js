const db = require('../config')
const { hash, compare, hashSync } = require('bcrypt')
const { createToken } = require('../middleware/AuthenticateUser')

class Users{
    fetchUsers(req, res){
        const query = 
        `SELECT userID, firstName, lastName, gender,userDOB, userRole, emailAdd, userPass, profileUrl
         FROM Users`
    
         db.query(query, (err, results) =>{
            if(err){
                res.json({
                    status: res.statusCode,
                    msg: err.message + ' Something went wrong trying to fetch all users'
                })
            } else{
                res.json({
                    status: res.statusCode,
                    msg: "successfully fetched all users",
                    results
                })
            }
         })
    }
    
    fetchUser(req, res){
        const query = 
        `SELECT userID, firstName, lastName, gender,userDOB, userRole, emailAdd, userPass, profileUrl
         FROM Users
         WHERE userID = ?`
    
         const { userID } = req.params
    
         db.query(query, [userID], (err, result) =>{
            if(err){
                res.json({
                    status: res.statusCode,
                    msg: err.message + ' Something went wrong trying to fetch a user'
                })
            } else{
                res.json({
                    status: res.statusCode,
                    msg: `successfully fetched user with ID: ${userID}`,
                    result
                })
            }
         })
    }
    
    async registerUser(req, res){
        const query = 
        `INSERT INTO Users
        SET ?`
        const data = req.body
        data.userPass = await hash(data.userPass, 15)
    
        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }
    
    
        db.query(query, [data], (err) =>{
            if(err){
                res.json({
                    status: res.statusCode,
                    msg: err.message + ' Something went trying to create a user'
                })
            } else {
                let token = createToken(user)
                res.json({
                    status: res.statusCode,
                    token,
                    data,
                    msg: "User has been successfully created"
                })
            }
        })
    }

    updateUser(req, res) {
    const data = req.body;
    if (data.userPass) {
      data.userPass = hashSync(data.userPass, 15);
    }
    const query = `
        UPDATE Users
        SET ?
        WHERE userID = ?
        `;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "successful update.",
      });
    });
  }
  deleteUser(req, res) {
    const query = `
        DELETE FROM Users
        WHERE userID = ?
        `;
    const { userID } = req.params
    db.query(query, [userID], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The user has been deleted.",
      });
    });
  }
    
}


module.exports = Users
