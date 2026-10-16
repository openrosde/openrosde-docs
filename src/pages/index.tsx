import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

const GITHUB_ORG = 'https://github.com/openrosde';
const GITHUB_REPO = 'https://github.com/openrosde/openrosde';
// The DOI of the paper in Advanced Robotics (vol. 36, no. 11, 2022).
// Keep in sync with docusaurus.config.ts.
const PAPER_DOI = '10.1080/01691864.2022.2068353';
const PAPER_URL = `https://doi.org/${PAPER_DOI}`;

const QUICK_START = `git clone https://github.com/openrosde/openrosde.git
cd openrosde/
bash ./SETUP-DEVEL-MACHINE.bash
sudo reboot

git clone \\
  https://github.com/openrosde/openrosde-platform-turtlebot3.git \\
  extensions/openrosde-platform-turtlebot3
bash ./SWITCH-ROBOT-PLATFORM.bash turtlebot3

bash ./BUILD-DOCKER-IMAGE.bash
bash ./RUN-DOCKER-CONTAINER.bash
# Once, inside the container:
openrosde-initialize-new-container`;

type Layer = {tag: string; name: string; body: ReactNode};

const LAYERS: Layer[] = [
  {
    tag: 'Layer 1',
    name: 'openrosde-base',
    body: (
      <>
        The shared toolchain: Ubuntu 20.04, ROS Noetic, Gazebo, and FlexBE, or Ubuntu 26.04 and
        ROS 2 Lyrical in <code>openrosde-base-ros2</code>.
      </>
    ),
  },
  {
    tag: 'Layer 2',
    name: '<platform>-devel',
    body: (
      <>
        The packages of one robot platform, built from its repository cloned into{' '}
        <code>extensions/</code> and selected by <code>OPENROSDE_ROBOT_PLATFORM</code>.
      </>
    ),
  },
  {
    tag: 'Layer 3',
    name: 'user-devel',
    body: (
      <>
        The user overlay, always built locally, where you add your own packages without touching
        the platform images.
      </>
    ),
  },
];

type Feature = {tag: string; title: string; body: ReactNode; to: string};

const FEATURES: Feature[] = [
  {
    tag: 'Docker',
    title: 'One Environment for Every Contributor',
    body: (
      <>
        The whole OpenRoSDE runs in Docker containers, with GPU acceleration through the Nvidia
        Container Toolkit or WSLg, so every contributor works in the exact same software
        environment.
      </>
    ),
    to: '/docs/getting-started/basic-usage',
  },
  {
    tag: 'Extensions',
    title: 'Platforms & Devices as Extensions',
    body: (
      <>
        Each robot platform and each device lives in a repository of its own, public or private,
        which OpenRoSDE finds by name once it is cloned into <code>extensions/</code>.
      </>
    ),
    to: '/docs/guides/extensions',
  },
  {
    tag: 'Overlay',
    title: 'User Overlay',
    body: (
      <>
        Add your own ROS packages, system dependencies, environment variables, and panes on top of
        any platform, without forking OpenRoSDE.
      </>
    ),
    to: '/docs/guides/user-overlay',
  },
  {
    tag: 'ROS 2',
    title: 'ROS 1 & ROS 2 Side by Side',
    body: (
      <>
        Each platform declares the ROS it runs in its template, and the base image, the
        workspaces, the launch tool, and the checks of the CI follow from that choice.
      </>
    ),
    to: '/docs/guides/ros2',
  },
  {
    tag: 'Models',
    title: 'Robot Models over rosbridge',
    body: (
      <>
        A web or Unity client reads the robot description and fetches every mesh as a GLB through{' '}
        <code>rosbridge</code>, without bundling the meshes of the robot.
      </>
    ),
    to: '/docs/guides/robot-models',
  },
  {
    tag: 'Sessions',
    title: 'Multi-Terminal Sessions',
    body: (
      <>
        One <code>tmux</code> session gathers the panes of the platform, the extensions, the setup,
        and the core, in simulation or on the real robot.
      </>
    ),
    to: '/docs/guides/advanced-usage',
  },
];

type Repository = {name: string; title: string; detail: string};

