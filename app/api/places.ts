// pages/api/places.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
      params: {
        input: query,
        types: '(cities)',
        components: 'country:BR',
        key: process.env.GOOGLE_PLACES_API_KEY,
      },
    });

    return res.status(200).json(response.data.predictions);
  } catch (error) {
    console.error('Error fetching data from Google Places API:', error);
    return res.status(500).json({ error: 'Error fetching data from Google Places API' });
  }
};

export default handler;
