'use client'

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button, Pagination} from "@nextui-org/react";
import { use, useState } from "react";

type Props = {
  characterData: Character
}

const raidColorMap = new Map<string, string>([
  ['N', '#09ed4e'],
  ['H', '#ed0920'],
  ['M', '#b70ef0']
]);

export default function RaidProgress({characterData}: Props) {
  const [currentRaidImage, setCurrentRaidImage] = useState('./vault_cropped.webp')
  const [currentRaidProgress, setCurrentRaidProgress] = useState({name: '', progress: ''})


  const handleChange = (event: number) => {
    if (event === 1) {
      setCurrentRaidImage('./vault_cropped.webp')
      const name = "Vault of the Incarnates"
      const progress = characterData.raid_progression.vault.progress
      setCurrentRaidProgress({name, progress})
    }
    else if (event === 2) {
      setCurrentRaidImage('./aberrus_cropped.webp')
      const name = "Aberrus, the Shadowed Crucible"
      const progress = characterData.raid_progression.aberrus.progress
      setCurrentRaidProgress({name, progress})
    }
    else if (event === 3) {
      setCurrentRaidImage('./amidrassil_cropped.webp')
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
        
        {currentRaidProgress.progress != 'none' && 
          <p 
            className="font-bold" 
            style={{color: `${raidColorMap.get(currentRaidProgress.progress.charAt(currentRaidProgress.progress.length - 1))}`}}>
              {currentRaidProgress.progress}
          </p>
        }
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