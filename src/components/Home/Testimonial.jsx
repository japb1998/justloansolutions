import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Testimonial = ({padd}) => {
  const testimonialData = [
    {
      id: 1,
      // img: "assets/img/testimonial/4/ts-1.jpg",
      name: 'Jean Montiel',
      content: 'Great experience working with Maria Alejandra. Excellent service.'
    },
    {
      id: 2,
      // img: "assets/img/testimonial/4/ts-2.jpg",
      name: 'Virginia Aizpurua',
      content: 'excellent professional, patient, diligent and sweet, knows how to treat first buyers, excellent, totally recommended '
    },
    {
      id: 3,
      // img: "assets/img/testimonial/4/ts-3.jpg",
      name: 'Marielix Suarez',
      content: `La experiencia con Maria fue increíble, nos ayudó a tomar la mejor decisión en el tiempo correcto!! Fue una guía fundamental para toooodo. Siempre con atención al detalle y muy atenta de que no faltara absolutamente nada.
      En este proceso es importante que la persona entienda que siempre hay dudas y que ayude a aclararlas, y ella fue la MEJOR!! Mil gracias por todo y ahora somos felizmente dueños de casa.`
    },
    {
      id: 4,
      // img: "assets/img/testimonial/4/ts-4.jpg",
      name: 'Khiara Flaviani',
      content: `El proceso de comprar es mucho mas sencillo contando con la ayuda de María Alejandra recomendada 100% estamos muy satisfechos y agradecidos con ella.`
    }
  ]
  return (
    <>
      <section className={`tptestimonial-area grey-bg p-relative pt-110 pb-105 ${padd ? padd : ''}`}>
        <div className="tptestimonial__inner">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-section-title text-center">
                  <h3 className="tpds-title">Read Some <span>Review <br /> of My Work</span></h3>
                </div>
              </div>
            </div>
            <div className="row mt-60">
              <div className="col-xl-12">
                <div className="tpm-ts-slider tpm-ts-slider-active">

                  <Swiper modules={[Pagination]} className="pb-80"
                    spaceBetween={25}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 6000 }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      550: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {testimonialData.map(item => {
                      return (
                        <SwiperSlide key={item.id}>
                          <div className="tpm-ts-slider-item" >
                            <div className="tptestimonial tpm-testimonial white-bg" style={{height: '350px'}}>
                              <div className="client__info mb-30">
                                <div className="client__image client__image-tpm mr-15">
                                  {item.img && <img src={item.img} alt="author-img" />}
                                  <span className="ts-quote"><i className="fas fa-quote-right"></i></span>
                                </div>
                                <div className="client__content">
                                  <h5 className="client__name mb-10">{item.name}</h5>
                                  <span className="client__ts-degination">/ CLIENT OF COMPANY</span>
                                </div>
                              </div>
                              <p>{item.content.length > 100 ? (<span>{item.content.slice(0,100)} <a href='https://www.google.com/maps/place/Just+Loan+Solutions/@25.7885449,-80.1920055,17z/data=!4m14!1m7!3m6!1s0x88d9a538011fd34d:0x6d9d27af05a7381b!2sJust+Loan+Solutions!8m2!3d25.7885449!4d-80.1898168!16s%2Fg%2F11j2spvbvk!3m5!1s0x88d9a538011fd34d:0x6d9d27af05a7381b!8m2!3d25.7885449!4d-80.1898168!16s%2Fg%2F11j2spvbvk'> ... <span style={{color:'#FD4766'}}>Read more</span></a></span>): item.content}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    })
                    }
                  </Swiper>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;