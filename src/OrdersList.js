
import React, { useEffect, useState } from 'react';
import { fetchOrders, updateOrderItem } from './api';
import ReactPaginate from 'react-paginate';
import './OrdersList.css'; // Create a CSS file for styling

const OrdersList = () => {
  const [orders, setOrders] = useState(
    [
      {
        "id": 727,
        "parent_id": 0,
        "number": "727",
        "order_key": "wc_order_58d2d042d1d",
        "created_via": "rest-api",
        "version": "3.0.0",
        "status": "processing",
        "currency": "USD",
        "date_created": "2017-03-22T16:28:02",
        "date_created_gmt": "2017-03-22T19:28:02",
        "date_modified": "2017-03-22T16:28:08",
        "date_modified_gmt": "2017-03-22T19:28:08",
        "discount_total": "0.00",
        "discount_tax": "0.00",
        "shipping_total": "10.00",
        "shipping_tax": "0.00",
        "cart_tax": "1.35",
        "total": "29.35",
        "total_tax": "1.35",
        "prices_include_tax": false,
        "customer_id": 0,
        "customer_ip_address": "",
        "customer_user_agent": "",
        "customer_note": "",
        "billing": {
          "first_name": "John",
          "last_name": "Doe",
          "company": "",
          "address_1": "969 Market",
          "address_2": "",
          "city": "San Francisco",
          "state": "CA",
          "postcode": "94103",
          "country": "US",
          "email": "john.doe@example.com",
          "phone": "(555) 555-5555"
        },
        "shipping": {
          "first_name": "John",
          "last_name": "Doe",
          "company": "",
          "address_1": "969 Market",
          "address_2": "",
          "city": "San Francisco",
          "state": "CA",
          "postcode": "94103",
          "country": "US"
        },
        "payment_method": "bacs",
        "payment_method_title": "Direct Bank Transfer",
        "transaction_id": "",
        "date_paid": "2017-03-22T16:28:08",
        "date_paid_gmt": "2017-03-22T19:28:08",
        "date_completed": null,
        "date_completed_gmt": null,
        "cart_hash": "",
        "meta_data": [
          {
            "id": 13106,
            "key": "_download_permissions_granted",
            "value": "yes"
          },
          {
            "id": 13109,
            "key": "_order_stock_reduced",
            "value": "yes"
          }
        ],
        "line_items": [
          {
            "id": 315,
            "name": "Woo Single #1",
            "product_id": 93,
            "variation_id": 0,
            "quantity": 2,
            "tax_class": "",
            "subtotal": "6.00",
            "subtotal_tax": "0.45",
            "total": "6.00",
            "total_tax": "0.45",
            "taxes": [
              {
                "id": 75,
                "total": "0.45",
                "subtotal": "0.45"
              }
            ],
            "meta_data": [],
            "sku": "",
            "price": 3
          },
          {
            "id": 316,
            "name": "Ship Your Idea &ndash; Color: Black, Size: M Test",
            "product_id": 22,
            "variation_id": 23,
            "quantity": 1,
            "tax_class": "",
            "subtotal": "12.00",
            "subtotal_tax": "0.90",
            "total": "12.00",
            "total_tax": "0.90",
            "taxes": [
              {
                "id": 75,
                "total": "0.9",
                "subtotal": "0.9"
              }
            ],
            "meta_data": [
              {
                "id": 2095,
                "key": "pa_color",
                "value": "black"
              },
              {
                "id": 2096,
                "key": "size",
                "value": "M Test"
              }
            ],
            "sku": "Bar3",
            "price": 12
          }
        ],
        "tax_lines": [
          {
            "id": 318,
            "rate_code": "US-CA-STATE TAX",
            "rate_id": 75,
            "label": "State Tax",
            "compound": false,
            "tax_total": "1.35",
            "shipping_tax_total": "0.00",
            "meta_data": []
          }
        ],
        "shipping_lines": [
          {
            "id": 317,
            "method_title": "Flat Rate",
            "method_id": "flat_rate",
            "total": "10.00",
            "total_tax": "0.00",
            "taxes": [],
            "meta_data": []
          }
        ],
        "fee_lines": [],
        "coupon_lines": [],
        "refunds": [],
        "_links": {
          "self": [
            {
              "href": "https://example.com/wp-json/wc/v3/orders/727"
            }
          ],
          "collection": [
            {
              "href": "https://example.com/wp-json/wc/v3/orders"
            }
          ]
        }
      },
      {
        "id": 723,
        "parent_id": 0,
        "number": "723",
        "order_key": "wc_order_58d17c18352",
        "created_via": "checkout",
        "version": "3.0.0",
        "status": "completed",
        "currency": "USD",
        "date_created": "2017-03-21T16:16:00",
        "date_created_gmt": "2017-03-21T19:16:00",
        "date_modified": "2017-03-21T16:54:51",
        "date_modified_gmt": "2017-03-21T19:54:51",
        "discount_total": "0.00",
        "discount_tax": "0.00",
        "shipping_total": "10.00",
        "shipping_tax": "0.00",
        "cart_tax": "0.00",
        "total": "39.00",
        "total_tax": "0.00",
        "prices_include_tax": false,
        "customer_id": 26,
        "customer_ip_address": "127.0.0.1",
        "customer_user_agent": "mozilla/5.0 (x11; ubuntu; linux x86_64; rv:52.0) gecko/20100101 firefox/52.0",
        "customer_note": "",
        "billing": {
          "first_name": "João",
          "last_name": "Silva",
          "company": "",
          "address_1": "Av. Brasil, 432",
          "address_2": "",
          "city": "Rio de Janeiro",
          "state": "RJ",
          "postcode": "12345-000",
          "country": "BR",
          "email": "joao.silva@example.com",
          "phone": "(11) 1111-1111"
        },
        "shipping": {
          "first_name": "João",
          "last_name": "Silva",
          "company": "",
          "address_1": "Av. Brasil, 432",
          "address_2": "",
          "city": "Rio de Janeiro",
          "state": "RJ",
          "postcode": "12345-000",
          "country": "BR"
        },
        "payment_method": "bacs",
        "payment_method_title": "Direct bank transfer",
        "transaction_id": "",
        "date_paid": null,
        "date_paid_gmt": null,
        "date_completed": "2017-03-21T16:54:51",
        "date_completed_gmt": "2017-03-21T19:54:51",
        "cart_hash": "5040ce7273261e31d8bcf79f9be3d279",
        "meta_data": [
          {
            "id": 13023,
            "key": "_download_permissions_granted",
            "value": "yes"
          }
        ],
        "line_items": [
          {
            "id": 311,
            "name": "Woo Album #2",
            "product_id": 87,
            "variation_id": 0,
            "quantity": 1,
            "tax_class": "",
            "subtotal": "9.00",
            "subtotal_tax": "0.00",
            "total": "9.00",
            "total_tax": "0.00",
            "taxes": [],
            "meta_data": [],
            "sku": "",
            "price": 9
          },
          {
            "id": 313,
            "name": "Woo Ninja",
            "product_id": 34,
            "variation_id": 0,
            "quantity": 1,
            "tax_class": "",
            "subtotal": "20.00",
            "subtotal_tax": "0.00",
            "total": "20.00",
            "total_tax": "0.00",
            "taxes": [],
            "meta_data": [],
            "sku": "",
            "price": 20
          }
        ],
        "tax_lines": [],
        "shipping_lines": [
          {
            "id": 312,
            "method_title": "Flat rate",
            "method_id": "flat_rate:25",
            "total": "10.00",
            "total_tax": "0.00",
            "taxes": [],
            "meta_data": [
              {
                "id": 2057,
                "key": "Items",
                "value": "Woo Album #2 &times; 1"
              }
            ]
          }
        ],
        "fee_lines": [],
        "coupon_lines": [],
        "refunds": [
          {
            "id": 726,
            "refund": "",
            "total": "-10.00"
          },
          {
            "id": 724,
            "refund": "",
            "total": "-9.00"
          }
        ],
        "_links": {
          "self": [
            {
              "href": "https://example.com/wp-json/wc/v3/orders/723"
            }
          ],
          "collection": [
            {
              "href": "https://example.com/wp-json/wc/v3/orders"
            }
          ],
          "customer": [
            {
              "href": "https://example.com/wp-json/wc/v3/customers/26"
            }
          ]
        }
      }
    ]
  );
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
                    type="text"
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
