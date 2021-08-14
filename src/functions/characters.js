import axios from 'axios';
import {BREAKING_BAD_API} from '../config';

const api = BREAKING_BAD_API;

const replaceSpaceWithPlus = (initialString) => {
	return initialString.split(' ').join('+');
};

export const getAllCharacters = () => {
	return axios.get(`${api}/characters`);
};

export const getAllCharactersByPage = (offset) => {
	return axios.get(`${api}/characters?limit=10&offset=${offset}`);
};

export const getCharactersByName = (name) => {
	name = replaceSpaceWithPlus(name);
	return axios.get(`${api}/characters?name=${name}`)
};

export const getCharactersByCategory = (category) => {
	category = replaceSpaceWithPlus(category);
	return axios.get(`${api}/characters?category=${category}`)
};

export const getCharactersById = (id) => {
	return axios.get(`${api}/characters/${id}`);
};

export const getQuoteByCharacterName = (name) => {
	name = replaceSpaceWithPlus(name);
	return axios.get(`${api}/quote?author=${name}`);
};
