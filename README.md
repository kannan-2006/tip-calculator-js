# tip-calculator-js

# 💸 Tip Calculator

This web app takes the hassle out of splitting bills and figuring out tips. It uses JavaScript to pull your numbers from the input fields and updates the totals as you go—no page reloads, no fuss.

## ✨ Features

* **Automatic Calculations:** Instantly works out your tip based on the percentage you choose and adds it to the bill.
* **Smart Input Checks:** If you forget to fill something in, you’ll see a clear red error message.
* **Responsive Design:** Built with Bootstrap 4’s grid, so the layout looks great whether you’re on your phone or a big screen.
* **Clean Typography:** Uses Google’s Roboto font for a modern, easy-to-read look.

## 🛠️ Tech Stack

* HTML5: Handles the form and input fields.
* CSS3: Styles the borders, buttons, and error messages.
* Bootstrap 4: Makes the layout flexible and buttons look sharp.
* JavaScript: Grabs your input, turns it into numbers, and does the math.

🚀 How It Works

Everything happens in the `calculateAmount()` function:

1. It grabs your bill amount and tip percentage.
2. If you leave either field blank, you’ll see a red “Please Enter a Valid Input” message.
3. It converts your input from text to numbers with `parseInt()`.
4. Then it updates the tip and total fields with your results—right there, without refreshing the page.
