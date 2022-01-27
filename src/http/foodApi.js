import {$authHost, $host} from "./index";

export const createFastFood = async (type) => {
    const {data} = await $authHost.post('/api/foods/fastfood', type)
    return data
}

export const createNationalFood = async () => {
    const {data} = await $authHost.post('/api/foods/nationalfood')
    return data
}

export const fetchAllFastFood = async () => {
    const {data} = await $host.get('/api/foods/fastfood')
    return data
}
export const fetchAllNationalFood = async () => {
    const {data} = await $host.get('/api/foods/nationalfood')
    return data
}
export const fetchComplex = async () =>{
    const {data } = $host.get('/api/complex')
    return data
}
