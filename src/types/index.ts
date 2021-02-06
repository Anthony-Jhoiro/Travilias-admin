export type Id = string;

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
  profilePicture: Image;
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
 * - `url` - Image basename
 * - `owner` - The uploader
 * - `categorie` - Categorie of the image (see ImageType)
 * - `controlDatetime` - DateTime when the image has been controlled for the last time
 * - `claims` - list of Claim
 * - `created_at` - Datetime when the image has been added
 * - `pined` - true if the image has been pined
 */
export interface Image {
  url: string;
  owner: User;
  categorie: ImageType;
  controlDatetime: Date;
  claims: Claim[];
  created_at: Date;
  pined: boolean;
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
  created_at: Date;
  pined: boolean;
  location: LngLatLocation;
  author: User;
  claims: Claim[];
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
}
