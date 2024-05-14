export interface UnsplashPhoto {
  alt_description?: string;
  alternative_slugs?: {
      en: string;
      es: string;
      ja: string;
      fr: string;
      it: string;
      [key: string]: string;
  };
  asset_type?: string;
  blur_hash: string;
  breadcrumbs?: any[];  // Assuming an empty array as a placeholder
  color: string;
  created_at: string;
  current_user_collections?: any[];  // Assuming an empty array as a placeholder
  description: string | null;
  downloads?: number;
  exif: {
      make: string;
      model: string;
      name: string;
      exposure_time: string;
      aperture: string;
      [key: string]: any; // For additional unpredictable properties
  };
  height: number;
  id: string;
  liked_by_user?: boolean;
  likes: number;
  links: {
      self: string;
      html: string;
      download: string;
      download_location: string;
  };
  location: {
      name: string;
      city: string | null;
      country: string | null;
      position: {
          latitude: number;
          longitude: number;
      };
  };
  promoted_at: string;
  slug?: string;
  sponsorship?: any | null; // Assuming dynamic object or null
  topic_submissions?: any; // Assuming dynamic object
  updated_at: string;
  urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
      [key: string]: string; // For additional unpredictable URL types
  };
  user: {
      id: string;
      updated_at: string;
      username: string;
      name: string;
      first_name: string;
      last_name: string | null;
      [key: string]: any; // For additional unpredictable user-related properties
  };
  views?: number;
  width: number;
}