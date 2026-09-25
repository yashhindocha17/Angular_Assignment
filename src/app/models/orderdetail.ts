export interface OrderDetail {
  id: number;
  productName: string;
  quantity: number;
  price: number;
  status: 'Completed' | 'Pending' | 'Cancelled';
}
