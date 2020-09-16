console.log(
    Array.from(
        process.binding('uv')
            .getErrorMap()
            .entries()
    )
)