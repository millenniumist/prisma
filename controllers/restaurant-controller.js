exports.all = (req,res,next) => {
    res.json({message:"all"})
}

exports.restaurant = (req,res,next) => {
    res.json({message:"restaurant"})
}
exports.menu = (req,res,next) => {
    res.json({message:"menu"})
}