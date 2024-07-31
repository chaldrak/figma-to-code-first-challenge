import BitcoinIcon from "@/assets/icons/bitcoin-ellipse.svg"
import CloudIcon from "@/assets/icons/cloud-download.svg"
import PriceIcon from "@/assets/icons/sale-tag.svg"
import WalletIcon from "@/assets/icons/wallet.svg"

export const steps = [
  {
    title: "Set up your wallet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: WalletIcon,
  },
  {
    title: "Add your NFT’s",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: CloudIcon,
  },
  {
    title: "Promote your NFT’s",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: PriceIcon,
  },
  {
    title: "Sell your NFT’s",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    icon: BitcoinIcon,
  },
]

export type IStepType = (typeof steps)[0]
