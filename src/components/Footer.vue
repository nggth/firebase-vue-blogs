<template>
  <footer class="footer">
    <div class="container content has-text-centered">
        <ul>
          <li><a class="navbar-item"><b-icon pack="fab" size="is-large" icon="github"></b-icon></a></li>
          <li><a class="navbar-item"><b-icon pack="fab" size="is-large" icon="facebook"></b-icon></a></li>
          <li><a class="navbar-item"><b-icon pack="fab" size="is-large" icon="codepen"></b-icon></a></li>
        </ul>
      <p>Copyright 2021 All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-vue",
}
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  background-color: #303030;

  ul {
    margin: 1rem 0 2rem 0;
    text-align: center;

    li {
      display: inline-block;

      a {
        margin-left: 0.75rem;
        margin-right: 0.75rem;
        
      }
      a:hover {
        border-color: transparent;
        background-color: transparent;
        // color: #485fc7
      }
        
    }

  }
}

</style>