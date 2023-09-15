const db = require("../config");

class Products{
    // get all products
fetchProducts(req, res){
    const query =
      "SELECT prodID, prodName, quantity, prodDesc, category, amount, prodUrl FROM Products";
  
    db.query(query, (err, results) => {
      if(err){
          res.json({
              status: res.statusCode,
              msg: "Something went wrong"
          })
      } else{
          res.json({
              status: res.statusCode,
              results
          })
      }
    });
  };
  
  // get single product
  fetchProduct(req, res){
    const query = `SELECT prodID, prodName, quantity, prodDesc, category, amount, prodUrl 
       FROM Products
       WHERE prodID = ?`;
    const { prodID } = req.params;
  
    db.query(query, [prodID], (err, result) => {
      if (err) {
        res.json({
          status: res.statusCode,
          err: err.message,
          msg: "Something went wrong trying to fetch a product",
        });
      } else {
        res.json({
          status: res.statusCode,
          result,
        });
      }
    });
    
  };
  
  // create a product
  addProduct(req, res){
    const query = `INSERT INTO Products SET ?`;
    const data = req.body;
  
    db.query(query, [data], (err) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: err.message,
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "Product has been successfully created",
        });
      }
    });
  };
  
  // update a product
  updateProduct(req, res){
    const query = `UPDATE Products 
       SET ?
       WHERE prodID = ?`;
    const data = req.body;
    const { prodID } = req.params;
  
    db.query(query, [data, prodID], (err) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: `Something went wrong trying to update product. prodID: ${data.prodID}`,
          err: err.message
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: `Product has been successfully updated. prodID: ${prodID}`,
        });
      }
    });
  };

  // Delete Product
  deleteProduct(req, res){
    const query = `DELETE FROM Products WHERE prodID = ?`
    const { prodID } = req.params

    db.query(query, [prodID], (err) =>{
      if(err) throw err
      res.json({
        status: res.statusCode,
        msg: "Product has been deleted"
      })
    })
  }
  
//   // Sort functions
  
//   // Feature products
  featureProds(req, res){
    const query = 
    `SELECT prodID, prodName, quantity, prodDesc, category, amount, prodUrl
     FROM Products
     WHERE category = 'Skateboard Complete'
     LIMIT 6`

     db.query(query, (err, results) =>{
      if(err){
        res.json({
          msg: "Something went wrong",
          err: err.message
        })
      } else{
        res.json({
          status: res.statusCode,
          results
        })
      }
     })
  }

  completeSkateboards(req, res){
    const query = 
    `SELECT prodID, prodName, quantity, prodDesc, category, amount, prodUrl
     FROM Products
     WHERE category = 'Skateboard Complete'`

     db.query(query, (err, results) =>{
      if(err){
        res.json({
          msg: "Something went wrong",
          err: err.message
        })
      } else{
        res.json({
          status: res.statusCode,
          results
        })
      }
     })
  }

  deckSkateboards(req, res){
    const query = 
    `SELECT prodID, prodName, quantity, prodDesc, category, amount, prodUrl
     FROM Products
     WHERE category = 'Skateboard Deck'`

     db.query(query, (err, results) =>{
      if(err){
        res.json({
          msg: "Something went wrong",
          err: err.message
        })
      } else{
        res.json({
          status: res.statusCode,
          results
        })
      }
     })
  }
  trucksSkateboards(req, res){
    const query = 
    `SELECT prodID, prodName, quantity, prodDesc, category, amount, prodUrl
     FROM Products
     WHERE category = 'Trucks'`

     db.query(query, (err, results) =>{
      if(err){
        res.json({
          msg: "Something went wrong",
          err: err.message
        })
      } else{
        res.json({
          status: res.statusCode,
          results
        })
      }
     })
  }

  // Sort by product name
  sortProd(req, res){
    const query = `SELECT prodID, prodName, quantity, prodDesc, category, amount
       FROM Products
       ORDER BY prodName`;
  
    db.query(query, (err, results) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: err.message,
        });
      } else {
        res.json({
          status: res.statusCode,
          results,
        });
      }
    });
  };
  
//   // Sort by product price
  sortPrice(req, res){
    const query = `SELECT prodID, prodName, quantity, prodDesc, category, amount
       FROM Products
       ORDER BY amount`;
  
    db.query(query, (err, results) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: err.message,
        });
      } else {
        res.json({
          status: res.statusCode,
          results,
        });
      }
    });
  };

  probCategory(req, res){
    const query = `SELECT prodID, prodName, quantity, prodDesc, category, amount
    FROM Products
    WHERE category LIKE ?`

    const { category } = req.params

    db.query(query, ['%' + category + '%'], (err, results) =>{
        if (err) {
            res.json({
              status: res.statusCode,
              msg: err.message,
            });
          } else {
            res.json({
              status: res.statusCode,
              results,
            });
          }
    })
  }
  
  // testing
  showSkateboards(req, res){
    const query = `SELECT prodID, prodName, quantity, prodDesc, category, amount
       FROM Products
       WHERE category = 'Skateboard Complete'`;
  
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        results,
      });
    });
  };
}



module.exports = Products
