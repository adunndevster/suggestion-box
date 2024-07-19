import { http, HttpResponse } from 'msw';
import { appData, conversations } from '../../data/data';

export const handlers = [
  http.get('/api/suggestions', () => {
    return HttpResponse.json({
      suggestions: appData.suggestions,
    });
  }),

  http.get('/api/conversations', ({ request }) => {
    const url = new URL(request.url)
    const id = url.searchParams.get('id') ?? 1;
    
    return HttpResponse.json({
      comments: conversations[id] || [],
    });
  }),
];
