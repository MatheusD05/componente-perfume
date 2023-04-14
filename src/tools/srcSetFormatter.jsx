export function srcSetFormatter (resolutions) {
    let srcSetString = ''

    resolutions.map((resolution, index) => {
        srcSetString = srcSetString.concat(index === 0 ? (`${resolution.metaData.relativePath} ${resolution.metaData.width}w`) : (`, ${resolution.metaData.relativePath} ${resolution.metaData.width}w`))
    })

    return srcSetString
}
