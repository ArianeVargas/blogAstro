import { Image } from "astro:assets";

<Fragment>
  <section class="relative mb-6 h-80 flex justify-center items-center">
    <div class="absolute w-full h-full overflow-hidden">
      <Image
        src="/public/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg"
        alt="Texto descriptivo"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    <div class="z-10 text-center px-8 drop-shadow-lg shadow-black">
      <div class="uppercase text-sm mb-4">Bienvenido</div>
      <div class="text-4xl font-mplus font-medium">
        Una lista seleccionada de la tecnología que{" "}
        <span class="text-orange-500">uso</span>
      </div>
    </div>
  </section>
</Fragment>;
