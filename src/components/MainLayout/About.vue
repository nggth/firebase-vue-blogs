<template>
  <div class="about-me">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <div class="columns featured-post is-multiline">
              <div class="column is-12 post">
                <article class="columns featured">
                  <div class="column is-7 post-img is-vcentered" data-aos="fade-right">
                    <img src="../../assets/img/home/aboutBanner.jpg" alt="">
                  </div>
                  <div class="column is-5 featured-content va">
                    <div class="content article-body">
                      <h1 class="title post-title has-text-centered">About Cecilia</h1>
                      <p><strong>Cecilia</strong> is a website with all the desire to bring a world of skin care to you.
                          We understand and listen to your skin, thereby creating a website to bring you trust.
                      </p>
                      <br>
                      <p class="post-excerpt">
                        Each product will tell a story, we will be the ones to present the story in a special light and bring it to you.
                        We will always make sure to get ingredients lists certified from the official site sources where the products come from.
                      </p>
                      <p class="pb-3">The appearance of this website is our honor, looking forward to your support.</p>
                      <!-- <a href="#" class="button is-primary">Read More</a> -->
                    </div>

                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css';

export default {
  created () {
    AOS.init({
      easing: "ease-out",
      duration: 700,
    });
  }
}

</script>

<style lang="scss" scoped>
.about-me {
  min-height: 60vh;
  .article {
    padding: 1.5rem;
  }
}
</style>