const {createApp} = Vue;

createApp({
    data() {
        return {
            emailArray: [],
        }
    },
    methods: {
       
    },
    created() {
        
        for (let i = 0; i < 10; i++) { 
            axios
            .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then((resp) => {
                this.emailArray.push(resp.data.response)  
            })
        }  
    }
}).mount("#app") 
    
