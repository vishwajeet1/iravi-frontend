import axios from "axios";

const createJournalSectionApi = async (section: any) =>
  axios.post(`/api/route?path=diary/journal/${section.journal}/section`, {
    ...section,
  });

const fetchJournalSectionListApi = async (journalId: string) =>
  axios.get(`/api/route?path=diary/journal/${journalId}/section`);

export const sectionApi = {
  createJournalSectionApi,
  fetchJournalSectionListApi,
};
