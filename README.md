# Shiver's Sway dotfiles

This is NOT yet suitable for anyone but myself. This sets everything up not only the way I want it, but the way I NEED it to work. 

## Setup script
Currently, this is a script that: 
- First changes directory to root.
- Echoes some lines into pacman.conf(located at /etc/pacman.conf) to enable colors, parallel downloads(value of 25) and the funny little Pacman eating candy on the progress bars.
- Creates 10-arch in /etc/sudoers.d/ to allow sudo commands without password for MY user. I personally find this annoying, but some may like it, so change according to your preference.
- Changes to the user's home directory.
- Updates and syncs packages.
- Installs various packages that I need in my work/relax/play-flow, if you will. This includes zip, unzip, htop, sddm, swaybg, neofetch, etc. This is subject to probably the most change overtime, so keep an eye on the list. In the future, I might make it more readable, but the list is not that long (yet).
- Installs a few fonts, of which I will add more as I go. Currently, Awesome and Roboto Mono(my Nerd Font of choice).
- Installs the WM. Since this is my swaydots, this will install Sway as the WM. Hyprland and i3 are in the works.
- Configures global git config. Might need to be interactive, or just chopped.
- Installs yay as the AUR helper. Technically not recommended to automate this, but this is a script to a hyper-specific setup of a base system anyway.
- Installs some additional things from the AUR, like Spotify, Chrome and Discord.
- Changes user shell from bash to zsh.
- Changes directory into the swaydots directory and does a stow . to create the symlinks and bring everything together. This is the special sauce of this whole project.
- Makes and clones some of my personal projects into the appropriate directories. Probably gonna be changed significantly, or even removed entirely, since I assume no one wants my projects.
- Enables and starts SSDM. 

By the time the script runs through itself entirely, you will be faced by a (stock) SDDM login screen. My wallpaper and all the configs are there and everything already behaves as I have it on my own system.

All that needs to be done now by the user, is to start Alacritty with ALT+RETURN/ALT+ENTER. This opens the terminal and activates zsh. Upon activating zsh, the plugins and theme get installed and applied. This ensures a smaller footprint of this repo.


## The actual dot files
There's the .zshrc and .p10k.zsh to configre zsh correctly. We have the .config directoy, with the configs for Sway, Waybar, Alacritty, Neovim, etc.
Opening Neovim for the first time initializes, configures and installs all the Neovim plugins how I have them setup for myself.
The setup script just does a simple stow, which fully automates the symlinking everything into the correct layout. I keep the struct of this repo the exact same as I would have it by default in the user's home directory.

## Requests, discussions, tips, whatever have you
I am always open to review, discuss and otherwise talk about feedback and requests. Discord is my preferred platform right now: oppai_dragon69

