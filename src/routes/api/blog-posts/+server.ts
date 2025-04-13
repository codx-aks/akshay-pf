import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';



export const GET: RequestHandler = async () => {
  
    console.error('Failed to fetch blog posts:');
    return json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  
};

