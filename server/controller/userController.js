module.exports = {
    getUser: (req, res) => {
        res.json(req.session.user);
    },
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send();
    }
}