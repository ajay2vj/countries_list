import axios from 'axios';
import { BASEURL } from './baseURL';
const customapi = axios.create({
  baseURL: `${BASEURL()}`,
  headers: { 'Content-Type': 'application/json' },
});
export default customapi;