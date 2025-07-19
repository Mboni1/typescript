
enum OrderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED"
}

// Twifashisha Record type aho gukoresha switch
const statusMessages: Record<OrderStatus, string> = {
  [OrderStatus.Pending]: "Your order is being processed.",
  [OrderStatus.Shipped]: "Your order is on the way.",
  [OrderStatus.Delivered]: "Order delivered successfully.",
  [OrderStatus.Cancelled]: "Order has been cancelled.",
};

function getStatusMessage(status: OrderStatus): string {
  return statusMessages[status] ?? "Unknown status.";
}

console.log(getStatusMessage(OrderStatus.Shipped)); // "Your order is on the way.
