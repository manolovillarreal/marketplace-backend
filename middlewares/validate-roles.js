const { response } = require('express')


const isAdminRole = ( req, res = response, next ) => {

    if ( !req.user ) {
        return res.status(500).json({
            msg: 'Trying to validate role without authentication first'
        });
    }

    const { role, name } = req.user;
    
    if ( role !== 'ADMIN_ROLE' ) {
        return res.status(401).json({
            msg: `${ name } is not Admin Role- Can't do this`
        });
    }

    next();
}


const hasRole = ( ...roles  ) => {
    return (req, res = response, next) => {
        
        if ( !req.user ) {
            return res.status(500).json({
            msg: 'Trying to validate role without authentication first'
            });
        }

        if ( !roles.includes( req.user.role ) ) {
            return res.status(401).json({
                msg: `Unauthorize access`
            });
        }


        next();
    }
}



module.exports = {
    isAdminRole,
    hasRole
}