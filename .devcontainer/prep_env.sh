#!/bin/bash

# Create a symbolic link to the .gitconfig file in the home directory
ln -s /home/node/dotfiles/gitconfig /home/node/.gitconfig

echo "Environment setup complete."
exit 0
