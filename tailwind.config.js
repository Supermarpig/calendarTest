import typography from "@tailwindcss/typography";
import { lionPlugin } from './src/react-ui'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [lionPlugin, typography],
}

