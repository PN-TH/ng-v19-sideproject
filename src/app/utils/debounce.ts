import { signal, effect, Signal } from '@angular/core';

/** ✅ Fonction `debounceSignal` pour ajouter un délai aux signaux */
export function debounceSignal<T>(value: Signal<T>, delay: number = 500): Signal<T> {
  const debounced = signal<T>(value()); // ✅ Stocke la valeur initiale

  effect(() => {
    console.log('🕒 Début du debounce avec valeur:', value());

    const timeout = setTimeout(() => {
      debounced.set(value()); // ✅ Met à jour après le délai
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  });

  return debounced;
}
