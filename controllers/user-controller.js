exports.root = (req,res,next) => {
    res.json({message:"root"})
}
exports.favorite = (req,res,next) => {
    res.json({message:"favorite"})
}