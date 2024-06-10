#!/bin/bash

# Go into root
cd /

# Add lines to sudoers and pacman configs
echo "[options]
ILoveCandy
Color
ParallelDownloads = 25" | sudo tee -a /etc/pacman.conf

sudo touch /etc/sudoers.d/10-arch
echo "shiver ALL=(ALL) NOPASSWD: ALL" | sudo tee -a /etc/sudoers.d/10-arch 

# cd back to user home
cd

# Update package lists
sudo pacman -Syu

# Install essential packages
sudo pacman -S zip unzip sddm firefox htop brightnessctl blueman pavucontrol swaybg waybar grim alacritty wofi slurp neofetch curl wget stow alsa-tools pulsemixer github-cli git dolphin base-devel fzf zsh neovim solaar steam --noconfirm

# Install fonts
sudo pacman -S ttf-font-awesome nerd-fonts --noconfirm

# Install WM
sudo pacman -S sway swayidle swaylock xorg-xwayland xdg-desktop-portal xdg-desktop-portal-wlr --noconfirm

# Set global git config name and password
git config --global user.name "ShiverP"
git config --global usern.email "shivamparwat01@gmail.com"

# Install yay
git clone https://aur.archlinux.org/yay.git
cd yay/
makepkg -si --noconfirm
cd
rm -rf yay/

# Install yay packages
yay -S google-chrome spotify webcord multimc-bin autotiling --noconfirm

# Install obs-studio-BROWSER for now, have to check other versions
  ## Install some dependencies
    sudo pacman -S qt5-svg qt5-x11extras mbedtls pipewire cmake git libfdk-aac swig qt5-wayland sndio --noconfirm

  ## Install vlc-luajit dependencies (needs to be manual install through AUR)
  sudo pacman -S a52dec libdvbpsi libdca libmatroska taglib libmpcdec faad2 libmad libmpeg2 libtar libupnp libixml.so libupnp.so libplacebo wayland-protocols live-media libdc1394 libcaca libgme xosd twolame aalib libmtp libupnp libmicrodns libdvdcss smbclient vcdimager protobuf libnfs mpg123 libdvdread libdvdnav libshout zvbi libkate libtiger sdl_image lirc libgoom2 projectm chromaprint aribb24 aribb25 pcsclite lua51 --noconfirm

  ## Actually install vlc-luajit
  yay -S vlc-luajit --noconfirm

  ## Install cef-minimal dependencies (Another manual AUR install basically)
  sudo pacman -S libxss --noconfirm

  ## Install cef-minimal
  yay -S cef-minimal

  ## Actually install OBS
  yay -S obs-studio-browser --noconfirm

# Configure shell
sudo chsh -s /usr/bin/zsh

# Stow to create symlinks and bring the entire system together
cd dotfiles
stow .
cd

# Spicetify ricing
#sudo chmod 777 /opt/spotify -R
#spicetify config current_theme #Insert theme here I guess?
#spicetify apply

# Make project directories
mkdir -p ~/developer/projects
cd developer/projects
git clone https://github.com/ShiverP/game-engine.git
git clone https://github.com/ShiverP/edens-crucible.git
git clone https://github.com/ShiverP/chiclaps.git
cd

# set up zsh
zsh

# Enable and start sddm to log in
sudo systemctl enable sddm
sudo systemctl start sddm
