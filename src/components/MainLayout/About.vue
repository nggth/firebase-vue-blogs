<template>
  <div class="main-content py-4">
    <div class="section-light about-me" id="about-me">
      <div class="container">
        <div class="column is-12 about-me">
          <h1 class="title has-text-centered section-title">About Me</h1>
        </div>
        <div class="columns is-multiline">
          <div
            class="column is-6 has-vertically-aligned-content"
            data-aos="fade-right"
          >
            <p class="is-larger">
              &emsp;&emsp;<strong
                >Cecilia is a website with all the desire to bring a world of skin care to you.
                We understand and listen to your skin, thereby creating a website to bring you trust.</strong
              >
            </p>
            <br />
            <p>
              Each product will tell a story, we will be the ones to present the story in a special light and bring it to you.
              We will always make sure to get ingredients lists certified from the official site sources where the products come from.
              The appearance of this website is our honor, looking forward to your support.
            </p>
            <br />
            <div class="is-divider"></div>
            <div class="columns about-links">
              <div class="column">
                <p class="heading">
                  <strong>Contact to me</strong>
                </p>
                <p class="subheading">
                  123-456-7890
                </p>
              </div>
              <div class="column">
                <p class="heading">
                  <strong>Email Me</strong>
                </p>
                <p class="subheading">
                  ntnha0209@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div class="column is-6 right-image " data-aos="fade-left">
            <img
              class="is-rounded"
              src="../../assets/homeImgs/about.jpg"
              alt=""
            />
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

</style>