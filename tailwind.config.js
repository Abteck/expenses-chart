/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
      },
      colors: {
        // neutral
        "Dark-brown": "hsl(25, 47%, 15%)",
        "Medium-brown": "hsl(28, 10%, 53%)",
        Cream: "hsl(27, 66%, 92%)",
        "Very-pale-orange": "hsl(33, 100%, 98%)",
        // primary
        "Soft-red": "hsl(10, 79%, 65%)",
        Cyan: "hsl(186, 34%, 60%)",
      },
      fontFamily: {
        "Dm-sans": "'DM Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
