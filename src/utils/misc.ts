import { SuggestionUser, users } from "../data/data";

export const formatDate = (timestamp: Date): string => {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
  

  export const getUser = (userId:string):SuggestionUser => users[userId];

  export const getRandomFromRange = (base:number = 4000, range:number = 8000):number =>
  {
    const rando = (Math.random() * range) + base;
    return Math.round(rando);
  }