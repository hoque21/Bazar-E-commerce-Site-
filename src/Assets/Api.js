import axios from 'axios';

export async function productData() {
    try {
        const response = await axios.get('https://fakestoreapiserver.reactbd.com/products');
        return response.data; // Returning only the data from the response
    } catch (error) {
        console.error('Error fetching product data:', error);
        throw error; // Rethrowing the error for the caller to handle
    }
}
