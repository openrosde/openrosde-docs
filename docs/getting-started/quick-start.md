---
sidebar_label: Quick Start
sidebar_position: 1
description: Set up an Ubuntu development machine, clone a robot platform, build the Docker image, and open a first OpenRoSDE session.
---

# Quick Start

This quick start sets up an Ubuntu development machine, clones the TurtleBot3 platform, and opens a multi-terminal session on it.

:::note

The whole OpenRoSDE is containerized with [Docker](https://www.docker.com/).
This ensures that all the contributors work in the exact same software environment.

:::

## 💻 Supported Software Platforms

| Platform                                                                                   | GPU Acceleration                                                                                                               | Notes                            |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| Ubuntu 24.04 LTS (native)                                                                  | Nvidia GPU via [Nvidia Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/index.html) | Recommended setup                |
| Ubuntu 24.04 LTS on Windows 11 via [WSL 2](https://learn.microsoft.com/en-us/windows/wsl/) | [WSLg](https://github.com/microsoft/wslg) D3D12 Mesa driver                                                                    | Lower 3D performance than native |

## 🚀 Steps

1. Clone and set up:

    ```shell
    sudo apt-get update && sudo apt-get install -y git
    git clone https://github.com/openrosde/openrosde.git && cd openrosde/
    bash ./SETUP-DEVEL-MACHINE.bash
    sudo reboot
    ```

2. Clone a robot platform into `extensions/`, then switch to it (the default `.env` selects `turtlebot3`):

    ```shell
    git clone https://github.com/openrosde/openrosde-platform-turtlebot3.git extensions/openrosde-platform-turtlebot3
    bash ./SWITCH-ROBOT-PLATFORM.bash turtlebot3
    ```

3. Build the Docker image:

    ```shell
    bash ./BUILD-DOCKER-IMAGE.bash
    ```

4. Run the Docker container:

    ```shell
    bash ./RUN-DOCKER-CONTAINER.bash
    ```

5. Inside the container, initialize the environment:

    ```shell
    openrosde-initialize-new-container
    ```

6. Exit the container (`Ctrl+d`) and launch the multi-terminal session from the Ubuntu development machine:

    ```shell
    bash ./RUN-TMUX-SESSION.bash
    ```

    The Terminator layout of earlier releases still opens with `bash ./RUN-TERMINATOR-TERMINAL.bash`.

:::note

The core holds no TurtleBot3, since each canonical platform lives in a repository of its own, as [Platforms & Devices](../platforms.md) lists.
The entry scripts stop with the commands that clone the platform when `.env` or `.env.custom` selects a platform cloned nowhere.

:::

## 🧭 Next Steps

- For detailed instructions, see the [Basic Usage](basic-usage.md) guide.
- For advanced features, see the [Advanced Usage](../guides/advanced-usage.md) guide.
