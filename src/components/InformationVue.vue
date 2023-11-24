<template>
    <div id="information">
        <div class="containerInfo">
            <div>
                <img class="profile" src="@/assets/perfil.svg" />
            </div>
            <div>
                <h2>DESENVOLVEDOR FULL STACK</h2>
                <p class="description">
                    Sou um Dev. Front-End/Back-End apaixonado pela área, que
                    adora transformar suas ideias em realidade. Estou
                    sempre em busca de novas oportunidades para
                    aperfeiçoar-me e trabalhar cada vez mais em projetos
                    desafiadores. Tenho como objetivo aprender e crescer
                    cada vez mais na área. Curso Engenharia de Softwere
                    pela Estácio. Principais tecnologias: VueJs, JavaScripit,
                    NuxtJs, Angular, SpringBoot, AdobeXD e Figma.
                </p>
                <div class="btnContainer">
                    <a href="https://drive.google.com/file/d/1URZb5yNMAPdKP_KRCL2nOzGoCbltqiVl/view" target="_blank" class="btnInfo">Currículo</a>
                    <a href="https://github.com/CarlosAlberto133" target="_blank" class="btnInfo">GitHub</a>
                    <a href="https://www.linkedin.com/in/carlos-alberto-359b13233/" target="_blank" class="btnInfo">Linkedin</a>
                </div>
            </div>
        </div>
        <training-vue></training-vue>
        <hard-skills-vue></hard-skills-vue>
        <soft-skills-vue></soft-skills-vue>
    </div>
</template>

<script>
import TrainingVue from '@/components/TrainingVue.vue'
import HardSkillsVue from '@/components/HardSkillsVue.vue';
import SoftSkillsVue from '@/components/SoftSkillsVue.vue'

export default {
    name: 'InformationVue',
    components: {
        TrainingVue,
        HardSkillsVue,
        SoftSkillsVue
    }
}
</script>
        TrainingVue

<style scoped>

</style>