import { changePassword as changePasswordRequest } from "../../services"
import { toast } from "react-hot-toast"
export const useChangePassword = () => {
    const changePassword = async ( password, newPassword ) => {
        const responseData = await changePasswordRequest( { password, newPassword } )
        if ( responseData.error ) {
            return toast.error( responseData.e?.response?.data || 'No es posible actualizar la contraseña' )
        }
        toast.success( 'Contraseña actualizada!' )
    }



    return {
        changePassword
    }
}
