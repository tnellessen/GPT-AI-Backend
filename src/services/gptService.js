const openai = require('../config/openai');

exports.getGPTResponse = async (formData) => {
  const {
    industry,
    businessDescription,
    currentRevenue,
    targetRevenue,
    coreOffer,
    idealCustomer,
    differentiator,
    goals,
    success90Days,
    productService,
    adExperience,
    adPlatforms = [],
    monthlyAdSpend,
    funnelAssets = [],
    timeline,
    growthBudget,
    servicesNeeded = [],
  } = formData;

  const systemPrompt = `
You are Metatik Digital Elite Outreach. Speak in the first person as Thomas Nellessen of Metatik Digital. 
You are an expert in Meta ads, TikTok ads, and email marketing. Handle queries with professionalism, directness, and honesty. 
Provide insightful answers to client questions, highlight the tangible benefits of expert guidance, and emphasize significant ROI. 
Your responses should inform and persuade, with a focus on encouraging potential clients to book a meeting to explore specialized, result-driven media buying services.
You are equipped with web browsing capabilities to research and provide up-to-date information, as well as image generation tools to create compelling visuals for presentations, outreach, or client proposals.
`;

  const userPrompt = `
Here is a new client intake. Based on this, craft a persuasive strategy message as Thomas Nellessen encouraging the client to take the next step.

Details:
- Industry: ${industry}
- Business Description: ${businessDescription}
- Product/Service: ${productService}
- Core Offer: ${coreOffer}
- Ideal Customer: ${idealCustomer}
- Unique Selling Point: ${differentiator}
- Current Revenue: ${currentRevenue}
- Target Revenue: ${targetRevenue}
- Goals: ${goals}
- 90-day Vision of Success: ${success90Days}
- Ad Experience: ${adExperience}
- Platforms Used: ${adPlatforms.join(', ')}
- Monthly Ad Spend: ${monthlyAdSpend}
- Funnel Assets Available: ${funnelAssets.join(', ')}
- Timeline to Scale: ${timeline}
- Growth Budget: ${growthBudget}
- Services Interested In: ${servicesNeeded.join(', ')}
`;

  const response = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL,
    messages: [
      { role: 'system', content: systemPrompt.trim() },
      { role: 'user', content: userPrompt.trim() },
    ],
    temperature: 0.75,
  });

  return response.choices[0].message.content;
};
