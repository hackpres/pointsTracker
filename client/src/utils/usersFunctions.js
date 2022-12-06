

const getNames = (data) => {
    const names = [];
    for (let i = 0; i < data.length; i++) {
        names.push(`${data[i].firstName} ${data[i].lastName}`)
    }
    return names
}

export const getPoints = (dataArr) => {
    let points = 0;
    dataArr.map((num) => {
        if(num > 100) {
            return points += 50 + ((num - 100) * 2)
        } else if (num > 50) {
            return points += num - 50
        }
        return points
    })
    return points
}

export default getNames