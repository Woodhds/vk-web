export interface VkMessage {
  id: number
  ownerId: number
  fromId: number
  likesCount: number
  repostsCount: number
  date: string
  owner: string
  text: string
  images: string[]
  isSelected: boolean
  messageCategoryId: number | null
  messageCategoryPredict: string | null
  userReposted: boolean
}