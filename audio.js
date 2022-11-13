(() => {
    if (typeof document === "undefined") throw new Error("document not defined")
    if (typeof CustomEvent === "undefined") throw new Error("CustomEvent not defined")

    const script = document.currentScript
    document.querySelectorAll(`source[class][src][type^="audio/"]:not(.ignore)`)
        .forEach(source => source.classList.forEach(name => document.querySelectorAll(
            `*[class*="${name}:"]:not(source):not(.ignore),
            .${name}:not(source):not(.ignore)`
        ).forEach(element => {
            const triggers = []
            element.classList.forEach(_name => {
                if (_name === name || _name === `${name}-`) { _name = `${name}:click` }
                if (_name.startsWith(`${name}:`) && _name.length > name.length + 1) {
                    triggers.push(_name.substring(name.length + 1))
                }
            })
            console.log(triggers)
            triggers.forEach(trigger => {
                let timeout = false
                const event = new CustomEvent("play", {
                    detail: {
                        audio: source.src,
                        trigger: trigger
                    }
                })
                element.addEventListener(trigger, _ => {
                    if (timeout) return
                    const audio = new Audio(source.src)
                    audio.volume = parseFloat(script.getAttribute("volume")) || 1
                    audio.muted = ["true", ""].includes(script.getAttribute("muted"))
                    console.log(audio.volume, audio.muted)
                    audio.addEventListener("canplaythrough", _ => audio.play())
                    script.dispatchEvent(event)
                    timeout = true
                    setTimeout(() => timeout = false, 100)
                })
            })
        })))
    ran = true
})()