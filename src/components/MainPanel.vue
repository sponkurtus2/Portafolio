<script setup lang="ts">
</script>

<template>
  <div class="container">
    <article class="article">
      <div class="header-section">
        <div class="headings">
          <h1 class="me">Hey, I'm Carlos Reyes</h1>
          <h2 class="me" style="font-family: 'Roboto Mono', monospace;"><mark>Software</mark> Engineer in México</h2>
        </div>
        <div class="my_photo">
          <img src="./assets/Yo.jpg" alt="My photo" class="round-image">
        </div>
      </div>
      <div>
        <ul class="links">
          <li><u>Linkedin</u></li>
          <li><u>Instagram</u></li>
          <li><u>Github</u></li>
        </ul>
      </div>
    </article>
  </div>
</template>

<style scoped>

.links {
  list-style: none;
  display: flex;
  padding: 0;
}

.links li {
  margin-right: 100px;
  justify-content: space-between;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
}



mark {
  background-color: #79AC78;
}

.my_photo {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 0 10px 0;
}

.my_photo img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  border-radius: 50%;

}

/* Media query para pantallas pequeñas */
@media (max-width: 767px) {
  .grid {
    flex-direction: column;
    align-items: center; /* Centrar la imagen en pantallas pequeñas */
  }
}
</style>

