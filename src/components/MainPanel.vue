<script setup lang="ts">
import {ref, onMounted, computed} from "vue";

const links = ref([
  { name: 'Linkedin', color: changeRandomColor(), url: 'https://www.linkedin.com/in/carlos-reyes-32a096254/' },
  { name: 'Instagram', color: changeRandomColor(), url: 'https://www.instagram.com/carlitos_04r.rb/' },
  { name: 'Github', color: changeRandomColor(), url: 'https://github.com/sponkurtus2' },
  { name: 'Facebook', color: changeRandomColor(), url: 'https://www.facebook.com/drake.junior.336' }
]);

function changeRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

onMounted(() => {
  setInterval(() => {
    links.value.forEach(link => {
      link.color = changeRandomColor();
    });
  }, 2000);
});


// Multiple Images
const images = ref([
  { path: './assets/Yo.jpg'},
  { path: './assets/yo2.jpg'},
  { path: './assets/yo3.jpg'},
  { path: './assets/yo4.jpg'}
])
// Las imagenes se deben guardar dentro de public, esa es la carpeta RAIZ

const currentImageIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
  }, 5000);
});

const currentImage = computed(() => images.value[currentImageIndex.value]);

// Buttons to change info
const activeButton = ref('About me');

const showContent = (button) => {
  activeButton.value = button;
};
</script>

<template>
  <div class="container">
    <article class="article" data-theme="dark">

      <div class="header-section">
        <div class="headings">
          <h1 class="me">Carlos Reyes</h1>
          <h2 class="me" style="font-family: 'Roboto Mono', monospace;"><mark>Software</mark> Engineer in México</h2>
        </div>
        <div class="my_photo">
<!--          <img src="./assets/Yo.jpg" alt="My photo" class="round-image">-->
              <img :src="currentImage.path" alt="Image" class="round-image">
        </div>
      </div>

      <div>
        <article style="text-align: center">
        <ul class="links">
          <li v-for="(link, index) in links" :key="index" :style="{ color: link.color }">
            <a :href="link.url" target="_blank"><u :style="{ color: link.color}">{{ link.name }}</u></a>
          </li>
        </ul>
          </article>
      </div>

      <div>
    <article>
      <div class="grid">
        <button class="outline" @click="showContent('About me')">About Me</button>
        <button class="outline" @click="showContent('Projects')">Projects</button>
        <button class="outline" @click="showContent('Tools')">Tools</button>
      </div>
      <h1 style="text-align: center; font-family: 'Roboto Mono', monospace; font-weight: 400">
        {{ activeButton }}
      </h1>
      <p class="about_me_info" v-if="activeButton === 'About me'">
        Hey there! 👋 I'm Carlos Reyes, a 19-year-old from Mexico diving into the world of <mark>software development</mark>.
        I'm all about that backend magic, constantly fueled by my curiosity and love for learning.
        When I'm not coding, you'll probably find me chilling with my feline friends.
        Let's build some cool stuff together! 🚀😺
      </p>
      <p v-else-if="activeButton === 'Projects'">
        <ul>
          <li><a href="http://piccolomondocuuintegradora.000webhostapp.com/" target="_blank">Web for PiccoloMondo</a></li>
          <li><a href="https://github.com/sponkurtus2/telegram_bot_Python" target="_blank">Simple telegram bot with Python</a></li>
          <li><a href="https://web-yoyis-animos.vercel.app/" target="_blank">Quote API web</a></li>
        </ul>
      </p>
      <p v-else-if="activeButton === 'Tools'">
  <div class="tools-container">
    <h3>Programming Languages</h3>
    <ul>
      <li style="color: #F1EB90 ">JavaScript</li>
      <li style="color: #8bc34a">Python</li>
      <li style="color: #EC8F5E">Rust</li>
      <li style="color: #39A7FF">Golang</li>
    </ul>

    <h3>Frameworks</h3>
    <ul>
      <li style="color: #A6CF98">Vue.js</li>
      <li style="color: #39A7FF">React</li>
      <li style="color: #F3EEEA">Next</li>
      <li style="color: #c2beb8">Flask</li>
      <!-- Agrega más frameworks -->
    </ul>
    <!-- Agrega más categorías -->
  </div>
</p>

    </article>
  </div>

    </article>
  </div>
</template>

<style scoped>

.links {
  text-decoration: none;
  list-style: none;
  margin: 25px 0;
  display: flex;
  justify-content: space-between;
 flex-wrap: wrap; /* Permite que los elementos se envuelvan a la siguiente línea */
}

.links li {
  margin-bottom: 10px;
  font-family: 'Roboto Mono', monospace;

}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.article {
  width: 100%;
  max-width: 70vw;
}

.header-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.headings {
  text-align: left;
  flex-grow: 1;
  max-width: 350px;
}

.me {
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
}



mark {
  background-color: #79AC78;
}

.my_photo {
  position: relative;
  width: 100%;
  max-width: 300px;
  height: auto;
  margin: 0 0 10px 0;
}

.my_photo img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

.about_me_info {
  text-align: center;
  font-family: 'Roboto Mono', monospace;
  font-size: 18px;
}

.grid {
  display: flex;
  justify-content: space-around; /* Ajusta según tus preferencias de espaciado */
  margin-bottom: 20px; /* Añade un margen inferior para separar los botones del contenido */
}

.grid button {
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
}

/* Media query para pantallas pequeñas */
@media (max-width: 767px) {
  .links {
    flex-direction: column; /* Cambia la dirección a column para que los elementos se apilen verticalmente */
    align-items: center; /* Centra los elementos en el eje X */
  }

  .links li {
    margin-bottom: 15px; /* Ajusta el espacio entre los elementos cuando se apilan verticalmente */
  }
}

[data-theme="dark"] {
  --primary: #618561;
  --primary-hover: #8bc34a;
  --primary-focus: rgba(124, 179, 66, 0.25);
  --primary-inverse: #FFF;
}

.tools-container {
  text-align: center;
}

.tools-container h3 {
  font-size: 20px;
  color: var(--primary);
  margin-top: 20px;
  font-family: 'Roboto Mono', monospace;
}

.tools-container ul {
  font-family: 'Roboto Mono', monospace;
  font-size: 18px;
  list-style: none;
  text-decoration: none;
  padding: 0;
}

.tools-container li {
  font-family: 'Roboto Mono', monospace;
  list-style: none;
  font-size: 16px;
  margin-bottom: 8px;
}

</style>

