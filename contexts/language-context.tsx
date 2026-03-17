'use client';
import { createContext, useContext, ReactNode } from 'react';
type Language = 'en' | 'nl';
const LanguageContext = createContext<{ language: Language; setLanguage: (l: string) => void }>({ language: 'en', setLanguage: () => {} });
export function LanguageProvider({ children }: { children: ReactNode }) {
  return <LanguageContext.Provider value={{ language: 'en', setLanguage: () => {} }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() { return useContext(LanguageContext); }
