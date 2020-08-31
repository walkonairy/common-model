export class BizConst {
    static URL_A001P001U001 = "/advertisements";
    static URL_A001P002U001 = "/spots/nearby";
    static URL_A001P002U003 = "/categories";
    static URL_A001P002U004 = "/commodities";
    static URL_A001P003U001 = (commodityId: number) => `/commodities/${commodityId}`;
    static URL_A001P003U002 = (cartId: number) => `/put_to_cart/${cartId}`;
    static URL_A001P004U001 = "/checkout";
    static URL_A001P004U002 = "/orders";
    static URL_A001P005U003 = "/claims";
    static URL_A001P005U004 = (orderId: number) => `/orders/${orderId}`;
    static URL_A002P001U001 = (cartId: number) => `/carts/${cartId}`;
    static URL_A002P001U002 = (cartId: number, cartItemId: number) => `/carts/${cartId}/cartItems/${cartItemId}`;
    static URL_A002P001U004 = (cartId: number) => `/carts/${cartId}`;
    static URL_A003P001U001 = "/addresses";
    static URL_A003P001U002 = (id: number) => `/addresses/${id}`;
    static URL_A003P002U002 = "/addresses";
    static URL_A004P001U001 = "/orders/statusCount";
    static URL_A004P002U001 = "/orders";
    static URL_A007P001U004 = "/login/sms";

    static URL_F002P001U001 = "/areas";
    static URL_F002P001U002 = "/areas";
    static URL_F002P001U003 = (areaId: number) => `/areas/${areaId}`;
    static URL_F002P001U004 = (areaId: number) => `/areas/${areaId}`;
    static URL_A005P001U001 = (commodityId: number) => `/commodities/${commodityId}`;
    static URL_F005P001U002 = "/commodities";
    static URL_F004P001U002 = "/commodities";
    static URL_F001P003U002 = "/orders";
    static URL_F001P003U003 = "/workOrder";
    static URL_F001P003U004 = (orderId: number, orderCommodityId: number) => `/orders/${orderId}/orderCommodity/${orderCommodityId}`;
    static URL_F001P003U005 = (id: number) => `/workOrder/${id}`;
    static URL_F001P002U001 = "/orders";
    static URL_F002P002U002 = "/categories";
    static URL_F002P002U003 = (id: number) => `/categories/${id}`;
    static URL_F002P002U004 = (id: number) => `/categories/${id}`;
    static URL_F003P001U002 = "/advertisements";
    static URL_F003P001U003 = (id: number) => `/advertisements/${id}`;
    static URL_F003P001U004 = (id: number) => `/advertisements/${id}`;
}