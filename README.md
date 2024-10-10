# Interactive 3D Car Configurator Project

[This project](https://interactive-3d-car-configurator.vercel.app/) is an **Interactive 3D Car Configurator** built with modern web technologies including **React**, **React-three-fiber**, **React-three-drei**, and **TailwindCSS**. It allows users to view and interact with a 3D car model, change its colors, and switch between different environments in real-time.

## Project Overview

The **3D Car Configurator** allows users to:
- **Interact** with a 3D car model (rotate, zoom, and pan).
- **Customize** car parts such as the body, wheels, and glass.
- **Change environments** using HDRI maps from [Poly Haven](https://polyhaven.com) .
- **Control the camera** dynamically and explore the car from different angles.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React-three-fiber**: A React renderer for Three.js, enabling 3D content in React apps.
- **React-three-drei**: A helper library for common 3D tasks like loading models, setting up environments, and controlling the camera.
- **TailwindCSS**: A utility-first CSS framework for styling the UI.

## Features

### 1. 3D Car Model
The car model is loaded using the `useGLTF` hook from **React-three-drei**. The user can interact with the car (rotate, zoom) and customize its parts.

### 2. HDRI Environment
The environment is set using HDRI maps, enabling realistic lighting and reflections. The user can switch between different environments using **Poly Haven** HDRI maps.

### 3. Color Customization
Users can change the color of different parts of the car:
- **Body Color**
- **Details Color**
- **Glass Color**

This is implemented using React state and `material.color` updates.

### 4. Camera Control
The project uses **OrbitControls** from **React-three-drei** for easy interaction, allowing the user to rotate around and zoom in on the car. The camera position and rotation can also be dynamically adjusted.


### Project Structure

```plaintext
├── public/
│   └── environmentMaps             # HDRI Environment maps
│   └── models                      # .glb Car model
├── src/
│   ├── components/
│   │   ├── CarModel.jsx            # 3D Car model component
│   │   ├── CarConfigurator.jsx     # HDRI Environment setup
│   │   ├── CameraController.jsx    # Camera position and rotation controller
│   │   ├── ColorPicker.js          # UI for color customization
│   │   ├── VerticalNavigation.jsx  # Vertical Navagation component
│   │   ├── Ground.jsx              # Glass Floor
│   │   └── Model.jsx               # Auto-generated
│   ├── pages/
│   │   └── Loader.jsx              # Loader component
│   ├── index.css                   # Css 
│   ├── App.jsx                     # Main app component
│   └── main.jsx                    # App entry point
├── tailwind.config.js              # TailwindCSS configuration
└── package.json                    # Project dependencies and scripts
