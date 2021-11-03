import axios from 'axios'

export const getServers = () => {
    return axios.get('http://localhost:4454/servers')
}

export const getServer = (serverId: number) => {
    return axios.get(`http://localhost:4454/servers/${serverId}`)
}

export const turnOnServer = (serverId: number) => {
    return axios.put(`http://localhost:4454/servers/${serverId}/on`)
}

export const turnOffServer = (serverId: number) => {
    return axios.put(`http://localhost:4454/servers/${serverId}/off`)
}

export const rebootServer = (serverId: number) => {
    return axios.put(`http://localhost:4454/servers/${serverId}/reboot`)
}

export default {
    getServers,
    getServer,
    turnOnServer,
    turnOffServer,
    rebootServer
}