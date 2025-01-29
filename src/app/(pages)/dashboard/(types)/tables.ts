export interface RestaurantTable {
    id: number
    table_name: string
    is_active: boolean
    description: string | null
    number_of_table: number | null
    status: "open" | "reserved" | "occupied" | "closed"
    created_at: string
  }
  
  export interface OrderItem {
    id: number
    name: string
    quantity: number
    price: number
  }
  
  export interface Order {
    id: number
    items: OrderItem[]
    total: number
    status: "pending" | "preparing" | "ready" | "served"
  }
  
  