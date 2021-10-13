const listJurusan = {
  jurusan: [],
};

const jurusanReduser = (state = listJurusan, action) => {
  const { type, payload } = action;

  switch (type) {
    case "JURUSAN_OK":
      return {
        ...state,
        jurusan: [...state.jurusan, payload.listJurusan],
      };
    default:
      return state;
  }
};
export default jurusanReduser;
