import React, {useEffect, useRef} from 'react'

export const PayPal = ({total}) => {

    console.log("ACÁ ESTÁ EL TOTAL")
    console.log(total)
    const paypal = useRef()
    useEffect(() => {
        window.paypal.Buttons ({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [{description: "Compra" ,amount: {value: total ,currency_code:"USD"}}],
                })
            },
            onApprove: (data, actions) =>{
                const order = actions.order.capture()
                alert("Compra realizada")
                console.log(order)
            },
            onError: (err) => {
                alert("ERROR")
                console.log("Hubo un error en Paypal")
            }
        }).render(paypal.current)
        
    })
    return(
        <div ref={paypal}>
            
        </div>
    )
}