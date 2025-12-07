import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#191970',
        'secondary-bg': '#f0f8ff',
        'primary-text': '#dfdfdf',
        'secondary-text': '#1f1f1f',
        'accent': '#f4a460',
      },
    },
  },
};

export default config;
