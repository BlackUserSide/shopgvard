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
