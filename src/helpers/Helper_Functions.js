// Creates random key/id for components created using map
const randomKeyGenerator = () => Math.random().toString(36).substring(2, 5)

// Creates a shortened summary to display on the cards, like a preview
const shortenedSummaryForCardDisplay = function(summary) {
  return `${summary.slice(0, 150)}...`
}

// This function receives a data obj of all the challenges, projects and labs as objects. This is the default unfiltered version. It will return an array of the specific type passed in
const getSpecificData = function(data, type) {
  return Object.values(data).filter(item => item.type === type) 
}

// All the nav icons and their data is stored here. The filtered Nav returns an array that is used in the navigation bar. The 3 that return false are the categories
const filteredNav = function(navItem) {
  switch(navItem.name) {
    case "Challenges":
      return false;
    case "Projects":
      return false;
    case "Labs":
      return false;
    default:
      return true;
  }
}

// This is the array needed for the category buttons on Explore Page
const categoryDataFromNavData = function(navItem) {
  switch(navItem.name) {
    case "Challenges":
      return true;
    case "Projects":
      return true;
    case "Labs":
      return true;
    default:
      return false;
  }
}

export { randomKeyGenerator, shortenedSummaryForCardDisplay, getSpecificData, filteredNav, categoryDataFromNavData }