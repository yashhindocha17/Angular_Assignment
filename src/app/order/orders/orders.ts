import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from '../../models/order';
@Component({
  imports: [CommonModule],
  selector: 'app-orders',
  styleUrl: './orders.css',
  templateUrl: './orders.html',
})
export class Orders {
  
  orders: Order[] = [
    {
      id: 1,
      orderDate: '2026-09-10',
      customerName: 'John Doe',
      orderDetails: [
        { id: 1, productName: 'Laptop', quantity: 1, price: 999, status: 'Completed' },
        { id: 2, productName: 'Mouse', quantity: 2, price: 25, status: 'Pending' }
      ]
    },
    {
      id: 2,
      orderDate: '2026-09-15',
      customerName: 'Jane Smith',
      orderDetails: [
        { id: 3, productName: 'Keyboard', quantity: 1, price: 60, status: 'Cancelled' }
      ]
    },
    {
      id: 3,
      orderDate: '2026-09-20',
      customerName: 'Alex Johnson',
      orderDetails: [
        { id: 4, productName: 'Monitor', quantity: 2, price: 200, status: 'Completed' },
        { id: 5, productName: 'Webcam', quantity: 1, price: 45, status: 'Pending' }
      ]
    }
  ];
}
