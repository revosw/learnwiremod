title: nice
---
      <!-- LINK TO DISCORD https://discord.gg/H8UKY3Y -->
      <!-- LINK TO WIREMOD WIKI https://github.com/wiremod/wire/wiki -->
      <!-- LINK TO WIREMOD REDDIT https://www.reddit.com/r/wiremod/ -->
      <!-- LINK TO WIREMOD GITHUB DISCUSSIONS https://github.com/wiremod/wire/discussions -->
      <!-- DROP DOWN MENU: EXP2, GATES, CPU, SPU, GPU, TOOLS -->
![header](../img/root/header.png)
# Topics
Wiremod is an addon for the sandbox gamemode in Garry's Mod. This addon lets you create complex contraptions.

## Expression 2
With expression 2, we can interact with the world in interesting ways. In this full-fleged tutorial we'll make a graphics-based game, flying dragons, hot rod cars and more. We'll explore the Expression 2 language and the libraries available for use.
![e2](../img/e2/header.png) 
[Start](expression2/)

## Gates
With gates, we can make all sorts of mechanical contraptions. There are gates for math, logic, memory, time, data transfer and more, enabling us to make things like auto turrets, airships, and vending machine games. We'll explore the abundance of gates.
![gates](../img/gates/header.png)
[Start](gates)

## CPU
The CPU is an advanced processor used for general purpose computing and I/O. In this tutorial series we will master this engineering marvel.
![cpu](../img/cpu/header.png)
[Start](cpu)

## SPU
The SPU is a sound processor which lets you synthesize and play sounds. With knowledge of the SPU, you can impress all your friends with sick beats.
![spu](./img/spu/header.png)
[Start](spu)

## GPU
The GPU is a video processor which lets you output graphics
![gpu](../img/gpu/header.png)
[Start](gpu)

## Tools
Covers all the other tools in the wiremod suite

# How to install Wiremod
Install the [Wiremod addon from the workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=160250458) by hitting the subscribe button, and you're done. However, if you want the bleeding edge builds, read on.

# Installing git
::: info
Mac and Linux users - jump over this step as you already have git tools from your terminal.
:::

Go to [git's homepage](https://git-scm.com/)" and download latest release. Skim through the installer with default settings.

# Cloning the repository
Navigate to your steam folder, and proceed to **\steamapps\common\GarrysMod\garrysmod\addons**. Inside the addons folder, open the context menu (right click somewhere empty). You now have an option called **Git Bash Here** Copy this command: **git clone https://github.com/wiremod/wire.git** and paste it into Git Bash by right clicking the window, and select Paste. To update your wiremod installation, just right click the wire folder, Git Bash, then execute the command: **git pull**.

But having to manually update it every time is tedious... Why not automate it?

# Updating wiremod automatically
::: info
Mac and Linux users - I have no idea how your automation systems work.
:::
Press the windows key + R, then enter **taskschd.msc**.

Create a basic task
![task scheduler](../img/root/taskschd.png)

Name the task **Update wire**, then click next
**When I log on**, next
**Start a program**, next

Write **"C:\Program Files\Git\git-cmd.exe"** in the **Program/script** box. INCLUDE THE QUOTES.

Fill the **Add arguments** box with: **git pull && exit**

Fill the **Start in** box with the wire folder: **&lt;directory to steam&gt;\steamapps\common\GarrysMod\garrysmod\addons\wire**
![task scheduler](../img/root/taskschd2.png)

Finish up by pressing next, then finish. We need to test our task. Click on Task Scheduler Library, and scroll down the list to find your task. If it's not there, hit F5 to refresh. Right click the task, and press Run.
![task scheduler](../img/root/taskschd3.png)
You should see a cmd window in a split second. If so, **CONGRATULATIONS!** You'll never need to think of updating the wire repository on your computer.


## What is this website?
Learn Wiremod is a website that aims to teach you all the different parts of Wiremod.

## Why does this exist?
Most parts of Wiremod have a very steep learning curve and there is no complete course out there. I want to change this and make everyone, even the ones not familiar with Wiremod, able to learn the ins and outs of everything in Wiremod.
## How is it made?
This site is hosted via [GitHub Pages](https://pages.github.com/). It uses VitePress for content management, and custom syntax highlight rules for [Shiki](https://shiki.matsu.io/).

## Who made it?
You can find me on [Steam](http://steamcommunity.com/id/revodoucheon/) and Discord (Revolution#1234).