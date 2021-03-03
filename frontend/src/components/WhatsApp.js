import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
const WhatsApp = () => {

    return (
        <WhatsAppWidget phoneNumber='02616172541' message="Hola! 👋🏼 Bienvenido a GiftBox!, que podemos hacer por ti?" companyName="Gift Box" sendButton="Enviar"/>
    )
}
export default WhatsApp