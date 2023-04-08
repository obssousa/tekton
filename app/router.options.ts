import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
    scrollBehavior(to) {
            return {
              top: 40,
              el: to.hash,
              behavior: 'smooth'
            }
    }
};