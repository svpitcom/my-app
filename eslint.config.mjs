export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [
      {
        extends: "next",
        rules: {
          "react/no-unescaped-entities": "off",
          "@next/next/no-page-custom-font": "off",
        },
      },
    ],
  },
];
