const rest = new (require('rest-mssql-nodejs'))({
    user: 'unicornio',
    password: 'Chapi01$',
    server: 'advew.database.windows.net', // replace this with your IP Server
    database: 'productionAW' 
});

module.exports = {
    rest
}

