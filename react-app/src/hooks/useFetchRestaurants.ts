import { useFetch } from 'usehooks-ts';
import URI from '../apis/apis.const';
import { Restaurant } from '../types/restaurant';

const url = `${URI}/restaurants`;

export default function useFetchRestaurants() {
  const { data } = useFetch<{restaurants:Restaurant[]}>(url);

  if (!data) {
    return [];
  }
  return data.restaurants;
}
