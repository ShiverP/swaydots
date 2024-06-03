#!/bin/bash
# Go into root
cd /

# Add lines to sudoers and pacman configs
echo "[options]
ILoveCandy
Color
ParallelDownloads = 25" | sudo tee -a /etc/pacman.conf

sudo touch /etc/sudoers.d/10-arch
echo "$USER ALL=(ALL) NOPASSWD: ALL" | sudo tee -a /etc/sudoers.d/10-arch 

# cd back to user home
cd

# Update package lists
sudo pacman -Syu

# Install essential packages
sudo pacman -S zip unzip swayidle sddm htop brightnessctl blueman pavucontrol swaybg waybar grim alacritty wofi slurp xorg-xwayland neofetch curl wget stow alsa-tools pulsemixer github-cli dolphin base-devel fzf zsh neovim solaar steam --noconfirm

# Install fonts
sudo pacman -S ttf-font-awesome ttf-roboto-mono-nerd --noconfirm

# Install WM
sudo pacman -S sway xdg-desktop-portal xdg-desktop-portal-wlr swayidle swaylock --noconfirm

# Install yay
git clone https://aur.archlinux.org/yay.git
cd yay/
makepkg -si --noconfirm
cd
rm -rf yay/

# Install yay packages
yay -S google-chrome-wayland-vulkan spotify webcord autotiling --noconfirm #multimc-bin broken I guess, gotta look into that

# Configure shell
sudo chsh -s /usr/bin/zsh

# Stow to create symlinks and bring the entire system together
cd swaydots
stow .
cd

# Enable and start sddm to log in
sudo systemctl enable sddm
sudo systemctl start sddm