const PLATFORMS: Repository[] = [
  {name: 'openrosde-platform-cobotta', title: 'Denso COBOTTA', detail: 'ROS 1 Noetic'},
  {name: 'openrosde-platform-fetch', title: 'Fetch Robotics Fetch', detail: 'ROS 1 Noetic'},
  {name: 'openrosde-platform-hsr', title: 'Toyota HSR (Human Support Robot)', detail: 'ROS 1 Noetic'},
  {name: 'openrosde-platform-sciurus17', title: 'RT Sciurus17', detail: 'ROS 1 Noetic'},
  {
    name: 'openrosde-platform-turtlebot3',
    title: 'Robotis TurtleBot3 (Waffle Pi)',
    detail: 'ROS 1 Noetic & ROS 2 Lyrical',
  },
  {name: 'openrosde-platform-ur5e', title: 'Universal Robots UR5e', detail: 'ROS 1 Noetic'},
];

const DEVICES: Repository[] = [
  {name: 'openrosde-device-onrobot', title: 'OnRobot RG & VG Grippers', detail: 'Gripper'},
  {name: 'openrosde-device-realsense', title: 'RealSense Cameras', detail: 'Camera'},
  {name: 'openrosde-device-spacenav', title: '3Dconnexion SpaceMouse', detail: 'Input device'},
];

const STACK = ['Docker', 'ROS Noetic', 'ROS 2 Lyrical', 'Gazebo', 'RViz', 'MoveIt', 'FlexBE', 'tmux'];

const PAPER_BIBTEX = `@article{elhafi2022sde,
  author  = {El Hafi, Lotfi and
             Garcia Ricardez, Gustavo Alfonso and
             von Drigalski, Felix and Inoue, Yuki and
             Yamamoto, Masaki and Yamamoto, Takashi},
  title   = {Software Development Environment for
             Collaborative Research Workflow in
             Robotic System Integration},
  journal = {Advanced Robotics},
  volume  = {36},
  number  = {11},
  pages   = {533--547},
  year    = {2022},
  month   = jun,
  doi     = {${PAPER_DOI}},
  url     = {${PAPER_URL}}
}`;

function GitHubIcon(): ReactNode {
  return (
    <svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  );
}

function PaperIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

function OrgIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function HeroLinks(): ReactNode {
  return (
    <div className={styles.heroLinks}>
      <Link className={styles.heroLink} href={GITHUB_REPO}>
        <GitHubIcon />
        <span>OpenRoSDE on GitHub</span>
      </Link>
      <Link className={styles.heroLink} href={PAPER_URL}>
        <PaperIcon />
        <span>Advanced Robotics Paper</span>
      </Link>
      <Link className={styles.heroLink} to="/docs/platforms">
        <OrgIcon />
        <span>Platforms & Devices</span>
      </Link>
    </div>
  );
}

function Hero(): ReactNode {
  const logoUrl = useBaseUrl('/img/logo.svg');
  return (
    <header className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroText}>
          <img className={styles.heroLogo} src={logoUrl} alt="OpenRoSDE logo" width={88} height={93} />
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowItem}>Docker</span>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowItem}>ROS 1 & ROS 2</span>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowItem}>Apache-2.0</span>
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            <span className={styles.gradient}>OpenRoSDE</span>: The Same Robotics Environment for
            Every Contributor
          </Heading>
          <p className={styles.heroLead}>
            OpenRoSDE, read "Open Robotic SDE", is the open-source Software Development Environment
            for collaborative research in robotic system integration. It containerizes ROS, Gazebo,
            RViz, FlexBE, and the drivers of each robot with Docker, so that every contributor works
            in the exact same software environment, in simulation or on the real robot.
          </p>
          <div className={styles.heroButtons}>
            <Link className={clsx('button button--primary button--lg', styles.cta)} to="/docs/getting-started/quick-start">
              Get Started
            </Link>
            <Link className={clsx('button button--secondary button--lg', styles.ctaSecondary)} to="/docs/intro">
              Documentation
            </Link>
          </div>
          <HeroLinks />
        </div>
        <div className={styles.heroCode}>
          <div className={styles.window}>
            <div className={styles.windowBar}>
              <span />
              <span />
              <span />
              <em>Ubuntu development machine</em>
            </div>
            <CodeBlock language="bash" className={styles.windowCode}>
              {QUICK_START}
            </CodeBlock>
          </div>
          <p className={styles.heroCaption}>
            From a fresh Ubuntu machine to a container of the TurtleBot3 platform.{' '}
            <Link to="/docs/getting-started/quick-start">Follow the Quick Start →</Link>
          </p>
        </div>
      </div>
    </header>
  );
}

