<template>
  <div class="section contact" id="contact">
    <div class="container">
      <h2 class="mb-5">Contact <span class="text-danger">Me</span></h2>
      <div class="row">
        <div class="col-lg-8">
          <div class="contact-form-card">
            <h4 class="contact-title">Send a message</h4>
            <div>
              <div class="form-group">
                <input
                  class="form-control"
                  name="name"
                  type="text"
                  placeholder="Name *"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  name="email"
                  type="email"
                  placeholder="Email *"
                  required
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  name="message"
                  placeholder="Message *"
                  rows="7"
                  required
                ></textarea>
              </div>
              <div class="form-group">
                <button @click="sendMessage()" class="form-control btn btn-primary">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="contact-info-card">
            <h4 class="contact-title">Get in touch</h4>
            <div class="row mb-4">
              <div class="col-1 pt-1 mr-1">
                <i class="ti-mobile icon-md"></i>
              </div>
              <div class="col-10">
                <h6 class="d-inline">
                  Phone : <br />
                  <span class="text-muted">+ (51) 912719166</span>
                </h6>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-1 pt-1 mr-1">
                <i class="ti-map-alt icon-md"></i>
              </div>
              <div class="col-10">
                <h6 class="d-inline">
                  Address :<br />
                  <span class="text-muted">Lurigancho - Chosica.</span>
                </h6>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-1 pt-1 mr-1">
                <i class="ti-email icon-md"></i>
              </div>
              <div class="col-10">
                <h6 class="d-inline">
                  Email :<br />
                  <span class="text-muted">johnyulberingalapa@gmail.com</span>
                </h6>
              </div>
            </div>
            <ul class="social-icons pt-4">
              <li class="social-item">
                <a
                  class="social-link text-dark"
                  target="_blank"
                  href="https://www.facebook.com/0dejohn/"
                  ><i class="ti-facebook" aria-hidden="true"></i
                ></a>
              </li>
              <li class="social-item">
                <a
                  class="social-link text-dark"
                  target="_blank"
                  href="https://www.linkedin.com/in/john-yulber-inga-lapa/"
                  ><i class="ti-linkedin" aria-hidden="true"></i
                ></a>
              </li>
              <li class="social-item">
                <a
                  class="social-link text-dark"
                  target="_blank"
                  href="https://www.instagram.com/ing.yulbex/"
                  ><i class="ti-instagram" aria-hidden="true"></i
                ></a>
              </li>
              <li class="social-item">
                <a
                  class="social-link text-dark"
                  target="_blank"
                  href="https://github.com/yulbex"
                  ><i class="ti-github" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"ContactPage",

    methods : {
      sendMessage(){
        alert("Mensaje enviado");
      }
    }
}
</script>

<style>

</style>