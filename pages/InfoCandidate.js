import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Info from '../components/Info'

const InfoCandidate = () => {
  const [candidates, setCandidates] = useState([])
  const [party, setParty] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios
      .get('https://somtum-backend.herokuapp.com/candidates')
      .then((response) => response.data)
      .then((data) => {
        setCandidates(data)
      })
    axios
      .get('https://somtum-backend.herokuapp.com/party')
      .then((response) => response.data)
      .then((data) => {
        setParty(data)
      })
  }, [])

  const getPartyname = () => {
    candidates.map((candidate) => {
      party.map((e) => {
        if (candidate.party_id === e.id) {
          candidate.partyName = e.name
          candidate.partyPictureUrl = e.pictureUrl
          return e.name
        }
      })
    })
  }
  getPartyname()
  console.log(candidates)

  return (
    <Box>
      <Box sx={{ display: 'flex', margin: 10 }}>
        {candidates.map((candidate) => {
          return (
            <Box key={candidate.id} item xs={6}>
              <Info key={candidate.id} props={candidate} />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default InfoCandidate
