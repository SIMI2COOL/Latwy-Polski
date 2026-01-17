/**
 * Sound effects utility
 * Plays sound effects based on user settings
 */

let audioContext: AudioContext | null = null;

/**
 * Initialize audio context (required for Web Audio API)
 */
function initAudioContext() {
  if (!audioContext) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioContext = new AudioContextClass();
  }
  return audioContext;
}

/**
 * Play a beep sound
 */
function playBeep(frequency: number = 800, duration: number = 100, type: 'sine' | 'square' | 'triangle' = 'sine') {
  try {
    const ctx = initAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration / 1000);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration / 1000);
  } catch (error) {
    console.error('Error playing beep:', error);
  }
}

/**
 * Play success sound (correct answer)
 */
export function playSuccessSound() {
  // Play a pleasant ascending tone
  playBeep(600, 80, 'sine');
  setTimeout(() => playBeep(800, 80, 'sine'), 50);
  setTimeout(() => playBeep(1000, 100, 'sine'), 100);
}

/**
 * Play error sound (incorrect answer)
 */
export function playErrorSound() {
  // Play a lower, descending tone
  playBeep(400, 150, 'square');
  setTimeout(() => playBeep(300, 150, 'square'), 100);
}

/**
 * Play level up sound
 */
export function playLevelUpSound() {
  // Play an ascending scale
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, C (C major chord)
  notes.forEach((freq, index) => {
    setTimeout(() => playBeep(freq, 200, 'sine'), index * 100);
  });
}

/**
 * Play achievement sound
 */
export function playAchievementSound() {
  // Play a celebratory sequence
  const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C major arpeggio
  notes.forEach((freq, index) => {
    setTimeout(() => playBeep(freq, 150, 'sine'), index * 80);
  });
}

/**
 * Check if sound is enabled and play a sound
 */
export async function playSoundIfEnabled(
  soundFn: () => void,
  settings?: { soundEnabled?: boolean }
): Promise<void> {
  // If settings not provided, try to get them
  if (!settings) {
    try {
      const { getUserSettings } = await import('@/utils/database');
      const userSettings = await getUserSettings();
      if (!userSettings?.soundEnabled) {
        return;
      }
    } catch {
      // If we can't get settings, play the sound anyway
    }
  } else if (!settings.soundEnabled) {
    return;
  }

  // Resume audio context if suspended (required for some browsers)
  if (audioContext && audioContext.state === 'suspended') {
    await audioContext.resume();
  }

  soundFn();
}
