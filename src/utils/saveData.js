
import fs from 'fs/promises';

const loadData = async () => {
  try {
    const rawData = await fs.readFile('src/data/formData.json', 'utf-8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error loading data:', error);
    return [];
  }
};

export default loadData;