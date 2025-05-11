/**
 * Utility functions for loading and processing portfolio data.
 */
import portfolioData from '../data/portfolio.json';

/**
 * Get the complete portfolio data
 */
export function getPortfolioData() {
  return portfolioData.portfolio;
}

/**
 * Get personal information
 */
export function getPersonalInfo() {
  return portfolioData.portfolio.personal_info;
}

/**
 * Get all skills organized by category
 */
export function getSkills() {
  return portfolioData.portfolio.skills;
}

/**
 * Get all projects
 * @param {string} filterType - Optional filter by project type
 */
export function getProjects(filterType = null) {
  const projects = portfolioData.portfolio.projects;
  
  if (!filterType) {
    return projects;
  }
  
  return projects.filter(project => project.type === filterType);
}

/**
 * Get achievements
 */
export function getAchievements() {
  return portfolioData.portfolio.achievements;
}

/**
 * Get education information
 */
export function getEducation() {
  return portfolioData.portfolio.education;
}

/**
 * Maps technology names to their corresponding icons
 * Using Font Awesome classes where available
 */
export function getTechIcon(techName) {
  const techIcons = {
    'Python': 'fab fa-python',
    'Java': 'fab fa-java',
    'HTML5': 'fab fa-html5',
    'CSS3': 'fab fa-css3-alt',
    'React': 'fab fa-react',
    'Django': 'fab fa-python', // Using Python icon as proxy
    'Git': 'fab fa-git-alt',
    'GitHub': 'fab fa-github',
    'SQL': 'fas fa-database',
    'MySQL': 'fas fa-database',
    'PostgreSQL': 'fas fa-database',
    'Machine Learning': 'fas fa-brain',
    'Data Analytics': 'fas fa-chart-bar',
    'LLMs': 'fas fa-robot',
    'NLP': 'fas fa-comment-dots',
    'IA': 'fas fa-brain',
    'AI': 'fas fa-brain',
    'Flutter': 'fas fa-mobile-alt',
    'Computer Vision': 'fas fa-eye',
    'Data Processing': 'fas fa-cogs',
    'PowerBI': 'fas fa-chart-pie',
    'Tableau': 'fas fa-chart-line',
    'IoT': 'fas fa-microchip',
    'Électronique': 'fas fa-microchip',
    'Programmation': 'fas fa-code',
    'Frontend': 'fas fa-laptop-code',
    'Backend': 'fas fa-server',
    'Web Development': 'fas fa-globe',
    'Healthcare': 'fas fa-heartbeat',
    'Data Visualization': 'fas fa-chart-area',
    'Clustering': 'fas fa-project-diagram',
    'Audio Processing': 'fas fa-headphones',
    'Intelligence Artificielle': 'fas fa-brain',
    'Traitement des données': 'fas fa-database',
    'Développement Web': 'fas fa-globe',
  };
  
  return techIcons[techName] || 'fas fa-code'; // Default icon if not found
}