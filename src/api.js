import content from '../data/content.json';

const api = {

  getContent(language = 'en') {
    return content.filter(obj => obj.lang === language)[0];
  },

};

export default api;
