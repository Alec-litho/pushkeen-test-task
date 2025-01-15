
export default function cardValidation(req, res, next) {
    if (!req.body["body"] || !req.body["title"]) {
        return res.status(400).json({ message:"some fields are empty" });
    }
    next();
}