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


export const navigationItems = [
  {
    name: "Explore",
    src: explore,
    alt: "explore challenges labs and projects",
  },
  {
    name: "Projects",
    src: projects,
    alt: "explore projects",
    path: "my-projects"
  },
  {
    name: "Labs",
    src: labs,
    alt: "explore labs",
    path: "labs"
  },
  {
    name: "Challenges",
    src: challenges,
    alt: "explore challenges",
    path: "",
  },
  {
    name: "Achievements",
    src: achievements,
    alt: "View achievements",
    path: "achievements"
  },
  {
    name: "Inbox",
    src: inbox,
    alt: "View inbox",
    path: "inbox"
  },
  {
    name: "Resources",
    src: resources,
    alt: "View resources",
    path: "resources"
  },
  {
    name: "NewsFeed",
    src: newsfeed,
    alt: "View newsfeed",
    path: "newsfeed"
  },
  {
    name: "Notifications",
    src: notifications,
    alt: "View notifications",
    path: "notifications"
  },
  {
    name: "Organizations",
    src: organizations,
    alt: "View organizations",
    path: "organizations"
  },
]