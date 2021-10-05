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
  display: table-row;
}

li {
  display: table-cell;
  width: 50%;
  vertical-align: top;
  padding: 0.25rem;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  li {
    display: block;
    width: 100%;
    padding: 0;
  }
}
</style>