export type Project = {
  id: string
  name: string
  tags?: string[]
  feature?: string
  description?: string
  img: string
  link?: string
}

export const projects: Project[] = [
  {
    id: 'urara',
    name: 'Urara',
    tags: ['Svelte', 'TypeScript'],
    description:
      "🌸 Sweet, Powerful, IndieWeb-Compatible SvelteKit Blog Starter. [δ](Delta)",
    feature: 'Svelte',
    img: 'https://github.com/importantimport/urara/raw/main/urara/hello-world/urara.webp',
    link: 'https://github.com/importantimport/urara'
  },
  {
    id: 'urara-docs',
    name: 'Urara Docs',
    tags: ['TypeScript'],
    feature: 'TypeScript',
    description:
      '🌸 Documentation for Urara',
    img: 'https://github.com/importantimport/urara/raw/main/urara/hello-world/urara.webp',
    link: 'https://github.com/importantimport/urara-docs'
  }
]