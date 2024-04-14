# CS 732 Assignment - Tailwind CSS - Elsa Jiang

Kia ora

Thanks for the time to read the README. 😄 This repository is a code demo about **Tailwind CSS**. The structure of this README is as follows:

1. [Tailwind CSS and demo case introduction](#tailwind-css-and-demo-case-introduction)
2. [Installation guide for applying Tailwind CSS and running the demo code](#installation-guide-for-applying-tailwind-css-and-running-the-demo-code)
   - [Prerequisite](#prerequisite)
   - [Installation guide for Tailwind CSS](#installation-guide-for-tailwind-css)
   - [Introductions for running the demo code](#introductions-for-running-the-demo-code)
3. [Style introduction](#style-introduction)
   - [Website Overview](#website-overview)
   - [The home page](#the-home-page)
   - [The other pages](#the-other-pages)

## Tailwind CSS and demo case introduction

For someone unfamiliar with Tailwind CSS, it is a CSS framework like Bootstrap. Tailwind CSS does not provide ready-made building blocks like other CSS frameworks but lets designers build custom styles by assigning pre-set class names to elements. Even though it may lead to many class names being assigned to each component, it is a convenient CSS framework for me. Google Chrome, Microsoft Edge, Firefox, and Safari support Tailwind CSS. For more information about Tailwind CSS, please refer to its official [documents](https://tailwindcss.com/docs/installation) and a detailed Tailwind CSS [tutorial](https://www.geeksforgeeks.org/tailwind-css/?ref=lbp).

The demo case is about building a construction company website with Vite + React + Tailwind CSS. The company is newly started and needs a website to exhibit its projects and certifications and attract potential customers. It is more like a portfolio website. They only need the website to have one practical function -- a Contact Us form. The website styles they require are consistent, elegant, comprehensive, and responsive, as some people may check their website through phones. About the website colour, they want to match their company icon, shown as follows:

![Para Projects Company Icon](/images/para-icon.jpg)

The theme colours of this website are black, orange, and white.

[Back to Top](#cs-732-assignment---tailwind-css---elsa-jiang)

## Installation guide for applying Tailwind CSS and running the demo code

### Prerequisite 

Make sure you have installed [Node.js](https://nodejs.org/en/), [git](https://git-scm.com/) and a text editor like [VS Code](https://code.visualstudio.com/). If you are not sure whether you have installed Node.js and git or not, open your terminal and run:

```sh
node -v
git --version
```

If you have installed them, the command will display the version of Node.js and git. Otherwise, you will receive error messages.

### Installation guide for Tailwind CSS

Now you can install and try to use Tailwind CSS. Create a folder named "demo" on your desktop and open it in your terminal.

**Step one: Setting up a react app using Vite**

Vite + React is a popular toolchain for React developers. To get started, run 

```sh
npm create vite@latest
```

and follow the prompts:

- **Project name**: Any name you want to assign to your project, such as "demo-project".

- **Select a framework**: Choose "React" by using the arrow keys on your keyboard.

- **Select a variant**: Choose "JavaScipt + SWC" by arrow keys on your keyboard.

Now you have created a react project in a folder named after your project name. Open the folder in VS Code, start a new terminal, install dependencies and start the dev environment.

```sh
cd your-project-name
npm install
npm run dev
```

The URL for the app will be shown in the terminal window (http://localhost:5173/). Open the link and this is the initial webpage. 

**Step two: Integrate Tailwind CSS**

Next, use Ctrl+C to exit and run the following commands:

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Tailwind CSS is not the same as regular CSS libraries. You need to transpile your code using Tailwind classes to make styles work. The recommended transpiler is the [PostCSS](https://postcss.org/) preprocessor. It uses JavaScript to transform CSS styles with plugins. Autoprefixer is one of the most popular plugins which we will use here. For more information about installation of Tailwind CSS, please refer to its official [documents](https://tailwindcss.com/docs/guides/create-react-app).

Then configure your template paths by modifying the tailwind.config.js file to
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your index.css file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Step three: Use Tailwind CSS to change styles**

Now we are ready to change the styles of the website as we want. For example, we can change the 

```jsx
<h1>Vite + React</h1>
```
in the App.jsx file to 

```jsx
<h1 className='bg-black text-white'>Vite + React</h1>
```

And run 

```sh
npm run dev
```

Open the URL (http://localhost:5173/), we can find the background and text colour of the heading "Vite + React" have changed to black and white, respectively. Feel free to exit or explore more class names. For more instructions, please refer to a detailed Tailwind CSS [tutorial](https://www.geeksforgeeks.org/tailwind-css/?ref=lbp). 

[Back to Top](#cs-732-assignment---tailwind-css---elsa-jiang)

### Introductions for running the demo code

**Step one: Clone the git repository to your local envirment**

Open your terminal and switch to any directory you want and run

```sh
git clone https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-XJIA357.git
```
or 

```sh
git clone https://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@github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-XJIA357.git
```

Then you will have a folder called "cs732-assignment-XJIA357".

**Step two: Install dependencies**

Open the "cs732-assignment-XJIA357" folder in VS Code, open a new terminal, and switch to the "para-projects" folder. It is essential that if you stay in the "cs732-assignment-XJIA357" folder, you cannot run the code correctly. Then run:

```sh
npm install
```

to install all necessary dependencies.

**Step three: Run the code

Use

```sh
npm run dev
```

to run the code and the website should be ready at http://localhost:5173/.

[Back to Top](#cs-732-assignment---tailwind-css---elsa-jiang)

## Style introduction

### Website Overview

The website is composed of a header, a footer, and content sections. The header and the footer contain one navigation bar, respectively. They will be displayed on every page. The navigation bar includes five links to related pages. If users navigate to exactly /, automatically redirect the users to /home. The other four pages can be accessed through the links on the navigation bars. Routes are as follows:

```jsx
<BrowserRouter>
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className='flex-grow sm:px-20 rem'>
      <Routes>
        <Route path='/'>
          <Route index element={<Navigate to="home"/>}/>
          <Route path='home' element={<Home />}/>
          <Route path='gallery' element={<Gallery />}/>
          <Route path='projects' element={<Projects />}/>
          <Route path='certifications' element={<Certifications />}/>
          <Route path='contacts' element={<Contacts />}/>
        </Route>
      </Routes>
    </div>
    <Footer />
  </div>
</BrowserRouter>
```

**Tailwind CSS Container**

Before I introduce the pages, talking about Tailwind CSS Container is necessary. It is an important feature that we can use to display websites responsively. A container will fix an element's max-width to match the breakpoint's min-width. 

Breakpoints in tailwind CSS are as follows.

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

Use ```container mx-auto``` can center the container automatically.

[Back to Top](#cs-732-assignment---tailwind-css---elsa-jiang)

### The home page

The home page is the most complicated of all five pages, containing information from the other four. It includes 7 components, which are the [Header](./para-projects/src/Header.jsx), the [Footer](./para-projects/src/Footer.jsx), the [HomeFirstProject](./para-projects/src/home/HomeFirstProject.jsx), the [HomeAbout](./para-projects/src/home/HomeAbout.jsx), the [HomeMainFocus](./para-projects/src/home/HomeMainFocus.jsx), the [HomeSampleProjects](./para-projects/src/home/HomeSampleProjects.jsx), and the [HomeContactUs](./para-projects/src/home/HomeContactUs.jsx). 

**Section A: The Header component**

The [Header](./para-projects/src/Header.jsx) component comprises the company logo and a navigation bar. 

- **Layout:** The main div of the header component uses ```flex flex-row``` to enable a **Flexbox** layout and arrange the Flexbox items along the horizontal direction, the default value of flex-direction.
- **Alignment:** The main div contains ```items-center``` to align Flex items in the center along the cross-axis, vertically here. Usually, the logo and the navigation bar should be distributed to both ends, so we use```justify-between```. It positions the first element at the start, the last element at the end, and the rest evenly distributed in between.
- **Spacing:** The spacings between elements can be adjusted by classes such as ```py-6```, ```mx-4```, and ```space-x-10```. ```py``` means padding on the y-axis. ```mx``` means margin on the x-axis. ```space-x``` means spaces between child elements on the x-axis.
- **Typography:** The website uses default font family for easy-to-read. But the colour, size, and letter spacing of the text are changed for matching the theme and reponsiveness, like ```text-gray-600```, ```sm:text-xs```, and ```tracking-widest```. 
- **Borders:** Instead of using the default style of active links, the top and bottom borders of links will display by using ```border-b-2 border-t-2```.
- **Psedoclasses:** When users hover over the nav bar, the text colour changes to orange to match the theme colours, ```hover:text-orange-500```.

The screenshot of the header, when the screen width is larger or equal to the "sm" breakpoint, is as follows: 

![The header](/images/the-header.png)

- **Responsiveness:** If the screen width is too small, for example, people may open the website on their phones; there is no enough space to display everything. I use a hamburger menu button here. The button will hide when screen widths exceed the "sm" breakpoint by using ```sm:hidden```. Otherwise, the horizontal nav bar will hide,```hidden sm:block```. The hamburger menu will display and hide as users click the hamburger menu button. The position of the humburger menu is absolutely relative to a fixed parent. When the button is selected, the screen cannot scroll. 

The screenshot of the header, when the screen width is smaller than the "sm" breakpoint, is as follows: 

![The header on phones](/images/the-header-on-phones.png)

**Section B: The Footer component**

The [Footer](./para-projects/src/Footer.jsx) component comprises the company icon, a navigation bar, contact information, and social media links. Most settings are similar to the header component. The differences are:

- **Layout:** The footer component uses ```grid grid-cols-4``` to enable a **Grid** layout. Each row concedes four columns. And use ```gap``` to set the gutter between columns.
- **Alignment:** The footer component also uses ```justify-between``` to ensure every element is evenly distributed in all the spaces of the div. But use ```items-start``` to align elements to the top. Inside the elements are **Flexbox** layouts nested in the **Grid** layout. The ```items-start``` for them has different effects. For example, the ```items-start``` for the information element aligns text starting from the left. 

The screenshot of the footer, when the screen width is larger or equal to the "sm" breakpoint, is as follows:

![The footer](/images/the-footer.png)

- **Responsiveness:** If users check pages on their phones, the main div will use ```flex flex-col``` instead, and the company icon will be hidden. 

The screenshot of the footer, when the screen width is smaller than the "sm" breakpoint, is as follows: 

![The footer on phones](/images/the-footer-on-phones.png)

**Section C: The HomeFirstProject component**

The layout and responsiveness of the [HomeFirstProject](./para-projects/src/home/HomeFirstProject.jsx) component are similar to the footer component. The design changes from a grid layout to a flex layout when the screen width changes from larger than or equal to the "sm" breakpoint to more minor than the "sm" breakpoint. Although only two child components exist, it uses ```grid-cols-3``` and ```col-span-2``` to assign more space to the sliders.

**Section D: The HomeAbout component**

The [HomeAbout](./para-projects/src/home/HomeAbout.jsx) component has a complex design.

- **Position:** There is an image is placed partly outside of the background. To achieve this, there are two divs with almost the same content except the out-of-box image. The div without the image has a grey background and all contents are hidden. Another div for display is relative to a relative positioned parent, which is also the parent div of the background div. This way, the two divs can overlap, and it looks like one image is put out of the box.

![The home about](/images/the-home-about.png)

**Section E: The HomeMainFocus component**

The [HomeMainFocus](./para-projects/src/home/HomeMainFocus.jsx) component has a complicated layout.

- **Layout:** This component layout requires one element to keep left, one to keep centre, and one to keep right. The component enables two flex layouts. One layout aligns the first and second elements to the left. Another layout aligns the third and the front two elements to the right. Make sure the centre element spans across the container's width.
- **Position:** This component also has two overlap divs that relative positions should achieve. The two overlap divs line up over each other exactly. ```bg-opacity-60``` is used in the front div to increase the visibility of the back div.

**Section F: The HomeSampleProjects component**

**Section G: The HomeContactUs component**

[Back to Top](#cs-732-assignment---tailwind-css---elsa-jiang)

### The other pages

[Back to Top](#cs-732-assignment---tailwind-css---elsa-jiang)
