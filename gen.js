const { log } = require("console");

const { stringify } = require("querystring");

console.log(
    "exports = module.exports = JSON.parse('" +
    JSON.stringify(
        Array.from(
            process.binding('uv')
                .getErrorMap()
                .entries()
        )
    ) +
    `')\nexports.os = "${process.platform}"`
)