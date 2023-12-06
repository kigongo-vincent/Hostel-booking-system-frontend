import React, { useContext, useEffect, useRef } from 'react';
import AuthContext from '../context/AuthContext';
import Room from './Room';
import { useNavigate } from 'react-router-dom';
const Paypal = () => {
  let navigate=useNavigate()
  const {pending} = useContext(AuthContext)
  const paypal = useRef();
  useEffect(() => {
    
    // Load the PayPal script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=AbCeQnCkWZD9HySep1ybyvwiEuuMdMKsB8lr6ro1k4Wyt2B64lzu8grud3GIaBxeYMfW_PN1We87WEEq&currency=USD'; // Replace with your PayPal client ID
    script.async = true;
    script.onload = () => {
      initializePaypalButton();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializePaypalButton = () => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                room:pending,
                amount: {
                  currency_code: 'USD',
                  value: '26.00', // Make sure to use a string for the value
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          // Handle the transaction approval
          return actions.order.capture().then((details) => {
            alert('Payment successful')
           
            // Add your custom logic here
          });
        },
        onError: (err) => {
          // Handle errors
          console.error('Error during PayPal checkout:', err);
        },
      })
      .render(paypal.current);
  };

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Make booking for {pending.number}
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
          <div className="modal-body" ref={paypal}></div>
        </div>
      </div>
    </div>
  );
};

export default Paypal;
