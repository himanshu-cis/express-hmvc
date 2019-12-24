var neo4j = require('neo4j-driver')

module.exports = (function () {
    let driver = neo4j.driver(
        'bolt://localhost:7687',
        neo4j.auth.basic('neo4j', '123456')
    );

    return driver.session({
        database: 'graph.db'
    });
})();