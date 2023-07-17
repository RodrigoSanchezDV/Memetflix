/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header class="color-header flex justify-center">
      <Link href="/" class="w-auto">
        <img src="/images-logos/logoHeader.png" alt="" width="140" height="100" class=""/>
      </Link>
    </header>
  );
});
