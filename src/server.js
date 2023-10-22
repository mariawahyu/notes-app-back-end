const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const init = async () => {
    const server = Hapi.server({
        port: 5100,
        host: process.argv.includes('--host') ? process.argv[process.argv.indexOf('--host') + 1] : 'localhost',
        routes:{
            cors:{
                origin:["*"],
            },
        },
    });
    server.route(routes);
    await server.start();
    console.log(`Server kelompok 2 sedang berjalan pada ${server.info.uri}`);
};

init();
