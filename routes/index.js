const loginRoute = require('../routes/route_modlue/login_route');
const otherRoute = require('../routes/route_modlue/other_route');
const userRoute = require('../routes/route_modlue/user_route');


const Router = function (app) {
    app.use('/api/v1', loginRoute);
    app.use('/api/v1', otherRoute);
    app.use('/api/v1', userRoute);

}

module.exports = Router;