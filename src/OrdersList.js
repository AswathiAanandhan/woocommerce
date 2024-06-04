
import React, { useEffect, useState } from 'react';
import { fetchOrders, updateOrderItem } from './api';
import ReactPaginate from 'react-paginate';
import './OrdersList.css'; // Create a CSS file for styling

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadOrders(1);
  }, []);

  const loadOrders = (page) => {
    fetchOrders(page)
      .then(response => {
        setOrders(response.data);
        setPageCount(Math.ceil(response.headers['x-wp-total'] / 10));
      })
      .catch(err => setError(err.message));
  };

  const handlePageClick = (data) => {
    loadOrders(data.selected + 1);
  };

  const handleQuantityChange = (orderId, lineItemId, quantity) => {
    updateOrderItem(orderId, lineItemId, quantity)
      .then(() => loadOrders(1))
      .catch(err => setError(err.message));
  };

  return (
    <div>
      <h1>Orders List</h1>
      {error && <div className="error">{error}</div>}
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <div>Order ID: {order.id}</div>
            <div>Customer: {order.billing.first_name} {order.billing.last_name}</div>
            <div>Date: {order.date_created}</div>
            <div>Total: {order.total}</div>
            <div>Status: {order.status}</div>
            <ul>
              {order.line_items.map(item => (
                <li key={item.id}>
                  <div>{item.name}</div>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(order.id, item.id, parseInt(e.target.value))}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default OrdersList;
