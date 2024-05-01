import React, { useState } from "react";

export const useDataSorter = (data, sortBy) => {
  const sortedData = data.reduce((result, item) => {
    const subcategory = item.fields[sortBy];

    if (!result[subcategory]) {
      result[subcategory] = [];
    }

    result[subcategory].push(item);

    return result;
  }, []);

  return sortedData;
};
