// import React from 'react'
// import { useState } from 'react';
// import './Payment.css'
// import { useStateValue } from './StateProvider';
// import { useStripe } from '@stripe/react-stripe-js'
// import { useHistory } from 'react-router';
// export default function Payment({amount, stripePk}) {
    
//     const [ {cart}, dispatch ] = useStateValue();

//     // PAYMENT PART
//     const [deliveryDetails, setDeliveryDetails] = useState({})

//     const [useMpesa, setUseMpesa] = useState(false);
//     const [useMpesaExpress, setUseMpesaExpress] = useState(false);
//     const [useCard, setUseCard] = useState(false);
//     const [isPaymentLoading, setPaymentLoading] = useState(false);
//     const [paySuccess, setPaySuccess] = useState(false);
//     const [payFailure, setPayFailure] = useState(false);

//     // STRIPE
//     let history = useHistory();
//     const stripe = useStripe();

//     const manageStripe = async (cardDetails) => {
//         console.log("Managing Stripe", cardDetails)

//         if(stripe){
//             const {error, paymentMethod} = await stripe.createPaymentMethod({
//                 type: 'card',
//                 card: cardDetails,
//             });

//             if (error) {
//                 console.log('Error: ', error);
//             } else {
//                 console.log('PaymentMethod: ', paymentMethod);
//             }
//         }else {
//             return;
//         }
//     }


//     const handleMpesaOrCard = (e) =>{
//         try{
//             if(e.target.classList.contains("mpesa_regular")){
//                 useMpesa ? setUseMpesa(false) : setUseMpesa(true);
//                 useMpesaExpress && setUseMpesaExpress(false);
//                 useCard && setUseCard(false)
//             }else if(e.target.classList.contains("mpesa_express")){
//                 useMpesa && setUseMpesa(false);
//                 useMpesaExpress ? setUseMpesaExpress(false) : setUseMpesaExpress(true);
//                 useCard && setUseCard(false);
//             }else if(e.target.classList.contains("card_pay")){
//                 useMpesa && setUseMpesa(false);
//                 useMpesaExpress && setUseMpesaExpress(false);
//                 useCard ? setUseCard(false) : setUseCard(true);
//             }
//         }catch(error){
//             console.log("ERROR ", error)
//         }
//     }
//         let cartDetails = cart.map( ({name, quantity}) => ({name, quantity}))
//         // console.log(cartDetails, {amount: amount})

//     // COMPLETE PAYMENT

//     const postFormCart = async () => {
//         const inputFields = document.querySelectorAll(".card_payment_form .input_fields");
//         let myformData = [];
//         inputFields.forEach( paydata => myformData.push({ [paydata.name]: paydata.value}))
//         let cartDetails = cart.map( ({name, quantity}) => ({name, quantity}))
//         // let allInfo = [...myformData, ...cartDetails, {amount: amount}];
//         // let stripeInfo = [...myformData, {amount: amount}];


//         let allInfo = [{cardDetails: [...myformData]}, {items: [...cartDetails]}, {amount: amount}]; // send this as email or message to shades of ruth after order has been confirmed
 
//         // What will stripe need ==> just the details and the total amount

//         // POST
//         const response = await fetch('/checkout',{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json;charset=utf-8',
//                 'Accept' : 'application/json'
//             },
//             body: JSON.stringify(allInfo),
//             cache: 'no-cache', 

//         } );

//         manageStripe(myformData)

//         return response;
//     }

//     const handleCardPayment = (e) => {
//         e.preventDefault();
//         setPaymentLoading(true);
//         postFormCart()
//             .then( response => response.json())
//             .then(data => {
//             // console.log('Success:', data);
//             return data;
//         })
//             .catch( error => console.log("POST FORM CART ERROR: ", error))
//     }
//     return (
//         <section className="payment_section">
//             <h3>Payment Options</h3>
//             <p>Please Select your preferred Payment Method</p>

