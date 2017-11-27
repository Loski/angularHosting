/* tslint:disable */


/**
 * AUTO-GENERATED FILE @ 2017-11-05 17:56:24 - DO NOT EDIT!
 *
 * This file was automatically generated by schemats v.3.0.1
 * $ schemats generate -c mysql://username:password@localhost/sanglier -t account -t bet -t encounter -t service -t sport -t team -s sanglier
 *
 */

export type enum_state_bet = 'BEGIN' | 'WAITING' | 'VALID' | 'OVER';
export type enum_state_encounter = 'Soon' | 'Current' | 'Over';

export namespace accountFields {
  export type id_user = number;
  export type pseudo = string;
  export type password = string;
  export type mail = string | null;
  export type zip_code = number | null;
  export type city = string | null;
  export type adress = string | null;

}

export interface account {
  id_user: accountFields.id_user;
  pseudo: accountFields.pseudo;
  password: accountFields.password;
  mail: accountFields.mail;
  zip_code: accountFields.zip_code;
  city: accountFields.city;
  adress: accountFields.adress;
}

export namespace betFields {
  export type id_bet = number;
  export type id_encounter = number;
  export type id_service_1 = number;
  export type id_service_2 = number;
  export type id_user_1 = number;
  export type id_user_2 = number;
  export type state_bet = enum_state_bet | null;

}

export interface bet {
  id_bet: betFields.id_bet;
  id_encounter: betFields.id_encounter;
  id_service_1: betFields.id_service_1;
  id_service_2: betFields.id_service_2;
  id_user_1: betFields.id_user_1;
  id_user_2: betFields.id_user_2;
  state_bet: betFields.state_bet;

}

export namespace encounterFields {
  export type id_encounter = number;
  export type id_sport = number;
  export type id_team_1 = number;
  export type id_team_2 = number;
  export type score_team_1 = number;
  export type score_team_2 = number;
  export type state_encounter = enum_state_encounter | null;
  export type date_encounter = Date | null;

}

export interface encounter {
  id_encounter: encounterFields.id_encounter;
  id_sport: encounterFields.id_sport;
  id_team_1: encounterFields.id_team_1;
  id_team_2: encounterFields.id_team_2;
  score_team_1: encounterFields.score_team_1;
  score_team_2: encounterFields.score_team_2;
  state_encounter: encounterFields.state_encounter;
  date_encounter: encounterFields.date_encounter;

}

export namespace serviceFields {
  export type id_service = number;
  export type name_service = string | null;

}

export interface service {
  id_service: serviceFields.id_service;
  name_service: serviceFields.name_service;

}

export namespace sportFields {
  export type id_sport = number;
  export type name_sport = string | null;

}

export interface sport {
  id_sport: sportFields.id_sport;
  name_sport: sportFields.name_sport;

}

export namespace teamFields {
  export type id_team = number;
  export type id_sport = number;
  export type name_team = string | null;

}

export interface team {
  id_team: teamFields.id_team;
  id_sport: teamFields.id_sport;
  name_team: teamFields.name_team;

}