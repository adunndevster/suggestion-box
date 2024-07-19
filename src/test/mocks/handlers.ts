import { http, HttpResponse } from 'msw';
import { appData, conversations, Suggestion } from '../../data/data';


interface ConversationResponse
{
    conversationId: string;
    userId: string;
    text: string;
}

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

  http.post('/api/conversations', async ({request}) => {
    const data = await request.json() as ConversationResponse;
    if(!data)
    {
        return HttpResponse.json({ success: false });
    }

    if (conversations[data.conversationId]) {
      conversations[data.conversationId].push({ userId: data.userId, text: data.text });
    } else {
      conversations[data.conversationId] = [{ userId: data.userId, text: data.text }];
    }

    return HttpResponse.json({ success: true });
  }),

  http.post('/api/suggestions', async ({request}) => {
    const data = await request.json() as Suggestion;
    if(!data)
    {
        return HttpResponse.json({ success: false });
    }

    appData.suggestions.push(data);
    conversations[data.conversationId] = [];

    return HttpResponse.json({ success: true });
  })
];
