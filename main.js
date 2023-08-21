const app = Vue.createApp({
    data(){
        return{
            cart: 0, 
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url: 'http://www.google.com',
            inventory: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color:'green'},
                {id: 2235, color:'blue'}
            ],
            sizes:['small', 'medium', 'large']
        }
    }
})

