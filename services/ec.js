import axios from "axios";

export const getCandidate = (candidateId) =>
  axios
    .get(`https://somtum-backend.herokuapp.com/candidates/${candidateId}`)
    .then((res) => res.data);

export const getCandidates = () =>
  axios
    .get("https://somtum-backend.herokuapp.com/candidates")
    .then((res) => res.data);

export const getCandidatesByArea = (areaId) =>
  axios
    .get(`https://somtum-backend.herokuapp.com/candidates/area/${areaId}`)
    .then((res) => res.data);

export const getParty = () =>
  axios
    .get("https://somtum-backend.herokuapp.com/party")
    .then((res) => res.data);

export const getScoreParty = () => {
  return axios
    .get("https://somtum-backend.herokuapp.com/score/party")
    .then((res) => res.data);
};

export const getScoreMP = () => {
  return axios
    .get("https://somtum-backend.herokuapp.com/score/mp")
    .then((res) => res.data);
};

export const getCandidateScoreArea = (areaId) => {
  return axios
    .get(`https://somtum-backend.herokuapp.com/score/area/candidate?area_id=${areaId}`)
    .then((res) => res.data);
};

export const getPartyScoreArea = (areaId) => {
    return axios
      .get(`https://somtum-backend.herokuapp.com/score/area/party?area_id=${areaId}`)
      .then((res) => res.data);
  };
  

export const getPartyScoreAreas = () => {
  return axios
    .get("https://somtum-backend.herokuapp.com/score/party/areas")
    .then((res) => res.data);
};

export const getCandidateScoreAreas = () => {
    return axios
      .get("https://somtum-backend.herokuapp.com/score/candidate/areas")
      .then((res) => res.data);
  };

export const getPopulationStatistics = () => {
  return axios
    .get("https://somtum-backend.herokuapp.com/population")
    .then((res) => res.data);
};
