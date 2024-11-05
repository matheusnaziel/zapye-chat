import React from 'react'

export default function FeatureTwo() {
  return (
    <section id="features">
      <div className="feature-section-wrapper w-full py-16 md:py-[130px] mt-8 md:mt-[130px] relative overflow-x-hidden">
        <div className="mx-auto theme-container">
        <div className="flex mb-[50px]">
              <h2 className="sm:text-48 text-24 font-semibold text-white mb-[32px] mt-[18px] w-full max-w-[795px] text-center mx-auto">
              Converse Mais Fácil,<br />
              Atenda com Inteligência
              </h2>
            </div>
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-[140px] items-center">
            <div className="w-full">
              <div className="w-full">
                <div data-aos="fade-up" className="feature-item-h-4">
                  <div className="feature-item-wrapper w-full px-5 py-5 md:px-[30px] md:py-[35px] flex flex-col sm:flex-row gap-5 sm:gap-10 items-start">
                    <div className="w-[30px]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="#fff">
                        <path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6l19.5 0c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5l0 54.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-54.5-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 font-semibold leading-none text-white text-22">
                        Gestão Centralizada de Conversas
                      </h3>
                      <p className="text-white opacity-50">
                        Visualize e organize todas as interações com clientes em um só lugar. Com a nossa plataforma, você pode acessar facilmente conversas abertas, resolvidas e em espera, garantindo que nenhuma solicitação passe despercebida.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="feature-item-h-4"
                >
                  <div className="feature-item-wrapper w-full px-5 py-5 md:px-[30px] md:py-[35px] flex flex-col sm:flex-row gap-5 sm:gap-10 items-start">
                    <div className="w-[30px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="#fff">
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c10 0 18.8-4.9 24.2-12.5l-99.2-99.2c-14.9-14.9-23.3-35.1-23.3-56.1l0-33c-15.9-4.7-32.8-7.2-50.3-7.2l-91.4 0zM384 224c-17.7 0-32 14.3-32 32l0 82.7c0 17 6.7 33.3 18.7 45.3L478.1 491.3c18.7 18.7 49.1 18.7 67.9 0l73.4-73.4c18.7-18.7 18.7-49.1 0-67.9L512 242.7c-12-12-28.3-18.7-45.3-18.7L384 224zm24 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                    </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 font-semibold leading-none text-white text-22">
                        Organização por Filas e Tags
                      </h3>
                      <p className="text-white opacity-50">
                        Categorize e priorize atendimentos com o uso de filas e tags personalizadas. Isso permite que sua equipe atenda mais rapidamente, direcionando cada cliente para o setor ou atendimento correto, aumentando a eficiência do processo.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="feature-item-h-4"
                >
                  <div className="feature-item-wrapper w-full px-5 py-5 md:px-[30px] md:py-[35px] flex flex-col sm:flex-row gap-5 sm:gap-10 items-start">
                    <div className="w-[30px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
                      <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
                    </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 font-semibold leading-none text-white text-22">
                        Dashboard de Performance e Estatísticas
                      </h3>
                      <p className="text-white opacity-50">
                        Monitore o desempenho de sua equipe com métricas detalhadas sobre tempo de atendimento, número de conversas finalizadas e novas conexões. O painel de performance oferece uma visão clara da produtividade, facilitando ajustes e melhorias.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="w-full">
              <div className="px-5 py-4 md:px-[74px] md:py-[67px] rounded-[20px] border border-[#01BD65] bg-[#062100]">
                <img
                  src="/assets/images/home-four/features-thumb.png"
                  alt=""
                  className="w-full rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-10 shape-1 left-40 top-96">
          <img src="/assets/images/home-four/shape-1.webp" alt="" />
        </div>
        <div className="absolute z-10 shape-2 right-96 top-96">
          <img src="/assets/images/home-four/shape-2.webp" alt="" />
        </div>
        <div className="shape-3 absolute left-96 top-[550px] z-10">
          <img src="/assets/images/home-four/shape-3.webp" alt="" />
        </div>
        <div className="shape-4 absolute right-96 top-[550px] z-10">
          <img src="/assets/images/home-four/shape-4.webp" alt="" />
        </div>
      </div>
    </section>
  );
}