//             <div className="select_payment_option">
//                 <div className="payment_choice" onClick={handleMpesaOrCard}>
//                     <img className="mpesa_regular" src="images/mpesa.png" alt="Lipa na Mpesa"/>
//                 </div>
//                 <div className="payment_choice" onClick={handleMpesaOrCard}>
//                     <img className="mpesa_express" src="images/mpesa_express.png" alt="Mpesa Express"/>
//                 </div>                
//                 <div className="payment_choice" onClick={handleMpesaOrCard}>
//                     <img className="card_pay" src="images/card.png" alt="Card Payments"/>
//                 </div>                                      
//             </div>
//         {
//             useMpesa ?                   
//                 <div className="mpesa_process_div">
//                     <div className="actual_process">
//                     <h3>Lipa na M-pesa</h3>
//                     <p>1. Open your M-pesa</p>
//                     <p>2. Select Buy Goods and Services</p>
//                     <p>3. Enter Till No. <strong>567890</strong></p>
//                     <p>4. Enter the Amount: <strong>{amount}</strong></p>
//                     <p>5. Enter Your Pin</p>
//                     <p>6. Confirm the name <strong>"Business Name"</strong></p>
//                     </div>  
//                     <form className="mpesa_process_form">
//                     <p>Please provide the following information to confirm payment</p>
//                     <div className="checkout_row_form">
//                         <h5 className="login_labels">Enter Phone Number:</h5>
//                         <input className="input_fields" type="text" required></input>
//                     </div>
//                     <div className="checkout_row_form">
//                         <h5 className="login_labels">M-PESA Confirmation Code:</h5>
//                         <input className="input_fields" type="text" required></input>
//                     </div>                                            
//                     </form>
//                 </div>
            
//             : useMpesaExpress ?

//                 <div className="mpesa_stk_div">
//                     {/* SEND POST REQUEST AND GET SUCCESS/ FAILURE */}
//                     <p>Receive M-pesa Payment Prompt</p>
//                     <form className="send_mpesa_stk" action="POST">
//                         <div className="checkout_row_form">
//                             <h5 className="login_labels">Enter Phone Number:</h5>
//                             <input className="input_fields" type="text" required></input>
//                         </div>                                
//                     </form>
//                 </div>
            
//             : useCard &&
//                 <div className="stripe_card_div">
//                     <h3>Online Secure Card Payment</h3>
//                     <p>Please provide your card information below</p>
//                         <form className="card_payment_form" action="/card_payment" method="POST" onSubmit={handleCardPayment}>
//                         <div className="checkout_row_form">
//                             <h5 className="login_labels">Email Address:</h5>
//                             <input name="email" className="input_fields" type="text" required></input>
//                         </div>                                
//                         <div className="checkout_row_form">
//                             <h5 className="login_labels">Name on Card:</h5>
//                             <input name="card_name" className="input_fields" type="text" required></input>
//                         </div>   
//                         <div className="checkout_row_form">
//                             <h5 className="login_labels">Card Information:</h5>
//                             <input name="card_number" className="input_fields" type="text" size="20" data-stripe="number" required></input>
//                         </div>   
//                         <div className="checkout_row_form">
//                             <h5 className="login_labels">Expiration (MM/YY)</h5>
//                             <input name="exp_month" className="input_fields smaller" type="text" size="2" data-stripe="exp_month" required></input>
//                             <span>/</span>
//                             <input name="exp_year" className="input_fields smaller" type="text" size="2" data-stripe="exp_year" required></input>
//                         </div>   
//                         <div className="checkout_row_form">
//                             <h5 className="login_labels">CVC: </h5>
//                             <input name="cvc" className="input_fields" type="text" size="4" data-stripe="cvc" required></input>
//                         </div>  
//                         <button 
//                             type="submit"
//                             className="card_submit checkout_product_subtotal btns" 
//                             > { isPaymentLoading ? "Processing Payment..." : "Place Order" }
//                         </button> 
//                     </form>  
//                 </div>
//             } 
//         </section>
//     )
// }
