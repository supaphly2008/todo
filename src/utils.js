import { format as formatDate } from "date-fns";
/**
 * @param {string} name - The key name of the localstorage
 * @param payload - Data that will be saved in localstorage
 */
export const saveToLocalStorage = (name, data) => {
  localStorage[name] = JSON.stringify(data);
};

/**
 * @param {string} name - The key name of the localstorage
 */
export const getFromLocalStorage = (name) => {
  if (localStorage[name]) {
    return JSON.parse(localStorage[name]);
  }
  return undefined;
};

/**
 * @param {(Date | number)} date - Date
 * @param {string} format - Date format. Default - yyyy/MM/dd HH:mm
 */
export const formatDateTime = (date, format = "yyyy/MM/dd HH:mm") => {
  return formatDate(date, format);
};
