console.log('connesso');

/*

Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

*/
const { createApp } = Vue

createApp({
    data() {
        return {
            randomEmailList: [],
            emailsNumber: 10
        }
    },
    methods: {
        callApi() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response.data.response);
                    this.randomEmailList.push(response.data.response)
                })
        },
        genrateEmails() {
            for (let i = 0; i < this.emailsNumber; i++) {
                this.callApi()
            }

        }
    },
    mounted() {
        this.genrateEmails()

    }

}).mount('#app')