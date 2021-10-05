<template>
  <footer>
    <ul>
      <li><a href="https://twitter.com/miked" class="twitter">@miked</a></li>
      <li><a href="https://github.com/mike-douglas" class="github">Github</a></li>
      <!-- <li><a href="https://www.instapaper.com/p/miked" class="instapaper">Instapaper</a></li> -->
      <li><a href="https://instagram.com/thisismiked" class="instagram">Instagram</a></li>
      <li><a href="https://www.linkedin.com/in/michael-douglas-a6a1b180/" class="linkedin">Linkedin</a></li>
      <!-- <li><a href="https://standardresume.co/r/mike-douglas" class="resume">Resume</a></li> -->
    </ul>
    <small>&copy;{{ year }}</small>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
  data() {
    return {
      year: (new Date()).getFullYear()
    }
  },
}
</script>

<style scoped>
  footer {
    margin: 4.0rem 0 2.0rem 0;
    text-align: center;
  }

  ul {
    margin: 0 0 1.0rem 0;
    padding: 0;
  }

  li {
    display: inline;
    padding: 0;
    margin: 0;
  }

  a {
    display: inline-block;
    margin: 0em 1.0em 0 1.0em;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
    background-position: top left;
    background-repeat: no-repeat;
    background-size: 40px 40px;
    width: 40px;
    height: 40px;
  }

  .twitter {
    background-image: url('/icons/icons8-twitter-100.png');
  }

  .instagram {
    background-image: url('/icons/icons8-instagram-100.png');
  }

  .github {
    background-image: url('/icons/icons8-github-100.png');
  }

  .linkedin {
    background-image: url('/icons/icons8-linkedin-100.png');
  }
</style>