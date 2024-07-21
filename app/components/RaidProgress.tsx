'use client'

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button, Pagination} from "@nextui-org/react";
import { use, useState } from "react";

type Props = {
  characterData: Character
}

export default function RaidProgress({characterData}: Props) {
  const [currentRaidImage, setCurrentRaidImage] = useState('./vault.jpg')
  const [currentRaidProgress, setCurrentRaidProgress] = useState({name: '', progress: ''})


  const handleChange = (event: number) => {
    if (event === 1) {
      setCurrentRaidImage('./vault.jpg')
      const name = "Vault of the Incarnates"
      const progress = characterData.raid_progression.vault.progress
      setCurrentRaidProgress({name, progress})
    }
    else if (event === 2) {
      setCurrentRaidImage('./aberrus.jpg')
      const name = "Aberrus, the Shadowed Crucible"
      const progress = characterData.raid_progression.aberrus.progress
      setCurrentRaidProgress({name, progress})
    }
    else if (event === 3) {
      setCurrentRaidImage('./amidrassil.jpg')
      const name = "Amirdrassil, the Dream's Hope"
      const progress = characterData.raid_progression.amidrassil.progress
      setCurrentRaidProgress({name, progress})
    }
  }

  return (
    <>
      <Card
        isFooterBlurred
        radius="lg"
        className="border-non w-fit -ml-6"
      >
      <Image
        alt="World of Warcraft Raid Image"
        className="object-cover"
        height={200}
        src={`${currentRaidImage}`}
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 shadow-small z-10 flex flex-col " style={{width: "12.2rem", marginLeft: '0.10rem'}}>
        <p className="text-white/80" style={{fontSize: '11px'}}>{currentRaidProgress.name}</p>
        <p className="text-tiny text-white/80">{currentRaidProgress.progress}</p>
      </CardFooter>
      </Card>
      <Pagination 
        total={3} 
        initialPage={1}  
        size="sm" 
        showShadow={true} 
        showControls={true}
        loop={true}
        color="warning"
        onChange={event => handleChange(event)} 
        className="mt-1 -ml-6 mb-2"
      />
    </>
  )
}