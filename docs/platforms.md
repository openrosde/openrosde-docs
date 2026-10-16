---
sidebar_label: Platforms & Devices
sidebar_position: 1
description: The canonical robot platforms and the public devices of OpenRoSDE, each in a repository of its own.
---

# Platforms & Devices

The canonical platforms and the public devices of OpenRoSDE live in repositories of their own, under the Apache License 2.0, each with the layout of the core.
OpenRoSDE finds them by name once they are cloned into `extensions/`, as the [Extensions](guides/extensions.md) guide describes.

## 🤖 Robot Platforms

A platform holds one robot as sold, with its public drivers.
Every platform runs ROS 1 Noetic, apart from `turtlebot3-ros2`, which runs ROS 2 Lyrical beside it, as the [ROS 2](guides/ros2.md) guide describes.

| Platform          | Robot                                                                                                        | ROS           | Repository                                                                                                               | Documentation                                                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cobotta`         | [Denso COBOTTA](https://www.denso-wave.com/en/robot/product/collaborative/cobotta.html)                      | ROS 1 Noetic  | [https://github.com/openrosde/openrosde-platform-cobotta](https://github.com/openrosde/openrosde-platform-cobotta)       | [`docs/robot-platforms/cobotta.md`](https://github.com/openrosde/openrosde-platform-cobotta/blob/main/docs/robot-platforms/cobotta.md)                    |
| `fetch`           | [Fetch Robotics Fetch](https://fetchrobotics.github.io/docs/)                                                | ROS 1 Noetic  | [https://github.com/openrosde/openrosde-platform-fetch](https://github.com/openrosde/openrosde-platform-fetch)           | [`docs/robot-platforms/fetch.md`](https://github.com/openrosde/openrosde-platform-fetch/blob/main/docs/robot-platforms/fetch.md)                          |
| `hsr`             | [Toyota HSR (Human Support Robot)](https://github.com/hsr-project)                                           | ROS 1 Noetic  | [https://github.com/openrosde/openrosde-platform-hsr](https://github.com/openrosde/openrosde-platform-hsr)               | [`docs/robot-platforms/hsr.md`](https://github.com/openrosde/openrosde-platform-hsr/blob/main/docs/robot-platforms/hsr.md)                                |
| `sciurus17`       | [RT Sciurus17](https://rt-net.jp/products/sciurus17/)                                                        | ROS 1 Noetic  | [https://github.com/openrosde/openrosde-platform-sciurus17](https://github.com/openrosde/openrosde-platform-sciurus17)   | [`docs/robot-platforms/sciurus17.md`](https://github.com/openrosde/openrosde-platform-sciurus17/blob/main/docs/robot-platforms/sciurus17.md)              |
| `turtlebot3`      | [Robotis TurtleBot3 (Waffle Pi)](https://emanual.robotis.com/docs/en/platform/turtlebot3/overview/)          | ROS 1 Noetic  | [https://github.com/openrosde/openrosde-platform-turtlebot3](https://github.com/openrosde/openrosde-platform-turtlebot3) | [`docs/robot-platforms/turtlebot3.md`](https://github.com/openrosde/openrosde-platform-turtlebot3/blob/main/docs/robot-platforms/turtlebot3.md)           |
| `turtlebot3-ros2` | [Robotis TurtleBot3 (Waffle Pi)](https://emanual.robotis.com/docs/en/platform/turtlebot3/overview/) on ROS 2 | ROS 2 Lyrical | [https://github.com/openrosde/openrosde-platform-turtlebot3](https://github.com/openrosde/openrosde-platform-turtlebot3) | [`docs/robot-platforms/turtlebot3-ros2.md`](https://github.com/openrosde/openrosde-platform-turtlebot3/blob/main/docs/robot-platforms/turtlebot3-ros2.md) |
| `ur5e`            | [Universal Robots UR5e](https://www.universal-robots.com/products/ur5e/)                                     | ROS 1 Noetic  | [https://github.com/openrosde/openrosde-platform-ur5e](https://github.com/openrosde/openrosde-platform-ur5e)             | [`docs/robot-platforms/ur5e.md`](https://github.com/openrosde/openrosde-platform-ur5e/blob/main/docs/robot-platforms/ur5e.md)                             |

The six repositories hold seven platforms, since `openrosde-platform-turtlebot3` holds the TurtleBot3 on both ROS.
Clone a platform into `extensions/`, then switch to it:

```shell
git clone https://github.com/openrosde/openrosde-platform-fetch.git extensions/openrosde-platform-fetch
bash ./SWITCH-ROBOT-PLATFORM.bash fetch
```

## 🔌 Devices

A device holds one upstream driver of hardware anyone can buy, such as a gripper, a camera, or an input device, with every model that driver supports, and names no robot.
A setup activates the devices it mounts in `OPENROSDE_ROBOT_EXTENSIONS`, as [Setups](guides/extensions.md#-setups) describes.

| Device                       | Hardware                                                                   | Repository                                                                                                         |
| ---------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `openrosde-device-onrobot`   | The OnRobot RG and VG grippers                                             | [https://github.com/openrosde/openrosde-device-onrobot](https://github.com/openrosde/openrosde-device-onrobot)     |
| `openrosde-device-realsense` | The RealSense cameras                                                      | [https://github.com/openrosde/openrosde-device-realsense](https://github.com/openrosde/openrosde-device-realsense) |
| `openrosde-device-spacenav`  | Every 3Dconnexion device that `spacenavd` supports, such as the SpaceMouse | [https://github.com/openrosde/openrosde-device-spacenav](https://github.com/openrosde/openrosde-device-spacenav)   |

## ⚖️ Licenses of the Platforms

The `NOTICE` of each platform repository records the licenses of its third-party software, and some of them restrict commercial use.
[Third-Party Software](project/license.md#third-party-software) summarizes the notable terms of each platform.

## ➕ Adding a Platform

A new robot takes a platform repository of its own, `openrosde-platform-<platform>`, which the core finds by name without any change.
[Adding a New Robot Platform](project/contributing.md#adding-a-new-robot-platform) walks through every step.
