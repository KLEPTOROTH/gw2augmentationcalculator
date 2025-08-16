# Guild Wars 2 Augmentation Calculator

A web application to help Guild Wars 2 players calculate the material cost for Mists Attunements.

## Table of Contents

- [About The Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Built With](#built-with)
- [Acknowledgements](#acknowledgements)

## About The Project

This project provides a simple, clean interface for calculating the total resources needed to purchase Mists Attunement Augmentations in Guild Wars 2. It helps players plan their fractal relic spending efficiently.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Requirements

- pnpm v8+
- node 18+
- git

### Installation

1.  Clone the repository:
    ```sh
    git clone [https://github.com/your-username/your-repo.git](https://github.com/your-username/your-repo.git)
    ```
2.  Navigate to the project directory:
    ```sh
    cd your-repo
    ```
3.  Initialize and update submodules:
    ```sh
    git submodule update --init --recursive
    ```
4.  Install the dependencies:
    ```sh
    pnpm install
    ```

## Development

Start the development server:
```sh
pnpm dev
```
Open [http://localhost:4321](http://localhost:4321) to view it in the browser.

**Note:** This command will execute extra scripts that are necessary to prepare the file system. Astro expects one `.astro` file per page that imports the `md(x)` file. For each build/guide/fractal, these scripts will create the necessary files.

## Build

To create a production build of the application, run:
```sh
pnpm build
```
You can preview the production build locally with:
```sh
pnpm preview
```

## Built With

This project is built with a modern web stack, focusing on performance and developer experience.

- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [Svelte](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)

## Acknowledgements

A huge thank you to the team behind the original **discretize.eu** project. This repository is mostly their work; this version simply extracts the calculator functionality and adds the Kinfall Challenge Mode rewards to it.

- [discretize.eu-rewrite GitHub Repository](https://github.com/discretize/discretize.eu-rewrite)
