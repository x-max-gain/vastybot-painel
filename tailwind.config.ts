import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        "mr-50": "-50px", // Adiciona a classe m-[-50px]
      },
      colors: {
        background: {
          main: "#4182e0",
          primary: "#fff",
          hoverPrimary: "#f9f9f9",
          secondary: "#eee",
          secondaryDark: "#ddd",
          secondaryDarkBig: "#ccc",
          green: "#08DD7E",
          decoration: "#4182e0", // #243bed
          deep: "#f5f5f5",
          danger: "red",
          success: "#08DD7E",
          warnning: "yellow",
        },
        text: {
          primary: "#000",
          primary2: "#666666",
          secondary: "#A1A1AA",
          alternatve: "#000",
          ligth: "#fff",
          main: "#4182e0",
          danger: "#F00",
        },
        icons: {
          primary: "#929292",
          active: "#08DD7E",
          background: "#27272A",
        },
        border: {
          primary: "#75FFC1",
          secondary: "#393939",
          danger: "#F00",
          success: "#08DD7E",
        },
        button: {
          primary: "#08DD7E",
          secondary: "#393939",
          hover: "#049354",
        },
      },
      translate: {
        profile: "-10rem",
      },
    },
  },
  plugins: [],
};
export default config;
