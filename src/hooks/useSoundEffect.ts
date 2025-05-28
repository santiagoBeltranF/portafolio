import { useCallback, useRef } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

type SoundType = 'click' | 'navigate' | 'hover' | 'themeChange' | 'languageChange';

interface UseSoundEffectProps {
  volume?: number;
}

export function useSoundEffect(props?: UseSoundEffectProps) {
  const { volume = 0.5 } = props || {};
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const preloadSound = useCallback((soundPathRelativeToPublic: string) => {
    if (typeof window !== 'undefined') {
      const audio = new Audio(`${basePath}${soundPathRelativeToPublic}`);
      audio.preload = 'auto';
    }
  }, []); 

  const playSound = useCallback(
    (type: SoundType) => {
      if (typeof window !== 'undefined') {
        let soundFileSuffix = '';
        switch (type) {
          case 'click':
            soundFileSuffix = '/sounds/mouse_click.mp3';
            break;
          case 'navigate':
            soundFileSuffix = '/sounds/mouse_click.mp3';
            break;
          case 'hover':
            break;
          case 'themeChange':
            soundFileSuffix = '/sounds/snap.mp3';
            break;
          case 'languageChange':
            soundFileSuffix = '/sounds/change-idiom.mp3';
            break;
        }

        if (soundFileSuffix) {
          const fullSoundFile = `${basePath}${soundFileSuffix}`;
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
          
          const audio = new Audio(fullSoundFile);
          audio.volume = volume;
          
          audio.play().catch(error => {
            if (error.name !== 'AbortError') {
                console.error(`Error playing sound ${fullSoundFile}:`, error);
            }
          });
          audioRef.current = audio;
        }
      }
    },
    [volume] 
  );

  const preloadSounds = useCallback((sounds: { type: SoundType, file: string }[]) => {
     if (typeof window !== 'undefined') {
       sounds.forEach(sound => {
         const audio = new Audio(`${basePath}${sound.file}`);
         audio.preload = 'auto';
       });
     }
   }, []); 

  return { playSound, preloadSound, preloadSounds };
}