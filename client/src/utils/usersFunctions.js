

const getNames = (data) => {
    const names = [];
    for (let i = 0; i < data.length; i++) {
        names.push(`${data[i].firstName} ${data[i].lastName}`)
    }
    return names
}

export default getNames