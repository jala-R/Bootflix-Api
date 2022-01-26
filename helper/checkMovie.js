const jwt=require("jsonwebtoken");

function checkMovie(req,res,next){
    if(!req.cookies.mid)return res.status(404).send("movie not eligible");
    let payload=jwt.verify(req.cookies.mid,process.env.JWTSECRET);
    let moviePlan=payload.plan;
    let {plan:userPlan}=req.userPlan.getPlan();
    console.log(moviePlan,userPlan);
    next();
}

module.exports=checkMovie;