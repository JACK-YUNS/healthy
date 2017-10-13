import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Customer from '@/pages/customerManagement/customer.vue'
import Booking from '@/pages/bookingManagement/booking.vue'
import Order from '@/pages/orderManagement/order.vue'
import Service from '@/pages/serviceManagement/service.vue'

Vue.use(Router)

export default new Router({

  routes: [
    {
      redirect: 'customer',
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: 'customer',
          name: 'Customer',
          component: Customer,
        },
        {
          path: 'booking',
          name: 'Booking',
          component: Booking,
        },
        {
          path: 'order',
          name: 'Order',
          component: Order,
        },
        {
          path: 'service',
          name: 'Service',
          component: Service,
        }
      ]
    }
  ]
})
