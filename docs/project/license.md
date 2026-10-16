---
sidebar_label: License
sidebar_position: 4
description: The license of OpenRoSDE, of its versions before 3.0.0, and of the third-party software that its Docker images bundle.
---

# License

## ⚖️ OpenRoSDE

OpenRoSDE is released under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
Copyright 2019 Coarobo GK.
See [`LICENSE`](https://github.com/openrosde/openrosde/blob/main/LICENSE) of the core for the full text.

The versions before 3.0.0 were published under the MIT License, whose notice [`NOTICE`](https://github.com/openrosde/openrosde/blob/main/NOTICE) of the core keeps.

This documentation is released under the Apache License 2.0 as well, from [https://github.com/openrosde/openrosde-docs](https://github.com/openrosde/openrosde-docs).

## 📜 Third-Party Software {/* #third-party-software */}

The OpenRoSDE Docker images bundle third-party robotics middleware, drivers, and simulation assets, each governed by its own license.
Each platform repository records the licenses of its platform in its `NOTICE`, and some of them restrict commercial use:

| Platform     | Notice                                                                                                                                                                              | Notable terms                                                                                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `turtlebot3` | [https://github.com/openrosde/openrosde-platform-turtlebot3/blob/main/NOTICE](https://github.com/openrosde/openrosde-platform-turtlebot3/blob/main/NOTICE)                          | TurtleBot3 packages of ROBOTIS under Apache-2.0                                                                                                                   |
| `fetch`      | [https://github.com/openrosde/openrosde-platform-fetch/blob/main/NOTICE](https://github.com/openrosde/openrosde-platform-fetch/blob/main/NOTICE)                                    | `fetch_description` in the image `fetch-devel` under CC BY-NC-SA 4.0                                                                                              |
| `sciurus17`  | [https://github.com/openrosde/openrosde-platform-sciurus17/blob/main/NOTICE](https://github.com/openrosde/openrosde-platform-sciurus17/blob/main/NOTICE)                            | `sciurus17_description` under the non-commercial license of RT Corporation                                                                                        |
| `cobotta`    | [https://github.com/openrosde/openrosde-platform-cobotta/blob/main/NOTICE](https://github.com/openrosde/openrosde-platform-cobotta/blob/main/NOTICE)                                | `denso_cobotta_ros` and the four patches of the platform under GPL-2.0-or-later                                                                                   |
| `ur5e`       | [https://github.com/openrosde/openrosde-platform-ur5e/blob/main/NOTICE](https://github.com/openrosde/openrosde-platform-ur5e/blob/main/NOTICE)                                      | The default kinematics of `ur_description` under BSD 3-Clause, and the meshes of some UR models in the image `ur5e-devel` under the terms of Universal Robots A/S |
| `hsr`        | [https://github.com/openrosde/openrosde-platform-hsr/blob/main/NOTICE](https://github.com/openrosde/openrosde-platform-hsr/blob/main/NOTICE)                                        | `tmc_wrs_binary` in the image `hsr-devel` under BSD 3-Clause Clear, and `hsrb_meshes` under CC BY-NC-ND 4.0                                                       |
| All          | [ROS Noetic](https://www.ros.org/), [Gazebo](http://gazebosim.org/), [FlexBE](http://flexbe.github.io/), and platform-specific upstream packages                                    | Per upstream (BSD, Apache 2.0, MIT, etc.)                                                                                                                         |
| All          | [ROS#](https://github.com/siemens/ros-sharp) `file_server` `2.3.1` (Siemens AG), built from source in the base image with the patches of `docker/openrosde-base/patches/ros-sharp/` | [Apache 2.0](https://github.com/siemens/ros-sharp/blob/2.3.1/LICENSE.md)                                                                                          |
| All          | [`trimesh`](https://github.com/mikedh/trimesh) and [`pycollada`](https://github.com/pycollada/pycollada) in the converter image `openrosde-mesh2glb`                                | [MIT](https://github.com/mikedh/trimesh/blob/main/LICENSE.md) and [BSD 3-Clause](https://github.com/pycollada/pycollada/blob/master/COPYING)                      |

See the `NOTICE` and `docs/robot-platforms/<platform>.md` of each platform repository for its licensing details.
