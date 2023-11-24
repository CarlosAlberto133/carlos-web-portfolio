<template>
    <div id="contact">
        <div class="containerContact">
            <form action="https://formspree.io/f/mpzggago" method="POST" class="form">
                <div >
                    <p class="nameForm">Seu e-mail</p>
                    <span v-show="errorName">*Nome da comunidade obrigatório!</span>
                    <input 
                        type="email" 
                        name="email"
                        class="inputForm"
                    />
                        </div>
                <div class="mb-3">
                    <p class="nameForm">Sua mensagem</p>
                    <span v-show="errorDescription">*Descrição da comunidade obrigatório!</span>
                    <textarea 
                        type="text" 
                        name="message" 
                        class="formText"
                     >
                    </textarea>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactVue'
}
</script>

<style scoped>

</style>