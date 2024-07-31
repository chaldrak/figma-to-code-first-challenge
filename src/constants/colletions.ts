export const collections = [
  {
    id: "1",
    name: "CyberPunk",
    image: "https://started-bucket.s3.us-east-2.amazonaws.com/figma-to-code/img_6.png",
    value: 68,
    category: "gaming",
  },
  {
    id: "2",
    name: "Durolost Boll - Upper",
    image: "https://started-bucket.s3.us-east-2.amazonaws.com/figma-to-code/img_4.png",
    value: 68,
    category: "sport",
  },
  {
    id: "3",
    name: "Space X Wiper",
    image: "https://started-bucket.s3.us-east-2.amazonaws.com/figma-to-code/img_5.png",
    value: 68,
    category: "art",
  },
  {
    id: "4",
    name: "Snoop Dogg",
    image: "https://started-bucket.s3.us-east-2.amazonaws.com/figma-to-code/img_3.png",
    value: 68,
    category: "celebrities",
  },
]

export type ICollectionType = (typeof collections)[0]
