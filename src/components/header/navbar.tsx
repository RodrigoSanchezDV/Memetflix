/* eslint-disable qwik/jsx-img */
import { component$, useContext } from "@builder.io/qwik";
import { typeContextID, trendContenxtID } from '~/routes/layout';
/* import Icon from "../icon"; */
export default component$(() => {
    const type = useContext(typeContextID)
    const trend = useContext(trendContenxtID)

    return (
    <div class="text-2xl font-extrabold pb-2 pt-2">
        <div class="flex justify-center">
            <p class="mt-[3px]"> The 20 best </p>
            <select name="" id="" class="text-red-500 bg-black text-center" onChange$={(e)=>{ type.value = e.target.value }}>
                <option value="movie">Movies</option>
                <option value="tv">TV Series</option>
            </select>
            <p class="mt-[3px] ml-[7px]">of the</p>
            <select name="" id="" class="text-red-500 bg-black text-center ml-[5px]" onChange$={(e)=>{ trend.value = e.target.value }}>
                <option value="day">Day</option>
                <option value="week">Week</option>
            </select>
        </div>
    </div>
    );
});
