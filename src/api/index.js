import axios  from "axios";

const token = '5oqn72f3oa7IWIe9mohfGOlsZnnDWks59aF3blRGF3LG87lsnwsVN7R35a9Q'

const roomRequest = axios.create({
  baseURL: 'https://challenge.thef2e.com/api/thef2e2019/stage6',
  headers: {
    Authorization: `Bearer ${token}`,
    accept: 'application/json'
  }
})

export const getRooms = () => roomRequest.get('/rooms');
export const getInfomation = (id) => roomRequest.get(`/room${id}`);
export const bookingRoom = (id, data) => roomRequest.post(`/room/${id}`, data);