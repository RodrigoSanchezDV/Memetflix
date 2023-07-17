import { component$, Slot, createContextId, useSignal, useContextProvider } from "@builder.io/qwik";
import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";
import type { Signal } from "@builder.io/qwik";

export const typeContextID = createContextId<Signal<string>>("type")
export const trendContenxtID = createContextId<Signal<string>>("trend")

export default component$(() => {

  const type = useSignal("movie")
  const trend = useSignal("day")
  
  useContextProvider(typeContextID, type)
  useContextProvider(trendContenxtID, trend)
  
  useContextProvider
  return (
    <div class="text-white">
      <Header />
      <main class="bg-black min-h-[100vh] pb-5">
        <Slot />
      </main>
      <Footer/>
    </div>
  );
});
