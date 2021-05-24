import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue-AdminLTE-3 Template';

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
