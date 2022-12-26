export interface FriendOld {
    // hCard+XFN
    id: string // HTML id
    rel?: string // XFN, contact / acquaintance / friend
    link?: string // URL
    html?: string // HTML
    title?: string // Link title
    descr?: string // Descriptions
    avatar?: string // Friends avatar
    name?: string // backwards compatibility
  }
  
export type Friend = {
  id: string // HTML id
  rel?: string // XHTML Friends Network
  link?: string // URL
  html?: string // Custom HTML
  title?: string // Link title
  name?: string // Friends name
  avatar?: string // Friends avatar
  descr?: string // Descriptions
  class?: {
    avatar?: string // Avatar class
    img?: string // Photo class
  }
}

export const friends: Friend[] = [
  {
    id: 'id',
    rel: 'friend',
    name: 'Name',
    title: 'Title',
    avatar: '/favicon.png',
    link: 'https://urara-demo.netlify.app/',
    descr: 'A Descriptions.',
  },
  {
    id: 'id_2',
    name: 'name_2',
    avatar: '/favicon.png',
    title: 'Title_2',
    descr: 'Friends_2',
  }
]