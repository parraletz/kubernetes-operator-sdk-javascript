FROM node:lts-trixie
RUN apt-get update && apt-get install -y curl wget vim dnsutils iputils-ping net-tools
USER node
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -
