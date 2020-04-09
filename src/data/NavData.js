import explore from '../assets/explore.png';
import projects from '../assets/my_projects.png'
import labs from '../assets/labs.png'
import challenges from '../assets/challenges_icn.png'
import achievements from '../assets/achievements_icn.png'
import inbox from '../assets/inbox.png'
import resources from '../assets/nav_resources.png'
import newsfeed from '../assets/news_feed.png'
import notifications from '../assets/notification.png'
import organizations from '../assets/organisation.png'

const randomKeyGenerator = () => Math.random().toString(36).substring(2, 5)

export const navigationItems = [
  {
    key: randomKeyGenerator(),
    name: "Explore",
    src: explore,
    alt: "explore challenges labs and projects"
  },
  {
    key: randomKeyGenerator(),
    name: "Projects",
    src: projects,
    alt: "explore projects"
  },
  {
    key: randomKeyGenerator(),
    name: "Labs",
    src: explore,
    alt: "explore labs"
  },
  {
    key: randomKeyGenerator(),
    name: "Challenges",
    src: explore,
    alt: "explore challenges"
  },
  {
    key: randomKeyGenerator(),
    name: "Achievements",
    src: achievements,
    alt: "View achievements"
  },
  {
    key: randomKeyGenerator(),
    name: "Inbox",
    src: inbox,
    alt: "View inbox"
  },
  {
    key: randomKeyGenerator(),
    name: "Resources",
    src: resources,
    alt: "View resources"
  },
  {
    key: randomKeyGenerator(),
    name: "News Feed",
    src: newsfeed,
    alt: "View newsfeed"
  },
  {
    key: randomKeyGenerator(),
    name: "Notifications",
    src: notifications,
    alt: "View notifications"
  },
  {
    key: randomKeyGenerator(),
    name: "Organizations",
    src: organizations,
    alt: "View organizations"
  },
]