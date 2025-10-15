let txt = `<div class="row">
                <div class="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2 heading-area text-center wow zoomIn"
                    data-wow-duration="1s" data-wow-delay=".1s">
                    <h2 class="heading">福斯集團的歷史<span class="d-block">90年福斯歷史的里程碑</span></h2>
                </div>
            </div>`;
for (let i = 0; i < 20; i++) {
  txt += `<div class="row justify-content-center">
                <div class="col-lg-2 col-md-6 mb-5 mb-lg-0 col-12 wow fadeInLeft about-media" data-wow-duration="1.5s"
                    data-wow-delay="1s">
                    <p>1972</p>
                </div>
                <div class="col-lg-10 col-md-6 mb-5 mb-lg-0 col-12 wow fadeInRight about-media" data-wow-duration="1.5s"
                    data-wow-delay="1s">
                    <p>在曼海姆創立RUDOLF FUCHS公司。進口和分銷高品質的賓夕法尼亞煉油產品。開展地區發動機油業務。</p>
                </div>
            </div>`
}
document.getElementById("history-content").innerHTML = txt;