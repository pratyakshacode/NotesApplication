import jwt from 'jsonwebtoken';

export const authenticateUser = async (req, res, next) => {
    try {

        const cookies = req.cookies;
        const token = cookies['jwt'];

        if(!token) {
            return res.status(403).json({
                status: "FORBIDDEN",
                message: 'No token found in request'
            })
        }

       try {

         const decoded = jwt.decode(token);
         req.user = decoded;

       } catch (error) {
            console.log(error);
            return res.status(403).json({
                status: "FORBIDDEN",
                message: 'Invalid token found in request'
            })
       }

       next();

    } catch (error) {
        console.error('Error in authenticateUser', error);
        return res.status(500).json({
            status: "INTERNAL_SERVER_ERROR",
            message: "Error in authenticating the user"
        });
    }
}