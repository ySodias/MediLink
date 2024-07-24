export function validarLogin(req: any, res: any, next: any) {
    
    var jwt = require('jsonwebtoken');
    const { token } = req.headers
    try {
        jwt.verify(token, process.env.PRIVATE_PEM)
        next()
    } catch (erro) {
        res.status(401).json({msg: 'Usuario nao autenticado'})
    }
}
