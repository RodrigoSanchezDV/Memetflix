/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import {
    IcSharpStarRate,
    MaterialSymbolsPersonRaisedHand,
} from "~/components/icons/icons";

import { api_service } from "~/api/Api-service";
import type { Genre, ProductionCompany } from "~/models/models_movie_details";

export const useRouteLoader = routeLoader$(async (requestEvent) => {
    const id = requestEvent.params.id;
    const response = await api_service.details_movies({ id });
    return response;
});

export default component$(() => {
    const response = useRouteLoader();
    return (
        <>
            <div class="flex justify-center  text-white pt-5 font-bold">
                <div class="w-3/4 text-center">
                        <h2 class="text-red-500 text-3xl mb-5">{response.value.original_title}</h2>
                        <div class="flex justify-start border border-gray-800 mt-[4px] mb-[4px] p-[4px]">
                        <h2 class="mr-[5px]">Realeased date</h2>
                        <h2 class="text-orange-300">{response.value.release_date}</h2>
                    </div>
                    <div class="flex justify-start  border border-gray-800 mt-[4px] mb-[4px] p-[4px]">
                        <h2 class="mr-[5px]">Classification</h2>
                        <h2 class="text-green-500">{!response.value.adult ? " For all public" : ""}</h2>
                        <h2 class="text-red-500">{response.value.adult ? " +18" : ""}</h2>
                    </div>
                    <div class="flex justify-start  border border-gray-800 mt-[4px] mb-[4px] p-[4px]">
                        <h3 class="mr-[5px]">Genres</h3>
                        <h3 class="text-pink-500">
                            {response.value.genres.map((data: Genre) => {
                            return data.name + " ";
                            })}
                        </h3>
                    </div>
                    <h2 class="border border-gray-800 mt-[4px] mb-[4px] p-[4px]">{response.value.overview}</h2>
                    <div class="flex justify-start border border-gray-800 mt-[4px] mb-[4px] p-[4px]">
                        <h3 class="mr-[5px]">Produced by</h3>
                        <h3 class="text-red-500">
                            {response.value.production_companies.map(
                            (data: ProductionCompany) => {
                                return data.name + "(" + data.origin_country + ") ";
                            }
                            )}
                        </h3>
                    </div>
                    <div>
                        <p class="text-green-500 border border-green-500 mt-[4px] mb-[4px] p-[4px]">
                            {" "}
                            {response.value.vote_average.toString().slice(0, 3)}{" "}
                            <IcSharpStarRate class="inline-block mb-1" /> /{" "}
                            {response.value.vote_count}{" "}
                            <MaterialSymbolsPersonRaisedHand class="inline-block mb-1" />{" "}
                        </p>
                    </div>
                </div>
            </div>
            {response.value.videos &&
            response.value.videos.results[0] &&
            response.value.videos.results[0].key ? (
            <div class="relative">
                <div
                key={"!"}
                class="embed-responsive embed-responsive-4by3  aspect-video"
                >
                <iframe
                    class="w-full h-full"
                    src={`https://www.youtube.com/embed/${response.value.videos.results[0].key}?autoplay=1&mute=1&controls=1&vq=hd1080&rel=0&loop=1&showinfo=0&modestbranding=1&autohide=1&playlist=${response.value.videos.results[0].key}`}
                    title="Pruebas"
                    name=""
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
            </div>
            ) : (
            <div key={"!"} class="aspect-video">
                <img
                src={`https://image.tmdb.org/t/p/original${response.value.poster_path}`}
                class="image"
                alt="Image"
                />
            </div>
            )}
        </>
    );
});
