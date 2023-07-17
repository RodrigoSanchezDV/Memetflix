/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import type { MovieType } from "~/models/models_movies";
import { IcSharpStarRate, MaterialSymbolsPersonRaisedHand } from "~/components/icons/icons"
import { Link } from "@builder.io/qwik-city";
interface Props{
    movie: MovieType
}

export default component$(({movie}:Props)=>{
    return(
        <Link href={`/details/movie/${movie.id}`}>
            <li class="relative group m-3 p-[2px] text-xl font-semibold rounded-b-xl border border-[#454545] hover:border-red-600 ">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} class="w-[203.55px] h-[300px]" alt="Image" />
                <div class="max-width-203 text-center pb-5">
                    <h5 class="absolute top-0 group-hover:opacity-100 opacity-0 overflow-scroll max-height-302 text-base font-bold bg-black bg-opacity-90 transition-opacity">
                        {movie.overview}
                    </h5>
                    <div class="h-14 flex items-center">
                        <h3 class="w-full ">{movie.title}</h3>
                    </div>
                    <h2 class="">{movie.release_date}</h2>
                    <p class="text-center text-red-500 mt-3"> {movie.vote_average.toString().slice(0,3)} <IcSharpStarRate class="inline-block mb-1"/> / {movie.vote_count} <MaterialSymbolsPersonRaisedHand class="inline-block mb-1"/> </p>
                </div>
            </li>
        </Link>
    )
})