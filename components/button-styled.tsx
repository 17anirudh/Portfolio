/* 
    Button component with a cool hover effect
    From Uiverse.io by Itskrish01
*/

import type { ReactNode } from "react";

type Props = {
    type: "a" | "button",
    target?: "_blank" | "_self" | "_parent" | "_top",
    onClick?: () => void;
    display: string | ReactNode;
    redirect: string;
}

export default function BtnStyled({ ...props }: Props) {
    return (
        // <!-- From Uiverse.io by Itskrish01 -->
        <>
            {props.type === "a" ? (
                <a rel="noopener noreferrer" href={props.redirect} target={props.target || "_blank"} className="relative flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group mt-4 sm:mt-5 hover:bg-indigo-600 active:scale-95 touch-manipulation">
                <span className="absolute top-0 right-0 inline-block w-3 h-3 sm:w-4 sm:h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4 group-active:-mr-2 group-active:-mt-2">
                    <span className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"/>
                </span>
                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-3 h-3 sm:w-4 sm:h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4 group-active:-ml-2 group-active:-mb-2">
                    <span className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"/>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"/>
                <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">{props.display}</span>
                </a>
            ) : (
                <button className="mt-4 sm:mt-5 relative flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group hover:bg-indigo-600 active:scale-95 touch-manipulation">
                <span className="absolute top-0 right-0 inline-block w-3 h-3 sm:w-4 sm:h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4 group-active:-mr-2 group-active:-mt-2">
                    <span className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"/>
                </span>
                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-3 h-3 sm:w-4 sm:h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4 group-active:-ml-2 group-active:-mb-2">
                    <span className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"/>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"/>
                {typeof props.display === 'string' ? <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">{props.display}</span> : props.display}
                </button>
            )}
        </>

    )
}