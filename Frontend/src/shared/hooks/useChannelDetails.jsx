import { useState } from "react";
import { toast } from "react-hot-toast";
import { getChannelDetails as getChannelDetailsRequest } from "../../services";

export const useChannelDetails = () => {
    const [channelDetails, setChannelDetails] = useState();

    const getChannelDetails = async ( channelId ) => {
        const responseData = await getChannelDetailsRequest( channelId );
        if ( responseData.error ) {
            return toast.error( responseData.e?.response?.data || "No es posible obtener los detalles del canal" );
        }
        setChannelDetails( responseData );
    }

    return {
        channelDetails,
        isFetching: !channelDetails,
        getChannelDetails
    }
}