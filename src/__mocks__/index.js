import {randProductName, randCreditCardCVV, randLines} from '@ngneat/falso';

const createData = () => {
    return new Promise((resolve, reject) => {
        try{
            const prices = randCreditCardCVV({length: 40})
            const name = randProductName({length:40})
            const description = randLines({length:40})
            const data = [];
            for(let i = 0; i < 40; i++){
                data.push({precio: prices[i], name: name[i], description: description[i]})
            }
            resolve(data)
        }catch (e) {
            reject(e => console.error(e))
        }
    })
}
export default createData;
