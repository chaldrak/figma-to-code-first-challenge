import React from "react"

const BuildYouNFT = () => {
  return (
    <div className="md:mx-12.5 desktop:mx-auto mx-5 border-l border-neutral-50 pt-24 text-center">
      <div className="relative z-10 flex h-fit flex-col items-center overflow-hidden rounded-[32px] bg-neutral-800 bg-[url('https://started-bucket.s3.us-east-2.amazonaws.com/figma-to-code/img_2.png')] bg-cover bg-center bg-no-repeat py-[72px] text-white">
        <div className="absolute inset-0 z-0 bg-black/50" />
        <h3 className="z-10 text-3xl font-medium md:text-6xl">Build your NFT profile</h3>
        <p className="z-10 my-10 text-xs font-semibold md:text-xl">Join almost 10k NFT profiles on Digit !</p>
        <button className="px-6.5 z-10 rounded-full bg-white py-2.5 text-base font-semibold text-neutral-800 hover:bg-neutral-100">
          Sign up now
        </button>
      </div>
    </div>
  )
}

export default BuildYouNFT
