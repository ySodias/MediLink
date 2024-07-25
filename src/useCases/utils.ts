export function decodeToken(token: any) {
    
    var jwt = require('jsonwebtoken');

    const tokenVerificado = jwt.verify(token, process.env.PRIVATE_PEM)
    return tokenVerificado

}
