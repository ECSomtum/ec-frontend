import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Info from "../components/Info";
import { getCandidates, getParty } from "../services/ec";

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
