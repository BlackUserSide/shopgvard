import { request } from "../index";
interface Ires {
  data: any;
  status: number;
}
export const getProducts = async () => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "GET",
    url: "/product/get_all",
    validateStatus: () => true,
  }).then((res) => {
    if (res) {
      response = {
        ...response,
        data: res.data,
        status: res.status,
      };
    }
  });
  return response;
};
export const getProduct = async (id: unknown) => {
  let response: Ires = {
    data: "",
    status: 0,
  };

  await request({
    method: "POST",
    url: `/product/get_data_product`,
    data: id,
    validateStatus: () => true,
  }).then((res) => {
    if (res) {
      response = {
        ...response,
        data: res.data,
        status: res.status,
      };
    }
  });
  return response;
};
export const getProductData = async (id: number) => {
  let response: Ires = {
    data: "",
    status: 0,
  };
  await request({
    method: "GET",
    url: `/product/get_one/${id}`,

    validateStatus: () => true,
  }).then((res) => {
    if (res) {
      response = {
        ...response,
        data: res.data,
        status: res.status,
      };
    }
  });
  return response;
};

export const getCategoryProduct = async (category: number) => {
  let response: Ires = {
    data: "",
    status: 0,
  };
  await request({
    method: "GET",
    url: `/category/get_one/${category}`,
    validateStatus: () => true,
  }).then((res) => {
    if (res) {
      response = {
        ...response,
        data: res.data,
        status: res.status,
      };
    }
  });
  return response;
};
