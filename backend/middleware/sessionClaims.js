
// const { getAuth } = require ("@clerk/express");

// async function getSessionClaims(req, res, next){
//   const { sessionClaims } = getAuth(req);

//    if (!sessionClaims) {
    
//     return res.status(401).json({ error: "Unauthorized" });
//   }


//   const fullName = sessionClaims.fullName

//   const primaryEmail = sessionClaims.primaryEmail
 
  
//  console.log(fullName);
//  console.log(primaryEmail);

//  req.user = { fullName, primaryEmail }

//   next();

//  }


//  module.exports  = getSessionClaims;

