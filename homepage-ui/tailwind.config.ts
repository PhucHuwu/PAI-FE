import type { Config } from "tailwindcss";

const config: Config = {
  // ... nội dung cũ giữ nguyên
  theme: {
    extend: {
      fontFamily: {
        // Khai báo tên class mới là 'anton'
        anton: ['var(--font-anton)'], 
      },
    },
  },
  // ...
};
export default config;