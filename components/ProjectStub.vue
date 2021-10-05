<template>
  <a :href="`https://github.com/${project.link}`">
    <h3>
      {{ project.title }}
    </h3>
    <small>{{ project.link }}</small>
    <nuxt-content class="stub-content" :document="project"/>
  </a>
</template>

<script>
export default {
  name: 'ProjectStub',
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  display: inline-block;
  position: relative;
  margin: -0.5rem 0 -0.5rem -0.5rem;
  padding: 0.5rem 0 0.5rem 0.5rem;
  text-decoration: none;
  color: inherit;
  border-radius: 0.5rem;
  min-height: 150px;
}

a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

h3 {
  color: $standout-txt-color;
  display: inline;
  border-bottom: 1px solid $standout-txt-border-color;
}

small {
  margin: 0.5rem 0 0 0;
  display: block;
  color: $main-txt-sub-color;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  a {
    min-height: initial;
    margin-bottom: 1.0rem;
  }
}
</style>

<style lang="scss">
.stub-content p {
  margin: 0.75rem 0 0 0;
  line-height: $main-txt-line-height;
}
</style>