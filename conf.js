exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // baseUrl: 'http://streamtv.net.ua/base',
    specs: ['./specs/wrestlers.js', './specs/login.js','./specs/search.js'],
    capabilities : {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
        count: 1
    },
    params: {
        login: 'auto',
        pwd: 'test'
    }
};