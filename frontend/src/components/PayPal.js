import React, {useEffect, useRef} from 'react'

export const PayPal = ({total}) => {
    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons ({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {description: "Compra" ,
                        amount: {
                            value: total ,
                            currency_code:"USD"
                        }}
                    ]
                })
            }
        }).render(paypal.current)
        
    })
    return(
        <div ref={paypal}>
            
        </div>
    )
}