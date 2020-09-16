const { equal } = require('assert')
const gha = require('./errnomaps_gha')
const loc = require('./errnomaps_loc')

for (const osName in gha) {
    const a = gha[ osName ]
    const b = loc[ osName ]

    equal(a.length, b.length)

    for (let i = 0; i < a.length; i++) {
        const [ errnoA, [ codeA, descA ] ] = a[i]
        const [ errnoB, [ codeB, descB ] ] = b[i]

        equal(errnoA, errnoB)
        equal(codeA, codeB)
        equal(descA, descB)

        console.log(`${osName}: ${errnoA} [${codeA}] ${descA} ✅`)
    }
}

console.log('\nAll tests passed! 🍭')