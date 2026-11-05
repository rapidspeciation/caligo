/**
 * Countries where Caligo's registered members work.
 *
 * Source: the network's registration survey ("Encuesta Genómica de los
 * Lepidópteros Neotropicales", 123 responses), shared by Nicol Rueda on
 * 3 November 2026. Only the country of work is used here, so no person can
 * be identified; respondents who listed two countries count for both. Puerto
 * Rico and French Guiana are listed as their respondents wrote them.
 *
 * `lonLat` is a point inside the country, chosen to stay clear of the
 * facility markers; countries outside the map's frame have none and are
 * named only in the list beside it.
 */
export interface MemberCountry {
  readonly en: string;
  readonly es: string;
  readonly lonLat?: readonly [number, number];
}

export const MEMBER_COUNTRY_LIST: readonly MemberCountry[] = [
  { en: 'Argentina', es: 'Argentina', lonLat: [-64.5, -34.0] },
  { en: 'Bolivia', es: 'Bolivia', lonLat: [-64.5, -16.8] },
  { en: 'Brazil', es: 'Brasil', lonLat: [-51.0, -10.5] },
  { en: 'Chile', es: 'Chile', lonLat: [-69.8, -24.0] },
  { en: 'Colombia', es: 'Colombia', lonLat: [-71.3, 1.8] },
  { en: 'Ecuador', es: 'Ecuador', lonLat: [-79.9, -2.6] },
  { en: 'French Guiana', es: 'Guayana Francesa', lonLat: [-53.1, 3.9] },
  { en: 'Guyana', es: 'Guyana', lonLat: [-58.9, 5.0] },
  { en: 'Mexico', es: 'México', lonLat: [-102.0, 23.5] },
  { en: 'Panama', es: 'Panamá', lonLat: [-80.6, 7.5] },
  { en: 'Peru', es: 'Perú', lonLat: [-74.6, -9.2] },
  { en: 'Puerto Rico', es: 'Puerto Rico', lonLat: [-66.5, 18.2] },
  { en: 'China', es: 'China' },
  { en: 'Czech Republic', es: 'República Checa' },
  { en: 'France', es: 'Francia' },
  { en: 'Germany', es: 'Alemania' },
  { en: 'Netherlands', es: 'Países Bajos' },
  { en: 'Poland', es: 'Polonia' },
  { en: 'Spain', es: 'España' },
  { en: 'Sweden', es: 'Suecia' },
  { en: 'Switzerland', es: 'Suiza' },
  { en: 'United Kingdom', es: 'Reino Unido' },
  { en: 'United States', es: 'Estados Unidos' },
];
