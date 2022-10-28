const {createApp} = Vue;

createApp({
    data() {
        return {
            emailArray: [],
            arrayLengthNumber: 10
        }
    },
    methods: {
       
    },
    created() {
        
        for (let i = 0; i < this.arrayLengthNumber; i++) { 
            axios
            .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then((resp) => {
                this.emailArray.push(resp.data.response)  
            })
        }  
    }
}).mount("#app") 
    
