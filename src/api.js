
import axios from 'axios';

const API_URL = 'http://endpoint/wp-json/wc/v3';
const CONSUMER_KEY = '';
const CONSUMER_SECRET = '';

const api = axios.create({
  baseURL: API_URL,
  auth: {
    username: CONSUMER_KEY,
    password: CONSUMER_SECRET
  }
});

export const fetchOrders = (page = 1) => {
  return api.get(`/orders`, {
    params: {
      per_page: 10,
      page
    }
  });
};

export const updateOrderItem = (orderId, lineItemId, quantity) => {
  return api.put(`/orders/${orderId}`, {
    line_items: [
      {
        id: lineItemId,
        quantity
      }
    ]
  });
};
