export type Id = string;

export enum ControlType {
  VALID = "VALID",
  ILLEGAL_CONTENT = "ILLEGAL_CONTENT",
  RESTRICTED = "RESTRICTED",
  VIOLENCE = "VIOLENCE",
  DISCRIMINATION ="DISCRIMINATION",
  COPYRIGHT = "COPYRIGHT"
}

export const CONTROLS: {[key: string]: ControlType[]} = {
  "ok": [
    ControlType.VALID
  ],
  "warning": [
    ControlType.COPYRIGHT,
    ControlType.RESTRICTED
  ],
  "danger": [
    ControlType.VIOLENCE,
    ControlType.ILLEGAL_CONTENT,
    ControlType.DISCRIMINATION
  ]
}

/**
 * # User
 * - `id` - Identifier
 * - `displayedName` - Name the user chose to be displayed
 * - `username` - Name to identify
 * - `email` - E-mail adress to contact and identify
 * - `profilePicture` - Profile picture
 */
export interface User {
  id: Id;
  displayedName: string;
  username: string;
  email: string;
  profilePicture?: Image;
}

/**
 * # Image type
 * - `PROFILE_PICTURE` - This a profile picture
 * - `ATTACHEMENT` - This is a message attachment (This is private information, should not control that)
 * - `POST_PICTURE` - This is a picture in a post
 * - `BOOK_COVER` - This is the cover image of a book (This is private information for now, it would be important when user will be able to share books)
 */
export enum ImageType {
  PROFILE_PICTURE = "PROFILE_PICTURE",
  ATTACHEMENT = "ATTACHEMENT",
  POST_PICTURE = "POST_PICTURE",
  BOOK_COVER = "BOOK_COVER",
}

/**
 * # Imlage
 * - `id` - Image id
 * - `url` - Image basename
 * - `owner` - The uploader
 * - `categorie` - Categorie of the image (see ImageType)
 * - `controlDatetime` - DateTime when the image has been controlled for the last time
 * - `claims` - list of Claim
 * - `created_at` - Datetime when the image has been added
 * - `pined` - true if the image has been pined
 * - `controlType` - Control type of the image (can be null)
 * - `controlledAt` - Date of the latest control (can be null)
 */
export interface Image {
  id: Id;
  createdAt: Date;
  url: string;
  owner: User;
  categorie: ImageType;
  controlDatetime: Date;
  claims: Claim[];
  created_at: Date;
  pined: boolean;
  controlType: ControlType;
  controlledAt: Date | null;
}

/**
 * # LngLatLocation
 * - `lat` - Latitude
 * - `lng` - Longitude
 * - `label` - location label used to generate latitude and longitude (server side)
 */
export interface LngLatLocation {
  lat: number;
  lng: number;
  label: string;
}

/**
 * # Posts
 * - `id` - unic identifier
 * - `title` - title of the post
 * - `content` - main  text of the post
 * - `images` - list of images
 * - `created_at` - date when the post has been created
 * - `pined` - true if the post has been pined
 * - `location` - location attached to the post
 * - `author` - user that created the post
 * - `claims` - list of claims attached to the post
 */
export interface Posts {
  id: Id;
  title: string;
  content: string;
  images: Image[];
  createdAt: Date;
  pined: boolean;
  location: LngLatLocation;
  author: User;
  claims: Claim[];
  controlledAt: Date;
}

/**
 * # ClaimType
 * - I_DONT_LIKE_THIS
 * - COPYRIGHTED
 * - VIOLENCE
 * - DISCRIMINATION
 */
export enum ClaimType {
  I_DONT_LIKE_THIS = "I_DONT_LIKE_THIS",
  COPYRIGHTED = "COPYRIGHTED",
  VIOLENCE = "VIOLENCE",
  DISCRIMINATION = "DISCRIMINATION",
}

/**
 * # ClaimType
 * - type - see ClaimType
 * - message - message attached
 * - by - author of the claim
 */
export interface Claim {
  type: ClaimType;
  message: string;
  by: User;
}

/**
 * # BanWord
 * - `id` - identifier
 * - `language` - language of the word
 * - `word` - banned word
 */
export interface BanWord {
  id?: Id;
  language: string;
  word: string;
}

export interface Answer {
  id?:string;
  title:string;
  message:string;
  suggestion_id:string;
}

/**
 * # Suggestion
 * - `id` - identifier
 * - `message` - suggestion text
 * - `user` - author of the suggestion
 */
export interface Suggestion {
  id: Id;
  message: string;
  user: User;
  createdAt: string;
  author_id?: string;
  answer:Answer | null;
}

//* ----------------- format types from back ---------------------------------

export function formatSuggestion(suggestion:any):Suggestion {
  let sugg = {
      id: suggestion._id,
      message: suggestion._message,
      author_id: suggestion._authorId,
      createdAt: suggestion._createdAt,
      user: formatUser(suggestion._user),
      answer: formatAnswer(suggestion._answer),
  }
  
  return sugg;
}

export function formatUser (user:any):User {
  let usr = {
      id: user._id,
      username: user._username,
      displayedName: user._displayedName,
      email: user._email,
      created_at: user._createdAt,
      profile_picture: user._profile_picture,
  }
  return usr;
}

export function formatAnswer(answer:any):Answer | null {
  if(!answer){
    return null;
  }
  let ans = {
    id: answer._id,
    title:answer._title,
    message:answer._message,
    suggestion_id:answer._suggestion_id,
  }
  return ans;
}

export function formatBanWord(banWord:any):BanWord {
  let banW:BanWord = {
    id: banWord._id,
    language: banWord._language,
    word: banWord._word,
  }

  return banW;
}
