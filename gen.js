const { log } = require("console");

const { stringify } = require("querystring");

console.log(
    "exports = module.exports = JSON.parse('",
    JSON.stringify(
        Array.from(
            process.binding('uv')
                .getErrorMap()
                .entries()
        )
    ) + "')\n",
    'exports.os = process.platform;console.log(exports)'
)