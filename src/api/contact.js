import emailJS from "@emailjs/browser";
import {CONSTANTS} from "../utils/constants";


const sendMessage = async (data) => {
    return emailJS.send( CONSTANTS.SERVICE_ID, CONSTANTS.TEMPLATE_ID, {
        name: data.name,
        email: data.email,
        message: data.message
    }, CONSTANTS.PUBLIC_KEY)
}

export const MESSAGE_API = {sendMessage};
