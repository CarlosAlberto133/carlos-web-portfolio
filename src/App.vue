<template>
  <div> 
    <nav>
      <router-link id="logo" to="/">Carlos Alberto</router-link>
      <div id="mobileMenu" @click="open">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
        <ul id="nav-list">
          <li>
            <router-link class="links" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="links" to="/informacoes">Informações</router-link>
          </li>
          <li>
            <router-link class="links" to="/projetos">Projetos</router-link>
          </li>
          <li>
            <router-link class="links" to="/contate-me">Contate-me</router-link>
          </li>
          <li>
            <a @click="togglelightMode">
              <span v-if="!lightMode"><img src="@/assets/iconeLua.svg" /></span>
              <span v-else><img src="@/assets/iconeSol.png" /></span>
            </a>
          </li>
        </ul>
    </nav>
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    lightMode: false
  }),
  methods: {
    togglelightMode() {
      this.lightMode = !this.lightMode;
      this.updateTheme();
    },
    updateTheme() {
      const theme = this.lightMode ? 'light-theme' : 'dark-theme';
      const link = document.getElementById('theme-style');
      link.href = `${theme}.css`;
    },
    open() {
      let menu = document.getElementById("nav-list");
      let lines = document.getElementsByClassName("line");
      menu.classList.toggle("active");
      for(let i = 0; i < lines.length; i++) {
        lines[i].classList.toggle("active")
      }
    },
  },
}
</script>

<style>
*{
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@media (max-width: 1200px) {
  /* Nav */
  nav {
    padding: 0 70px;
  }

  /* home */
  .container {
    padding: 80px 80px 0;
  }

  /* #information */
  .containerInfo {
    padding: 159px 80px 0;
  }

  /* #Training */
  h1 {
    padding: 40px 80px 20px;
  }
  .containerCard {
    padding: 30px 50px;
  }

  /* #Hard Skills */
  /* #Soft Skills */
  .containerHardSkills,
  .containerSoftSkills {
    padding: 20px 80px;
  }

  /* #projects */
  .containerProjects {
    padding: 159px 70px 0;
  }
  .containerCardGif {
    display: flex;
    justify-content: space-between;
    padding: 30px 70px 0;
    flex-wrap: wrap;
 }
  
  .static-image,
  .gif {
    width: 390px;
    border-bottom: 1px solid #000;
    transition: opacity 0.5s ease;
 }
}

@media (max-width: 940px) {
  /* Nav */
  nav {
    padding: 0 45px;
  }
  #mobileMenu {
    display: block;
  }
  li {
    margin-bottom: 30px;
  }
  #nav-list {
    position: absolute;
    height: 0;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    top: 75px;
    background-color: #a1a1a1;
    width: 100%;
    right: 0;
    text-align: center;
  }
  #nav-list.active {
    display: block;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100vh;
    padding-top: 300px;
  }

  /* home */
  .container {
    display: block;
    width: 100%;
    text-align: center;
    height: 0 auto;
    padding-top: 50px;
  }
  button {
    margin-bottom: 20px;
  }
  #links {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 50px;
    height: 30px;
  }
  .git,
  .linkedin,
  .whats {
    margin-right: 40px;
  }
  .avatar {
    width: 330px;
  }

  /* #information */
  .containerInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 159px 0 0;
  }
  .containerInfo div {
    margin-bottom: 20px;
    text-align: center;
  }
  .containerInfo h2 {
    text-align: center;
    margin: 0 auto;
  }
  h2 {
    padding-bottom: 20px;
  }
  .description {
    text-align: center;
    font-size: 18px;
    width: 450px;
  }

  /* #Training */
  h1 {
    padding: 0 50px 20px;
  }

  /* #Hard Skills */
  /* #Soft Skills */
  .containerHardSkills,
  .containerSoftSkills {
    display: flex;
    justify-content: space-between;
    height: 0 auto;
    padding: 20px 50px;
  }

  /* #projects */
  .containerProjects {
    padding: 159px 50px 0;
  }
  .containerCardGif {
    display: flex;
    justify-content: center;
    padding: 30px 50px 0;
    flex-wrap: wrap;
 }
}

@media (max-width: 800px) {
  /* #Training */
  .containerCard {
    justify-content: space-between;
  }
}

@media (max-width: 616px) {
  /* #Training */
  .containerCard {
    justify-content: center;
  }

  /* #Soft Skills */
  .containerSoftSkills {
    display: block;
    flex-wrap: wrap;
    height: 80vh;
  }
  /* Projects */
  .btnContainerProje {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    width: 100%;
  }
  .btnProje {
    margin: 0 10px 20px 0;
  }
  .btnPagination {
    width: 150px;
  }
}

@media (max-width: 480px) {
  /* Nav */
  nav {
    padding: 0 30px;
  }
  #nav-list.active {
    padding-top: 200px;
  }
  li {
    margin-left: 0;
  }

  /* home */
  #home {
    height: 130vh;
  }
  .container {
    padding: 50px 50px 0;
  }
  .avatar {
    width: 200px;
  }

  /* #information */
  #information {
    height: 140vh;
  }
  .profile {
    width: 250px;
  }
  .containerInfo {
    padding: 159px 15px 0;
  }
  .description {
    font-size: 17px;
    width: 100%;
  }
  .btnContainer {
    justify-content: center;
    flex-wrap: wrap;
  }
  .btnInfo {
    text-decoration: none;
    border: 1px solid #000;
    color: #000;
    margin: 0 10px 20px 0;
    padding: 5px 35px;
    border-radius: 25px;
    font-size: 18px;
    transition: 0.3s;
  }

  /* #Training */
  h1 {
    padding: 0 30px 20px;
  }
  .containerCard {
    padding: 30px 10px;
  }
  .card {
    margin-bottom: 20px;
  }
  .institution {
    margin: 0 0 20px 20px;
  }

  /* #Hard Skills */
  .containerHardSkills {
    flex-wrap: wrap;
  }

  /* #Soft Skills */
  .containerSoftSkills {
    height: 100vh;
  }

  /* #projects */
  .containerProjects {
    display: flex;
    justify-content: space-between;
    padding: 130px 30px 0;
    flex-wrap: wrap;
  }
  .btnContainerProje {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    width: 100%;
  }
  .btnProje {
    margin: 0 10px 20px 0;
  }
  
  .static-image,
  .gif {
    width: 318px;
    border-bottom: 1px solid #000;
    transition: opacity 0.5s ease;
  }
  .infoProject {
    font-size: 16px;
    padding: 10px 15px;
  }
  .btnPagination {
    width: 120px;
  }

  /* #contact-me */

  .containerContact {
    padding: 130px 30px 0;
}
}
</style>