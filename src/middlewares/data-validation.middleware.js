const validateData = (req, res, next) =>{
    const { id, title } = req.body

    if(!id || !title){
        return res.send("No id or Title");
    }

    return next();
};

module.exports = {
    validateData
}