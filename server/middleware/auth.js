import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        // console.log(req.headers.authorization);
        const isCustomAuth = token.length < 500;

         let decodedData;
         if(token && isCustomAuth){
            console.log("in custom");
            decodedData = jwt.verify(token, 'test');
            // console.log(decodedData);

            // console.log(decodedData?.id);
            req.userId = decodedData?.id;
            // console.log(req.userId);

         }else{
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
            // req.userId = user.request.sub;
            // console.log(user);
            console.log("in oauth");
            // console.log(decodedData);
         }
         next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;