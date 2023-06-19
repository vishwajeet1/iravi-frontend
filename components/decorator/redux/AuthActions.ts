const saveAuth = (payload: any) => ({
  type: "SAVE_AUTH",
  payload,
});

export const authActions = {
  saveAuth,
};
