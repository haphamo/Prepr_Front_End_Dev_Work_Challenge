const randomKeyGenerator = () => Math.random().toString(36).substring(2, 5)

const shortenedSummaryForCardDisplay = function(summary) {
  return `${summary.slice(0, 150)}...`
}

const getSpecificData = function(data, type) {
  
  return Object.values(data).filter(item => item.type === type) 
}

export { randomKeyGenerator, shortenedSummaryForCardDisplay, getSpecificData }