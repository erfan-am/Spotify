export const setAddLikes = (like, data) => {
  const exist = like.find((it) => it.id === data.id);
  if (!exist) {
    return [...like, data];
  }
  return like;
};
export const getGroup = (data, song) => {
  return data.find((group) => group.title === song.name);
};

export const getGroupSearch = (data, song) => {
  const dataGroup = data.find((item) => item.id === song.id);
  return dataGroup;
};
