# Frontend Mentor - Results summary component

### This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). This is not just a solution to an online challenge, but an opportunity to get started with CHAKRA-UI and start a series of my blog project "A Backend developer learning real frontend development".

## Table of contents

- [Overview](#overview)
  - [Motivation](#Motivation)
    - [The challenge Requirements](#the-challenge-requirements-from-frontend-mentor)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Building Process](#building-process)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Motivation

Aside from the project being a challenge from frontend mentor, my main aim for building this design was to find an approach on getting started with Chakra Ui and atleast some major concepts from the library (responsiveness, theming, syntax, e.t.c).

Aside that, a reason for picking this particular project in terms of complexity is to try to contribute back to the community through an upcoming series "A Backend developer learning real frontend development".

**Note** Using the term "real frontend development" might sound misleading to some frontend developers as "real frontend development" involves a whole lot of brain works, e.t.c, but this is a series that will help to scale experience in frontend development using my own learning curve as a guide.

#### The challenge Requirements

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

**Desktop Designs**

![My final Build for desktop view](<./final%20build%20designs/summary%20card%20desktop%20(2)_LI.jpg>)
![Frontend Mentor Desktop View](./final%20build%20designs/desktop-design.jpg)

**Mobile Designs**
![My final Build for mobile view](./final%20build%20designs/summary%20card%20mobile.jpg)
![Frontend Mentor Mobile View](./final%20build%20designs/mobile-design.jpg)

These are snapshots and original images of the project built, the one labelled with a red design is my final build, while the original to clone is the one without the label.

### Links

- Live Site URL: [Comming soon!](https://your-live-site-url.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Chakra UI](chakra-ui.com) - React.js component Library
  - [Box Component]()
  - [Flex Component]()
  - [Text Component]()
  - [Heading Component]()
  - [Center Component]()
  - [Button Component]()
  - [Icon Component]()

### Building Process

Before building this tho, it is quite essential to have knowledge on some foundations/prequisuites, such include

- HTML
- CSS
  - Flexbox
- Javascript
- JSX

##### What i learnt using this.

It is quite obvious, Chakra UI will have it's own unique syntax different from other libraries and frameworks i've used in the past. Tho, they take inspiration from some libraries, _check out their blog_, but chakra becomes like a favourite to me because it tries it's best to make it's syntax easy to adopt to.

The original syntax for writing css for a h1 text say "hello world" can be this,

```css
h1 {
  font-weight: 300;
  color: red;
  font-family: sans-serif;
  font-size: 15px;
}
```

But with chakra Ui, I can easily take this styles properties and values and use props identical to this but written in JS Camel case's for styling, hence for a Heading component

```JSX
    <Heading as={h1} fontWeight={300} color="red" fontFamily="sans-serif" fontSize="15px" >Hello world</Heading>
```

Also makes use of components which comes with some built in css styles but allows extension to your taste, e.g the Flex component which uses some flex css property under the hood.

Also, talking more on styling, Chakra UI gives easy way to make designs responsive, also create some default styles shared by the project in general. To make the Heading component responsive (changing the color in this case) based on different screen dimension, we will write something as such

```JSX
    import { Heading } from "@chakra-ui/react"
    const Component = () => {
        return (
            <>
                <Heading as={h1} color={["red", "blue"]}>Hello world</Heading>
                //the above syntax returns red for small screen size, while blue for desktop and large screens
            </>
        )
    }
    export default Component;
```

Hence, chakra UI makes it easy to build Design systems, Responsive designs and ship codes to production quickly thanks to it's already built component which scales as well.

[_More explanations at my blog - coming soon_](www.---.com)

### Continued development

Having starting with the basics, my plan is to further put more hands on Chakra UI, Create a design system (a more complex one), Make use of custom Components, Advanced Theming, learn more on theme tokens with Chakra and also learn an animation library that'll best go with the Library.

### Useful resources

Thanks to blogs and Youtube channels used in learning Chakra Ui, especially to Esther's YT channel _(update name)_ and to frontend mentor for the designs.

- [Esther's YT channel](https://www.esthers's-YT.com)
- [FrontendMentor](www.frontendMentor.com)

## Author

- My Medium Blog - [backendHarry](https://www.your-site.com)
- Hashnode - [backendharry]()
- Frontend Mentor - [@backendHarry](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@backendHarry](https://www.twitter.com/backendHarry)
