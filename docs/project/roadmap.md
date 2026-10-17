---
sidebar_label: Roadmap
sidebar_position: 1
description: What OpenRoSDE has released, and the work that the open issues of its core plan next.
---

# Roadmap

OpenRoSDE moves forward in releases, which [`CHANGELOG.md`](https://github.com/openrosde/openrosde/blob/main/CHANGELOG.md) of the core records, and the open issues of the core plan its next steps.
This page lists only what a release has shipped and what an open issue plans, and the core stays the reference when either changes.

## ✅ Released {/* #released */}

- **3.0.0** (2026-10-16): OpenRoSDE on GitHub under the Apache License 2.0, platforms and devices in repositories of their own, setups, ROS 2 Lyrical beside ROS 1, `tmux` sessions, and robot models over `rosbridge`.
- **2.0.0** (2026-04-14): several robot platforms in one environment, a shared base image with one image per platform, and hosts on Ubuntu 24.04 and WSL 2.
- **1.0.0** (2024-08-17): hosts on Ubuntu 22.04, CPU and GPU machines, and a CUDA base image.
- **0.0.0** (2023-10-18): the first public release of the SDE, a ROS Noetic environment in Docker with Gazebo, RViz, and Terminator.

The minor releases 1.1.0 to 1.3.0, from 2024-08-17 to 2024-08-23, and 2.1.0 to 2.12.0, from 2026-04-14 to 2026-07-09, are in `CHANGELOG.md` with every change.
The versions before 3.0.0 were published as the SDE of Coarobo GK under the MIT License, and their archive remains at [https://gitlab.com/coarobo/SDE](https://gitlab.com/coarobo/SDE).

## 🗺️ Planned {/* #planned */}

| Work                                                                  | Issue                                                   | Status                                                            |
| --------------------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------- |
| The other platforms on ROS 2, one at a time                           | [#2](https://github.com/openrosde/openrosde/issues/2)   | <span className="status-pill status-pill--planned">Planned</span> |
| Terminator removed, once the `tmux` sessions have run on a real robot | [#3](https://github.com/openrosde/openrosde/issues/3)   | <span className="status-pill status-pill--planned">Planned</span> |
| The follow-up of the review of the CI for setups and extensions       | [#4](https://github.com/openrosde/openrosde/issues/4)   | <span className="status-pill status-pill--planned">Planned</span> |
| The scripts of the CI in a neutral folder in place of `gitlab-ci/`    | [#13](https://github.com/openrosde/openrosde/issues/13) | <span className="status-pill status-pill--planned">Planned</span> |

ROS 1 Noetic stays beside ROS 2, since robots such as the Fetch run only on ROS 1, as the [ROS 2](../guides/ros2.md) guide describes.
`RUN-TERMINATOR-TERMINAL.bash` and `terminator/` are deprecated since 3.0.0 in favor of `RUN-TMUX-SESSION.bash` and `tmux/`.

## 🔭 Follow the Work {/* #follow-the-work */}

The plans live on GitHub, and [Contributing](contributing.md) describes how to take part:

- Open issues: [https://github.com/openrosde/openrosde/issues](https://github.com/openrosde/openrosde/issues)
- Milestones: [https://github.com/openrosde/openrosde/milestones](https://github.com/openrosde/openrosde/milestones)
- Release notes of 3.0.0: [https://github.com/openrosde/openrosde/releases/tag/v3.0.0](https://github.com/openrosde/openrosde/releases/tag/v3.0.0)
