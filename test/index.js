const { equal, notEqual } = require('assert')
const { readdirSync } = require('fs')
const { resolve } = require('path')
const { listenerCount } = require('process')
const dirsArg = process.argv[2] || ""
let groups = []
let osList = []
let compCount = 0

// set default
let dirs = [
    resolve(__dirname, './darwin'),
    resolve(__dirname, './linux'),
    resolve(__dirname, './windows')
]

if (dirsArg.startsWith('-')) {
    if(dirsArg.startsWith('--dir')) {
        if(dirsArg.startsWith('--dir=')) {
            dirs = dirsArg.substring(6).split(',').map(path => resolve(path))
        }
        else {
            process.exitCode = 1
            console.error(`at least one directory must be specified`)
            return
        }
    }
    else {
        process.exitCode = 1
        console.error(`unknown flag: ${dirsArg}`)
        return
    }
}

groups = dirs
    .map(d => readdirSync(d).map(f => resolve(d, f)))
    .map(files => files.map(require))

osList = groups.map(g => g.map(({ os }) => os)).flat()

groups.forEach(
    maps => maps.forEach((map, i) => {
        if (i === 0) return

        compare(map, maps[i - 1])
    })
)

function compare(a, b) {
    console.log(`\nCompare\nA: "${a.os}"\nB: "${b.os}"\n`)

    notEqual(a, b, 'maps should not be reference-equal')
    equal(a.length, b.length, 'maps should have the same number of items')

    a = new Map(a)
    b = new Map(b)

    for (const errno of a.keys()) {
        const [ codeA, descA ] = a.get(errno)
        const [ codeB, descB ] = b.get(errno)

        equal(
            codeA, codeB, 
            `errno ${errno} should represent the same code on both systems, got "${codeA}" !== "${codeB}"`
        )
        equal(
            descA, descB, 
            `errno ${errno} should represent the same description on both systems, got "${descA}" !== "${descB}"`
        )
        compCount++

        console.log(`${errno} => [${codeA}]: ${descA} ✅`)
    }
}

console.log(`\nCompared ${osList.length} operating systems:`)
osList.forEach(os => console.log(` - "${os}"`))
console.log(`\n${compCount} tests passed! 🍭`)
