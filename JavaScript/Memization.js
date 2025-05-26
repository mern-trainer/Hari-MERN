// memoization -> optimization technique

const obj = {}

const sum = (a, b) => {
    const key = `${a}-${b}`
    if (obj[key]) {
        console.log("from cache")
        return obj[key];
    }
    console.log(key)
    console.log("Calculating...")
    const s = a + b
    obj[key] = s;
    console.log(obj)
    return s
}

console.log(sum(10, 20))
console.log(sum(10, 20))
console.log(sum(102, 0))
console.log(sum(10, 20))
console.log(sum(10, 20))
console.log(sum(10, 90))
console.log(sum(10, 90))

const cache = {}

const api_calling = async (id) => {
    if (cache[id]) {
        console.log("from cache")
        return cache[id]
    }    
    console.log("fetching from api")
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await response.json()
    cache[id] = data
    return data
}

const getProducts = async () => {
    let products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)
    products = await api_calling(1)
    console.log(products)

    console.log("Completed")
}

getProducts()