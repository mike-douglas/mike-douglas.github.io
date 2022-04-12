<template>
  <ul>
    <li v-for="project in projects" :key="project.stub">
      <ProjectStub :project="project"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProjectList',
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

li {
  width: 20rem;
  vertical-align: top;
  padding: 0 0.25rem 1.5rem 0.25rem;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  ul {
    display: block;
  }

  li {
    display: block;
    width: 100%;
    padding: 0;
  }
}
</style>