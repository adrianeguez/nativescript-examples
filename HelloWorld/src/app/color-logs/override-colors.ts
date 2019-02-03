import {black, blue, colorReset, cyan, green, red, yellow} from "~/app/color-logs/colors";

export function overrideColors() {
    const colors = [
        {
            log: green
        },
        {
            info: blue
        },
        {
            warn: yellow
        },
        {
            error: red
        },
        {
            dir: cyan
        }
    ];

    colors
        .forEach((objetoColor) => {
            const nombreColor = Object.keys(objetoColor)[0];
            const color = black + objetoColor[nombreColor];
            console[nombreColor] = console[nombreColor].bind(console, color, nombreColor.toUpperCase(), colorReset);
        })

}
