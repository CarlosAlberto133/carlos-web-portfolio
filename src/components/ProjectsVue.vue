<template>
    <div id="projects">
        <div class="containerProjects">
            <div>
                <p class="titleProjects">Meus Projetos</p>
                <div class="btnContainerProje">
                    <a @click="allProjects" class="btnProje">Todos</a>
                    <a @click="frontProjects" class="btnProje">FrontEnd</a>
                    <a @click="backProjects" class="btnProje">BackEnd</a>
                    <a @click="designProjects" class="btnProje">Ui Design</a>
                </div>
            </div>
        </div>
        <div class="containerCardGif">
            <div 
                class="cardGif"
                v-for="card in totalCards" :key="card.id"
                @mouseover="startGif(card.id)"
                @mouseout="stopGif(card.id)"
            >
                <a :href="card.link" target="_blank">
                    <img 
                        v-if="!card.isMouseOver" 
                        class="gif" 
                        :src="require(`@/assets/pngs/${card.staticImagePath}`)" 
                    />
                    <img 
                        v-if="card.isMouseOver" 
                        :class="{ 'paused': !card.isPlaying }" 
                        class="gif" 
                        :src="require(`@/assets/gifs/${card.gifPath}`)" 
                    />
                    <p class="infoProject">{{ card.gifPathInfo }}</p>
                </a>
            </div>
        </div>
        <div id="paginacao">
            <div>
                <button @click="prevPage" class="btnPagination" :disabled="currentPage === 1">Anterior</button>
                <span class="page"> Página {{ currentPage }} de {{ totalPages }} </span>
                <button @click="nextPage" class="btnPagination" :disabled="currentPage === totalPages">Próxima</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectsVue',
    data() {
        return {
            currentPage: 1,
            pageSize: 6,
            totalPages: 2,
            ordenacao: '',
            totalElements: 10,
            totalCards: [],
            cards: [
                { id: 1, isMouseOver: false, type: 'frontEnd', gifPath: "ctrlv.gif", staticImagePath: 'ctrl-v.svg', link: 'https://ctrl-v-vercel.vercel.app', gifPathInfo: 'O projeto CTRL-V é um site de compartilhamento ao estilo bloco de notas.Nele você salva o texto que quiser e pode compartilha-lo com o link que é disponibilizado.' },
                { id: 2, isMouseOver: false, type: 'backEnd', gifPath: "apiCpfCnpj.gif", staticImagePath: 'cpfCnpj.svg', link: 'https://cpf-cnpj-validator.onrender.com', gifPathInfo: 'O projeto CPF-CNPJ-Validator é uma API que realiza a validação de CPFs e CNPJs' },
                { id: 3, isMouseOver: false, type: 'frontEnd', gifPath: "fightclub.gif", staticImagePath: 'figth.svg', link: 'https://figth-club-vercel.vercel.app', gifPathInfo: 'O projeto FightClub é um site onde você gamer pode se cadastrar em um dos 3 jogos diponíveis e entrar no rank das lutas, sendo atualizado sempre que você compartilha os dados.' },
                { id: 4, isMouseOver: false, type: 'frontEnd', gifPath: "vagas.gif", staticImagePath: 'vagas.svg', link: 'https://vagas-sooty.vercel.app', gifPathInfo: 'O Vagas é um site onde você pode cadastrar uma vaga de emprego para sua empresa' },
                { id: 5, isMouseOver: false, type: 'javascript', gifPath: "mario.gif", staticImagePath: 'mario.svg', link: 'https://mario-flame.vercel.app', gifPathInfo: 'Este é um simples jogo do Mário feito em JavaScript' },
                { id: 6, isMouseOver: false, type: 'backEnd', gifPath: "parking-control.gif", staticImagePath: 'parking-control.svg', link: 'https://github.com/CarlosAlberto133/Parking-Control', gifPathInfo: 'O Parking-Control é um CRUD feito com Spring Boot ultilizando o Postgress como banco de dados' },
                { id: 7, isMouseOver: false, type: 'frontEnd', gifPath: "pokemon.gif", staticImagePath: 'pokemon.svg', link: 'https://pokedex-vercel-seven.vercel.app', gifPathInfo: 'O projeto Pokemon é um projeto que simula uma pokebola do jogo pokemon, onde fiz uso de bastante animações' },
                { id: 8, isMouseOver: false, type: 'frontEnd', gifPath: "monte-seu-hamburguer.gif", staticImagePath: 'monte-seu-hamburguer.svg', link: 'https://github.com/CarlosAlberto133/monteseuhamburguer', gifPathInfo: 'O projeto Monte Seu Hamburguer é um site de pedidos de sanduíches, onde você faz seu pedido, e logo após ele vai para um dashboard, onde você pode editar e completar o pedido.' },
                { id: 9, isMouseOver: false, type: 'design', gifPath: "podcastStore.gif", staticImagePath: 'podcastStore.svg', link: 'https://www.behance.net/gallery/144386723/PodcastStore-Ui-Ux-Design-Adobe-XD', gifPathInfo: 'O PodcastStore é um design de site que fiz para agrupar todos os podcast em um só lugar, podendo ganhar recompensas ao assistir por ele' },
                { id: 10, isMouseOver: false, type: 'design', gifPath: "bangeek.gif", staticImagePath: 'bangeek.svg', link: 'https://www.behance.net/gallery/141952275/Bangeek-UI-UX-Design-Adobe-XD-Photoshop', gifPathInfo: 'O Bangeek é um banco para nerds/gamers onde você pode ter todo o conforto na palma da sua mão e ainda ganhar prêmios' }
            ],
            isMouseOver: false
        };
    },
    methods: {
        startGif(cardId) {
            this.cards.forEach(card => {
                if (card.id === cardId) {
                card.isMouseOver = true;
                card.isPlaying = true;
                } else {
                card.isMouseOver = false;
                card.isPlaying = false;
                }
            });
        },
        stopGif(cardId) {
            const card = this.cards.find(card => card.id === cardId);
            if (card) {
                card.isMouseOver = false;
                card.isPlaying = false;
            }
        },
        paCards() {
            this.totalCards = this.cards.length
            if (this.pageSize < this.totalElements) {
                this.totalCards = this.cards.filter(card => card.id >= 1 && card.id <= 6);
            }
        },
        nextPage() {
            this.totalCards = this.cards.length

            if (this.currentPage === 1) {
                this.currentPage += 1;
                this.totalCards = this.cards.filter(card => card.id >= 7 && card.id <= 12);
            }
        },
        prevPage() {
            this.totalCards = this.cards.length

            if (this.currentPage === 2) {
                this.currentPage -= 1;
                this.totalCards = this.cards.filter(card => card.id >= 1 && card.id <= 6);
            }
        },
        allProjects() {
            this.totalCards = this.cards
            if (this.totalPages === 1) {
                this.totalPages = 2
                this.totalCards = this.cards.filter(card => card.id >= 1 && card.id <= 6);
            }
        },
        frontProjects() {
            this.totalCards = this.cards.filter(card => card.type === 'frontEnd' || card.type === 'javascript');
            if (this.totalPages === 2) {
                this.totalPages = 1
            }
            if (this.currentPage === 2) {
                this.currentPage = 1
            }
        },
        backProjects() {
            this.totalCards = this.cards.filter(card => card.type === 'backEnd');
            if (this.totalPages === 2) {
                this.totalPages = 1
            }
            if (this.currentPage === 2) {
                this.currentPage = 1
            }
        },
        designProjects() {
            this.totalCards = this.cards.filter(card => card.type === 'design');
            if (this.totalPages === 2) {
                this.totalPages = 1
            }
            if (this.currentPage === 2) {
                this.currentPage = 1
            }
        }
    },
    mounted() {
        this.paCards()
    }
}
</script>

<style scoped>
a {
    cursor: pointer;
}
</style>