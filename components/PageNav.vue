<template>
  <nav>
    <h1>directive.io</h1>
    <ul>
      <li><NuxtLink to="/">home</NuxtLink></li>
      <li><NuxtLink to="/archive">archive</NuxtLink></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PageNav'
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.5rem;
  display: inline-block;
  margin-right: 1.0rem;
  margin-left: -1.25rem;
}

h1::before {
  content: '# ';
  color: $main-txt-sub-color;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
}

li {
  display: inline-block;
}

a, .nuxt-link-active {
  text-decoration: none;
  background-color: $panel-bg-color;
  padding: 0.35rem;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  h1 {
    margin: 0 1.0rem 1.0rem 0rem;
    display: block;
  }
}
</style>