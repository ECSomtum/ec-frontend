import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Info from '../components/Info'

const InfoCandidate = () => {
  const candidates = [
    {
      id: '1',
      name: 'Bored Ape',
      pictureUrl:
        'https://www.playtoearn.online/wp-content/uploads/2021/10/Bored-Ape-Yacht-Club-NFT-avatar.png',
      party_id: 1,
    },
    {
      id: '2',
      name: 'Habbo Avatars',
      pictureUrl:
        'https://www.playtoearn.online/wp-content/uploads/2021/10/habbo-NFT-avatar.png',
      party_id: 2,
    },
    {
      id: '3',
      name: 'Deadfellaz',
      pictureUrl:
        'https://www.playtoearn.online/wp-content/uploads/2021/10/deadfellaz-avatar-icon.png',
      party_id: 1,
    },
    {
      id: '4',
      name: 'VOID',
      pictureUrl:
        'https://www.playtoearn.online/wp-content/uploads/2021/10/visitors-of-imma-degen-VOID-avatar-icon.png',
      party_id: 2,
    },
  ]

  const party = [
    {
      id: 1,
      name: 'AC',
      pictureUrl: '',
    },
    {
      id: 2,
      name: 'ER',
      pictureUrl: '',
    },
  ]

  const getPartyname = () => {
    candidates.map((candidate) => {
      party.map((e) => {
        if (candidate.party_id === e.id) {
          candidate.partyName = e.name
          return e.name
        }
      })
    })
  }

  getPartyname()

  return (
    <Box sx={{ display: 'flex', margin: 10 }}>
      {candidates.map((candidate) => {
        return (
          <Box key={candidate.id} item xs={6}>
            <Info key={candidate.id} props={candidate} />
          </Box>
        )
      })}
    </Box>
  )
}

export default InfoCandidate
