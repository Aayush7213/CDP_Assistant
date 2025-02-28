import { cdpData } from '../data';

export const generateResponse = (question: string): string => {
  // Convert question to lowercase for case-insensitive matching
  const lowerQuestion = question.toLowerCase();
  
  // Check if the question is not related to CDPs
  if (!isRelevantToCDP(lowerQuestion)) {
    return "I'm specifically designed to answer questions about Customer Data Platforms (CDPs) like Segment, mParticle, Lytics, and Zeotap. Please ask me how to perform specific tasks within these platforms.";
  }

  // Check for comparison questions
  if (lowerQuestion.includes('compare') || lowerQuestion.includes('difference') || lowerQuestion.includes('vs') || lowerQuestion.includes('versus')) {
    const comparisonInfo = findComparisonInfo(lowerQuestion);
    if (comparisonInfo) {
      return comparisonInfo;
    }
  }

  // Check for advanced questions
  if (lowerQuestion.includes('advanced') || lowerQuestion.includes('complex') || lowerQuestion.includes('strategy')) {
    const advancedInfo = findAdvancedInfo(lowerQuestion);
    if (advancedInfo) {
      return advancedInfo;
    }
  }

  // Identify which CDP the question is about
  const cdps = ['segment', 'mparticle', 'lytics', 'zeotap'];
  let targetCDP = '';
  
  for (const cdp of cdps) {
    if (lowerQuestion.includes(cdp)) {
      targetCDP = cdp;
      break;
    }
  }

  // If no specific CDP is mentioned, try to infer from the question
  if (!targetCDP) {
    targetCDP = inferCDPFromQuestion(lowerQuestion);
  }

  // If we have a target CDP, search for relevant information
  if (targetCDP) {
    const cdpInfo = findCDPInfo(targetCDP, lowerQuestion);
    if (cdpInfo) {
      return cdpInfo;
    }
  }

  // If we couldn't find specific information, provide a general response
  return "I don't have specific information about that. Could you please ask about a specific task in Segment, mParticle, Lytics, or Zeotap? For example, 'How do I set up a new source in Segment?' or 'How can I create a user profile in mParticle?'";
};

const isRelevantToCDP = (question: string): boolean => {
  const cdpKeywords = [
    'segment', 'mparticle', 'lytics', 'zeotap', 'cdp', 'customer data platform',
    'source', 'destination', 'event', 'tracking', 'audience', 'profile', 'integration',
    'data', 'user', 'identity', 'campaign', 'segment', 'recommendation'
  ];
  
  return cdpKeywords.some(keyword => question.includes(keyword));
};

const inferCDPFromQuestion = (question: string): string => {
  // Keywords specific to each CDP
  const keywordMap: Record<string, string[]> = {
    'segment': ['source', 'destination', 'tracking plan', 'protocols'],
    'mparticle': ['user profile', 'input', 'audience', 'identity'],
    'lytics': ['audience segment', 'content recommendations', 'campaign', 'personalization'],
    'zeotap': ['unified customer profile', 'identity resolution', 'segments']
  };

  for (const [cdp, keywords] of Object.entries(keywordMap)) {
    if (keywords.some(keyword => question.includes(keyword))) {
      return cdp;
    }
  }

  return '';
};

const findCDPInfo = (cdp: string, question: string): string => {
  const data = cdpData[cdp as keyof typeof cdpData];
  if (!data) return '';

  // Score each document based on keyword matches
  const scoredDocs = data.map(doc => {
    const titleWords = doc.title.toLowerCase().split(' ');
    const contentWords = doc.content.toLowerCase().split(' ');
    const questionWords = question.split(' ');
    
    let score = 0;
    
    // Check for title matches (weighted higher)
    questionWords.forEach(word => {
      if (titleWords.includes(word)) score += 3;
    });
    
    // Check for content matches
    questionWords.forEach(word => {
      if (contentWords.includes(word)) score += 1;
    });
    
    // Check for key phrases
    const keyPhrases = [
      'how to', 'how do i', 'how can i', 'steps to', 'guide for'
    ];
    
    keyPhrases.forEach(phrase => {
      if (question.includes(phrase) && doc.title.toLowerCase().includes('how')) {
        score += 5;
      }
    });
    
    return { doc, score };
  });

  // Sort by score and get the best match
  scoredDocs.sort((a, b) => b.score - a.score);
  
  if (scoredDocs.length > 0 && scoredDocs[0].score > 0) {
    return scoredDocs[0].doc.content;
  }
  
  return '';
};

const findComparisonInfo = (question: string): string => {
  const comparisons = cdpData.comparisons;
  
  // Score each comparison document
  const scoredDocs = comparisons.map(doc => {
    const titleWords = doc.title.toLowerCase().split(' ');
    const contentWords = doc.content.toLowerCase().split(' ');
    const questionWords = question.split(' ');
    
    let score = 0;
    
    // Check for title matches (weighted higher)
    questionWords.forEach(word => {
      if (titleWords.includes(word)) score += 3;
    });
    
    // Check for content matches
    questionWords.forEach(word => {
      if (contentWords.includes(word)) score += 1;
    });
    
    // Check for specific CDPs mentioned
    const cdps = ['segment', 'mparticle', 'lytics', 'zeotap'];
    cdps.forEach(cdp => {
      if (question.includes(cdp) && doc.title.toLowerCase().includes(cdp)) {
        score += 5;
      }
    });
    
    return { doc, score };
  });

  // Sort by score and get the best match
  scoredDocs.sort((a, b) => b.score - a.score);
  
  if (scoredDocs.length > 0 && scoredDocs[0].score > 0) {
    return scoredDocs[0].doc.content;
  }
  
  return "I don't have a specific comparison for that. You can ask me about differences between specific CDPs like 'Segment vs. mParticle for event tracking' or 'How does Lytics compare to Zeotap for identity resolution?'";
};

const findAdvancedInfo = (question: string): string => {
  const advanced = cdpData.advanced;
  
  // Score each advanced document
  const scoredDocs = advanced.map(doc => {
    const titleWords = doc.title.toLowerCase().split(' ');
    const contentWords = doc.content.toLowerCase().split(' ');
    const questionWords = question.split(' ');
    
    let score = 0;
    
    // Check for title matches (weighted higher)
    questionWords.forEach(word => {
      if (titleWords.includes(word)) score += 3;
    });
    
    // Check for content matches
    questionWords.forEach(word => {
      if (contentWords.includes(word)) score += 1;
    });
    
    // Check for specific advanced topics
    const topics = ['advanced', 'integration', 'strategy', 'complex'];
    topics.forEach(topic => {
      if (question.includes(topic) && doc.title.toLowerCase().includes(topic)) {
        score += 5;
      }
    });
    
    return { doc, score };
  });

  // Sort by score and get the best match
  scoredDocs.sort((a, b) => b.score - a.score);
  
  if (scoredDocs.length > 0 && scoredDocs[0].score > 0) {
    return scoredDocs[0].doc.content;
  }
  
  return "I don't have specific advanced information about that. You can ask me about advanced topics like 'Advanced Segment destination filtering' or 'Cross-CDP data integration strategies'.";
};