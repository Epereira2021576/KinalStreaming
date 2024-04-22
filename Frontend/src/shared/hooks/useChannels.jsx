/* eslint-disable no-extra-boolean-cast */
import { useState } from "react";
import toast from "react-hot-toast";
import { getChannels as getChannelsRequest } from "../../services/api";

export const useChannels = () => {
    const [ channels, setChannels] = useState(null)

    const getChannels = async (isLogged = false) =>{
        const channelsData = await getChannelsRequest()
        if(channelsData.error){
            return toast.error(
                channelsData.e?.response?.data || 'Ocurrió un error al leer los canales'
            )
        }

        if(!isLogged){
            return setChannels({
                channels: channelsData.data.channels
            })
        }   

        setChannels({
            channels: channelsData.data.channels
        })

    }

    return{
        getChannels,
        isFetching: !Boolean(channels),
        allChannels: channels?.channels
    }
}