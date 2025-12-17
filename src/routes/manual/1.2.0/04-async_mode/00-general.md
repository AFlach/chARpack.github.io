---
title: General
---

While many collaborative scenarios require scene content to be synchronised between clients and the server, 
chARpack also provides an alternative hybrid desktop/AR environment.
When **Async Mode** is active, molecules and atoms are not automatically networked between client and server.

In this mode, you can create molecules on the device or the server as normal, but they will not show up on the other side.
You can now manipulate it as you wish; if you want to transfer it from the desktop to AR or vice versa, you will
need to perform one of the actions specified in [Transition Modes and Options](xref:04-async_mode/01-transition-modes).

It also provides the ability to interact with molecules on the desktop from the AR environment;
by pointing at the screen, you can control a *Hover Cursor* which highlights molecules it passes over.

### Scanning the screen
In order to correctly transfer molecules between desktop and AR, you need to scan your desktop screen to register its coordinates.
To start the scan, press the **Scan Screen** button in the [Login Menu](xref:01-first_start/00-login_screen).

You should now be in an environment without any menus or buttons. This way, you can perform the screen scan uninterrupted.

To scan your screen, you will need to touch three of its corners in the following order: lower left, then upper left, then upper right.

![Screen scan instructions](scan_screen_instructions.png){.mx-auto .max-w-xl}

Each touch needs to be performed with your index finger; try to keep it as still on the corner as possible. Once the corner has been
successfully registered, you should hear a ringing sound and a small cube should appear at approximately the position of the corner.

> This process may take a while since hand tracking data tends to fluctuate; to minimize time to detection, we advise to physically rest
> your finger on the screen corner.

After all three corner positions have been successfully saved, the computed screen area should appear red for a moment. Afterwards, the
Login Menu appears again and you can continue as usual by connecting to the server or scanning a QR code.

![Screen scan example](scan_screen_recording.gif)

If the screen was not registered in the correct position, you can also restart the *Scan Screen* routine.