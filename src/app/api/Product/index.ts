import axios, { AxiosResponse } from "axios"

import { baseUrl } from '../constants';

export const showProduct = async (productCode: string): Promise<AxiosResponse<ShowProductType>> => {
  try {
    const product: AxiosResponse<ShowProductType> = await axios.get(
      baseUrl + "/products/" + productCode
    );

    return product;
  } catch (error) {
    throw new Error(error)
  }
}