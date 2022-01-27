import {$authHost, $host} from "./index";

export const orderUser = async (type) => {
    const {data} = await $authHost.post('/api/user/sellfood', type)
    return data
}
