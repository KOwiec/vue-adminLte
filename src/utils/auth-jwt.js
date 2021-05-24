import jwt from "jsonwebtoken";
import publicKey from '@/api/jwt/public'
import SECRET from '@/api/jwt/secret'

import { getToken, setToken } from '@/utils/auth'

export function decodeToken(req, res, next) {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return new res(401, { some: "header" }, { errors: ["token missing"] })
    }

    try {
        const decoded = jwt.verify(token, SECRET);
        //return { decodedToken: decoded }
        req.user = decoded;
        next();
    } catch (ex) {
        return new res(400, { some: "header" }, { errors: ["token invalid"] })
    }
}

export function signToken() {
    const encoded = jwt.sign( {message: "mirage-jwt-token"}, SECRET );
    console.log('token: ' +encoded)
    return { encodedToken: encoded }
}

export function setJwtToken(obj) {
    jwt.verify(obj.data.token, publicKey, error => {
        //console.log(error)
        if (! error) {
            setToken(obj.data.token);
            //localStorage.setItem('token', response.data.token);
        }
    })
}





