import axios from "axios";
const apiClient = axios.create( {
  baseUrl: 'http://127.0.0.1:8080/twitch/v1',
  timeout: 1000,
} );

export const login = async ( data ) => {
  try {
    return await apiClient.post( '/auth/login', data );
  } catch ( e ) {
    return {
      error: true,
      e,
    };
  }
};

export const register = async ( data ) => {
  try {
    return await apiClient.post( '/auth/register', data );
  } catch ( e ) {
    return {
      error: true,
      e,
    };
  }
}

export const getChannels = async () => {
  try {
    return await apiClient.get( '/channels' );
  } catch ( e ) {
    return {
      error: true,
      e,
    };
  }
}
