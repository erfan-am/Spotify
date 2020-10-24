export const setFilterSearch = (data, itemEnter) => {
  const dataItem = data.filter((item) => item.name.includes(itemEnter));
  const dataGroups = data.filter((item) =>
    item.items.find((item) => item.name.includes(itemEnter))
  );
  return { dataItem, dataGroups };
};
