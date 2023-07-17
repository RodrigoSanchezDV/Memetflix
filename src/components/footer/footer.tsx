/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
export default component$(() => {

  return (
    <footer class="">
      <div class="footerBackground">
          <div class="logotipoSectionFooter">
              <Link href="/"><img src="/images-logos/logoFooter.png" alt="" class='h-[90px] w-[150px]'/></Link>
          </div>
      </div>
    </footer>
  );
});
