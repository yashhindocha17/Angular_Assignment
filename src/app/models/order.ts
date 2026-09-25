import { OrderDetail } from './orderdetail';

export interface Order {
    id: number;
    orderDate: string;
    customerName: string;
    orderDetails: OrderDetail[];
}
