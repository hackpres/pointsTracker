import userData from './userData.json';

const getUsers = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve({
            userData
        }), Math.random() * 1000)
    })
}

export default getUsers;