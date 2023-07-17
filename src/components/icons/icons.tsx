/* import { component$ } from "@builder.io/qwik"; */
import type { QwikIntrinsicElements } from '@builder.io/qwik'
/* interface Props {
    size?: number | string;
    color?: string;
    name: string;
    class?: string;
}

export default component$((props: Props) => {
    return ( 
    <div style={`width:${props.size}px; height:${props.size}px`} class="inline-block">
        <span
            class={`iconify-inline ${props.class}`}
            data-icon={props.name}
            color={props.color}
            style={`font-size: ${props.size}px; width:${props.size}px; height:${props.size}px`}
            >
        </span>
    </div>
    );
}); */




export function IcSharpStarRate(props: QwikIntrinsicElements['svg'], key: string) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props} key={key}><path fill="currentColor" d="M14.43 10L12 2l-2.43 8H2l6.18 4.41L5.83 22L12 17.31L18.18 22l-2.35-7.59L22 10z"></path></svg>
    )
}


export function MaterialSymbolsPersonRaisedHand(props: QwikIntrinsicElements['svg'], key: string) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props} key={key}><path fill="currentColor" d="M2 23v-2h20v2H2Zm2-3v-6q-.825-1.35-1.275-2.863t-.45-3.087q0-1.525.388-3t.912-2.9q.2-.525.65-.838t1-.312Q6 1 6.55 1.525T7 2.775L6.725 5.05q-.15 1.2.213 2.275t1.087 1.887q.725.813 1.75 1.3T12 11q1.5 0 3.013.313t2.637.887q1.125.575 1.738 1.463T20 15.85V20H10v-.925q0-.85.575-1.463T12 17h4v-2h-4q-1.675 0-2.838 1.2T8 19.075V20H4Zm8-10q-1.65 0-2.825-1.175T8 6q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6q0 1.65-1.175 2.825T12 10Z"></path></svg>
    )
}