<template>
    <div id="home">
        <div class="container">
            <div class="info">
                <p class="hello">Olá,</p>
                <p class="title">Sou um</p>
                <p class="title">Dev Front-End/Back-End</p>
                <p class="welcome">Bem vindo ao meu website portfólio</p>
                <button @click="openCurriculo" type="button">Meu Currículo</button>
                <div id="links">
                    <a href="https://github.com/CarlosAlberto133" target="_blank" class="git"></a>
                    <a href="https://www.linkedin.com/in/carlos-alberto-359b13233/" target="_blank" class="linkedin"></a>
                    <a href="https://wa.me/qr/BS7ULUHXGWNUL1 " target="_blank" class="whats"></a>
                    <a href="https://www.behance.net/carlosalberto1995" target="_blank" class="behance"></a>
                </div>
            </div>
            <div>
                <img class="avatar" src="@/assets/avatar.svg" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndexVue',
    methods: {
        openCurriculo() {
            const caminhoCurriculo = 'https://drive.google.com/file/d/1URZb5yNMAPdKP_KRCL2nOzGoCbltqiVl/view'

            window.open(caminhoCurriculo, '_blank')
        }
    }
}
</script>

<style scoped>

</style>