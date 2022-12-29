<template>
  <section class="section bg-custom-gray" id="portfolio">
    <div class="container">
      <h1 class="mb-5"><span class="text-danger">My</span> Portfolio</h1>
      <div class="portfolio">
        <div class="filters">
          <a href="#" data-filter=".new" class="active"> New </a>
          <a href="#" data-filter=".advertising"> Web </a>
          <a href="#" data-filter=".branding"> IA </a>
          <a href="#" data-filter=".web"> Data </a>
        </div>
        <div class="portfolio-container">
          <div class="col-md-6 col-lg-4 advertising new">
            <div class="portfolio-item">
              <img
                src="../assets/imgs/promolider.png"
                class="img-fluid"
                alt="Promolider"
              />
              <div class="content-holder">
                <a class="img-popup" href="../assets/imgs/promolider.png"></a>
                <div class="text-holder">
                  <h6 class="title">Promolider</h6>
                  <p class="subtitle">
                    Gamified educational platform with artificial intelligence
                    and an economic benefit plan for producers, students and
                    distributors. Vue + Laravel
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 advertising new">
            <div class="portfolio-item">
              <img
                src="../assets/imgs/sodexo.png"
                class="img-fluid"
                alt="Sodexo"
              />
              <div class="content-holder">
                <a class="img-popup" href="../assets/imgs/sodexo.png"></a>
                <div class="text-holder">
                  <h6 class="title">Sodexo Fix</h6>
                  <p class="subtitle">
                    web system that digitizes documents using artificial
                    intelligence. Vue + Django Rest Framework
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 advertising">
            <div class="portfolio-item">
              <img
                src="../assets/imgs/reyes-free.png"
                class="img-fluid"
                alt="Reyes del free"
              />
              <div class="content-holder">
                <a class="img-popup" href="../assets/imgs/reyes-free.png"></a>
                <div class="text-holder">
                  <h6 class="title">Reyes del free</h6>
                  <p class="subtitle">
                    freestyle related forum. Personal project using Django
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 web new">
            <div class="portfolio-item">
              <img
                src="../assets/imgs/voucher.png"
                class="img-fluid"
                alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
              />
              <div class="content-holder">
                <a
                  class="img-popup"
                  href="https://www.kaggle.com/datasets/odejohn/voucher"
                ></a>
                <div class="text-holder">
                  <h6 class="title">Voucher Dataset</h6>
                  <p class="subtitle">
                    Expedita corporis doloremque velit in totam!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 branding new">
            <div class="portfolio-item">
              <img
                src="../assets/imgs/car_detection.png"
                class="img-fluid"
                alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
              />
              <div class="content-holder">
                <a class="img-popup" href="../assets/imgs/branding-1.jpg"></a>
                <div class="text-holder">
                  <h6 class="title">Car Detection</h6>
                  <p class="subtitle">
                    This app detects types of cars using YOLOv5!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 branding new">
            <div class="portfolio-item">
              <img
                src="../assets/imgs/milk_quality.jpg"
                class="img-fluid"
                alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
              />
              <div class="content-holder">
                <a class="img-popup" href="../assets/imgs/branding-2.jpg"></a>
                <div class="text-holder">
                  <h6 class="title">Predict the milk quality with ML</h6>
                  <p class="subtitle">
                    Decision tree classifier, Support vector machine and
                    k-nearest neighbors
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 branding new">
            <div class="portfolio-item">
              <img
                src="../assets/imgs/neumonia.png"
                class="img-fluid"
                alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"
              />
              <div class="content-holder">
                <a class="img-popup" href="../assets/imgs/branding-3.jpg"></a>
                <div class="text-holder">
                  <h6 class="title">Pneumonia Detection using CNN</h6>
                  <p class="subtitle">
                    This app detects Pneumonia using TensorFlow!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name:"PortafolioPage"
}
</script>

<style>

</style>