// Phase of matter
export const Phase = [ 'solid', 'gaseous', 'liquid' ] as const;
export type Phase = ( typeof Phase )[ number ];
