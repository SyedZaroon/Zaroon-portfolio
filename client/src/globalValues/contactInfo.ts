  import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare } from 'lucide-react';

  
  export const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      color: 'text-red-400',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'zaroonalichishti@gmail.com',
      link: 'mailto:zaroonalichishti@gmail.com',
      color: 'text-blue-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 (305) 6529811',
      link: 'tel:+923056529811',
      color: 'text-green-400',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: 'Available',
      link: 'https://wa.me/923056529811',
      color: 'text-cyan-400',
    },
  ];