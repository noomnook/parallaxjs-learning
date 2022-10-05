import React, { useEffect } from "react";
import Parallax from "parallax-js";

function Home() {

    useEffect(() => {
        var scene = document.getElementById('scene')
        var parallaxObject = new Parallax(scene, {
            relativeInput: true
        })
    }, [])

    return (
        <>
            <div id="scene">
                <div data-depth="0.2">My first Layer!</div>
                <div data-depth="0.6">My second Layer!</div>
            </div>
        </>
    )
}

export default Home;