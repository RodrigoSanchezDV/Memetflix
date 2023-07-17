/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import type { SerieType } from "~/models/models_series";
import { IcSharpStarRate, MaterialSymbolsPersonRaisedHand } from "~/components/icons/icons"
import { Link } from "@builder.io/qwik-city";
interface Props{
    serie: SerieType
}

export default component$(({serie}:Props)=>{
    return(
        <Link href={`/details/series/${serie.id}`}>
            <li class="relative group m-3 p-[2px] text-xl font-semibold rounded-b-xl  mt-5 border border-[#454545] hover:border-red-600">
                <img src={`https://image.tmdb.org/t/p/original${serie.poster_path}`} class="w-[203.55px] h-[300px]" alt="Image" />
                <div class="max-width-203 text-center pb-5">
                    <h5 class="absolute top-0 group-hover:opacity-100 opacity-0 overflow-scroll max-height-302  text-base font-bold bg-black bg-opacity-90 transition-opacity">
                        {serie.overview}
                    </h5>
                    <div class="h-14 flex items-center">
                        <h3 class="w-full ">{serie.name}</h3>
                    </div>
                    <h2 class="">{serie.first_air_date}</h2>
                    <p class="text-center text-red-500 mt-3"> {serie.vote_average.toString().slice(0,3)} <IcSharpStarRate class="inline-block mb-1"/> / {serie.vote_count} <MaterialSymbolsPersonRaisedHand class="inline-block mb-1"/> </p>
                </div>
            </li>
        </Link>
    )
})