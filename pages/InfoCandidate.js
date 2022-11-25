import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Info from "../components/Info";

const InfoCandidate = ({ initialParty, initialCandidates }) => {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [party, setParty] = useState(initialParty);

  useEffect(() => {
    setCandidateWithParty(candidates);
  }, []);

  const setCandidateWithParty = (initialCandidates) => {
    const candidateWithPartyInfo = initialCandidates.map(candidate => {
      const candidateParty = party.filter(
        p => candidate.party_id === p.id
      );

      return candidateParty.length > 0 ? {
        ...candidate,
        partyName: candidateParty[0].name,
        partyPictureUrl: candidateParty[0].pictureUrl,
      } : { ...candidate, partyName: "", partyPictureUrl: ""};
    });

    setCandidates(candidateWithPartyInfo);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", margin: 10 }}>
        {candidates.map((candidate) => {
          return (
            <Box key={candidate.id} item xs={6}>
              <Info key={candidate.id} props={candidate} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

const getParty = () =>
  axios.get("https://somtum-backend.herokuapp.com/party").then((response) => response.data);

const getCandidates = () =>
  axios
    .get("https://somtum-backend.herokuapp.com/candidates")
    .then((response) => response.data);

export async function getServerSideProps() {
  const party = await getParty();
  const candidates = await getCandidates();

  return {
    props: {
      initialParty: party,
      initialCandidates: candidates,
    },
  };
}

export default InfoCandidate;
