const UNSPLASH_BASE = 'https://images.unsplash.com'

export function unsplashUrl(id: string, width = 1200, quality = 80) {
  return `${UNSPLASH_BASE}/photo-${id}?w=${width}&q=${quality}`
}

export const HERO_IMAGE = '1486406146926-c627a92ad1ab'
export const ABOUT_IMAGE = '1552664730-d307ca884978'
export const INSIGHTS_IMAGES = [
  '1551288049-bebda4e38f71',
  '1522071820081-009f0129c71c',
  '1552664730-d307ca884978',
  '1551434678-e076c223a692',
] as const
export const ABOUT_HERO_IMAGE = '1454165804606-c3d57bc86b40'
export const MISSION_IMAGE = '1552664730-d307ca884978'
export const VISION_IMAGE = '1522071820081-009f0129c71c'
export const WHY_CHOOSE_IMAGE = '1551288049-bebda4e38f71'
