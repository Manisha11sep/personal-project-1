module.exports = function( req, res, next ) {
    const { session } = req;
  
  if (!session.user) {
      session.user = { isAdmin: false, cart: [], total: 0.00 };
    } 
    
    next();
  };