'use server';

import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un email válido." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  try {
    console.log('Form data submitted:', data);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real application, you would send an email, save to a database, etc.
    
    return { success: true, message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.' };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, message: 'Hubo un error al enviar el formulario. Inténtalo de nuevo.' };
  }
}
