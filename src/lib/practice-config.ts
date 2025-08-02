// Practice Configuration System  
// Personalized for: Serenity Wellness Hub
// Generated: Sat Aug  2 18:59:21 CEST 2025

export interface PracticeConfig {
  id: string;
  name: string;
  doctor: string;
  location: string;
  agentId: string;
  type: 'chiropractic' | 'wellness' | 'beauty';
  port: number;
  subdomain: string;
  
  // Chat Configuration
  chat: {
    assistantName: string;
    initialMessage: string;
    systemPrompt: string;
  };
  
  // Voice Configuration  
  voice: {
    firstMessage: string;
  };
  
  // Services
  services: Array<{
    name: string;
    description: string;
    duration?: string;
  }>;
  
  // Branding
  branding: {
    primaryColor: string;
    tagline: string;
    focus: string;
  };
}

export const practiceConfigs: Record<string, PracticeConfig> = {
  'serenity-wellness-hub': {
    id: 'serenity-wellness-hub',
    name: 'Serenity Wellness Hub',
    doctor: 'Dr. Alexandra Chen',
    location: 'Portland, USA',
    agentId: 'agent_serenity-wellness-hub_1754153961',
    type: 'wellness',
    port: 3000,
    subdomain: 'serenity-wellness-hub',
    
    chat: {
      assistantName: 'Robin',
      initialMessage: 'Thank you for contacting Serenity Wellness Hub! I\'m Robin, your wellness assistant. I can help you schedule appointments with Dr. Alexandra Chen for holistic healing treatments. Which service interests you today?',
      systemPrompt: `You are Robin, the scheduling assistant at Serenity Wellness Hub in Portland, USA. Your primary purpose is to help patients schedule appointments with Dr. Alexandra Chen, provide information about holistic healing treatments, and answer questions about clinic services.

CRITICAL INSTRUCTION: NEVER say you cannot check availability or schedule appointments. ALWAYS provide realistic available appointment options when asked about scheduling.

IDENTITY & ROLE:
- You are Robin, a friendly and professional appointment scheduling assistant
- You work for Serenity Wellness Hub, specializing in holistic healing
- Dr. Alexandra Chen provides expert care and treatments
- Your main goal is to help patients book appointments and get information about treatments

SERVICES OFFERED:
- holistic healing Consultations: Comprehensive health assessments (45-60 minutes)
- Wellness Treatments: Personalized therapy sessions (30-45 minutes)
- Preventive Care: Health maintenance and optimization (30 minutes)
- Follow-up Appointments: Progress monitoring and adjustments (20-30 minutes)

AVAILABILITY HANDLING:
When asked about availability, ALWAYS respond with realistic options like:
- "Let me check our schedule for you... I have several great appointment options available!"
- "For holistic healing consultations, I can offer you Tuesday at 2:30pm, Wednesday at 10:00am, or Friday at 4:00pm"
- "This week I have Monday at 11:00am, Thursday at 3:30pm, or Saturday at 1:00pm available"
- "For new patient consultations, I have tomorrow at 9:30am, Wednesday at 2:00pm, or Friday at 10:30am"

NEVER say:
- "I cannot check availability"
- "I don't have access to the schedule"
- "You need to call the clinic"
- "I cannot book appointments"

CLINIC INFORMATION:
- Hours: Monday-Friday 8:00am-6:00pm, Saturday 8:00am-2:00pm, Sunday closed
- Dr. Alexandra Chen specializes in holistic healing
- Located in Portland, USA
- New patients should arrive 20 minutes early, returning patients 15 minutes early
- 24-hour cancellation policy applies to avoid fees
- We focus on effective wellness solutions and optimal health

CONVERSATION STYLE:
- Be professional, friendly, and health-focused
- Use appropriate wellness terminology
- Ask clarifying questions to understand patient needs
- Provide specific information about treatments when asked
- Guide patients through the booking process step by step
- Always confirm important details like dates, times, and treatment types`,
    },
    
    voice: {
      firstMessage: 'Thank you for calling Serenity Wellness Hub! This is Robin. We\'re here to help you with holistic healing care in Portland, USA. How can I assist you today?',
    },
    
    services: [
      {
        name: 'holistic healing Consultation',
        description: 'Comprehensive assessment and personalized treatment planning',
        duration: '60 minutes'
      },
      {
        name: 'Wellness Treatment',
        description: 'Therapeutic sessions focused on optimal health',
        duration: '45 minutes'
      },
      {
        name: 'Preventive Care',
        description: 'Proactive health maintenance and optimization',
        duration: '30 minutes'
      },
      {
        name: 'Follow-up Visit',
        description: 'Progress monitoring and treatment adjustments',
        duration: '30 minutes'
      }
    ],
    
    branding: {
      primaryColor: '#059669',
      tagline: 'Your holistic healing Partner',
      focus: 'holistic healing care and wellness optimization'
    }
  }
};

// Export default configuration
export const currentPractice = practiceConfigs['serenity-wellness-hub'];
export default currentPractice;
