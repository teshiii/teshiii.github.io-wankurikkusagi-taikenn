const app = new Vue({
    el: "#app",
    data: {
        count: 1*24*60*60,
        color: "black"
        
    },
    created() {
        setInterval(() => {
            this.count = this.count - 1
        }, 1000)
    }
})
