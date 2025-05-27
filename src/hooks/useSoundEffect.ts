import { useCallback, useRef } from 'react';

type SoundType = 'click' | 'navigate' | 'hover' | 'themeChange' | 'languageChange';

interface UseSoundEffectProps {
  volume?: number;
}

export function useSoundEffect(props?: UseSoundEffectProps) {
  const { volume = 0.5 } = props || {};
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const preloadSound = useCallback((soundFile: string) => {
    if (typeof window !== 'undefined') {
      const audio = new Audio(soundFile);
      audio.preload = 'auto';
    }
  }, []);

  const playSound = useCallback(
    (type: SoundType) => {
      if (typeof window !== 'undefined') {
        let soundFile = '';
        switch (type) {
          case 'click':
            soundFile = '/sounds/mouse_click.mp3';
            break;
          case 'navigate':
            soundFile = '/sounds/mouse_click.mp3';
            break;
          case 'hover':
            break;
          case 'themeChange':
            soundFile = '/sounds/snap.mp3';
            break;
          case 'languageChange':
            soundFile = '/sounds/change-idiom.mp3';
            break;
        }

        if (soundFile) {
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
          
          const audio = new Audio(soundFile);
          audio.volume = volume;
          
          audio.play().catch(error => {
            if (error.name !== 'AbortError') {
                console.error(`Error playing sound ${soundFile}:`, error);
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
         const audio = new Audio(sound.file);
         audio.preload = 'auto';
       });
     }
   }, []);

  return { playSound, preloadSound, preloadSounds };
}