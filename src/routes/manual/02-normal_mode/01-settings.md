---
title: Settings
---

<img src="/images/manual/settings.png" alt="Normal Mode Menu" class="mx-auto max-w-md" />

### Toggle Mesh
This button turns the rendering of the spatial awareness of [OpenXR](https://www.khronos.org/OpenXR/) on and off.
The real world surroundings are detected by your device in a (usually) 2.5 second interval.
Toggling the button does not turn on/off the detection of your surroundings, just the rendered wireframe overlay.

### Toggle Log
The **Toggle Log** button shows and hides the debug log.
Note: changing scenes does not clear the debug log for easier error detection.

### Toggle Force Field
chARp calculates forces in the background to empirically simulate a semi-realistic molecule behavior.
The forces are integrated using a simple [Euler integration](https://en.wikipedia.org/wiki/Euler_method).
The force field is developed to be responsive, lightweight, and makes it easy to handle objects in the chARp Molecular Builder environment.
Toggling the force field off, stops any calculations in the background and lets every part of the molecule move unhindered (without any force feedback).
This mode comes in handy, when creating a bond within a molecule, but the force field makes it difficult to bring these two dummies together.

### Hand Toggles
The three buttons on the bottom row change the hand visuals.
You can go have your hand rendered as a mesh, joint visuals or no rendering of the hand tracking.

### Bond Stiffness
The bond stiffness parameter changes the number of force field iterations and therefore the felt stiffness of the molecule.
The number of iterations changes how fast the molecule will go into it's minimal state.
A lower number makes the molecules feel rubbery, higher numbers will keep the structure intact.
 > Note: A higher number of iterations means more computational power goes into the force field calculation/iteration.
 > If you experience performance issues, please turn this parameter to 0.
 > This usually happens for scenes with large molecules.