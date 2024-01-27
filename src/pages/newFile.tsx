import BaseHead from "../components/BaseHead.astro";
import Content from "../components/Content.astro";
import Header from "../components/Header.astro";
import Masthead from "../components/Masthead.astro";
import Footer from "../components/Footer.astro";
import { IoMdArrowForward } from "react-icons/io";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import Body from "../components/Body.astro";
import FormattedDate from "../components/FormattedDate.astro";
import { posts } from "./index.astro";

<Fragment>
  <html lang="en">
    <head>
      <BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />
    </head>
    <Body>
      <Header title={SITE_TITLE} />
      <main class="pt-[56px]">
        <Masthead />
        <h1 class="font-mplus text-center m-5">Lo que hago</h1>
        <Content>
          <section>
            <p class="mb-8 ident-4">
              Soy un desarrollador web con experiencia en front-end y
              habilidades en HTML, CSS, JavaScript y Vue. Actualmente estudio en
              SENA en Análisis y Desarrollo de Software y estoy interesado en
              trabajar con los mejores en la industria para aprender de ellos y
              mejorar mis habilidades. He trabajado en varios proyectos
              personales en el pasado donde contribuí en el diseño y la
              optimización de la interfaz de usuario. Me apasiona la usabilidad
              y la creación de experiencias de usuario atractivas y fáciles de
              usar.
              <a class="inline-flex items-center gap-1 indent-1 text-orange-500">
                Mas sobre mi <IoMdArrowForward className="inline" />
              </a>
            </p>
          </section>

          <section>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
              {posts.map((post) => (
                <Fragment>
                  <li class="text-center mb-4">
                    <a href={`/blog/${post.slug}/`}>
                      <img
                        class="border"
                        src={post.data.heroImage}
                        alt=""
                        aspectRatio={2}
                      />
                      <div class="mt-3 text-xl">{post.data.title}</div>
                      <div class="opacity-70">
                        <FormattedDate date={post.data.pubDate} />
                      </div>
                    </a>
                  </li>
                </Fragment>
              ))}
            </ul>
          </section>
        </Content>
      </main>
      <Footer />
    </Body>
  </html>
</Fragment>;
