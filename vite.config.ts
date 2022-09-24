import path from "path";
import { defineConfig } from "vite";
// import ViteSSR from 'vite-ssr/plugin'
// import ViteComponents from 'vite-plugin-components'
import Components from "unplugin-vue-components/vite";

import Vue from "@vitejs/plugin-vue";
import voie from "vite-plugin-voie";
import WindiCSS from "vite-plugin-windicss";
import { I18nPlugin } from "./vite/i18n.plugin";
import { ComponentResolveResult, ComponentResolverFunction } from "unplugin-vue-components/types";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "client")}/`
    }
  },
  plugins: [
    Vue(),
    // ViteSSR(),
    // https://github.com/antfu/vite-plugin-components#configuration
    Components({
      dirs: "client/components",
      // deep: false,
      dts: true,
      // exclude: [
      //   /.*SiteHeader\.vue.*/
      // ],
      // globs: [
      //   "client/components/*.vue",
      //   "!(client/components/client/components/SiteHeader.vue)"
      // ],
      // resolvers: [
      //   (name) => {
      //     if (path.resolve("client/components/SiteHeader.vue")
      //       !== path.resolve(name)) {
      //       console.log(name);
      //       // return v;
      //     } else {
      //       console.log("ignore: ", name);
      //     }
      //     // if (name === "MyCustom")
      //     //   return path.resolve(__dirname, "src/CustomResolved.vue").replaceAll("\\", "/");
      //   }]
      // importPathTransform: v => {
      //   if (path.resolve("client/components/SiteHeader.vue")
      //     !== path.resolve(v)) {
      //     console.log(v);
      //     // return v;
      //   } else {
      //     console.log("ignore: ", v);
      //   }
      //   return undefined
      // }
    }),
    WindiCSS({
      scan: {
        dirs: ["client"]
      }
    }),
    voie({
      pagesDir: "client/pages"
    }),
    I18nPlugin(path.join(__dirname, "client/locales"))
  ]
});