function Why(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>Why OpenRoSDE</span>
          <Heading as="h2">A Collaborative Research Workflow, Built on Containers</Heading>
          <p>
            OpenRoSDE is the open-source reference implementation of the Software Development
            Environment described in "Software Development Environment for Collaborative Research
            Workflow in Robotic System Integration". It stacks its Docker images in three layers, so
            that the shared toolchain, the robot platform, and the customizations of each user stay
            apart.
          </p>
        </div>
        <div className={styles.layerGrid}>
          {LAYERS.map((layer, index) => (
            <div key={layer.tag} className={styles.layerStep}>
              <div className={styles.layerCard}>
                <span className={styles.tag}>{layer.tag}</span>
                <code className={styles.layerName}>{layer.name}</code>
                <p>{layer.body}</p>
              </div>
              {index < LAYERS.length - 1 && (
                <span className={styles.layerArrow} aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        <p className={styles.layerNote}>
          Devices and extensions cloned into <code>extensions/</code> can add their own layers
          between Layers 2 and 3.
        </p>
        <div className={styles.centerLink}>
          <Link to="/docs/intro">Read the Overview →</Link>
        </div>
      </div>
    </section>
  );
}

function Features(): ReactNode {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>What OpenRoSDE Provides</span>
          <Heading as="h2">From the First Container to the Real Robot</Heading>
        </div>
        <div className={styles.featureGrid}>
          {FEATURES.map((f) => (
            <Link key={f.title} to={f.to} className={styles.featureCard}>
              <span className={styles.tag}>{f.tag}</span>
              <Heading as="h3">{f.title}</Heading>
              <p>{f.body}</p>
              <span className={styles.more}>Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function RepositoryGrid({items}: {items: Repository[]}): ReactNode {
  return (
    <div className={styles.repoGrid}>
      {items.map((item) => (
        <Link key={item.name} href={`${GITHUB_ORG}/${item.name}`} className={styles.repoCard}>
          <Heading as="h3">{item.title}</Heading>
          <code className={styles.repoName}>{item.name}</code>
          <span className={styles.repoDetail}>{item.detail}</span>
        </Link>
      ))}
    </div>
  );
}

function Platforms(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>Platforms & Devices</span>
          <Heading as="h2">Six Robot Platforms & Three Devices, Each in Its Own Repository</Heading>
          <p>
            The core holds no platform. Each canonical platform and each public device lives in a
            repository of its own, which OpenRoSDE finds by name once it is cloned into{' '}
            <code>extensions/</code>, and a private robot works the same way.
          </p>
        </div>
        <Heading as="h3" className={styles.groupTitle}>
          Robot Platforms
        </Heading>
        <RepositoryGrid items={PLATFORMS} />
        <Heading as="h3" className={styles.groupTitle}>
          Devices
        </Heading>
        <RepositoryGrid items={DEVICES} />
        <div className={styles.centerLink}>
          <Link to="/docs/platforms">See All Platforms & Devices →</Link>
        </div>
      </div>
    </section>
  );
}

function Community(): ReactNode {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className={clsx('container', styles.communityGrid)}>
        <div className={styles.communityCard}>
          <span className={styles.kicker}>Get Involved</span>
          <Heading as="h2">Bring Your Robot to OpenRoSDE</Heading>
          <p>
            OpenRoSDE is developed in the open under the Apache License 2.0 and maintained by
            Coarobo GK. The most common contribution is support for a new robot platform, which
            OpenRoSDE finds without any change to the core.
          </p>
          <div className={styles.standards}>
            {STACK.map((s) => (
              <span key={s} className={styles.chip}>
                {s}
              </span>
            ))}
          </div>
          <div className={styles.heroButtons}>
            <Link className="button button--primary" href={GITHUB_REPO}>
              Contribute on GitHub
            </Link>
            <Link className="button button--secondary" to="/docs/project/contributing">
              Contributing Guide
            </Link>
          </div>
        </div>
        <div className={styles.communityCard}>
          <span className={styles.kicker}>Cite OpenRoSDE</span>
          <Heading as="h3">Using OpenRoSDE in Your Research?</Heading>
          <p>
            Please cite the paper that describes the Software Development Environment, published in
            Advanced Robotics with the DOI <Link href={PAPER_URL}>{PAPER_DOI}</Link>. The{' '}
            <Link to="/docs/project/citing">citing page</Link> lists the related publications.
          </p>
          <CodeBlock language="bibtex">{PAPER_BIBTEX}</CodeBlock>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Open-source Software Development Environment for robotic system integration"
      description="OpenRoSDE is the open-source Software Development Environment for collaborative research in robotic system integration, containerized with Docker for ROS 1 and ROS 2. Apache-2.0.">
      <Hero />
      <main>
        <Why />
        <Features />
        <Platforms />
        <Community />
      </main>
    </Layout>
  );
}
