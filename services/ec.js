import axios from "axios";

export const getCandidates = () =>
  axios
    .get("https://somtum-backend.herokuapp.com/candidates")
    .then((response) => response.data);

export const getParty = () =>
  axios
    .get("https://somtum-backend.herokuapp.com/party")
    .then((response) => response.data);

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
