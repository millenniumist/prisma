const notFound = (req,res) => {
    res.status(404).json({message:"Path not found on this server"})
}

module.exports = notFound