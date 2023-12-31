import React from "react";
import "./loading.css";

export const Loading = () => {

    const jokes = [["Why do programmers prefer dark mode?", "Because light attracts bugs"], ["Why do programmers wear glasses?", "Because they can't C#"], ["Why did the programmer quit his job?", "He didn't get arrays"], ["Why did the JavaScript developer wear glasses?", "Because he couldn't C#"]]
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    return (
        <div className="center-content flex-column full-height complete-center" style={{textAlign: "center"}}>
            <svg class="pl" viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
                        <stop offset="0%" stop-color="#A0C3FF" />
                        <stop offset="100%" stop-color="#4285F4" />
                    </linearGradient>
                    <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#A0C3FF" />
                        <stop offset="100%" stop-color="#4285F4" />
                    </linearGradient>
                </defs>
                <circle class="pl__ring" cx="100" cy="100" r="82" fill="none" stroke="url(#pl-grad1)" stroke-width="36" stroke-dasharray="0 257 1 257" stroke-dashoffset="0.01" stroke-linecap="round" transform="rotate(-90,100,100)" />
                <line class="pl__ball" stroke="url(#pl-grad2)" x1="100" y1="18" x2="100.01" y2="182" stroke-width="36" stroke-dasharray="1 165" stroke-linecap="round" />
            </svg>
        </div>
    )
}