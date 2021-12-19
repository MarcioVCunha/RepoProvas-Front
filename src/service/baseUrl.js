import process from 'process';

const BASE_URL = process.env.NODE_ENV === 'production' ? 'teste' : 'http://localhost:4000';

export default BASE_URL;