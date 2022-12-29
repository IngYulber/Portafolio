<template>
  <HeaderPage />
  <NavbarPage />
  <AboutPage/>
  <!--Resume Section-->
  <ResumenPage />
  <InfoPage />
  <PortafolioPage />
  <!-- <BlogPage/> -->
  <ContactPage/>
  <FooterPage />
</template>

<script>
import HeaderPage from "./components/HeaderPage.vue";
import NavbarPage from "./components/NavbarPage.vue";
import AboutPage from "./components/AboutPage.vue";
import ResumenPage from "./components/ResumenPage.vue";
import InfoPage from "./components/InfoPage.vue";
import PortafolioPage from "./components/PortafolioPage.vue";
// import BlogPage from "./components/BlogPage.vue";
import ContactPage from "./components/ContactPage.vue";
import FooterPage from "./components/FooterPage.vue";
export default {
  name: "App",
  components: {
    HeaderPage,
    NavbarPage,
    AboutPage,
    ResumenPage,
    InfoPage,
    PortafolioPage,
    // BlogPage,
    ContactPage,
    FooterPage,
  },
};
</script>