const getPrices = ( array, objectKey ) => (
    array.map(el => (
        el[objectKey]
    )).reduce((acc, it) => (
        acc + it
    ), 0)
)

export default getPrices;
