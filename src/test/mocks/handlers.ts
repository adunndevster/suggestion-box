import { http, HttpResponse } from 'msw';
import { conversations } from '../../data/data';

export const handlers = [
  http.get('/api/suggestions', () => {
    return HttpResponse.json({
      suggestions: [
        {
          id: '1',
          title: 'Root needs a mascot',
          description: 'I think root needs a mascot. Any ideas?',
          timestamp: new Date('2024-01-01T10:00:00Z'),
          userId: 1,
          conversationId: '1',
        },
      ],
    });
  }),

  http.get('/api/conversations', ({ request }) => {
    const url = new URL(request.url)
    const id = url.searchParams.get('id') ?? 1;

    console.log(url, id);
    
    return HttpResponse.json({
      comments: conversations[id] || [],
    });
  }),
];
