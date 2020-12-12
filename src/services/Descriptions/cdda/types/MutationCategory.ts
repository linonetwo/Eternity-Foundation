export interface IMutationCategory {
  type: 'mutation_category';
  id: string;
  name: string;
  threshold_mut: string;
  mutagen_message: string;
  iv_message: string;
  iv_sound?: boolean;
  iv_sound_message?: string;
  iv_sound_id?: string;
  iv_noise?: number;
  iv_additional_mutations?: number;
  memorial_message?: string;
  wip?: boolean;
  iv_min_mutations?: number;
  iv_additional_mutations_chance?: number;
  iv_hunger?: number;
  iv_thirst?: number;
  iv_pain?: number;
  iv_fatigue?: number;
  iv_morale?: number;
  iv_morale_max?: number;
  iv_sleep?: boolean;
  '//'?: string;
  iv_sleep_dur?: number;
  iv_sleep_message?: string;
  iv_sound_variant?: string;
  junkie_message?: string;
  '//2'?: string;
}
