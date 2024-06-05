import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { fetchOrders, updateOrderItem } from './api';
import './OrdersList.css';

export const OrderList = () => {
    const [pageCount, setPageCount] = useState(0);
    const [orders, setOrders] = useState([]);
      const [error, setError] = useState(null);
      const [isExpand,setIsExpand]=useState(null)
      const [qty,setQty]=useState()
      const handlePageClick = (data) => {
        loadOrders(data.selected + 1);
      };

      const handleQuantityChange = (orderId, lineItemId,quantity) => {

        updateOrderItem(orderId, lineItemId, quantity)
          .then(() => loadOrders(1))
          .catch(err => setError(err.message));
      };

      const loadOrders = (page) => {
        fetchOrders(page)
          .then(response => {
            setOrders(response.data);
            setPageCount(Math.ceil(response.headers['x-wp-total'] / 10));
          })
          .catch(err => setError(err.message));
      };

      const clickDownArrow=(index)=>{
        setIsExpand(index);
      }
      const clickUpArrow=()=>{
        setIsExpand(null);
      }

      useEffect(() => {
        loadOrders(1);
      }, []);


  return (
    <div>
         <div style={{display:"flex",justifyContent:"space-between"}}>
            <h2>Order List</h2>
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
         <div className='new-global-table-container'>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody >
             {
                orders?.map((r,i)=>(
                    <>
                    <tr key={r.id}>
                        <td>{r.id}</td>
                        <td>{r.billing.first_name} {r.billing.last_name}</td>
                        <td>{r.date_created}</td>
                        <td>{r.total}</td>
                        <td>{r.status}</td>
                        <td>
                        {
                          isExpand === null ?
                           <div onClick={()=>clickDownArrow(i)}>
                              <i class="bi bi-arrow-down"></i>
                            </div>
                          :
                             <div onClick={()=>clickUpArrow()}>
                                <i class="bi bi-arrow-up"></i>
                              </div>
                        }
                       
                        </td>
                    </tr>

                  {
                      isExpand === i && (
                         <tr> 
                           <td colSpan={11}>
      <div  className="new-global-table-container" style={{backgroundColor:"#eef1f9",display:"flex",justifyContent:"center"}}>
      <table style={{width:"90%"}}>
        <thead>
         <tr>
            <th>Name</th>
            <th>Quantity</th>
           
         </tr>
        </thead>
        <tbody>
         {
             r?.line_items?.map((k,i)=>(
                 <tr>
                 <td>{k.name}</td>
                 <td>
                    <input 
                    type="text" 
                    value={k?.quantity}
                    onChange={(e) => handleQuantityChange(r.id,k.id,e.target.value)}
                
                  />
                    
                </td>
               
               </tr>
             ))
         }
       
        </tbody>
      </table>
      </div>
                           </td>
                         </tr>
                         )
                    }
                    </>
                ))
             }

            </tbody>
          </table>
        </div>
    </div>
  )
}









