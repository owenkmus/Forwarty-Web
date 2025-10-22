'use server';

import { z } from 'zod';
import { contactFormSchema } from '@/lib/schemas';

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  // Validate data on the server
  const parsed = contactFormSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, message: 'Datos de formulario inválidos.' };
  }
  
  try {
    console.log('Form data submitted:', parsed.data);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real application, you would send an email, save to a database, etc.
    
    return { success: true, message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.' };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, message: 'Hubo un error al enviar el formulario. Inténtalo de nuevo.' };
  }
}
