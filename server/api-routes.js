// Filename: api-routes.js

/** all api endpoint shall be defined in this file */
export let router = require('express').Router();// import and init the express router
import { index,add,view,update,del }  from './controller';// Import contact controller

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});


// Contact routes
router.route('/homes')
    .get(index)
    .post(add);

router.route('/homes/:home_id')
    .get(view)    
    .put(update)
    .delete(del);