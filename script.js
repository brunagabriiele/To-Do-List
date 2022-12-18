new Vue ({
    el: "#app",
        data () {
            return {
                titulo: "Minha Lista de Tarefas",
                tarefas: [
                    {   titulo: "Estudar", checked: true},
                    {   titulo: "Ler", checked: false},
                    {   titulo: "Escrever", checked: false},
                    
                ],
                novaTarefa: " ",
            }
        },
        methods: {
            adicionarTarefa () {
                this.tarefas.push({
                    titulo: this.novaTarefa, checked: false
                })
                this.novaTarefa= " "
            }
        }
})