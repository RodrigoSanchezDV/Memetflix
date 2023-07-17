/* eslint-disable qwik/jsx-img */
import { component$, Resource, useResource$, useContext } from "@builder.io/qwik";
import { typeContextID, trendContenxtID } from '~/routes/layout';
import { api_service } from "~/api/Api-service";
import Movie from "~/components/movies/movie"
import Serie from "~/components/series/serie"
import Navbar from "~/components/header/navbar";
import type { MovieType } from "~/models/models_movies"
import type { SerieType } from "~/models/models_series"

export default component$(() => {
  const type = useContext(typeContextID)
  const trend = useContext(trendContenxtID)
  const useResourceMoviesSeries = useResource$(async({track})=>{
    track(type)
    track(trend)
    const response = await api_service.movies_series({
      type: type.value,
      trend: trend.value
    });
    return response
  })
  return (
    <>
      <Navbar/>
      <div class="flex justify-center w-full">
        <div class="flex justify-around flex-wrap">
          <ul class="flex justify-around flex-wrap w-3/4 bg-gray">
            {type.value == "movie"?
              <Resource
                value={useResourceMoviesSeries}
                onPending={() => <p>Loading.....</p>}
                onResolved={({results}) => {
                  return(
                    <>
                      {results.map((data : MovieType)=>{
                        return(
                          <Movie movie={data} key={data.id}/>
                        )
                      })}
                    </>
                  )
                }}
              />
              :
              <Resource
                value={useResourceMoviesSeries}
                onPending={() => <p>Loading.....</p>}
                onResolved={({results}) => {
                  return(
                    <>
                      {results.map((data : SerieType)=>{
                        return(
                          <Serie serie={data} key={data.id}/>
                        )
                      })}
                    </>
                  )
                }}
              />
          }
          </ul>
        </div>
      </div>
    </>
  );
});


