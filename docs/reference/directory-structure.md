---
sidebar_label: Directory Structure
sidebar_position: 2
description: The files and folders of the OpenRoSDE core repository and what each one holds.
---

# Directory Structure

The core repository, [https://github.com/openrosde/openrosde](https://github.com/openrosde/openrosde), holds the entry scripts, the shared Docker images, the shared workspaces, and the user overlay.
The platforms and the devices live in repositories of their own, cloned into `extensions/`, as [Platforms & Devices](../platforms.md) lists.

## 📁 Core Repository

```
.env                                     # Default platform configuration.
env/
  user.env                               # User overlay environment template (reference).
  openrosde-ros2.env                     # Settings of ROS 2, which a platform on ROS 2 repeats in its template.
SETUP-DEVEL-MACHINE.bash                 # Host machine setup script.
BUILD-DOCKER-IMAGE.bash                  # Docker image build/pull script.
RUN-DOCKER-CONTAINER.bash                # Docker container run/enter script.
RUN-TMUX-SESSION.bash                    # Multi-terminal 'tmux' session script.
RUN-TERMINATOR-TERMINAL.bash             # Multi-terminal Terminator launcher script (until 'tmux' replaces it).
BRINGUP-ROS-ROBOT.bash                   # Robot bringup script.
RESTART-CHRONY-SERVICE.bash              # Host and robot clock sync script.
SWITCH-ROBOT-PLATFORM.bash               # Platform switching script.
SWITCH-ROBOT-SETUP.bash                  # Setup switching script, which clones the extensions of a setup.
scripts/
  load-openrosde-env.bash                # Shared environment loader.
  load-extension-paths.bash              # Resolves the files of the platform and the extensions.
  build-extension-layers.bash            # Builds the Docker layers of the active extensions.
  list-robot-platforms.bash              # Lists the platforms found by name.
  list-robot-setups.bash                 # Lists the setups found by name.
  update-git-submodules.bash             # Updates the Git submodules of the core and the extensions, and applies their patches.
  generate-mesh-glbs.bash                # Gives every robot mesh of the workspaces its GLB file.
  print-tmux-splash.bash                 # Prints the splash and the help of the 'tmux' sessions.
  <platform>/                            # Optional platform scripts (shell, bringup, Chrony).
docker/
  docker-compose.yaml                    # Docker service definitions.
  docker-compose-user.yaml               # User overlay (always loaded).
  docker-compose-nvidia.yaml             # GPU overlay for Nvidia support.
  docker-compose-wsl.yaml                # GPU overlay for WSL 2 support.
  openrosde-base/                        # Shared base Docker image of ROS 1.
    Dockerfile
    patches/                             # Patches of the file service of ROS#.
    scripts/                             # Container helper scripts, shared by both base images.
  openrosde-base-ros2/                   # Shared base Docker image of ROS 2.
    Dockerfile
    patches/                             # Patches of the file service of ROS# on ROS 2.
  openrosde-mesh2glb/                    # Converter image of the robot meshes into GLB files.
    Dockerfile
    scripts/                             # Converter scripts.
  user-devel/                            # User overlay image (Layer 3, runtime container).
    Dockerfile
ros/
  openrosde_catkin_ws/                   # Shared Catkin workspace.
  user_catkin_ws/                        # User overlay Catkin workspace (openrosde_user_launch, openrosde_user_behaviors).
ros2/
  openrosde_colcon_ws/                   # Shared colcon workspace of ROS 2.
  user_colcon_ws/                        # User overlay colcon workspace of ROS 2 (openrosde_user_launch).
docs/                                    # Documentation.
  basic-usage.md
  advanced-usage.md
  user-overlay.md
  extensions.md
  ros2.md
  robot-models.md
tmux/
  openrosde.panes                        # Panes of the core in every 'tmux' session on ROS 1.
  openrosde-ros2.panes                   # Panes of the core in every 'tmux' session on ROS 2.
patches/                                 # Submodule patch files.
extensions/                              # Extensions cloned from their own repositories (ignored by Git), such as 'openrosde-platform-<platform>/'.
tests/                                   # Test suites of the scripts, run by 'tests/run.bash'.
gitlab-ci/                               # Scripts of the CI, which the workflows of GitHub Actions run, in a folder named after the GitLab CI of the archive.
.github/                                 # GitHub Actions workflows, their composite actions, and their scripts.
```

## 📖 Documentation of the Core

Each guide of this site comes from a document of `docs/` in the core repository:

| Document of the core     | Page of this site                                |
| ------------------------ | ------------------------------------------------ |
| `docs/basic-usage.md`    | [Basic Usage](../getting-started/basic-usage.md) |
| `docs/advanced-usage.md` | [Advanced Usage](../guides/advanced-usage.md)    |
| `docs/user-overlay.md`   | [User Overlay](../guides/user-overlay.md)        |
| `docs/extensions.md`     | [Extensions](../guides/extensions.md)            |
| `docs/ros2.md`           | [ROS 2](../guides/ros2.md)                       |
| `docs/robot-models.md`   | [Robot Models](../guides/robot-models.md)        |
