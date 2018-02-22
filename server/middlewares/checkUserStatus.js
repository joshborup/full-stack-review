module.exports = (req, res, next) => {
    
    if(!req.session.user){
        res.status(402).json({message: 'Unauthorized'});
    }   else {
        next()
    }
}