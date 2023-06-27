import axios from "axios";

const createJournalApi = async (journal: any) =>
  axios.post("/api/route?path=diary/journal", { ...journal });

const fetchJournalListApi = async () =>
  axios.get("/api/route?path=diary/journal");

export const journalApi = { createJournalApi, fetchJournalListApi };
